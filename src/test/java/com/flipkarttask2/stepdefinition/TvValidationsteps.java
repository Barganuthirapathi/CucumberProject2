package com.flipkarttask2.stepdefinition;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TvValidationsteps   {
	
	static String TV="LG";
    static String text1;
	

	@When("user search required item")
	public void user_search_required_item() throws Exception {
		System.out.println("method2");
		WebElement key = CucumberOutlinesteps.driver.findElement(By.name("q")); key.sendKeys(TV,
		  Keys.ENTER);
		//write excel data
		System.out.println("excel write data");
		File f=new File(".//Excel//map maven.xlsx");
		FileOutputStream f1=new FileOutputStream(f);
	    Workbook w=new XSSFWorkbook(); 
	    Sheet sheet = w.createSheet("bargan");
	    List<WebElement> mobilenames = CucumberOutlinesteps.driver.findElements(By.xpath("//div[contains(text(),'"+TV+"')]"));
		for(int i=1;i<mobilenames.size();i++)
		{
			WebElement text = mobilenames.get(i);
			String text2 = text.getText();
			System.out.println(text2);
				
			Row row = sheet.createRow(i); 
			Cell cell = row.createCell(0);
			cell.setCellValue(text2);
		}
		w.write(f1);
		  
		
	}

	@When("user click on the required item")
	public void user_click_on_the_required_item() {
		System.out.println("method3");
		WebElement element = CucumberOutlinesteps.driver.findElement(By.xpath("(//div[contains(text(),'"+TV+"')])[5]"));
		element.click();
		//window handling
		Set<String> windowHandles = CucumberOutlinesteps.driver.getWindowHandles();
		List<String> list=new ArrayList<String>();
		boolean addAll = list.addAll(windowHandles);
		WebDriver window = CucumberOutlinesteps.driver.switchTo().window(list.get(1));
		System.out.println(window);
	}

	@Then("user validate the TV")
	public void user_validate_the_TV() throws Exception {
		System.out.println("method4");
		WebElement element2 = CucumberOutlinesteps.driver.findElement(By.xpath("//span[contains(text(),'"+TV+"')]"));
		text1 = element2.getText();
		System.out.println("target stock:"+text1);
		//read excel data
		File f=new File(".//Excel//map maven.xlsx");
		FileInputStream f1=new FileInputStream(f);
		Workbook w=new XSSFWorkbook(f1);
		Sheet sheet = w.getSheet("bargan");
		Row row= sheet.getRow(4);
		Cell cell = row.getCell(0);
		String stringCellValue = cell.getStringCellValue();
		System.out.println(stringCellValue);
		if(text1.equals(stringCellValue)) {
			System.out.println("pass");
		}else {
			System.out.println("fail");
		}
		
		
	}



}
