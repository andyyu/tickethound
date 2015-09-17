$(document).on('ready', function() {
    FB.api(
    "/{1459878957645198}/feed",
    function (response) {
      if (response && !response.error) {
        window.alert(response);
      }
    }
    );
});