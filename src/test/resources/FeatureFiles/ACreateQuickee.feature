@QuickeePost
Feature: Acceptance testing of Quickee Post by Creating, Editing and Deleting a Quickee post.
	
	
#	@CreateQuickeeAnonymously
  #Scenario: As a User I want to able to create a Quickee

 # Given Click on Login link on Get Started Screen
 # Then Tap on EmailAddress button on Welcome Screen
#  When Enter Email and Password and click on Sign In button
 # And Click on addnew link from Latest Quickees Screen
 # And Click on Anonymously icon from QuickeeTypeScreen
 # And Click on Next button
 # Then User will navigate to Map view screen and select any one Store
 # Then Add Title and Description to that selected store and tap on Next button
 # Then User will get the preview screen and tap on next button
 # Then User will provide rating to the quickee
 # Then User will provide Quickee badge and then tap on Post quickee button
 #  And Click on Profile link from Latest Quickees Screen
 # And Click on Settings icon from profile Screen
 # And Click on LogOut tab
 # Then User should be successfully LogOut
  
  @CreateQuickeeWithImage
  Scenario: As a Registered User, i want to tap on Add new icon so that i can create a Quickee post with Image
  
  Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  When Enter Email and Password and click on Sign In button
  And Click on addnew link from Latest Quickees Screen
  And Click on Anonymously icon from QuickeeTypeScreen
  And Click on Next button
  Then User will navigate to Map view screen and select any one Store
  Then Add Title and Description to that selected store and tap on Next button
  And Tap on Image icon and select an image from gallery to upload
  Then User will get the preview screen and tap on next button
  Then User will provide rating to the quickee
  Then User will provide Quickee badge and then tap on Post quickee button
   And Click on Profile link from Latest Quickees Screen
  And Click on Settings icon from profile Screen
  And Click on LogOut tab
  Then User should be successfully LogOut
  
#  @CreateQuickeeWithVideo
  # Scenario: As a Registered User, i want to tap on Add new icon so that i can create a Quickee post with Image
  
 #  Given Click on Login link on Get Started Screen
#   Then Tap on EmailAddress button on Welcome Screen
#   When Enter Email and Password and click on Sign In button
#   And Click on addnew link from Latest Quickees Screen
#   And Click on Anonymously icon from QuickeeTypeScreen
#   And Click on Next button
#   Then User will navigate to Map view screen and select any one Store
 #  Then Add Title and Description to that selected store and tap on Next button
 #  And Tap on Image icon and select an video from gallery to upload
#   Then User will get the preview screen and tap on next button
#   Then User will provide rating to the quickee
#   Then User will provide Quickee badge and then tap on Post quickee button
#    And Click on Profile link from Latest Quickees Screen
#   And Click on Settings icon from profile Screen
#   And Click on LogOut tab
 #  Then User should be successfully LogOut
  
  
  @EditQuickee
  Scenario: As a Registered User, i want to tap on More Options from Profile screen so that i can select Edit option to edit quickee post.
  
   Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  When Enter Email and Password and click on Sign In button
  And Click on Profile link from Latest Quickees Screen
  And Tap on More options button and select Edit post option to Edit quickee post
  Then Add text/Description/image and tap on Save button to save quickee post
  And Click on Settings icon from profile Screen
  And Click on LogOut tab
  Then User should be successfully LogOut
  
  @DeleteQuickee
  Scenario: As a Registered User, i want to select Delete Quickee options so that i can delete my Quickee
  
  Given Click on Login link on Get Started Screen
  Then Tap on EmailAddress button on Welcome Screen
  When Enter Email and Password and click on Sign In button
  And Click on Profile link from Latest Quickees Screen
  And Tap on More options button and select delete post option to delete a quickee post
  And Click on Settings icon from profile Screen
  And Click on LogOut tab
  Then User should be successfully LogOut
  