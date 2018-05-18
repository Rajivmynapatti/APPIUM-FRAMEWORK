package com.quickee.screens;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import com.quickee.driver.SharedDriver;
import com.quickee.driver.SharedDriver.Direction;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;

public class Post_A_QuickeeScreen extends SharedDriver {
	
	@iOSFindBy(xpath="//*[@name=\"Post a Quickee\"]")
	private MobileElement ScreenTitle;
	
	@iOSFindBy(id="ButtonUserName")
	private MobileElement QuickeeWithUsername;
	
	@iOSFindBy(id="ButtonAnonymously")
	private MobileElement QuickeeWithAnonymousname;
	
	@iOSFindBy(id="ButtonNext")
	private MobileElement NextButton;
	
	@iOSFindBy(id="ButtonBack")
	private MobileElement BackButton;
	
	@iOSFindBy(id="Disney Store")
	private MobileElement storeName;
	
	
	
	
	public Post_A_QuickeeScreen() {
		PageFactory.initElements(new AppiumFieldDecorator(getAppiumDriver()), this);
	}

	
	public MobileElement QuickeeWithUserName(){return QuickeeWithUsername;}
	public MobileElement QuickeeWithAnonymousName(){return QuickeeWithAnonymousname;}
	public MobileElement TapNextbutton(){return NextButton;}
	public MobileElement Storename(){return storeName;}
	
	public void postAnomously(){
		click(QuickeeWithAnonymousname);
	}
	
	public void postWithUsername(){
		click (QuickeeWithUsername);
		}
	
	public void tapNext(){
		click(NextButton);
	}
	public void selectStore(){
		
		//List<MobileElement> storeList=driver.findElementsByXPath("tesgt");
		
		//swipeUntilElementDisplayed(storeList.get(13),Direction.DOWN);
		//storeList.get(13).click();
		
		swipeUntilElementDisplayed(storeName,Direction.DOWN);
		storeName.click();
		
	}
}
	/*
	 custom Location: 
	 1. Latitude: 37.785834
	 2. Longitude: -122.406417
	  */

	/*Listing of all the StoreNames by all id: 
	1. 1800 Ellis St
	2. CB2
	3. Ellis-O'Farrell Garage
	4. GameStop
	5. Trader Joe's
	6. xpath("(//XCUIElementTypeStaticText[@name=\"Powell Street Station\"])[1]")
	7. Old Navy
	8. Marshalls
	9. Crate and Barrel
	10. Levi's Store Market Street
	11. Nordstrom San Francisco Centre
	12. Forever 21
	13. Westfield San Francisco Centre
	14. Disney Store
	15. xpath("(//XCUIElementTypeStaticText[@name=\"Powell Street Station\"])[2]")
	16. Barneys New York, San Francisco
	17. Urban Outfitters
	18. Hotel Union Square
	19. T-Mobile
	20. Dirty Habit
	21. Market St & 4th St         */

