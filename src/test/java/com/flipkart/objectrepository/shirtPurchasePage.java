package com.flipkart.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.flipkart.resources.Commonactions;

public class shirtPurchasePage extends Commonactions {

	public shirtPurchasePage() {
		PageFactory.initElements(driver, this);
		
	}
	@FindBy(xpath="//button[text()='✕']")
	private WebElement logincredential;
	
	@FindBy(name="q")
	private WebElement usersearch;
	
	

	public  WebElement getLogincredential() {
		return logincredential;
	}

	public WebElement getUsersearch() {
		return usersearch;
	}
	
	
}
 