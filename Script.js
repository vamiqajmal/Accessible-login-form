const form= document.querySelector('form');
  
form.addEventListener('submit', function (e){
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    if(email === "" || password === ""){
        alert("All fields are required!");
        e.preventDefault();
     }
     else if(!email.includes("@")){
            alert("Enter a valid email!");
            e.preventDefault();

    }
});
