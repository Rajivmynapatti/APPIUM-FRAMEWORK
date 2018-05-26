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
  "line": 5,
  "name": "As a Registered User i want to check the login functionality by giving an invalid user Credentails.",
  "description": "",
  "id": "acceptance-testing-for-login-functionality-with-both-valid-and-invalid-user-credentials.;as-a-registered-user-i-want-to-check-the-login-functionality-by-giving-an-invalid-user-credentails.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@LoginwithInvalidUser"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Tap on SignIn button and get the Text of the alert",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter both Invalid Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Get the alert text and tap on Ok button to accept the alert",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 98760627250,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1487563517,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.TapOnSignInbutton()"
});
formatter.result({
  "duration": 5319187626,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.EnterInvalidCredentials()"
});
formatter.result({
  "duration": 11887635158,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.SwitchAlertAndGetText()"
});
formatter.result({
  "duration": 5953604346,
  "status": "passed"
});
formatter.after({
  "duration": 81744374491,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "As a Registered User I want to able to Login into the application so that i can check valid user details",
  "description": "",
  "id": "acceptance-testing-for-login-functionality-with-both-valid-and-invalid-user-credentials.;as-a-registered-user-i-want-to-able-to-login-into-the-application-so-that-i-can-check-valid-user-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@LoginwithValidUser"
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
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 10282083273,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2300862517,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 15189445976,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 61271778055,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 36476384263,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14682738674,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 164570,
  "status": "passed"
});
formatter.after({
  "duration": 65993654555,
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
  "duration": 7628641021,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1593540544,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11258245169,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_addnew_link_from_Latest_Quickees_Screen()"
});
formatter.result({
  "duration": 52734206395,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_Anonymously_icon_from_QuickeeTypeScreen()"
});
formatter.result({
  "duration": 6028791041,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_Next_button()"
});
formatter.result({
  "duration": 2022308741,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_navigate_to_Map_view_screen_and_select_any_one_Store()"
});
formatter.result({
  "duration": 23911946031,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.Add_Title_and_Description_to_that_selected_store_and_tap_on_Next_button()"
});
formatter.result({
  "duration": 14447627989,
  "status": "passed"
});
formatter.match({
  "location": "QuickeeWithImage.AddImage()"
});
formatter.result({
  "duration": 18752054110,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_get_the_preview_screen_and_tap_on_next_button()"
});
formatter.result({
  "duration": 5384110182,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_provide_rating_to_the_quickee()"
});
formatter.result({
  "duration": 2873507254,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_provide_Quickee_badge_and_then_tap_on_Post_quickee_button()"
});
formatter.result({
  "duration": 5988127336,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 63725103974,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 36156397081,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 16319886566,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 85278,
  "status": "passed"
});
formatter.after({
  "duration": 37421990272,
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
  "duration": 7387806153,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2108848841,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 15242842828,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 52800092109,
  "status": "passed"
});
formatter.match({
  "location": "Edit_Quickee.SelectEdit()"
});
formatter.result({
  "duration": 80615161923,
  "status": "passed"
});
formatter.match({
  "location": "Edit_Quickee.SelectSave()"
});
formatter.result({
  "duration": 36220305283,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 38258510234,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 16469873995,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 90919,
  "status": "passed"
});
formatter.after({
  "duration": 36051768317,
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
  "duration": 7958195136,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2032786289,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 10598612220,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 51049377539,
  "status": "passed"
});
formatter.match({
  "location": "Like_Dislike_Comment_Quickee.Hitting_Like_Dislike()"
});
formatter.result({
  "duration": 90648739512,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 35341582050,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 16175373026,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 105328,
  "status": "passed"
});
formatter.after({
  "duration": 35668990111,
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
  "duration": 8592339544,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1541500245,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 10908000742,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 51573188147,
  "status": "passed"
});
formatter.match({
  "location": "AddToThisQuickee.TapOnAddButton()"
});
formatter.result({
  "duration": 50529517973,
  "status": "passed"
});
formatter.match({
  "location": "AddToThisQuickee.AddRating_Submitpost()"
});
formatter.result({
  "duration": 9898531296,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 33275992156,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 16069552945,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 68996,
  "status": "passed"
});
formatter.after({
  "duration": 32796112099,
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
  "duration": 8010082641,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1521678016,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11519024645,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 37876452848,
  "status": "passed"
});
formatter.match({
  "location": "Add_Comment.addComment()"
});
formatter.result({
  "duration": 74873568199,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 39482103253,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 17477520797,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 93644,
  "status": "passed"
});
formatter.after({
  "duration": 43786715737,
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
  "duration": 8303864363,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1573298583,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11078065574,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 50883942994,
  "status": "passed"
});
formatter.match({
  "location": "FavouriteAQucikeePost.AddQuickeeToFavourite()"
});
formatter.result({
  "duration": 80009190151,
  "status": "passed"
});
formatter.match({
  "location": "FavouriteAQucikeePost.ViewFavouriteQuickeeList()"
});
formatter.result({
  "duration": 50576633214,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 33497160104,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 17128773827,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 74611,
  "status": "passed"
});
formatter.after({
  "duration": 35633238809,
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
  "duration": 7602892780,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2679336977,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 12268430825,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 50647820960,
  "status": "passed"
});
formatter.match({
  "location": "Delete_Quickee.DeleteQuickeePost()"
});
formatter.result({
  "duration": 80164634743,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 39273446719,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 16686081471,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 199021,
  "status": "passed"
});
formatter.after({
  "duration": 33280395708,
  "status": "passed"
});
});