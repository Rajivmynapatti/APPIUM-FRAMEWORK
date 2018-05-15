package com.quickee.steps;

import org.openqa.selenium.Alert;

import com.quickee.screens.LoginScreen;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InvalidLogin extends LoginScreen{
	
	 @When ("^Enter both Invalid Email and Password and click on Sign In button$")
	 public void EnterInvalidCredentials(){
		 enterInvalidEmail(getAutoTestInvalidEmailUsername());
		 enterInvalidPassword(getAutoTestInvalidEmailPassword());
		 clickSignInButton();
	 }
	 @Then ("^Get the alert text and tap on Ok button to accept the alert$")
	 public void SwitchAlertAndGetText(){
		 Alert al=driver.switchTo().alert();
		 
		System.out.println("The text present in the alert pop up is : \n" +al.getText());
		al.accept();
				 
		 
	 }
	  
}
