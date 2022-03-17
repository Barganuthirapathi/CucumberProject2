package com.flipkarttask2.stepdefinition;

import com.flipkart.resources.Commonactions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Commonactions{
	Commonactions c=new Commonactions();
	
	static long startTime;
	@Before
	public   void beforeclass() {
		System.out.println("before launch browser");
		c.launch("https://www.flipkart.com/");
		long startTime = System.currentTimeMillis();
	}	
	@After
	public  void afterclass() {
		System.out.println("after launch browser");
		long endTime = System.currentTimeMillis();
		System.out.println("processed Time:"+(endTime-startTime));
	}
	

}
