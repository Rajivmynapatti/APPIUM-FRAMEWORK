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
  "name": "As a Logged-out User I want to able to Login into the application so that i can check valid user details",
  "description": "",
  "id": "acceptance-testing-is-check-login-and-logout-functionality-is-working-fine;as-a-logged-out-user-i-want-to-able-to-login-into-the-application-so-that-i-can-check-valid-user-details",
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
  "duration": 175448177352,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 35737892529,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 97365266306,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 64835123341,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 33915066281,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 1537845,
  "status": "passed"
});
formatter.after({
  "duration": 17322167,
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
  "duration": 7969807189,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 40894510215,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 107563750857,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToSettings()"
});
formatter.result({
  "duration": 60861924884,
  "status": "passed"
});
formatter.match({
  "location": "UploadProfilePicture.selectProfilePictureWithGallery()"
});
formatter.result({
  "duration": 71527309051,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnlogoutTab()"
});
formatter.result({
  "duration": 31676231611,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLogout()"
});
formatter.result({
  "duration": 152646,
  "status": "passed"
});
formatter.after({
  "duration": 14399558,
  "status": "passed"
});
});