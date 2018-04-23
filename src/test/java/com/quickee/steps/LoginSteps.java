package com.quickee.steps;

import java.net.MalformedURLException;
import com.quickee.screens.GetStartedScreen;
import com.quickee.screens.LatestQuickeesScreen;
import com.quickee.screens.LoginScreen;
import com.quickee.screens.ProfileScreen;
import com.quickee.screens.SettingsScreen;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginSteps extends LoginScreen {

	GetStartedScreen getstartedScreen = new GetStartedScreen();
	LatestQuickeesScreen latestQuickeesScreen = new LatestQuickeesScreen();
	ProfileScreen profileScreen = new ProfileScreen();
	SettingsScreen settingScreen = new SettingsScreen();

	@Given("^Click on Login link on Get Started Screen$")
	public void goToLoginScreen(){
		
		getstartedScreen.goToLoginScreen();
		
	}
	
	@When("^Enter Email and Password and click on Sign In button$")
	public void enterEmailAndPassword() throws InterruptedException, MalformedURLException{
		
		enterEmail(getAutoTestEmailUsername());
		enterPassword(getAutoTestEmailPassword());
		clickSignInButton();
		
	}
	
	@And("^Click on Profile link from Latest Quickees Screen$")
	public void goToProfile() throws InterruptedException{
		
		latestQuickeesScreen.clickProfileTab();
		
	}

	@And("^Click on Settings icon from profile Screen$")
	public void goToSettings() throws InterruptedException{
		
		profileScreen.clickOnSettingsIcon();
	}
	
	@And("^Click on LogOut tab$")
	public void clickOnlogoutTab(){
		
		MethodSwipeUp(5000);
		settingScreen.logOutUser();
		driver.switchTo().alert().accept();
	}
	
	@Then("^User should be successfully LogOut$")
	public void verifyLogout(){
		
		System.out.println("User Logged Out successfully");
		
	}
}
