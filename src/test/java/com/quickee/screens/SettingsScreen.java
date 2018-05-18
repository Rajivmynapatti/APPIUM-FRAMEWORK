package com.quickee.screens;

import org.openqa.selenium.support.PageFactory;

import com.quickee.driver.SharedDriver;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;

public class SettingsScreen extends SharedDriver {
	
	private enum page {Settings}
	
	@iOSFindBy(id="Change Profile Picture")
	private MobileElement profilePicture;
	
	@iOSFindBy(xpath="//*[@name=\"Use Gallery\"]")
	private MobileElement gallery;
	
	@iOSFindBy(xpath="//*[@value=\"Moments\"]")
	private MobileElement moments;
	
	@iOSFindBy(xpath="//*[@value=\"Videos\"]")
	private MobileElement Videos;
	
	@iOSFindBy(xpath="//XCUIElementTypeCollectionView[@name=\"PhotosGridView\"]/XCUIElementTypeCell/XCUIElementTypeOther")
	private MobileElement SelectVideo;
	
	@iOSFindBy(xpath="//XCUIElementTypeCollectionView[@name=\"PhotosGridView\"]/XCUIElementTypeCell[3]/XCUIElementTypeOther")
	private MobileElement picture1;
	
	@iOSFindBy(id="Photo, Portrait, August 09, 2012, 2:59 AM")
	private MobileElement picture;
	
	@iOSFindBy(id="Done")
	private MobileElement doneLink;
	
	@iOSFindBy(id="Choose")
	private MobileElement Choose;
	
	@iOSFindBy(id="Log Out")
	private MobileElement logOut;
	
	public SettingsScreen(){
		
		PageFactory.initElements(new AppiumFieldDecorator(getAppiumDriver()), this);
	}
	
	public MobileElement changePicture(){ return profilePicture; }
	public MobileElement useGallery(){ return gallery; }
	public MobileElement momentSection(){ return moments; } 
	public MobileElement choosePicture(){ return picture1; }
	public MobileElement donePicture(){ return doneLink; }
	public MobileElement logOutTab(){ return logOut; }
	public MobileElement choose_Picture(){ return Choose; }
	public MobileElement choose_Video(){return Videos; }
	
	public void selectProfilePictureUsingGallery(){
		click(profilePicture); 
		click(gallery);
		WaitforAlert();
		fluentWait();
		click(moments);
		click(picture);
		click(doneLink);
	}
	
	
	public void logOutUser(){
		click(logOut);
	}

	public void selectGalleryforImage(){
		click(gallery);
	 	WaitforAlert();
		click(moments);
		fluentWait();
		click(picture1);
		click(Choose);
		
	}
	public void selectGalleryforVideo() throws InterruptedException{
		click(gallery);
	 	WaitforAlert();
		click(Videos);
		fluentWait();
		click(SelectVideo);
		Thread.sleep(50000L);
		click(Choose);
		
	}
	public void EditGalleryforImage(){
		click(gallery);
	 	WaitforAlert();
		click(moments);
		fluentWait();
		click(picture);
		click(Choose);
		
	}
}
