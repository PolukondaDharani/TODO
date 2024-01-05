package com.example.rest.webservices.restfulwebservices.helloworld;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController

public class HelloController {
		@GetMapping(path="/bye")
		public String helloworld() {
			return "bye";
			
		}
		
		@GetMapping(path="/byebean")
		public Beanmapping helloworld1() {
			return new Beanmapping("byebean");
			
		}
		
		@GetMapping(path="/byebean/path-variable/{name}")
		public Beanmapping helloworld2(@PathVariable String name) {
			return new Beanmapping(String.format("helloworld"+name));
			
		}

	}
