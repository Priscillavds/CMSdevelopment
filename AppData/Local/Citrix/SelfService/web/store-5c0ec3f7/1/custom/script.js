//$(document).ready(function() {
	$("#customBottom").html("<center><iframe src=\"https://messages.ap.be/\" frameborder=\"0\" width=\"600px\" name=\"ap-messages\"></center>");
	
	$.ajax({
        url: "contrib/GetServerName.aspx",
        success: function(data) {
			$("#customTop").html(data);
		}
   });
// });











// Edit this file to add your customized JavaScript or load additional JavaScript files.

/* Example customization - Show a click through screen on web and native */

/*
var doneClickThrough = false;

// Before web login
CTXS.Extensions.beforeLogon = function (callback) {
    doneClickThrough = true;
    CTXS.ExtensionAPI.showMessage({
        messageTitle: "Welcome!",
        messageText: "Only for WWCo Employees",
        okButtonText: "Accept",
        okAction: callback
    });
};

// Before main screen (both web and native)
CTXS.Extensions.beforeDisplayHomeScreen = function (callback) {
    if (!doneClickThrough) {
        CTXS.ExtensionAPI.showMessage({
            messageTitle: "Welcome!",
            messageText: "Only for WWCo Employees",
            okButtonText: "Accept",
            okAction: callback
        });
    } else {
        callback();
    }
}; */

/* End of example customization */
