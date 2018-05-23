@HitLike&DislikeToQuickee
 Feature: Acceptance Testing of Hitting Like, Dislike and adding Comment to the Quickee Post
  Scenario: As a Registered User, i want to check the Like, Dislike and Comment button functionality
  
  Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  When Enter Email and Password and click on Sign In button
  And Click on Profile link from Latest Quickees Screen
  And Tap on Like/Dislike/Comment button to Like/Dislike/Add Comment a Quickee post
  And Click on Settings icon from profile Screen
  And Click on LogOut tab
  Then User should be successfully LogOut
  
  @AddToThisQuickee
  Scenario: As a Registered User, i want to tap on AddToThisQuickeeButton so that User can give Rating to the Quickee Post
  
   Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  When Enter Email and Password and click on Sign In button
  And Click on Profile link from Latest Quickees Screen
  And Tap on AddToThisQuickee button
  And Tap on StarRating Bar to give ratings and then tap on Post submit button
  And Click on Settings icon from profile Screen
  And Click on LogOut tab
  Then User should be successfully LogOut
  
  @Add_Comment
  Scenario: As a Registered User, i want to tap on Comment icon so that i can add comment to a Quickee Post.
  
  Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  When Enter Email and Password and click on Sign In button
  And Click on Profile link from Latest Quickees Screen
  And Tap on Comment button to Add Comment a Quickee post
  And Click on Settings icon from profile Screen
  And Click on LogOut tab
  Then User should be successfully LogOut
  
  
  