package com.restaurant.dishes.Dao;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.restaurant.dishes.Model.Dishes;

@Repository
public class DishesDaoImpl implements DishesDao {

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public long save(Dishes dishes) {

		String sql = "INSERT INTO DISHES "
				+ "(CREATION_DATE , DISH_IMAGE , INDICATOR,NUM_PEOPLE,INGREDIENTS,INSTRUCTIONS,DISHIMAGENAME ) VALUES (?, ?, ?, ?, ?, ?,?)";

		int key = jdbcTemplate.update(sql, new Object[] { new Date(), dishes.getDishImage(), dishes.getIndicator(),
				dishes.getNum_people(), dishes.getIngredients(), dishes.getInstructions(), dishes.getDishImageName() });

		return key;
	}

	@Override
	public Dishes get(long id) {
		String sql = "SELECT * FROM DISHES WHERE DISH_ID =? ";

		Dishes dishes = jdbcTemplate.queryForObject(sql, new Object[] { id },
				new BeanPropertyRowMapper<Dishes>(Dishes.class));

		return dishes;
	}

	@Override
	public List<Dishes> list() {
		String sql = "SELECT * FROM DISHES ";

		List<Dishes> dishes = jdbcTemplate.query(sql, new Object[] {}, new BeanPropertyRowMapper<Dishes>(Dishes.class));
		return dishes;
	}

	@Override
	public void update(long id, Dishes dishes) {
		String sql = "UPDATE DISHES "
				+ "SET CREATION_DATE =?, DISH_IMAGE =?, INDICATOR=?,NUM_PEOPLE=?,INGREDIENTS=?,INSTRUCTIONS=? WHERE DISH_ID =?";

		jdbcTemplate.update(sql, new Object[] { new Date(), dishes.getDishImage(), dishes.getIndicator(),
				dishes.getNum_people(), dishes.getIngredients(), dishes.getInstructions(), id });

	}

	@Override
	public void delete(long id) {
		String sql = "DELETE DISHES WHERE DISH_ID=?";

		jdbcTemplate.update(sql, new Object[] { id });

	}

	@Override
	public List<Dishes> search(String search) {

		String sql = "SELECT * FROM DISHES WHERE DISH_ID=2690";

		List<Dishes> dishes = jdbcTemplate.query(sql, new Object[] {}, new BeanPropertyRowMapper<Dishes>(Dishes.class));
		return dishes;
	}

}