var loggedIn = false;
var username = 'testuser';
console.log('loaded user.js and logged in = ' + loggedIn);

var logIn = function() {
  loggedIn = true;
  console.log("logged in!");
  var elem = document.getElementById('userinfo');
  elem.innerHTML = 'Logged in as <a href="#">' + username + '</a>'
}
