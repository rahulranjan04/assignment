package com.restaurant.dishes;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.restaurant.dishes.Model.Dishes;
import com.restaurant.dishes.Service.DishesServiceImpl;

@RunWith(SpringRunner.class)
@WebMvcTest(value = DishesApplication.class, secure = false)
public class DishesApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private DishesServiceImpl dishesService;

	@Test
	public void contextLoads() throws Exception {

		Dishes dishes = new Dishes();
		dishes.setDishId(1258);
		dishes.setDishImage("PANEER LASANGE");
		dishes.setIndicator("VEG");
		dishes.setNum_people(3);
		dishes.setIngredients("no");
		dishes.setInstructions("yes");

		List<Dishes> mockCourse = new ArrayList<Dishes>();
		mockCourse.add(dishes);

		String exampleCourseJson = "{\"dishId\":\"1258\"}";

		Mockito.when(dishesService.list()).thenReturn(mockCourse);

		RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/home/dishes/").accept(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		System.out.println("response:::::" + result.getResponse());
		String expected = "{\"dishId\":2690,\"dishImage\":\"PANEER LASANGE\",\"indicator\":\"VEG\",\"num_people\":3,\"ingredients\":\"no\",\"instructions\":\"yes\"}";

		// {"id":"Course1","name":"Spring","description":"10 Steps, 25 Examples and 10K
		// Students","steps":["Learn Maven","Import Project","First Example","Second
		// Example"]}

		JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
	}

}
