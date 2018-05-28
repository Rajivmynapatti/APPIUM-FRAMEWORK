package com.quickee.steps;

import com.quickee.screens.ProfileScreen;

import cucumber.api.java.en.And;

public class Delete_Quickee extends ProfileScreen{

	
	  @And("^Tap on More options button and select delete post option to delete a quickee post$")
	  public void DeleteQuickeePost() throws InterruptedException{
		  
		  clickOnMoreOptions();
		  clickOnDeleteQuickee();
		  
		  Thread.sleep(5000);
	  }
}
