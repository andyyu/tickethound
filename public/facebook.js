window.fbAsyncInit = function () {
    FB.init({
        appId: '1498164900501160', // App ID
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true  // parse XFBML
    });
    FB.api('/1459878957645198/feed?access_token=access_token', function(response) {
        for(var i = 0; i < response.data.length; i++) {
            $("#feed").append("\n" + response.data[i].message);
        }
    });
};

// Load the SDK Asynchronously
(function (d) {
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "https://connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));