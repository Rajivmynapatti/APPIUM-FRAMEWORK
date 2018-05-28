$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BCreateQuickee.feature");
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
  "duration": 50414320360,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 1592619817,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11586416244,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_addnew_link_from_Latest_Quickees_Screen()"
});
formatter.result({
  "duration": 50170215538,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_Anonymously_icon_from_QuickeeTypeScreen()"
});
formatter.result({
  "duration": 6179466611,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.click_on_Next_button()"
});
formatter.result({
  "duration": 2215827204,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_navigate_to_Map_view_screen_and_select_any_one_Store()"
});
formatter.result({
  "duration": 30267976726,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.Add_Title_and_Description_to_that_selected_store_and_tap_on_Next_button()"
});
formatter.result({
  "duration": 13931779360,
  "status": "passed"
});
formatter.match({
  "location": "QuickeeWithImage.AddImage()"
});
formatter.result({
  "duration": 18606240105,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_get_the_preview_screen_and_tap_on_next_button()"
});
formatter.result({
  "duration": 6892705886,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_provide_rating_to_the_quickee()"
});
formatter.result({
  "duration": 3639950775,
  "status": "passed"
});
formatter.match({
  "location": "Create_Quickee.User_will_provide_Quickee_badge_and_then_tap_on_Post_quickee_button()"
});
formatter.result({
  "duration": 6679563226,
  "status": "passed"
});
formatter.after({
  "duration": 36497346387,
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
  "duration": 7209379424,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2171518368,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11274163624,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 49771556263,
  "status": "passed"
});
formatter.match({
  "location": "Edit_Quickee.SelectEdit()"
});
formatter.result({
  "duration": 32748289632,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: Locator map: \n- native content: \"By.id: ButtonMore0\" \n- html content: \"by id or name \"More_icon\"\"\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027ind126.local\u0027, ip: \u002710.2.6.73\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: unknown\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:110)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:57)\n\tat io.appium.java_client.ios.IOSElement$$EnhancerByCGLIB$$184e91dc.toString(\u003cgenerated\u003e)\n\tat java.lang.String.valueOf(String.java:2994)\n\tat java.lang.StringBuilder.append(StringBuilder.java:131)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.toString(ExpectedConditions.java:293)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:257)\n\tat com.quickee.screens.ProfileScreen.clickOnMoreOptions(ProfileScreen.java:67)\n\tat com.quickee.steps.Edit_Quickee.SelectEdit(Edit_Quickee.java:23)\n\tat ✽.And Tap on More options button and select Edit post option to Edit quickee post(BCreateQuickee.feature:72)\n",
  "status": "failed"
});
formatter.match({
  "location": "Edit_Quickee.SelectSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 34145382583,
  "status": "passed"
});
});