package com.quickee.steps;

import com.quickee.screens.AddCommentScreen;
import com.quickee.screens.Post_A_QuickeeScreen;
import com.quickee.screens.SettingsScreen;

import cucumber.api.java.en.And;

public class Add_Comment extends SettingsScreen{
	
	AddCommentScreen AddComment = new AddCommentScreen();
	Post_A_QuickeeScreen postQuickee = new Post_A_QuickeeScreen();
	
	@And ("^Tap on Comment button to Add Comment a Quickee post$")
	public void addComment(){
	
		//Swipe till the Comment Button of the post is Visible in the screen
			SwipeToPost2();
		
	//Tap on Comment Icon : this method is used from SettingsScreen	
		AddCommentIcon();
	
		//Add Comment in to the Comment Text field
		AddComment.EnterCommentText();
		
		//Tap on Comment Button
		AddComment.TapToComment();
		
		//Swipe download to view the added comment
		//swipe(Direction.DOWN);
			
	
		//TapNext(), TapBack(); methods are present in Post_A_QuickeeScreen so that we can use them here itself.
		//Post_A_QuickeeScreen postQuickee = new Post_A_QuickeeScreen();
		
		postQuickee.tapBack();
	}
	
	

}
