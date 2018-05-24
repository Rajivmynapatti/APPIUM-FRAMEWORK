package com.quickee.screens;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.quickee.driver.SharedDriver;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;

public class ProfileScreen extends SharedDriver{
	
	@iOSFindBy(id="settings icon")
	private MobileElement settings;
	
	@iOSFindBy(id="ButtonMore0")
	private MobileElement More_icon;
	
	//Save quickee from action sheet to save/give likes to the quickee
	@iOSFindBy(id="Save Quickee")
	private MobileElement Save_Quickee;

	//Edit quickee from action sheet
	@iOSFindBy(id="Edit")
	private MobileElement Edit;

	//Save button from Edit quickee screen to save edited quickee	
	@iOSFindBy(id="ButtonSave")
	private MobileElement SaveEditedQuickee;
	
	//Delete quickee
	@iOSFindBy(id="Delete Post")
	private MobileElement Delete_Post;
	
	@iOSFindBy(id="Share Quickee")
	private MobileElement Share_Quickee;
	
	@iOSFindBy(id="Cancel")
	private MobileElement Cancel_Button;
	
	public ProfileScreen(){
		
		PageFactory.initElements(new AppiumFieldDecorator(getAppiumDriver()), this);
	}
	
	public MobileElement goToSettingsIcon(){ return settings; }
	public MobileElement TapOnMoreicon(){ return More_icon; }
	public MobileElement TapOnSaveQuickee(){ return Save_Quickee; }
	public MobileElement TapOnEditQuickee(){ return Edit; }
	public MobileElement TapOnDeleteQuickeePost(){ return Delete_Post; }
	public MobileElement TapOnShareQuickeePost(){ return Share_Quickee; }
	public MobileElement TapOnCancelButton(){ return Cancel_Button; }
	public MobileElement TapOnSaveEditedQuickeeButton(){return SaveEditedQuickee;}
	
	
	public void clickOnSettingsIcon(){
		
		click(settings);
		
	}
	
	public void clickOnMoreOptions(){
		WebDriverWait wait = new WebDriverWait(driver,30);

		wait.until(ExpectedConditions.visibilityOf(More_icon));

		//driver.findElement(By.linkText("Samsung")).click();
		click(More_icon);
		
	}
	
	public void clickOnSaveQuickee(){
		click(Save_Quickee);
	}
	public void clickOnEditQuickee(){
		click(Edit);
	}
	public void clickOnDeleteQuickee(){
		click(Delete_Post);
	}
	public void clickOnShareQuickee(){
		click(Share_Quickee);
	}
	public void clickOnCancelbutton(){
		click(Cancel_Button);
	}
	
	public void clicktoSaveEditedQuickee(){
		click(SaveEditedQuickee);
	}
}
