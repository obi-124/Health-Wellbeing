firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, show 
    var uid = user.uid;

    document.getElementById("login_div").style.display = "none";
    document.getElementById("register_div").style.display = "block";

        // ...
  } else {
    // User is signed out
    // ...

    document.getElementById("login_div").style.display = "block";
    document.getElementById("register_div").style.display = "none";
    
  }
});
function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

     window.alert("Error:    " + errorMessage);
     window.alert("Error:    " );
  });
 

  }