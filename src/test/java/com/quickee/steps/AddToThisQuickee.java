package com.quickee.steps;

import com.quickee.screens.AddToThisQuickeeScreen;
import com.quickee.screens.SettingsScreen;

import cucumber.api.java.en.And;

public class AddToThisQuickee extends SettingsScreen{
	AddToThisQuickeeScreen AddRating= new AddToThisQuickeeScreen();
	
	
	 
	@ And ("^Tap on AddToThisQuickee button$")
	public void TapOnAddButton(){
		
		//Swipe till the Comment Button of the post is Visible in the screen
		SwipeToPost2();
		
	//Tap on AddToThisQuickee button
		AddToThisQuickees();
	}

	 @And ("^Tap on StarRating Bar to give ratings and then tap on Post submit button$")
	public void AddRating_Submitpost(){
	
		 //Give rating to the quickee
		 AddRating.StarRating();
		 
		//Tap on Post Quickee button 
		AddRating.TapAddPostQuickee();
		
	//Get the text from the alert and then tap ok to accept the alert
		GetAlertTextAndExceptIt();
	}

}
