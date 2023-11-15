document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. You can start your app logic here.

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    var devicereadyElement = document.getElementById('deviceready');
    devicereadyElement.textContent = 'Cordova is ready!';
     
}

function submitForm(){
    const username= document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if(username==="Jaivant" && password==="helloworld") {
        document.getElementById("login-message").innerHTML="Submit successfull";
        console.log("success");
    }
    else{
        document.getElementById("login-message").innerHTML="Submit failed";
        console.log("failure")
    }
}

function resetForm(){
    const username= document.getElementById("username").value="";
    const password = document.getElementById("password").value="";
    document.getElementById("login-message").innerHTML="Reset done";
}

function onSuccess(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function getGeo(){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}