package com.quickee.steps;

import com.quickee.screens.AddDescScreen;
import com.quickee.screens.SettingsScreen;

import cucumber.api.java.en.And;

public class QuickeeWithImage extends SettingsScreen{
	
	
	
	
	
	AddDescScreen QuickeeDesc= new AddDescScreen();
	
	
	@And("^Tap on Image icon and select an image from gallery to upload$")
	public void AddImage() throws InterruptedException{
		   
		QuickeeDesc.clickCamera();
	  
	   	selectGalleryforImage();
	   	
	   	Thread.sleep(5000);
		
	}
}
