$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ALogin.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing for Login functionality with both Valid and Invalid User Credentials.",
  "description": "",
  "id": "acceptance-testing-for-login-functionality-with-both-valid-and-invalid-user-credentials.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFunctionality"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "As a Registered User I want to able to Login into the application so that i can check valid user details",
  "description": "",
  "id": "acceptance-testing-for-login-functionality-with-both-valid-and-invalid-user-credentials.;as-a-registered-user-i-want-to-able-to-login-into-the-application-so-that-i-can-check-valid-user-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@LoginwithValidUser"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 28849746956,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1413281896,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 12079408999,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 33130905436,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 34962582968,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 15153004820,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 114776,
  "status": "passed"
});
formatter.after({
  "duration": 787168,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "As a Registered User i want to check the login functionality by giving an invalid user Credentails.",
  "description": "",
  "id": "acceptance-testing-for-login-functionality-with-both-valid-and-invalid-user-credentials.;as-a-registered-user-i-want-to-check-the-login-functionality-by-giving-an-invalid-user-credentails.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@LoginwithInvalidUser"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Tap on SignIn button and get the Text of the alert",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Enter both Invalid Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Get the alert text and tap on Ok button to accept the alert",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 2302321780,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1081028003,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.TapOnSignInbutton()"
});
formatter.result({
  "duration": 5524804443,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.EnterInvalidCredentials()"
});
formatter.result({
  "duration": 9985709068,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.SwitchAlertAndGetText()"
});
formatter.result({
  "duration": 6156217570,
  "status": "passed"
});
formatter.after({
  "duration": 16107434,
  "status": "passed"
});
formatter.uri("BCreateQuickee.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing of Quickee Post by Creating, Editing and Deleting a Quickee post.",
  "description": "",
  "id": "acceptance-testing-of-quickee-post-by-creating,-editing-and-deleting-a-quickee-post.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@QuickeePost"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#\t@CreateQuickeeAnonymously"
    },
    {
      "line": 6,
      "value": "#Scenario: As a User I want to able to create a Quickee"
    },
    {
      "line": 8,
      "value": "# Given Click on Login link on Get Started Screen"
    },
    {
      "line": 9,
      "value": "# Then Tap on EmailAddress button on Welcome Screen"
    },
    {
      "line": 10,
      "value": "#  When Enter Email and Password and click on Sign In button"
    },
    {
      "line": 11,
      "value": "# And Click on addnew link from Latest Quickees Screen"
    },
    {
      "line": 12,
      "value": "# And Click on Anonymously icon from QuickeeTypeScreen"
    },
    {
      "line": 13,
      "value": "# And Click on Next button"
    },
    {
      "line": 14,
      "value": "# Then User will navigate to Map view screen and select any one Store"
    },
    {
      "line": 15,
      "value": "# Then Add Title and Description to that selected store and tap on Next button"
    },
    {
      "line": 16,
      "value": "# Then User will get the preview screen and tap on next button"
    },
    {
      "line": 17,
      "value": "# Then User will provide rating to the quickee"
    },
    {
      "line": 18,
      "value": "# Then User will provide Quickee badge and then tap on Post quickee button"
    },
    {
      "line": 19,
      "value": "#  And Click on Profile link from Latest Quickees Screen"
    },
    {
      "line": 20,
      "value": "# And Click on Settings icon from profile Screen"
    },
    {
      "line": 21,
      "value": "# And Click on LogOut tab"
    },
    {
      "line": 22,
      "value": "# Then User should be successfully LogOut"
    }
  ],
  "line": 25,
  "name": "As a Registered User, i want to tap on Add new icon so that i can create a Quickee post with Image",
  "description": "",
  "id": "acceptance-testing-of-quickee-post-by-creating,-editing-and-deleting-a-quickee-post.;as-a-registered-user,-i-want-to-tap-on-add-new-icon-so-that-i-can-create-a-quickee-post-with-image",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@CreateQuickeeWithImage"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Click on addnew link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Anonymously icon from QuickeeTypeScreen",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User will navigate to Map view screen and select any one Store",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Add Title and Description to that selected store and tap on Next button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Tap on Image icon and select an image from gallery to upload",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User will get the preview screen and tap on next button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User will provide rating to the quickee",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User will provide Quickee badge and then tap on Post quickee button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 2427176287,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1095239540,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 9668975514,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_addnew_link_from_Latest_Quickees_Screen()"
});
formatter.result({
  "duration": 34292294885,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_Anonymously_icon_from_QuickeeTypeScreen()"
});
formatter.result({
  "duration": 6103873369,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_Next_button()"
});
formatter.result({
  "duration": 1962204119,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_navigate_to_Map_view_screen_and_select_any_one_Store()"
});
formatter.result({
  "duration": 27968123435,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.Add_Title_and_Description_to_that_selected_store_and_tap_on_Next_button()"
});
formatter.result({
  "duration": 13659076542,
  "status": "passed"
});
formatter.match({
  "location": "QuickeeWithImage.AddImage()"
});
formatter.result({
  "duration": 20520755193,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_get_the_preview_screen_and_tap_on_next_button()"
});
formatter.result({
  "duration": 6196241624,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_provide_rating_to_the_quickee()"
});
formatter.result({
  "duration": 2820755588,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_provide_Quickee_badge_and_then_tap_on_Post_quickee_button()"
});
formatter.result({
  "duration": 6060903838,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 47070707407,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 36355021974,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14296630845,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 81580,
  "status": "passed"
});
formatter.after({
  "duration": 1345947,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 44,
      "value": "#  @CreateQuickeeWithVideo"
    },
    {
      "line": 45,
      "value": "# Scenario: As a Registered User, i want to tap on Add new icon so that i can create a Quickee post with Image"
    },
    {
      "line": 47,
      "value": "#  Given Click on Login link on Get Started Screen"
    },
    {
      "line": 48,
      "value": "#   Then Tap on EmailAddress button on Welcome Screen"
    },
    {
      "line": 49,
      "value": "#   When Enter Email and Password and click on Sign In button"
    },
    {
      "line": 50,
      "value": "#   And Click on addnew link from Latest Quickees Screen"
    },
    {
      "line": 51,
      "value": "#   And Click on Anonymously icon from QuickeeTypeScreen"
    },
    {
      "line": 52,
      "value": "#   And Click on Next button"
    },
    {
      "line": 53,
      "value": "#   Then User will navigate to Map view screen and select any one Store"
    },
    {
      "line": 54,
      "value": "#  Then Add Title and Description to that selected store and tap on Next button"
    },
    {
      "line": 55,
      "value": "#  And Tap on Image icon and select an video from gallery to upload"
    },
    {
      "line": 56,
      "value": "#   Then User will get the preview screen and tap on next button"
    },
    {
      "line": 57,
      "value": "#   Then User will provide rating to the quickee"
    },
    {
      "line": 58,
      "value": "#   Then User will provide Quickee badge and then tap on Post quickee button"
    },
    {
      "line": 59,
      "value": "#    And Click on Profile link from Latest Quickees Screen"
    },
    {
      "line": 60,
      "value": "#   And Click on Settings icon from profile Screen"
    },
    {
      "line": 61,
      "value": "#   And Click on LogOut tab"
    },
    {
      "line": 62,
      "value": "#  Then User should be successfully LogOut"
    }
  ],
  "line": 66,
  "name": "As a Registered User, i want to tap on More Options from Profile screen so that i can select Edit option to edit quickee post.",
  "description": "",
  "id": "acceptance-testing-of-quickee-post-by-creating,-editing-and-deleting-a-quickee-post.;as-a-registered-user,-i-want-to-tap-on-more-options-from-profile-screen-so-that-i-can-select-edit-option-to-edit-quickee-post.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@EditQuickee"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Tap on More options button and select Edit post option to Edit quickee post",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Add text/Description/image and tap on Save button to save quickee post",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 2362049923,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1076730771,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11111480290,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 33131572658,
  "status": "passed"
});
formatter.match({
  "location": "Edit_Quickee.SelectEdit()"
});
formatter.result({
  "duration": 108372096097,
  "status": "passed"
});
formatter.match({
  "location": "Edit_Quickee.SelectSave()"
});
formatter.result({
  "duration": 30789121178,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 41818606322,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14514553395,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 125065,
  "status": "passed"
});
formatter.after({
  "duration": 7868255,
  "status": "passed"
});
formatter.uri("CLike_Dislike_Comment.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing of Hitting Like, Dislike and adding Comment to the Quickee Post",
  "description": "",
  "id": "acceptance-testing-of-hitting-like,-dislike-and-adding-comment-to-the-quickee-post",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HitLike\u0026DislikeToQuickee"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "As a Registered User, i want to check the Like, Dislike and Comment button functionality",
  "description": "",
  "id": "acceptance-testing-of-hitting-like,-dislike-and-adding-comment-to-the-quickee-post;as-a-registered-user,-i-want-to-check-the-like,-dislike-and-comment-button-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Tap on Like/Dislike/Comment button to Like/Dislike/Add Comment a Quickee post",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 2151460571,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1036855074,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11143815536,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 34025488784,
  "status": "passed"
});
formatter.match({
  "location": "Like_Dislike_Comment_Quickee.Hitting_Like_Dislike()"
});
formatter.result({
  "duration": 90117666905,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 34872131445,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 16063508877,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 64953,
  "status": "passed"
});
formatter.after({
  "duration": 1390702,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "As a Registered User, i want to tap on AddToThisQuickeeButton so that User can give Rating to the Quickee Post",
  "description": "",
  "id": "acceptance-testing-of-hitting-like,-dislike-and-adding-comment-to-the-quickee-post;as-a-registered-user,-i-want-to-tap-on-addtothisquickeebutton-so-that-user-can-give-rating-to-the-quickee-post",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@AddToThisQuickee"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Tap on AddToThisQuickee button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Tap on StarRating Bar to give ratings and then tap on Post submit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 4037767101,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1045590728,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 10344154863,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 34588872103,
  "status": "passed"
});
formatter.match({
  "location": "AddToThisQuickee.TapOnAddButton()"
});
formatter.result({
  "duration": 56497927730,
  "status": "passed"
});
formatter.match({
  "location": "AddToThisQuickee.AddRating_Submitpost()"
});
formatter.result({
  "duration": 7519501597,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 31520767691,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14906646685,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 69230,
  "status": "passed"
});
formatter.after({
  "duration": 23689741,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "As a Registered User, i want to tap on Comment icon so that i can add comment to a Quickee Post.",
  "description": "",
  "id": "acceptance-testing-of-hitting-like,-dislike-and-adding-comment-to-the-quickee-post;as-a-registered-user,-i-want-to-tap-on-comment-icon-so-that-i-can-add-comment-to-a-quickee-post.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Add_Comment"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Tap on Comment button to Add Comment a Quickee post",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 2179742098,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1086973847,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 9811067512,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 35555439218,
  "status": "passed"
});
formatter.match({
  "location": "Add_Comment.addComment()"
});
formatter.result({
  "duration": 74693499394,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 40747456410,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14045423438,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 104453,
  "status": "passed"
});
formatter.after({
  "duration": 11054116,
  "status": "passed"
});
formatter.uri("DFavouriteAPost.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing of Favourites post, so that a User can able to Add Quickee Post to his/her favourite List",
  "description": "",
  "id": "acceptance-testing-of-favourites-post,-so-that-a-user-can-able-to-add-quickee-post-to-his/her-favourite-list",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AddPostToFavouriteList"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "As a Registered User, i want to select a quickee to Save as Favourite so that users can see selected post in Favourite list",
  "description": "",
  "id": "acceptance-testing-of-favourites-post,-so-that-a-user-can-able-to-add-quickee-post-to-his/her-favourite-list;as-a-registered-user,-i-want-to-select-a-quickee-to-save-as-favourite-so-that-users-can-see-selected-post-in-favourite-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Tap on More options button and select save option to favourite a quickee post",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Tap on love icon from Profile screen to view the list of all the Favourite\u0027s Post and then tap on back button to redirect again to profile screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 2021589002,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1027493755,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 10233296956,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 36663434261,
  "status": "passed"
});
formatter.match({
  "location": "FavouriteAQucikeePost.AddQuickeeToFavourite()"
});
formatter.result({
  "duration": 105375094757,
  "status": "passed"
});
formatter.match({
  "location": "FavouriteAQucikeePost.ViewFavouriteQuickeeList()"
});
formatter.result({
  "duration": 46893418452,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 33904698046,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 16814801991,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 76598,
  "status": "passed"
});
formatter.after({
  "duration": 360388,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "As a Registered User, i want to select Delete Quickee options so that User can delete his/her Quickee Post",
  "description": "",
  "id": "acceptance-testing-of-favourites-post,-so-that-a-user-can-able-to-add-quickee-post-to-his/her-favourite-list;as-a-registered-user,-i-want-to-select-delete-quickee-options-so-that-user-can-delete-his/her-quickee-post",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@DeleteQuickee"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Tap on More options button and select delete post option to delete a quickee post",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 3062064768,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1082684555,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 9878416432,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 35986596220,
  "status": "passed"
});
formatter.match({
  "location": "Delete_Quickee.DeleteQuickeePost()"
});
formatter.result({
  "duration": 106347751921,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 38718864509,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 16444006778,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 61538,
  "status": "passed"
});
formatter.after({
  "duration": 1230952,
  "status": "passed"
});
});