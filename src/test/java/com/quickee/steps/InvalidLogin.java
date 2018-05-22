package com.quickee.steps;

import org.openqa.selenium.Alert;

import com.quickee.screens.LoginScreen;
import com.quickee.screens.Post_A_QuickeeScreen;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InvalidLogin extends LoginScreen{
	
	Post_A_QuickeeScreen postQuickee = new Post_A_QuickeeScreen();
	
	  @Then ("^Tap on SignIn button and get the Text of the alert$")
	  public void TapOnSignInbutton(){
		  clickSignInButton();
		  
		  GetAlertTextAndExceptIt();
	  }
	
	
	 @When ("^Enter both Invalid Email and Password and click on Sign In button$")
	 public void EnterInvalidCredentials(){
		 enterInvalidEmail(getAutoTestInvalidEmailUsername());
		 enterInvalidPassword(getAutoTestInvalidEmailPassword());
		 clickSignInButton();
	 }
	 @Then ("^Get the alert text and tap on Ok button to accept the alert$")
	 public void SwitchAlertAndGetText(){
		 GetAlertTextAndExceptIt();
		 
		driver.findElementById("Back Icon").click();
		driver.findElementById("Back Icon").click();
				 
		 
	 }
	  
}
