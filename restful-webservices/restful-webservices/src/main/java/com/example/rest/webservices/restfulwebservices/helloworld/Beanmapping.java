package com.example.rest.webservices.restfulwebservices.helloworld;

public class Beanmapping{

	private String string;

	public String getString() {
		return string;
	}

	public void setString(String string) {
		this.string = string;
	}

	public Beanmapping(String string) {
		// TODO Auto-generated constructor stub
		this.string=string;
	}

	@Override
	public String toString() {
		return "Beanmapping [string=" + string + "]";
	}

}
