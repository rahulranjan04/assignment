package com.restaurant.dishes.Service;

import java.util.List;

import com.restaurant.dishes.Model.Dishes;

public interface DishesService {

	long save(Dishes dishes);

	Dishes get(long id);

	List<Dishes> list();

	void update(long id, Dishes dishes);

	void delete(long id);

	List<Dishes> search(String search);

}
