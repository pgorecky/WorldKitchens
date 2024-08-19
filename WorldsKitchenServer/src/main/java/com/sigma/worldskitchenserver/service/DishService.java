package com.sigma.worldskitchenserver.service;

import com.sigma.worldskitchenserver.dto.Dish.DishAddRequest;
import com.sigma.worldskitchenserver.dto.Dish.DishDto;
import com.sigma.worldskitchenserver.dto.User.UserDto;
import com.sigma.worldskitchenserver.enums.ActivityType;
import com.sigma.worldskitchenserver.enums.Level;
import com.sigma.worldskitchenserver.enums.Region;
import com.sigma.worldskitchenserver.exception.ResourceNotFoundException;
import com.sigma.worldskitchenserver.mapper.DishMapper;
import com.sigma.worldskitchenserver.model.Dish;
import com.sigma.worldskitchenserver.model.Ingredient;
import com.sigma.worldskitchenserver.model.User;
import com.sigma.worldskitchenserver.repository.DishRepository;
import com.sigma.worldskitchenserver.repository.IngredientRepository;
import com.sigma.worldskitchenserver.repository.UserRepository;
import com.sigma.worldskitchenserver.util.HibernateUtil;
import jakarta.persistence.Query;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Slf4j
public class DishService {

    private final UserService userService;
    private final DishRepository dishRepository;
    private final DishMapper dishMapper;
    private final UserRepository userRepository;
    private final RecentActivityService recentActivityService;
    private final IngredientRepository ingredientRepository;

    public List<DishDto> mapDishesToDishesDto(List<Dish> dishes) {
        return dishes.stream()
                .map(dishMapper::toDishDto)
                .collect(Collectors.toList());
    }

    public List<DishDto> getCurrentUserDishes() {
        UserDto user = userService.getCurrentUserDto();
        List<Dish> allDishes = dishRepository.findByAuthor_Id(user.getId());

        return mapDishesToDishesDto(allDishes);
    }

    public List<DishDto> getUserLikedDishes() {
        User currentUser = userService.getCurrentUser();
        return mapDishesToDishesDto(currentUser.getLikedDishes());
    }

    public Dish getDishById(Long dishId) {
        Optional<Dish> dish = dishRepository.findById(dishId);
        return dish.orElseThrow(() -> new ResourceNotFoundException("Dish", "id", dishId));
    }

    @Transactional
    public void likeDishById(Long dishId) {
        User user = userService.getCurrentUser();
        Dish dish = getDishById(dishId);

        user.getLikedDishes().add(dish);
        userRepository.save(user);
        dishRepository.save(dish);
        recentActivityService.addActivity(user, dish, ActivityType.LIKE_MEAL);
        log.info("User with id: {} liked dish {}", user.getId(), dish.getId());
    }

    @Transactional
    public void unlikeDishById(Long dishId) {
        User user = userService.getCurrentUser();
        Dish dish = getDishById(dishId);

        user.getLikedDishes().remove(dish);
        userRepository.save(user);
        dishRepository.save(dish);
        recentActivityService.addActivity(user, dish, ActivityType.UNLIKE_MEAL);
        log.info("User with id: {} unliked dish {}", user.getId(), dish.getId());
    }

    public List<DishDto> getDishesByRegion(Region region) {
        return mapDishesToDishesDto(dishRepository.findByRegion(region));
    }

    public List<DishDto> getAllDishes() {
        return mapDishesToDishesDto(dishRepository.findAll());
    }

    public List<DishDto> getDishesByCriteria(String name, Region region, Level level, int caloriesMin, int caloriesMax) {
        SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
        Session session = null;
        Transaction transaction = null;
        List<DishDto> dishDtos = null;

        try {
            session = sessionFactory.getCurrentSession();
            transaction = session.beginTransaction();

            CriteriaBuilder cb = session.getCriteriaBuilder();
            CriteriaQuery<Dish> cr = cb.createQuery(Dish.class);
            Root<Dish> root = cr.from(Dish.class);

            List<Predicate> list = new ArrayList<>();

            if (!name.isBlank()) {
                Predicate nameItems = cb.like(root.get("name"), "%" + name + "%");
                list.add(nameItems);
            }

            if (region != null) {
                Predicate regionItems = cb.like(root.get("region"), String.valueOf(region));
                list.add(regionItems);
            }

            if (level != null) {
                Predicate levelItems = cb.like(root.get("level"), String.valueOf(level));
                list.add(levelItems);
            }

            Predicate caloriesItems = cb.between(root.get("calories"), caloriesMin, caloriesMax);
            list.add(caloriesItems);

            Predicate[] predicates = list.toArray(Predicate[]::new);

            cr.select(root).where(predicates);

            Query query = session.createQuery(cr);
            List<Dish> results = query.getResultList();

            dishDtos = mapDishesToDishesDto(results);

            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return dishDtos;
    }


    public Boolean checkIsDishLiked(Long dishId) {
        User currentUser = userService.getCurrentUser();
        return dishRepository.findById(dishId)
                .map(dish -> currentUser.getLikedDishes().contains(dish))
                .orElse(false);
    }

    @Transactional
    public DishDto createDish(DishAddRequest dish) {
        Dish newDish = dishMapper.toDish(dish);

        User user = userService.getCurrentUser();
        newDish.setAuthor(user);

        Dish savedDish = dishRepository.save(newDish);

        List<Ingredient> ingredients = dish.getIngredients().stream()
                .map(ingredient -> {
                    Ingredient newIngredient = new Ingredient();
                    newIngredient.setDish(savedDish);
                    newIngredient.setIngredientName(ingredient.getIngredientName());
                    newIngredient.setPortion(ingredient.getPortion());
                    return newIngredient;
                })
                .collect(Collectors.toList());

        ingredientRepository.saveAll(ingredients);
        recentActivityService.addActivity(user, savedDish, ActivityType.ADD_MEAL);

        log.info("User with id: {} created new dish {}", user.getId(), newDish.getId());

        return dishMapper.toDishDto(savedDish);
    }
}
