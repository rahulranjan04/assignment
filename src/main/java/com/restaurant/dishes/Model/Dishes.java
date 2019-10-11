package com.restaurant.dishes.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "Dishes")
public class Dishes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long dishId;

	private Date creationDate;

	private String dishImage;

	private String indicator;

	private Integer num_people;

	private String ingredients;

	private String instructions;

	private String dishImageName;

	public String getDishImageName() {
		return dishImageName;
	}

	public void setDishImageName(String dishImageName) {
		this.dishImageName = dishImageName;
	}

	public long getDishId() {
		return dishId;
	}

	public void setDishId(long dishId) {
		this.dishId = dishId;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public String getDishImage() {
		return dishImage;
	}

	public void setDishImage(String dishImage) {
		this.dishImage = dishImage;
	}

	public String getIndicator() {
		return indicator;
	}

	public void setIndicator(String indicator) {
		this.indicator = indicator;
	}

	public Integer getNum_people() {
		return num_people;
	}

	public void setNum_people(Integer num_people) {
		this.num_people = num_people;
	}

	public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	public String getInstructions() {
		return instructions;
	}

	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}

	@Override
	public String toString() {
		return "Dishes [dishId=" + dishId + ", creationDate=" + creationDate + ", dishImage=" + dishImage
				+ ", indicator=" + indicator + ", num_people=" + num_people + ", ingredients=" + ingredients
				+ ", instructions=" + instructions + ", dishImageName=" + dishImageName + "]";
	}

}
