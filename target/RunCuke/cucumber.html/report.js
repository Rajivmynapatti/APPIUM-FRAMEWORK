$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DFavouriteAPost.feature");
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
  "duration": 46869198338,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.taponEmailAddress()"
});
formatter.result({
  "duration": 2398679401,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enterEmailAndPassword()"
});
formatter.result({
  "duration": 11299753605,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.goToProfile()"
});
formatter.result({
  "duration": 51945099795,
  "status": "passed"
});
formatter.match({
  "location": "NotificationLisitng.Notifications()"
});
formatter.result({
  "duration": 35594576801,
  "status": "passed"
});
formatter.match({
  "location": "NotificationLisitng.selectFromListing()"
});
formatter.result({
  "duration": 22043244969,
  "status": "passed"
});
formatter.after({
  "duration": 33052597048,
  "status": "passed"
});
});