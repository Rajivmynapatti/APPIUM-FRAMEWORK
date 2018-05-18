package com.quickee.steps;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.touch.TouchActions;

import com.quickee.screens.AddDescScreen;
import com.quickee.screens.ProfileScreen;
import com.quickee.screens.SettingsScreen;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import io.appium.java_client.MobileElement;



public class Edit_Quickee extends ProfileScreen{
	
	AddDescScreen QuickeeDesc= new AddDescScreen();
	SettingsScreen settingScreen = new SettingsScreen();
	
	@And ("^Tap on More options button and select Edit post option to Edit quickee post$")
	public void SelectEdit(){
		
			fluentWait();
			
			clickOnMoreOptions();
			
			clickOnEditQuickee();
		
	}
	
	  @Then ("^Add text/Description/image and tap on Save button to save quickee post$")
	  public void SelectSave(){
		
		  //Edit headline and description
		  QuickeeDesc.clearHeadlineAndDescription();
		   QuickeeDesc.editTitleAndDescription();

		  		
		 //Tap on save button to save edited quickee post
		  clicktoSaveEditedQuickee();
	  }

}
