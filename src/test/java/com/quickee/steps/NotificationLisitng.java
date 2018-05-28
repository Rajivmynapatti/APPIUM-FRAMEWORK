package com.quickee.steps;


import com.quickee.screens.SettingsScreen;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class NotificationLisitng extends SettingsScreen{

	@Then ("^Click on Notification icon$")
	public void Notifications(){
		
		TapOnNotificationIcon();
		
	}
	  @And ("^Select any one Notification from User's Notification listing$")
	  public void selectFromListing() throws InterruptedException{
		  
		  TapOnNotificationListing();
		  
		  Thread.sleep(5000);
	  }
	
}
