CREATE TABLE IF NOT EXISTS users
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name  VARCHAR(50),
    login      VARCHAR(50),
    password   VARCHAR(225),
    image_url  VARCHAR(225)
);

CREATE TABLE IF NOT EXISTS dishes
(
    id               INT PRIMARY KEY AUTO_INCREMENT,
    name             VARCHAR(255),
    image_url        VARCHAR(225),
    description      VARCHAR(255),
    preparation_time VARCHAR(255),
    calories         INT,
    portion_size     INT,
    region           VARCHAR(50),
    level            VARCHAR(50),
    user_id          INT,
    FOREIGN KEY (user_id) REFERENCES users (id),
    UNIQUE (name, region)
);

CREATE TABLE IF NOT EXISTS preparation_steps
(
    dish_id INT,
    step    VARCHAR(255),
    FOREIGN KEY (dish_id) REFERENCES dishes (id)
);

CREATE TABLE IF NOT EXISTS ingredients
(
    id              INT PRIMARY KEY AUTO_INCREMENT,
    dish_id         INT,
    ingredient_name VARCHAR(255),
    portion         VARCHAR(255),
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

CREATE TABLE IF NOT EXISTS liked_dishes
(
    user_id INT,
    dish_id INT,
    PRIMARY KEY (user_id, dish_id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (dish_id) REFERENCES dishes (id)
);

CREATE TABLE IF NOT EXISTS recent_activities
(
    id            INT AUTO_INCREMENT PRIMARY KEY,
    user_id       INT,
    dish_id       INT,
    activity_type VARCHAR(250),
    date          DATE,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (dish_id) REFERENCES dishes (id)
);
