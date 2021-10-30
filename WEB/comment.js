const firebaseConfig = {
    apiKey: "AIzaSyB24cuKJCK8LYS2JbNdP2ms_H7STgZ_5S8",
    authDomain: "comment-9f0fa.firebaseapp.com",
    projectId: "comment-9f0fa",
    storageBucket: "comment-9f0fa.appspot.com",
    messagingSenderId: "492789673714",
    appId: "1:492789673714:web:5add4eb39c609de72caa6b",
    measurementId: "G-W197M4F7C6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var database = firebase.database();

  function sendmessage() {
      var name = document.getElementById("name").value;
      var meassage = document.getElementById("message").value;

      var newmessagekey = database.ref().child('comments').push().key;
      database.ref('comments'/+newmessagekey+'name').set(name)
      database.ref('comments'/+newmessagekey+'message').set(message)
  }
  
function submitform(e) {
    e.preventDefault();
}
document.querySelector('alert').getElementsByClassName.display = 'block';
function hidealert() {
    document.querySelector('alert').getElementsByClassName.display ='none';
}
setTimeout(hidealert,3000);

document.getElementById('contact').addEventListener('submit', submitform);