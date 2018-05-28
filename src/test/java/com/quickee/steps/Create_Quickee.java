package com.quickee.steps;

import org.openqa.selenium.WebElement;

import com.quickee.screens.AddDescScreen;
import com.quickee.screens.GetStartedScreen;
import com.quickee.screens.LatestQuickeesScreen;
import com.quickee.screens.LoginScreen;
import com.quickee.screens.Post_A_QuickeeScreen;
import com.quickee.screens.ProfileScreen;
import com.quickee.screens.Qucikee_Badge_screen;
import com.quickee.screens.SettingsScreen;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import io.appium.java_client.TouchAction;

public class Create_Quickee extends LoginScreen {
	
	GetStartedScreen getstartedScreen = new GetStartedScreen();
	LatestQuickeesScreen latestQuickeesScreen = new LatestQuickeesScreen();
	ProfileScreen profileScreen = new ProfileScreen();
	SettingsScreen settingScreen = new SettingsScreen();
	Post_A_QuickeeScreen postQuickee = new Post_A_QuickeeScreen();
	AddDescScreen QuickeeDesc= new AddDescScreen();
	Qucikee_Badge_screen BadgeScreen = new Qucikee_Badge_screen();
	
	
	
	@And("^Click on addnew link from Latest Quickees Screen$")
	public void click_on_addnew_link_from_Latest_Quickees_Screen() throws Throwable {
		latestQuickeesScreen.tapPostTab();
	}

	@And("^Click on Anonymously icon from QuickeeTypeScreen$")
	public void click_on_Anonymously_icon_from_QuickeeTypeScreen() throws Throwable {
	    postQuickee.postAnomously();
	    //postQuickee.postWithUsername();
	  
	
	    //To handle the toggle button in Post a Quickee screen we use the below    
	
	    /*    List<WebElement> Toggle=driver.findElementsByTagName("XCUIElementTypeSwitch");
	      Toggle.get(0).click();
	      Toggle.get(1).click();         */
	}

	@And("^Click on Next button$")
	public void click_on_Next_button() throws Throwable {
		postQuickee.tapNext();
	}

	@Then("^User will navigate to Map view screen$")
	public void user_will_navigate_to_Map_view_screen() throws Throwable {
	   
	//WE are getting a pop up  to allow location permissions very first time and we have to create a method to accept that alert popup
		
		System.out.println("User is navigated to Map_Screen");
	}
		@Then ("^User will navigate to Map view screen and select any one Store$")
		public void User_will_navigate_to_Map_view_screen_and_select_any_one_Store(){
		//MethodSwipeUp(3000);
	    swipe(Direction.DOWN);
	   
	    postQuickee.selectStore();
		}
	    
	    @Then ("^Add Title and Description to that selected store and tap on Next button$")
	    public void Add_Title_and_Description_to_that_selected_store_and_tap_on_Next_button(){
	    
	    	 QuickeeDesc.enterHeadlineAndDescption();
	   	  
	   	    //After entering the Headline and Description we will be landed to preview screen
	   	 //   postQuickee.tapNext();
	   	    
	    
	    }
	    @Then ("^User will get the preview screen and tap on next button$")
	    public void User_will_get_the_preview_screen_and_tap_on_next_button(){
	    	
	    	postQuickee.tapNext();
	    	
	    	 //Now user will redirect to Post Preview screen
	    	postQuickee.tapNext();
	    }
	    
	    @Then ("^User will provide rating to the quickee$")
	    public void User_will_provide_rating_to_the_quickee(){
	    	
	    	 //Locate fiveStarRatingbar.
	    	  WebElement fiveStarRatingbar = driver.findElementById("starRating1");
	    	 
	    	  TouchAction act=new TouchAction(driver);  
	    	  act.press(348,190).release().perform();  // To give Five star rating
	//    	  act.press(320, 190).release().perform(); // To give Four star rating
	//    	  act.press(292, 190).release().perform(); // To give Three star rating
	//    	  act.press(262, 190).release().perform(); // To give Two star rating
	//    	  act.press(233, 190).release().perform(); // To give One star rating
	    	 // fiveStarRatingbar.click();
	    	  
	    /*	  
	      //Get start point of fiveStarRatingbar.
	    	  int startX = fiveStarRatingbar.getLocation().getX();
	    	  System.out.println(startX);
	    	 
	    	  //Get end point of fiveStarRatingbar.
	    	  int endX = fiveStarRatingbar.getSize().getWidth();
	    	  System.out.println(endX);
	    	 
	    	  //Get vertical location of fiveStarRatingbar.
	    	  int yAxis = fiveStarRatingbar.getLocation().getY();
	    	  
	    	  //Set fiveStarRatingbar tap position to set Rating = 4 star.
	    	  //You can use endX * 0.2 for 1 star, endX * 0.4 for 2 star, endX * 0.6 for 3 star, endX * 0.8 for 4 star, endX * 1 for 5 star.
	    	  int tapAt = (int) (endX * 0.6);  
	    	
	    	  //Set fiveStarRatingbar to Rating = 4 star using TouchAction class.
	    	
	    	 
	    	 TouchAction act=new TouchAction(driver);  
	    	  act.longPress(startX,yAxis);
	    	  act.moveTo(tapAt, yAxis);
	    	  act.release();
	    	  act.perform();       
	    	 act.press(tapAt,yAxis).release().perform();*/
	    
	    //After giving ratings it will tap on Next button and user will redirected to Quickee Badge screen.  
	    	  postQuickee.tapNext();
	    	  	fluentWait();
	    	
	    
	    }
	    @Then ("^User will provide Quickee badge and then tap on Post quickee button$")
	    public void User_will_provide_Quickee_badge_and_then_tap_on_Post_quickee_button() throws InterruptedException{
	    
	    	 //Give love badge to quickee and then tap on PostQuickee button.
	    	  BadgeScreen.giveLove();
	    //	  BadgeScreen.giveNoLove();
	   // 	  BadgeScreen.givePass();
	    	  
	    	  BadgeScreen.PostQuickee();
	    	  
	//Wait for 2 sec so that after post a quickee user will redirected to Lastest quickee screen.
	    	  Thread.sleep(5000);
	    
	    }
	    
	 }
	

