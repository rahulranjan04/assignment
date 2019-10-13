package com.restaurant.dishes;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.mock;

import java.util.Arrays;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.restaurant.dishes.Model.Dishes;
import com.restaurant.dishes.Service.DishesServiceImpl;

@RunWith(MockitoJUnitRunner.class)
public class DishesApplicationTests {

	private static final java.util.Date Date = null;

	private static DishesServiceImpl daoImpl;
	private static Dishes dishes1;
	private static Dishes dishes2;

	@BeforeClass
	public static void init() {

		daoImpl = mock(DishesServiceImpl.class);

		dishes1 = new Dishes();
		dishes1.setCreationDate(Date);
		dishes1.setDishImage("PIZZA");
		dishes1.setIndicator("VEG");
		dishes1.setIngredients("Garlic,Onion,Mushroom,Cheese,ddddddddddddddddddddddddddddddddddd");
		dishes1.setInstructions("cook nicely");
		dishes1.setNum_people(4);
		dishes1.setDishImageName("images/giphy.gif");

		dishes1 = new Dishes();
		dishes1.setCreationDate(Date);
		dishes1.setDishImage("CHICKEN");
		dishes1.setIndicator("NON-VEG");
		dishes1.setIngredients("Chicken,pepper");
		dishes1.setInstructions("Take Fresh Chicken and cook nicely");
		dishes1.setNum_people(5);
		dishes1.setDishImageName("images/900a5b9352d03aee3c00637c646c0f7b.gif");

		dishes2 = new Dishes();

		Mockito.lenient().when(daoImpl.list()).thenReturn(Arrays.asList(dishes1, dishes2));
		Mockito.lenient().when(daoImpl.get(2)).thenReturn(dishes1);
	}

	@Test
	public void findAll() {
		List<Dishes> getAll = daoImpl.list();
		assertNotNull(getAll);
		assertEquals(2, getAll.size());
	}
}
