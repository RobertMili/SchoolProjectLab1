let count = 0;
const counter = document.getElementById('counter');




function addToCart(event) {
    
        const cl = counter.classList;
        const c = 'animated-counter';
        count++;

        counter.innerText = count;
        cl.remove(c, cl.contains(c));
        setTimeout(() =>
        counter.classList.add('animated-counter')
        ,1)
    }



    document.addEventListener('DOMContentLoaded', function () {
        
        const nameLogin = localStorage.getItem('firstNameLogin');
        const printOut = document.querySelector("#printOutWelcome");

        if (nameLogin) {
            console.log("Retrieved username", nameLogin);
            printOut.textContent = "Welcome: " + nameLogin;
        } else {
            console.log("Username not found in localStorage");
        }
    });


