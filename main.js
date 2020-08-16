// Initialize Firebase (ADD YOUR OWN DATA)
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCX8vZs1c8rwOLyFn9xxrRNIXl9Y6rTE74",
    authDomain: "jpmc-e6d7c.firebaseapp.com",
    databaseURL: "https://jpmc-e6d7c.firebaseio.com",
    projectId: "jpmc-e6d7c",
    storageBucket: "jpmc-e6d7c.appspot.com",
    messagingSenderId: "841228246628",
    appId: "1:841228246628:web:130a59c1ddd8c170248971",
    measurementId: "G-HMXYWHQV0D"
  };
 
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('users');
    
 
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  

  function submitForm(e){
    e.preventDefault();
  
  
    var name = getInputVal('name');
    var age = getInputVal('age');
    var email = getInputVal('email');
    
    var phone = getInputVal('phone');
    var city = getInputVal('city')
    var gender = getInputVal('gender')
    var income =getInputVal('income')
    var message = getInputVal('message');


  

    saveMessage(name, age, email, phone,city,gender,income, message);
  
 
    document.querySelector('.alert').style.display = 'block';
  
    
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
   
    document.getElementById('contactForm').reset();
  }
  

  function getInputVal(id){
    return document.getElementById(id).value;
  }
  

  function saveMessage(name, age, email, phone,city,gender,income, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      age:age,
      email:email,
      
      phone:phone,
      city:city,
      gender: gender,
      income:income,
      message:message,

    });
  }