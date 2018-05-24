package com.quickee.screens;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import com.quickee.driver.SharedDriver;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;

public class AddToThisQuickeeScreen extends SharedDriver{
	
	@iOSFindBy(id="ButtonPostQuickee")
	private MobileElement AddToPostQuickee;
	
public AddToThisQuickeeScreen() { PageFactory.initElements(new AppiumFieldDecorator(getAppiumDriver()), this); }
	
	public MobileElement PostQuickee(){ return AddToPostQuickee; }
	
	public void TapAddPostQuickee()
	{
		click(AddToPostQuickee);
	}
	public void StarRating(){
		
		 WebElement fiveStarRatingbar1 = driver.findElementById("starRating1");
		 fiveStarRatingbar1.click();
    	 
   	 // TouchAction act=new TouchAction(driver);  
   //	  act.press(347,190).release().perform();  // To give Five star rating
//    	  act.press(320, 240).release().perform(); // To give Four star rating
//    	  act.press(292, 240).release().perform(); // To give Three star rating
//    	  act.press(260, 240).release().perform(); // To give Two star rating
//    	  act.press(231, 240).release().perform(); // To give One star rating
	}

}
