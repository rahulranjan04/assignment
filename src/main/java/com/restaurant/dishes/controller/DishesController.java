package com.restaurant.dishes.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restaurant.dishes.Model.Dishes;
import com.restaurant.dishes.Service.DishesService;

@CrossOrigin(origins = "*")
@RestController
public class DishesController {

	@Autowired
	private DishesService dishesService;

	@PostMapping("home/dishes")
	public ResponseEntity<?> save(@RequestBody Dishes dishes) {
		long id = dishesService.save(dishes);
		return ResponseEntity.ok().body(id);
	}

	@GetMapping("home/dishes/{id}")
	public ResponseEntity<Dishes> get(@PathVariable("id") long id) {
		Dishes dishes = dishesService.get(id);
		return ResponseEntity.ok().body(dishes);
	}

	@GetMapping("home/dishes")
	public ResponseEntity<List<Dishes>> list() {
		List<Dishes> dishess = dishesService.list();
		return ResponseEntity.ok().body(dishess);
	}

	@PutMapping("home/dishes/{id}")
	public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody Dishes dishes) {
		dishesService.update(id, dishes);
		return ResponseEntity.ok().body("Dishes has been updated successfully.");
	}

	@DeleteMapping("home/dishes/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") long id) {
		dishesService.delete(id);
		return ResponseEntity.ok().body("Dishes has been deleted successfully.");
	}

	@GetMapping("home/dishes/search/{search}")
	public ResponseEntity<List<Dishes>> listSearch(@PathParam("search") String search) {
		List<Dishes> dish = dishesService.search(search);
		return ResponseEntity.ok().body(dish);
	}
}
