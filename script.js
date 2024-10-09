
// Side Navbar
let sidenav=document.querySelector(".side-nav")


function showNavbar(){
    sidenav.style.left="0"
}

function closeNavbar(){
    sidenav.style.left="-70%"
}

// Form validation



const handleSubmit=()=>{
    let FirstName=document.getElementById("first_name").value;
    let LastName=document.getElementById("last_name").value;
    let Email=document.getElementById("email").value;
    let Password=document.getElementById("password").value;
    let PhoneNumber=document.getElementById("phone_number").value;

    const newData={
        FirstName:FirstName,
        LastName:LastName,
        PhoneNumber:PhoneNumber,
        Email:Email,
        Password:Password
    }

    console.log(newData)

    document.getElementById("first_name").value='';
    document.getElementById("last_name").value='';
    document.getElementById("email").value='';
    document.getElementById("password").value='';
    document.getElementById("phone_number").value='';

}
