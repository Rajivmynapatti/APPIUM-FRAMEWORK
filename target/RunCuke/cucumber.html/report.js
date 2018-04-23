$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing is check Login and Logout functionality is working fine",
  "description": "In Order to check that\nthe Login Functionality is working fine\nwe will do the acceptance testing",
  "id": "acceptance-testing-is-check-login-and-logout-functionality-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFunctionality"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "As a User I want to able to Login with valid user details",
  "description": "",
  "id": "acceptance-testing-is-check-login-and-logout-functionality-is-working-fine;as-a-user-i-want-to-able-to-login-with-valid-user-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@LoginwithValidUser"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 45297299341,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 19120255832,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 57961969087,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 25337127899,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 20028119709,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 344921,
  "status": "passed"
});
formatter.uri("SelectProfilePicture.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing is check upload profile picture functioanlity is working fine",
  "description": "In Order to check that\nthe Upload profile picture Functionality is working fine\nwe will do the acceptance testing",
  "id": "acceptance-testing-is-check-upload-profile-picture-functioanlity-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ProfilePicture"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "As a User, I want to able to upload profile picture with use of Gallery section",
  "description": "",
  "id": "acceptance-testing-is-check-upload-profile-picture-functioanlity-is-working-fine;as-a-user,-i-want-to-able-to-upload-profile-picture-with-use-of-gallery-section",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@ProfilePicture-Gallery"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Click on Login link on Get Started Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Enter Email and Password and click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click on Profile link from Latest Quickees Screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Settings icon from profile Screen",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Upload Profile picture with the help of gallery section",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on LogOut tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be successfully LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.goToLoginScreen()"
});
formatter.result({
  "duration": 2675015410,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11601154066,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 41234928694,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 22092778857,
  "status": "passed"
});
formatter.match({
  "location": "UploadProfilePicture.selectProfilePictureWithGallery()"
});
formatter.result({
  "duration": 23012528481,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 16040871860,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 206592,
  "status": "passed"
});
});