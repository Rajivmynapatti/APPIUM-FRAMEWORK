package com.quickee.steps;

import com.quickee.screens.Post_A_QuickeeScreen;
import com.quickee.screens.ProfileScreen;
import com.quickee.screens.SettingsScreen;

import cucumber.api.java.en.And;

public class FavouriteAQucikeePost extends ProfileScreen {
	
	SettingsScreen settingScreen = new SettingsScreen();
	Post_A_QuickeeScreen postQuickee = new Post_A_QuickeeScreen();
	
	 
	 
@And ("^Tap on More options button and select save option to favourite a quickee post$")
	public void AddQuickeeToFavourite(){
	
	//Slightly swipe the screen
	//settingScreen.SwipeToPost2();
	
	//Tap on MoreOption for the very first Post
	clickOnMoreOptions();
	
	//Now select Save quickee 
	clickOnSaveQuickee();
	  }
	
@And ("^Tap on love icon from Profile screen to view the list of all the Favourite's Post and then tap on back button to redirect again to profile screen$")
		public void ViewFavouriteQuickeeList(){
	
	
	//Tap on LoveIcon ProfileScreen it will redirected to All Favourite Quickee list
	settingScreen.TapOnLoveIcon();
	
	//Swipe down for one time to view the listing
		swipe(Direction.DOWN);
		
	//Tap on Back button to redirect agian to Profile screen from Favourite listing screen.
		postQuickee.tapBack();
		
	}
	
}
