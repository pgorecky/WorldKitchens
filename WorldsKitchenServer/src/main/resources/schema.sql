CREATE TABLE IF NOT EXISTS users
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name  VARCHAR(50),
    login      VARCHAR(50),
    password   VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS dishes
(
    id       INT PRIMARY KEY AUTO_INCREMENT,
    name     VARCHAR(255),
    calories INT,
    region   VARCHAR(50),
    user_id  INT,
    FOREIGN KEY (user_id) REFERENCES users (id),
    UNIQUE (name, region)
);

CREATE TABLE IF NOT EXISTS preparation_steps
(
    dish_id INT,
    step    VARCHAR(255),
    FOREIGN KEY (dish_id) REFERENCES dishes (id)
);

CREATE TABLE IF NOT EXISTS dish_ingredients
(
    dish_id    INT,
    ingredient VARCHAR(255),
    FOREIGN KEY (dish_id) REFERENCES dishes (id)
);

CREATE TABLE IF NOT EXISTS comments
(
    id      INT AUTO_INCREMENT PRIMARY KEY,
    dish_id INT,
    user_id INT,
    content VARCHAR(1000),
    FOREIGN KEY (dish_id) REFERENCES dishes (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

