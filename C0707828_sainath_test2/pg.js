var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        document.getElementById("btnweather").addEventListener("click",getweather);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function getweather(){
if(navigator.geolocation)
{

    navigator. geolocation.getCurrentPosition(function(position)
    {
        $("#geoLoc").html("latitude:"+position.coords.latitude + "<br>longitude:"+position.coords.longitude);

        var lat=position.coords.latitude;
        var lon=position.coords.longitude;
        var weatherURL="http://api.openweathermap.org/data/2.5/weather? lat="+lat+"&lon ="+lon+" &APPID=aa4ed1d8179ed086885846f358b66fa1";
        $.getJSON(weatherURL).done(function(data)
        {
            $("#currTemp").html("current temp:"+ data.main.temp);

        });},
                          function(er)
                          {
                            alert(er.message);

                          });

    }
}