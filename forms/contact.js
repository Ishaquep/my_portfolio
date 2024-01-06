function sendMail() {

    if((document.getElementById("name").value.length>0)&&(document.getElementById("email").value.length>0)&&(document.getElementById("email").value.includes("@"))&&(document.getElementById("message").value.length>0)){
      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
      };
      const serviceID = "service_owd6dzf";
      const templateID = "template_ipoemua";
    
   
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message send successfully..!"); 
        
      })
      .catch((err) => console.log(err));
    }
    else{
      alert("Please fill the field...")
    }
    }