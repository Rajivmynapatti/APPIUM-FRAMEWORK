@CreateQuickee
Feature: Acceptance Testing in order to Create a Quickee
  In Order to check that the Creation of Qucikee is working fine
  we will do the acceptance testing

	@CreateQuickeeAnonymously
  Scenario: As a User I want to able to create a Quickee

  Given Click on Login link on Get Started Screen
  When Enter Email and Password and click on Sign In button
  And Click on addnew link from Latest Quickees Screen
  And Click on Anonymously icon from QuickeeTypeScreen
  And Click on Next button
  Then User will navigate to Map view screen