DROP TABLE IF EXISTS dishes;
 
CREATE TABLE dishes (
  dish_Id LONG AUTO_INCREMENT  PRIMARY KEY,
  creation_date DATE NOT NULL,
  dish_image VARCHAR(250) NOT NULL,
  dish_image_name VARCHAR(250) NULL,
  indicator VARCHAR(10) NOT NULL,
  num_people NUMERIC(25) NOT NULL,
  ingredients VARCHAR(250) NOT NULL,
  instructions VARCHAR(250) NOT NULL,
);



INSERT INTO dishes(DISH_IMAGE ,CREATION_DATE ,indicator,num_people,ingredients,instructions,DISH_IMAGE_NAME ) VALUES ('PIZZA','2018-10-20','VEG',4,'Garlic,Onion,Mushroom','cook nicely','images/giphy.gif');
INSERT INTO dishes(DISH_IMAGE ,CREATION_DATE ,indicator,num_people,ingredients,instructions,DISH_IMAGE_NAME ) VALUES ('CHICKEN','2018-10-20','NON-VEG',5,'Chicken,pepper','Take Fresh Chicken and cook nicely','images/900a5b9352d03aee3c00637c646c0f7b.gif');
 