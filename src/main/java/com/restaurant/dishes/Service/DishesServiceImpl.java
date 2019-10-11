package com.restaurant.dishes.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restaurant.dishes.Dao.DishesDao;
import com.restaurant.dishes.Model.Dishes;

@Service
public class DishesServiceImpl implements DishesService {

	@Autowired
	DishesDao dishesDao;

	@Override
	public long save(Dishes dishes) {
		return dishesDao.save(dishes);
	}

	@Override
	public Dishes get(long id) {
		return dishesDao.get(id);
	}

	@Override
	public List<Dishes> list() {
		return dishesDao.list();
	}

	@Override
	public void update(long id, Dishes dishes) {
		dishesDao.update(id, dishes);

	}

	@Override
	public void delete(long id) {
		dishesDao.delete(id);

	}
	
	@Override
	public List<Dishes> search(String search) {
		return dishesDao.search(search);

	}


}
