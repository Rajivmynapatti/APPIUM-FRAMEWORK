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
  "duration": 182445265044,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2264171611,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.TapOnSignInbutton()"
});
formatter.result({
  "duration": 8850834092,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.EnterInvalidCredentials()"
});
formatter.result({
  "duration": 40309688621,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.SwitchAlertAndGetText()"
});
formatter.result({
  "duration": 5004276684,
  "status": "passed"
});
formatter.after({
  "duration": 42305164128,
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
  "duration": 16019965002,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2508458527,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 21869718723,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 107565191790,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 104457927170,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 32873182803,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 162452,
  "status": "passed"
});
formatter.after({
  "duration": 40977623587,
  "status": "passed"
});
formatter.uri("BCreateQuickee.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing of Quickee Post by Creating, Editing a post.",
  "description": "",
  "id": "acceptance-testing-of-quickee-post-by-creating,-editing-a-post.",
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
  "id": "acceptance-testing-of-quickee-post-by-creating,-editing-a-post.;as-a-registered-user,-i-want-to-tap-on-add-new-icon-so-that-i-can-create-a-quickee-post-with-image",
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
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 11319571979,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1681295289,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 19823149717,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_addnew_link_from_Latest_Quickees_Screen()"
});
formatter.result({
  "duration": 101117894135,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_Anonymously_icon_from_QuickeeTypeScreen()"
});
formatter.result({
  "duration": 6172602359,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_Next_button()"
});
formatter.result({
  "duration": 3693002614,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_navigate_to_Map_view_screen_and_select_any_one_Store()"
});
formatter.result({
  "duration": 50085830834,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.Add_Title_and_Description_to_that_selected_store_and_tap_on_Next_button()"
});
formatter.result({
  "duration": 34476399539,
  "status": "passed"
});
formatter.match({
  "location": "QuickeeWithImage.AddImage()"
});
formatter.result({
  "duration": 47990755126,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_get_the_preview_screen_and_tap_on_next_button()"
});
formatter.result({
  "duration": 10863377613,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_provide_rating_to_the_quickee()"
});
formatter.result({
  "duration": 5518691378,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_provide_Quickee_badge_and_then_tap_on_Post_quickee_button()"
});
formatter.result({
  "duration": 12652106308,
  "status": "passed"
});
formatter.after({
  "duration": 44104570767,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 39,
      "value": "#  And Click on Profile link from Latest Quickees Screen"
    },
    {
      "line": 40,
      "value": "# And Click on Settings icon from profile Screen"
    },
    {
      "line": 41,
      "value": "# And Click on LogOut tab"
    },
    {
      "line": 42,
      "value": "# Then User should be successfully LogOut"
    },
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
  "id": "acceptance-testing-of-quickee-post-by-creating,-editing-a-post.;as-a-registered-user,-i-want-to-tap-on-more-options-from-profile-screen-so-that-i-can-select-edit-option-to-edit-quickee-post.",
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
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 17334199743,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2881982206,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 32029845825,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 17295619045,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: Locator map: \n- native content: \"By.xpath: (//XCUIElementTypeOther[@name\u003d\"TabBarItem_AccessibilityLabel\"])[4]\" \n- html content: \"by id or name \"profile\"\"\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027ind126.local\u0027, ip: \u002710.2.6.73\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: SharedDriver\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:110)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:57)\n\tat io.appium.java_client.ios.IOSElement$$EnhancerByCGLIB$$184e91dc.toString(\u003cgenerated\u003e)\n\tat java.lang.String.valueOf(String.java:2994)\n\tat java.lang.StringBuilder.append(StringBuilder.java:131)\n\tat com.quickee.driver.SharedDriver.waitUntilClickable(SharedDriver.java:163)\n\tat com.quickee.driver.SharedDriver.click(SharedDriver.java:79)\n\tat com.quickee.screens.LatestQuickeesScreen.clickProfileTab(LatestQuickeesScreen.java:52)\n\tat com.quickee.steps.LoginSteps.goToProfile(LoginSteps.java:54)\n\tat ✽.And Click on Profile link from Latest Quickees Screen(BCreateQuickee.feature:71)\n",
  "status": "failed"
});
formatter.match({
  "location": "Edit_Quickee.SelectEdit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Edit_Quickee.SelectSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 45759732548,
  "status": "passed"
});
formatter.uri("CLike_Dislike_Comment.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing of Hitting Like, Dislike, Giving ratings to Quickee post and adding Comment to the Quickee Post",
  "description": "",
  "id": "acceptance-testing-of-hitting-like,-dislike,-giving-ratings-to-quickee-post-and-adding-comment-to-the-quickee-post",
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
  "id": "acceptance-testing-of-hitting-like,-dislike,-giving-ratings-to-quickee-post-and-adding-comment-to-the-quickee-post;as-a-registered-user,-i-want-to-check-the-like,-dislike-and-comment-button-functionality",
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
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 14405126231,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2232749082,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 23771566883,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 103449606674,
  "status": "passed"
});
formatter.match({
  "location": "Like_Dislike_Comment_Quickee.Hitting_Like_Dislike()"
});
formatter.result({
  "duration": 190179464230,
  "status": "passed"
});
formatter.after({
  "duration": 42323535358,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "# And Click on Settings icon from profile Screen"
    },
    {
      "line": 11,
      "value": "# And Click on LogOut tab"
    },
    {
      "line": 12,
      "value": "# Then User should be successfully LogOut"
    }
  ],
  "line": 15,
  "name": "As a Registered User, i want to tap on AddToThisQuickeeButton so that User can give Rating to the Quickee Post",
  "description": "",
  "id": "acceptance-testing-of-hitting-like,-dislike,-giving-ratings-to-quickee-post-and-adding-comment-to-the-quickee-post;as-a-registered-user,-i-want-to-tap-on-addtothisquickeebutton-so-that-user-can-give-rating-to-the-quickee-post",
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
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 14206784781,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 4027477223,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 24119787804,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 103814939258,
  "status": "passed"
});
formatter.match({
  "location": "AddToThisQuickee.TapOnAddButton()"
});
formatter.result({
  "duration": 107190518393,
  "status": "passed"
});
formatter.match({
  "location": "AddToThisQuickee.AddRating_Submitpost()"
});
formatter.result({
  "duration": 21534240485,
  "status": "passed"
});
formatter.after({
  "duration": 38997367229,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 23,
      "value": "# And Click on Settings icon from profile Screen"
    },
    {
      "line": 24,
      "value": "# And Click on LogOut tab"
    },
    {
      "line": 25,
      "value": "# Then User should be successfully LogOut"
    }
  ],
  "line": 28,
  "name": "As a Registered User, i want to tap on Comment icon so that i can add comment to a Quickee Post.",
  "description": "",
  "id": "acceptance-testing-of-hitting-like,-dislike,-giving-ratings-to-quickee-post-and-adding-comment-to-the-quickee-post;as-a-registered-user,-i-want-to-tap-on-comment-icon-so-that-i-can-add-comment-to-a-quickee-post.",
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
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 16774718456,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 3432324500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 25704544871,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 91083557844,
  "status": "passed"
});
formatter.match({
  "location": "Add_Comment.addComment()"
});
formatter.result({
  "duration": 142136323964,
  "status": "passed"
});
formatter.after({
  "duration": 38258747735,
  "status": "passed"
});
formatter.uri("DFavouriteAPost.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing of Favourites post, so that a User can able to Add Quickee Post to his/her favourite List, Deleting of a Quickee Post and Viewing of Notification listing.",
  "description": "",
  "id": "acceptance-testing-of-favourites-post,-so-that-a-user-can-able-to-add-quickee-post-to-his/her-favourite-list,-deleting-of-a-quickee-post-and-viewing-of-notification-listing.",
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
  "id": "acceptance-testing-of-favourites-post,-so-that-a-user-can-able-to-add-quickee-post-to-his/her-favourite-list,-deleting-of-a-quickee-post-and-viewing-of-notification-listing.;as-a-registered-user,-i-want-to-select-a-quickee-to-save-as-favourite-so-that-users-can-see-selected-post-in-favourite-list",
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
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 15337533523,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1901218524,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 19355639306,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 93973146485,
  "status": "passed"
});
formatter.match({
  "location": "FavouriteAQucikeePost.AddQuickeeToFavourite()"
});
formatter.result({
  "duration": 47381235179,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 30 seconds waiting for visibility of [[IOSDriver:  on MAC (df5c2588-a386-438b-ac38-78e063e65986)] -\u003e id: ButtonMore0]\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027ind126.local\u0027, ip: \u002710.2.6.73\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities [{app\u003d/Users/indianic/Documents/workspace/Quickee_Appium_Framework/App/Quickee.app, networkConnectionEnabled\u003dfalse, --session-override\u003dtrue, databaseEnabled\u003dfalse, deviceName\u003diPhone 6, platform\u003dMAC, newCommandTimeout\u003d120, platformVersion\u003d10.2, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, automationName\u003dAppium, browserName\u003d, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003diOS, udid\u003dF6D07A27-D000-4DA6-A3BF-71B1D8288CE5}]\nSession ID: df5c2588-a386-438b-ac38-78e063e65986\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:261)\n\tat com.quickee.screens.ProfileScreen.clickOnMoreOptions(ProfileScreen.java:67)\n\tat com.quickee.steps.FavouriteAQucikeePost.AddQuickeeToFavourite(FavouriteAQucikeePost.java:23)\n\tat ✽.And Tap on More options button and select save option to favourite a quickee post(DFavouriteAPost.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "FavouriteAQucikeePost.ViewFavouriteQuickeeList()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 119720467268,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "# And Click on Settings icon from profile Screen"
    },
    {
      "line": 12,
      "value": "# And Click on LogOut tab"
    },
    {
      "line": 13,
      "value": "# Then User should be successfully LogOut"
    }
  ],
  "line": 18,
  "name": "As a Registered User, i want to select Delete Quickee options so that User can delete his/her Quickee Post",
  "description": "",
  "id": "acceptance-testing-of-favourites-post,-so-that-a-user-can-able-to-add-quickee-post-to-his/her-favourite-list,-deleting-of-a-quickee-post-and-viewing-of-notification-listing.;as-a-registered-user,-i-want-to-select-delete-quickee-options-so-that-user-can-delete-his/her-quickee-post",
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
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 14917299993,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2287011060,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 23471412091,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 70177013957,
  "status": "passed"
});
formatter.match({
  "location": "Delete_Quickee.DeleteQuickeePost()"
});
formatter.result({
  "duration": 53292224797,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy. Proxy error: Could not proxy command to remote server. Original error: Error: socket hang up (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 25.23 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027ind126.local\u0027, ip: \u002710.2.6.73\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities [{app\u003d/Users/indianic/Documents/workspace/Quickee_Appium_Framework/App/Quickee.app, networkConnectionEnabled\u003dfalse, --session-override\u003dtrue, databaseEnabled\u003dfalse, deviceName\u003diPhone 6, platform\u003dMAC, newCommandTimeout\u003d120, platformVersion\u003d10.2, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, automationName\u003dAppium, browserName\u003d, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003diOS, udid\u003dF6D07A27-D000-4DA6-A3BF-71B1D8288CE5}]\nSession ID: df5c2588-a386-438b-ac38-78e063e65986\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:40)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:33)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.ios.IOSElement.execute(IOSElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:368)\n\tat sun.reflect.GeneratedMethodAccessor21.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.appium.java_client.pagefactory.ElementInterceptor.getObject(ElementInterceptor.java:39)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:58)\n\tat io.appium.java_client.ios.IOSElement$$EnhancerByCGLIB$$184e91dc.isDisplayed(\u003cgenerated\u003e)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:41)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\n\tat com.quickee.screens.ProfileScreen.clickOnMoreOptions(ProfileScreen.java:67)\n\tat com.quickee.steps.Delete_Quickee.DeleteQuickeePost(Delete_Quickee.java:13)\n\tat ✽.And Tap on More options button and select delete post option to delete a quickee post(DFavouriteAPost.feature:24)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 117708933723,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "# And Click on Settings icon from profile Screen"
    },
    {
      "line": 26,
      "value": "# And Click on LogOut tab"
    },
    {
      "line": 27,
      "value": "# Then User should be successfully LogOut"
    }
  ],
  "line": 30,
  "name": "As a Registered User, i want to tap on Notification icon, so that i can able to see Notification listing.",
  "description": "",
  "id": "acceptance-testing-of-favourites-post,-so-that-a-user-can-able-to-add-quickee-post-to-his/her-favourite-list,-deleting-of-a-quickee-post-and-viewing-of-notification-listing.;as-a-registered-user,-i-want-to-tap-on-notification-icon,-so-that-i-can-able-to-see-notification-listing.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Notifications"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Tap on EmailAddress button on Welcome Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on Notification icon",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Select any one Notification from User\u0027s Notification listing",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 12350764704,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1992250252,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 18470378160,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 58519036124,
  "status": "passed"
});
formatter.match({
  "location": "NotificationLisitng.Notifications()"
});
formatter.result({
  "duration": 63315640909,
  "status": "passed"
});
formatter.match({
  "location": "NotificationLisitng.selectFromListing()"
});
formatter.result({
  "duration": 30249487866,
  "status": "passed"
});
formatter.after({
  "duration": 41102312139,
  "status": "passed"
});
});