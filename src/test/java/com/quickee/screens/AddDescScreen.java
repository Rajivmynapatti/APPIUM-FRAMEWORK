package com.quickee.screens;

import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.touch.TouchActions;
import org.openqa.selenium.support.PageFactory;

import com.quickee.driver.SharedDriver;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;

public class AddDescScreen extends SharedDriver{
	
	public String quickeeTitle = "Post a Quickee";
	
	
	@iOSFindBy(xpath="*//[@name=\"Post a Quickee\"]")
	private MobileElement appTitle;
	
	@iOSFindBy(id="ButtonBackToSelectLocation")
	private MobileElement backButton;
	
	@iOSFindBy(id="Placeholder-camera")
	private MobileElement placeholderCamera;
	
	@iOSFindBy(id="ButtonNextToPreview")
	private MobileElement nextToPreviewButton;
	
	@iOSFindBy(id="ButtonNextToRateQuickee")
	private MobileElement nextToRateButton;
	
	@iOSFindBy(id="ButtonNextToPostQuickee")
	private MobileElement nextToPostButton;
	
	@iOSFindBy(id="ButtonGIPHY")
	private MobileElement giphyIcon;
	
	@iOSFindBy(id="ButtonCamera")
	private MobileElement cameraIcon;
	
	@iOSFindBy(id="TextFieldHeadline")
	private MobileElement headlineTextField;
	
	@iOSFindBy(id="TextViewDescription")
	private MobileElement addDescription;
	
	

	public AddDescScreen(){
		PageFactory.initElements(new AppiumFieldDecorator(getAppiumDriver()), this);
	}
public MobileElement addHeadline(){return headlineTextField;}
public MobileElement addDesc(){return addDescription;}
public MobileElement NextButton(){return nextToRateButton;}	
public MobileElement NextPostbutton(){return nextToPostButton;}

public void isCorrectAppTitleDisplayed(){
		
		isCorrectMessageDisplayed(appTitle, quickeeTitle);
}

public void enterHeadlineAndDescption(){
	sendKeysClearText("Title post", headlineTextField);
	sendKeysClearText("Description post", addDescription);
}

public void clearHeadlineAndDescription(){
	//sendKeys("Edit title", headlineTextField);
	//sendKeys("Edit Description", addDescription);
	 clearTextField(headlineTextField);
	 clearTextField(addDescription);
}
	public void clickCamera(){
		click(cameraIcon);
		
	}
	public void clickNextToRate(){
		click(nextToRateButton);
	}
	
	public void clickNextToPreview(){
		click(nextToPreviewButton);
	}
	
	public void clickNextToPost(){
		click(nextToPostButton);
		
	}
	public void doubleTap(){
		TouchActions action = new TouchActions(driver);
		//action.doubleTap(addDescription);
		//action.perform();
		action.longPress(addDescription).sendKeys(Keys.DELETE);
	}
	public void editTitleAndDescription(){
		sendKeys("Edit title", headlineTextField);
		sendKeys("Edit Description", addDescription);
	//sendKeysClearText("Edit title", headlineTextField);
	//sendKeysClearText("Edit Description", addDescription);
	
	}
}
