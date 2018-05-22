package com.quickee.screens;

import org.openqa.selenium.support.PageFactory;

import com.quickee.driver.SharedDriver;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;

public class AddCommentScreen extends SharedDriver{
	
	@iOSFindBy(id="textFieldComment")
	private MobileElement AddText;
	
	@iOSFindBy(id="ButtonComment")
	private MobileElement AddCommentButton;
	

	
	public AddCommentScreen(){
		PageFactory.initElements(new AppiumFieldDecorator(getAppiumDriver()), this);
	}
public MobileElement TapOnTextField(){return AddText;}
public MobileElement TapOnCommentButton(){return AddCommentButton;}
	

public void EnterCommentText(){
	
	sendKeysClearText("I m entering Comment for this Quickee post", AddText);
}

public void TapToComment(){
	click(AddCommentButton);
}
}
