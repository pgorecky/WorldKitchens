-- Użytkownicy
INSERT INTO users (first_name, last_name, login, password, image_url)
VALUES ('Weronika', 'Jankowska', 'werka', '$2a$10$I2PjUfjqAUC2D8ebGwUhjO9.5bSKdPG5ECYq8Rhsyl/lF9fYBZv4.', 'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/t-image2.jpg?alt=media&token=73897eab-47fd-44b6-b988-4db61e13a7b8');

INSERT INTO users (first_name, last_name, login, password, image_url)
VALUES ('Patryk', 'Górecki', 'patryczek', '$2a$10$I2PjUfjqAUC2D8ebGwUhjO9.5bSKdPG5ECYq8Rhsyl/lF9fYBZv4.', 'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/t-image1.png?alt=media&token=cb2145ba-0b48-4deb-8805-ff52ca049522');

-- Dodaj dania
-- ITA1
INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id)
VALUES ('Spaghetti Carbonara',
        'potrawa kuchni włoskiej złożona z makaronu, jajek, pancetty lub guanciale, sera pecorino romano lub parmezanu oraz czarnego pieprzu. Niepoprawnym jest mówienie o „sosie carbonara”, ponieważ makaron i pozostałe składniki stanowią tu nierozerwalną całość',
        '30min', 600, 3, 'ITALIAN', 'MEDIUM', 1);


INSERT INTO dishes (name, description, calories, portion_size, region, level, user_id)
VALUES ('Margherita Pizza',
        'potrawa kuchni włoskiej złożona z makaronu, jajek, pancetty lub guanciale, sera pecorino romano lub parmezanu oraz czarnego pieprzu. Niepoprawnym jest mówienie o „sosie carbonara”, ponieważ makaron i pozostałe składniki stanowią tu nierozerwalną całość',
        800, 3, 'ITALIAN', 'EASY', 1);

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
INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (1, 'Spaghetti', '100g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (1, 'Eggs', 'x3');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (1, 'Pancetta', '150g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (1, 'Parmesan cheese', '100g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (2, 'Pizza dough', '100g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (2, 'Tomato sauce', '250g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (2, 'Mozzarella cheese', '75g');

-- Dodaj komentarze
INSERT INTO comments (dish_id, user_id, content)
VALUES (1, 2, 'Bardzo smaczne danie! Polecam.');

INSERT INTO comments (dish_id, user_id, content)
VALUES (1, 1, 'Wspaniałe spaghetti carbonara, uwielbiam! 🍝');

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Chicken Alfredo Pasta', 700, 3, 'ITALIAN', 1);

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Cook pasta');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Prepare Alfredo sauce');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Cook chicken');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Combine everything');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Pasta', '250g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Cream', '80g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Chicken', '500g');

INSERT INTO comments (dish_id, user_id, content)
VALUES (3, 1, 'Niezwykle smaczne!');

INSERT INTO comments (dish_id, user_id, content)
VALUES (3, 2, 'Fantastyczne danie, uwielbiam Alfredo!');

-- Dodaj dania włoskie
INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Spaghetti Bolognese', 700, 5, 'ITALIAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Lasagna', 850, 4, 'ITALIAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Risotto ai Funghi', 600, 2, 'ITALIAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Tiramisu', 450, 5, 'ITALIAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Caprese Salad', 300, 2, 'ITALIAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

-- Dodaj dania polskie
INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Bigos', 600, 1, 'POLISH', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Pierogi', 450, 4, 'POLISH', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Żurek', 500, 4, 'POLISH', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Kotlet Schabowy', 700, 2, 'POLISH', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Szarlotka', 350, 2, 'POLISH', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

-- Dodaj dania meksykańskie
INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Tacos', 550, 2, 'MEXICAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Guacamole', 200, 2, 'MEXICAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Enchiladas', 700, 2, 'MEXICAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Chiles Rellenos', 600, 2, 'MEXICAN', 2);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Salsa', 100, 5, 'MEXICAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

-- Dodaj dania amerykańskie
INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Hamburger', 700, 3, 'AMERICAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Hot Dog', 400, 1, 'AMERICAN', 2);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('BBQ Ribs', 850, 1, 'AMERICAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Mac and Cheese', 600, 1, 'AMERICAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Apple Pie', 350, 3, 'AMERICAN', 2);
-- Dodaj składniki, kroki i komentarze dla tego dania

-- Dodaj dania azjatyckie
INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Sushi', 500, 1, 'ASIAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Pad Thai', 650, 2, 'ASIAN', 1);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Ramyeon', 450, 2, 'ASIAN', 2);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Dim Sum', 400, 2, 'ASIAN', 2);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO dishes (name, calories, portion_size, region, user_id)
VALUES ('Szechuan Chicken', 600, 2, 'ASIAN', 2);
-- Dodaj składniki, kroki i komentarze dla tego dania

INSERT INTO liked_dishes (user_id, dish_id)
VALUES (1, 1);

INSERT INTO recent_activities (user_id, dish_id, activity_type, date)
VALUES ( 1, 1 , 'ADD_MEAL', now())