var login=prompt('Enter Login'), password;

if(login=='admin'){
    password=prompt('Enter password');
    if(password=='TheMaster'){
        alert('Welkome!')
    }else if (password=='Canceled'){
        alert('Canceled.');
    }else{
        alert('Wrong password');
    }
    
}else if(login=='Canceled'){
    alert('Canceled');   
}else{
    alert("I don't know you");
}