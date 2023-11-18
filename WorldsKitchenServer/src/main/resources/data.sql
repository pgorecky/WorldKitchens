INSERT INTO users (first_name, last_name, login, password)
VALUES ('Weronika', 'Jankowska','werka', '$2a$10$I2PjUfjqAUC2D8ebGwUhjO9.5bSKdPG5ECYq8Rhsyl/lF9fYBZv4.');

INSERT INTO users (first_name, last_name, login, password)
VALUES ('Patryk', 'Górecki','patryczek', '$2a$10$I2PjUfjqAUC2D8ebGwUhjO9.5bSKdPG5ECYq8Rhsyl/lF9fYBZv4.');

-- Dodaj dania
INSERT INTO dishes (name, calories, region, user_id)
VALUES ('Spaghetti Carbonara', 600, 'ITALIAN', 1);

INSERT INTO dishes (name, calories, region, user_id)
VALUES ('Margherita Pizza', 800, 'ITALIAN', 1);

-- Dodaj kroki przygotowania
INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Cook spaghetti');

INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Prepare sauce');

INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Combine');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Prepare pizza dough');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Add tomato sauce and cheese');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Bake');

-- Dodaj składniki
INSERT INTO ingredients (dish_id, ingredient)
VALUES (1, 'Spaghetti');

INSERT INTO ingredients (dish_id, ingredient)
VALUES (1, 'Eggs');

INSERT INTO ingredients (dish_id, ingredient)
VALUES (1, 'Pancetta');

INSERT INTO ingredients (dish_id, ingredient)
VALUES (1, 'Parmesan cheese');

INSERT INTO ingredients (dish_id, ingredient)
VALUES (2, 'Pizza dough');

INSERT INTO ingredients (dish_id, ingredient)
VALUES (2, 'Tomato sauce');

INSERT INTO ingredients (dish_id, ingredient)
VALUES (2, 'Mozzarella cheese');

-- Dodaj komentarze
INSERT INTO comments (dish_id, user_id, content)
VALUES (1, 2, 'Bardzo smaczne danie! Polecam.');

INSERT INTO comments (dish_id, user_id, content)
VALUES (1, 1, 'Wspaniałe spaghetti carbonara, uwielbiam! 🍝');

