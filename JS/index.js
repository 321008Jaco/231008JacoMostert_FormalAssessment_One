document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("accountForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var checkbox = document.getElementById("exampleCheck1");
  
      if (checkbox.checked) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var contact = document.getElementById("contact").value;
        var options = document.getElementById("options").value;
  
        var message = "Welcome " + name + "! Thank you for your interest in " + options + "!"
          + " We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + contact + ".";
        alert(message);
      } else {
        var name = document.getElementById("name").value;
  
        var message = "Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested, " + name + "!"
          + " If you want to sign up, you better CHECK that newsletter box!";
        alert(message);
      }
  
      var email = document.getElementById("email").value;
      var contact = document.getElementById("contact").value;
      var options = document.getElementById("options").value;
      var password = document.getElementById("password").value;
  
      console.log("Email: " + email);
      console.log("Contact: " + contact);
      console.log("Options: " + options);
      console.log("Password: " + password);
  
      form.reset();
    });
  });