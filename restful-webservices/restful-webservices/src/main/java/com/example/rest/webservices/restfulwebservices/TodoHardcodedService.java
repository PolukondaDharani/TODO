package com.example.rest.webservices.restfulwebservices;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

//import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		boolean add = todos.add(new Todo(++idCounter, "in28minutes","Learn to Dance 2", false ,new Date()));
		boolean add2 = todos.add(new Todo(++idCounter, "in28minutes","Learn about Microservices 2", false ,new Date()));
		boolean add3 = todos.add(new Todo(++idCounter, "in28minutes","Learn about Angular", false,new Date() ));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}
		else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		
		if(todo==null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		
		return null;
	}

	public Todo findById(long id) {
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		
		return null;
	}
	
	

	
}