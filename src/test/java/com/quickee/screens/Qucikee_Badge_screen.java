package com.quickee.screens;

import org.openqa.selenium.support.PageFactory;

import com.quickee.driver.SharedDriver;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;

public class Qucikee_Badge_screen extends SharedDriver {
	
	
public String quickeeTitle = "Quickee Badge";
	
	@iOSFindBy(id="ButtonBackToRateQuickee")
	private MobileElement BackButton;
	
	@iOSFindBy(xpath="//XCUIElementTypeStaticText[@name=\"Quickee Badge\"]")
	private MobileElement appTitle;
	
	@iOSFindBy(id="ButtonLove")
	private MobileElement GiveLovetoQuickee;
	
	@iOSFindBy(id="ButtonPass")
	private MobileElement GivePasstoQuickee;
	
	@iOSFindBy(id="ButtonNoLove")
	private MobileElement GiveNoLovetoQuickee;
	
	@iOSFindBy(id="ButtonPostYourQuickee") 
	private MobileElement PostQuickeeButton;
	
	
	public Qucikee_Badge_screen() { PageFactory.initElements(new AppiumFieldDecorator(getAppiumDriver()), this); }
	
	public MobileElement getBackButton(){ return BackButton; }
	public MobileElement getAppTitle(){ return appTitle; }
	public MobileElement getLoveQuickee(){ return GiveLovetoQuickee; }
	public MobileElement getPassQuickee(){ return GivePasstoQuickee; }
	public MobileElement getNoLoveQuickee(){ return GiveNoLovetoQuickee; }
	public MobileElement getPostQuickee(){ return PostQuickeeButton; }
	
	
public void isCorrectAppTitleDisplayed(){
		
		isCorrectMessageDisplayed(appTitle, quickeeTitle);
	}

public void giveLove(){
	click(GiveLovetoQuickee);
	
}

public  void giveNoLove(){
	click(GiveNoLovetoQuickee);
}

public void givePass(){
	
	click(GivePasstoQuickee);
}

public void PostQuickee(){
	
	click(PostQuickeeButton);

}

}
