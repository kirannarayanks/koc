// Your web app's Firebase configuration
(function() {
var firebaseConfig = {
    apiKey: "AIzaSyDIRyOtA71ZlZE_gmF7y5ZwcqJTdCdwegc",
    authDomain: "vyakochi.firebaseapp.com",
    databaseURL: "https://vyakochi.firebaseio.com",
    projectId: "vyakochi",
    storageBucket: "vyakochi.appspot.com",
    messagingSenderId: "392741758753",
    appId: "1:392741758753:web:4c3469b5e0fef21ed08060",
    measurementId: "G-717SNBHDLG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //get elements

  const txtemail = document.getElementById('txtemail');
  const txtpass = document.getElementById('txtpass');
  const btnlogin = document.getElementById('btnlogin');
  const btnlogout = document.getElementById('btnlogout');

  //add login event

  btnlogin.addEventListener('click', e => {

    const email = txtemail.value;
    const pass = txtpass.value;
    const auth = firebase.auth();
    //signin
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch( e =>console.log(e.message))

  
});

btnlogout.addEventListener('click', e =>{
    firebase.auth().signOut();
})

firebase.auth().onAuthStateChanged(firebaseUser => {

    if(firebaseUser){
        //console.log('firebaseuser')
        window.alert('logged in');
        //location.href = 'login.html';
    }
    else{
        console.log('not an user');
       // location.href = 'index.html';
        //window.alert('not an user')
    }

});


}());
