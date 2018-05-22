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
  "duration": 22130910635,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1354062240,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11659633122,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 45483700680,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 34672409233,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14623103719,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 92880,
  "status": "passed"
});
formatter.after({
  "duration": 826164,
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
  "duration": 2183898956,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1059478454,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.TapOnSignInbutton()"
});
formatter.result({
  "duration": 5110510937,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.EnterInvalidCredentials()"
});
formatter.result({
  "duration": 10720175583,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.SwitchAlertAndGetText()"
});
formatter.result({
  "duration": 5304081127,
  "status": "passed"
});
formatter.after({
  "duration": 362856,
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
  "duration": 2284666141,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1119512171,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 10553034275,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_addnew_link_from_Latest_Quickees_Screen()"
});
formatter.result({
  "duration": 33909026993,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_Anonymously_icon_from_QuickeeTypeScreen()"
});
formatter.result({
  "duration": 5548024938,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_Next_button()"
});
formatter.result({
  "duration": 1899282649,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_navigate_to_Map_view_screen_and_select_any_one_Store()"
});
formatter.result({
  "duration": 31484196951,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.Add_Title_and_Description_to_that_selected_store_and_tap_on_Next_button()"
});
formatter.result({
  "duration": 14539310813,
  "status": "passed"
});
formatter.match({
  "location": "QuickeeWithImage.AddImage()"
});
formatter.result({
  "duration": 20235295157,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_get_the_preview_screen_and_tap_on_next_button()"
});
formatter.result({
  "duration": 6537211768,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_provide_rating_to_the_quickee()"
});
formatter.result({
  "duration": 3089738978,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_provide_Quickee_badge_and_then_tap_on_Post_quickee_button()"
});
formatter.result({
  "duration": 6832248905,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 45265671109,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 35891627604,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14076610233,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 89140,
  "status": "passed"
});
formatter.after({
  "duration": 1009473,
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
  "duration": 2854214659,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1072054414,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 9951380904,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 34363840218,
  "status": "passed"
});
formatter.match({
  "location": "Edit_Quickee.SelectEdit()"
});
formatter.result({
  "duration": 69575624793,
  "status": "passed"
});
formatter.match({
  "location": "Edit_Quickee.SelectSave()"
});
formatter.result({
  "duration": 32855833859,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 38241374221,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 16317771016,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 90871,
  "status": "passed"
});
formatter.after({
  "duration": 521927,
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
  "duration": 3429508164,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1148976592,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 10094064874,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 34341029452,
  "status": "passed"
});
formatter.match({
  "location": "Like_Dislike_Comment_Quickee.Hitting_Like_Dislike()"
});
formatter.result({
  "duration": 87242812596,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 31956869752,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 17269064379,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 74371,
  "status": "passed"
});
formatter.after({
  "duration": 4748544,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "As a Registered User, i want to tap on Comment icon so that i can add comment to a Quickee Post.",
  "description": "",
  "id": "acceptance-testing-of-hitting-like,-dislike-and-adding-comment-to-the-quickee-post;as-a-registered-user,-i-want-to-tap-on-comment-icon-so-that-i-can-add-comment-to-a-quickee-post.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Add_Comment"
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
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Tap on Comment button to Add Comment a Quickee post",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 2133530952,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1125396519,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 10161472302,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 32809355067,
  "status": "passed"
});
formatter.match({
  "location": "Add_Comment.addComment()"
});
formatter.result({
  "duration": 71494813803,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 38123294333,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14000437011,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 107921,
  "status": "passed"
});
formatter.after({
  "duration": 1344281,
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
  "duration": 2100476469,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1059875195,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 12720127738,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 35057068044,
  "status": "passed"
});
formatter.match({
  "location": "FavouriteAQucikeePost.AddQuickeeToFavourite()"
});
formatter.result({
  "duration": 69843257127,
  "status": "passed"
});
formatter.match({
  "location": "FavouriteAQucikeePost.ViewFavouriteQuickeeList()"
});
formatter.result({
  "duration": 46550712856,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 32736675867,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14547311598,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 90757,
  "status": "passed"
});
formatter.after({
  "duration": 22526042,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As a Registered User, i want to select Delete Quickee options so that i can delete my Quickee",
  "description": "",
  "id": "acceptance-testing-of-favourites-post,-so-that-a-user-can-able-to-add-quickee-post-to-his/her-favourite-list;as-a-registered-user,-i-want-to-select-delete-quickee-options-so-that-i-can-delete-my-quickee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@DeleteQuickee"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Tap on More options button and select delete post option to delete a quickee post",
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
  "duration": 2726451168,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1095376364,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 10049835703,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 34253550264,
  "status": "passed"
});
formatter.match({
  "location": "Delete_Quickee.DeleteQuickeePost()"
});
formatter.result({
  "duration": 70577662311,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 39057009339,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 14121941619,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 93772,
  "status": "passed"
});
formatter.after({
  "duration": 1443557,
  "status": "passed"
});
});