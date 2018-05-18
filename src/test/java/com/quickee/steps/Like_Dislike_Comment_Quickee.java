package com.quickee.steps;

import com.quickee.screens.SettingsScreen;

import cucumber.api.java.en.And;

public class Like_Dislike_Comment_Quickee extends SettingsScreen {
	
	
	@And ("^Tap on Like/Dislike/Comment button to Like/Dislike/Add Comment a Quickee post$")
	public void Hitting(){
	
		//Swipe untill the LIKE, DISLIKE, COMMENT BUTTON is visible and can be handle
			SwipeToPost2();
			
	
		//First tap on Dislike button 
			HitDislike();
			System.out.println("Dislike this post, hmm it seems you didn't like Quickee Post :(");
	
		//Then tap on Like button to like a quickee post	
			HitLike();
			System.out.println("WoW, i Love this Quickee Post :)");
	}
}
