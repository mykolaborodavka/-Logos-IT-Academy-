var login=prompt("Enter Login"), password;

switch (login){
    case 'admin':
        password=prompt('Enter password');
        switch (password){
            case 'TheMaster':
                alert('Welkome');
                break;
            case 'Canceled':
                alert('Canceled');
                break;
            default:
                alert("Wrong password");    
                break;
        }
        break;
    case 'Canceled':
        alert('Canceled'); 
        break;
     default:
        alert("I don't know you");   
        break;
}
