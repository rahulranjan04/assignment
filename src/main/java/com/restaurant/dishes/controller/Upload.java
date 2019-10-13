package com.restaurant.dishes.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

@CrossOrigin(origins = "*")
@RestController
public class Upload {

	@RequestMapping(value = "/imageUpload", method = RequestMethod.POST)
	public void UploadFile(MultipartHttpServletRequest mRequest) throws IOException {

		try {

			Iterator<String> itr = mRequest.getFileNames();
			while (itr.hasNext()) {
				MultipartFile mFile = mRequest.getFile(itr.next());
				String fileName = mFile.getOriginalFilename();
				File relativeFile = new File("/images/");
				java.nio.file.Path path = Paths.get("src/main/resources/static/images/" + fileName);
				Files.deleteIfExists(path);
				InputStream in = mFile.getInputStream();
				Files.copy(in, path);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return;

	}
}