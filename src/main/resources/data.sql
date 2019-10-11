DROP TABLE IF EXISTS dishes;
 
CREATE TABLE dishes (
  dish_id long AUTO_INCREMENT  PRIMARY KEY,
  creation_date DATE NOT NULL,
  dish_image VARCHAR(250) NOT NULL,
  dishimagename VARCHAR(250) NULL,
  indicator VARCHAR(10) NOT NULL,
  num_people NUMERIC(25) NOT NULL,
  ingredients VARCHAR(250) NOT NULL,
  instructions VARCHAR(250) NOT NULL,
);
 