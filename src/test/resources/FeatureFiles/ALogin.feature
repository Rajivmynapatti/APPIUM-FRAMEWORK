@LoginFunctionality
Feature: Acceptance testing for Login functionality with both Valid and Invalid User Credentials.

@LoginwithInvalidUser
	Scenario: As a Registered User i want to check the login functionality by giving an invalid user Credentails.
 
  Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  Then Tap on SignIn button and get the Text of the alert
  When Enter both Invalid Email and Password and click on Sign In button
  Then Get the alert text and tap on Ok button to accept the alert
  
  
	@LoginwithValidUser
	Scenario: As a Registered User I want to able to Login into the application so that i can check valid user details

  Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  When Enter Email and Password and click on Sign In button
  And Click on Profile link from Latest Quickees Screen
  And Click on Settings icon from profile Screen
  And Click on LogOut tab
  Then User should be successfully LogOut
  
 
 
  
  
  