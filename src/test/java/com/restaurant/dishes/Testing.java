package com.restaurant.dishes;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Testing {

	public static void main(String[] args) {
		int i = 0;
		while (i < 10) {
			String password = "password";
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			String hashedPassword = passwordEncoder.encode(password);

			System.out.println(hashedPassword);
			i++;
		}
	}

}
