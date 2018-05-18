package com.quickee.steps;

import com.quickee.screens.AddDescScreen;
import com.quickee.screens.SettingsScreen;

import cucumber.api.java.en.And;

public class QuickeeWithVideo extends SettingsScreen{

	AddDescScreen QuickeeDesc= new AddDescScreen();
	
	 
	@And ("^Tap on Image icon and select an video from gallery to upload$")
	public void addVideoToPost() throws InterruptedException{
		
		QuickeeDesc.clickCamera();
		
		selectGalleryforVideo();
		Thread.sleep(50000L);
	}
}
