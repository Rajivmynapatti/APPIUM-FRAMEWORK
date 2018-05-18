package com.quickee.steps;

import com.quickee.screens.AddDescScreen;
import com.quickee.screens.ProfileScreen;
import com.quickee.screens.SettingsScreen;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;



public class Edit_Quickee extends ProfileScreen{
	
	AddDescScreen QuickeeDesc= new AddDescScreen();
	SettingsScreen settingScreen = new SettingsScreen();
	
	@And ("^Tap on More options button and select Edit post option to Edit quickee post$")
	public void SelectEdit(){
		
			fluentWait();
	
	//Tap on MoreOption of the very first quickee post		
			clickOnMoreOptions();

	//Select Edit from the Action sheet		
			clickOnEditQuickee();
		
	}
	
	  @Then ("^Add text/Description/image and tap on Save button to save quickee post$")
	  public void SelectSave(){
		
		  //Edit headline and description
		  	QuickeeDesc.editTitleAndDescription();
		   
		 //Tap on Camera Icon
		   QuickeeDesc.clickCamera();
		   
		//Select one image to add in the quickee post
		   settingScreen.EditGalleryforImage();

		  		
		 //Tap on save button to save edited quickee post
		  clicktoSaveEditedQuickee();
	  }

}
