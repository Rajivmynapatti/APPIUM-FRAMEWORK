package com.quickee.steps;

import java.net.MalformedURLException;

import org.apache.log4j.Logger;

import com.quickee.driver.SharedDriver.Direction;
import com.quickee.screens.GetStartedScreen;
import com.quickee.screens.LatestQuickeesScreen;
import com.quickee.screens.LoginScreen;
import com.quickee.screens.ProfileScreen;
import com.quickee.screens.SettingsScreen;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.MobileElement;




public class LoginSteps extends LoginScreen {

	GetStartedScreen getstartedScreen = new GetStartedScreen();
	LatestQuickeesScreen latestQuickeesScreen = new LatestQuickeesScreen();
	ProfileScreen profileScreen = new ProfileScreen();
	SettingsScreen settingScreen = new SettingsScreen();
	 

	@Given("^Click on Login link on Get Started Screen$")
	public void goToLoginScreen(){
		
		getstartedScreen.goToLoginScreen();
		log.debug("Tapped on Login link from getstartedScreen");
	}
	
	@Then("^Tap on EmailAddress button on Welcome Screen$")
	public void taponEmailAddress(){
		
		driver.findElementById("ButtonEmailAddress").click();
	}
	
	@When("^Enter Email and Password and click on Sign In button$")
	public void enterEmailAndPassword() throws InterruptedException, MalformedURLException{
		
		enterEmail(getAutoTestEmailUsername());
		enterPassword(getAutoTestEmailPassword());
		clickSignInButton();
		log.debug("Entered user Email and Password and then tap on Sign button from Login screen");
	}
	
	@And("^Click on Profile link from Latest Quickees Screen$")
	public void goToProfile() throws InterruptedException{
		
		latestQuickeesScreen.clickProfileTab();
		log.debug("Tap on Profile link from the Dashboard Screen");
	}

	@And("^Click on Settings icon from profile Screen$")
	public void goToSettings() throws InterruptedException{
		
		profileScreen.clickOnSettingsIcon();
		log.debug("Tap on Setting link from the Profile Screen");
	}
	
	@And("^Click on LogOut tab$")
	public void clickOnlogoutTab(){
		
		settingScreen.SwipeToLogout();
		settingScreen.logOutUser();
		driver.switchTo().alert().accept();
		log.debug("Scroll down upto the Logout link and Click on it and then accept the alert");
	}
	
	@Then("^User should be successfully LogOut$")
	public void verifyLogout(){
		
		System.out.println("User Logged Out successfully");
		
	}
}
