@AddPostToFavouriteList
Feature: Acceptance testing of Favourites post, so that a User can able to Add Quickee Post to his/her favourite List, Deleting of a Quickee Post and Viewing of Notification listing.
  Scenario: As a Registered User, i want to select a quickee to Save as Favourite so that users can see selected post in Favourite list
  
  Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  When Enter Email and Password and click on Sign In button
  And Click on Profile link from Latest Quickees Screen
  And Tap on More options button and select save option to favourite a quickee post
  And Tap on love icon from Profile screen to view the list of all the Favourite's Post and then tap on back button to redirect again to profile screen
 # And Click on Settings icon from profile Screen
 # And Click on LogOut tab
 # Then User should be successfully LogOut
  
  
  
   @DeleteQuickee
  Scenario: As a Registered User, i want to select Delete Quickee options so that User can delete his/her Quickee Post
  
  Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  When Enter Email and Password and click on Sign In button
  And Click on Profile link from Latest Quickees Screen
  And Tap on More options button and select delete post option to delete a quickee post
 # And Click on Settings icon from profile Screen
 # And Click on LogOut tab
 # Then User should be successfully LogOut
 
 @Notifications
 Scenario: As a Registered User, i want to tap on Notification icon, so that i can able to see Notification listing.
 Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  When Enter Email and Password and click on Sign In button
  And Click on Profile link from Latest Quickees Screen
  Then Click on Notification icon
  And Select any one Notification from User's Notification listing
  
 
 