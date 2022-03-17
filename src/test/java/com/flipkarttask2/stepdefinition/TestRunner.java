package com.flipkarttask2.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources//Features",
                     glue="com.flipkarttask2.stepdefinition",
                   plugin="html:target",
               monochrome=true,
                   dryRun=false,
                   tags="@scenario")
public class TestRunner { 
	
	

}
