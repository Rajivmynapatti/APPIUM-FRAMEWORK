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