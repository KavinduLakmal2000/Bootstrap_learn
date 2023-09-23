
    document.addEventListener('DOMContentLoaded', function () {
        const options = {
            strings: ['Uncover the beauty of Sri Lanka with us...'],
            typeSpeed: 50, 
            startDelay: 500, 
            showCursor: true, 
            cursorChar: '|', 
        };

        const typed = new Typed('#typed-title', options);
    });

    // ----------------------------- calling register form ----------------------------

    document.getElementById("regi").addEventListener("click", function () {
        window.location.href = "register.html";
    });

    // ----------------------------- calling login form ---------------------------------

    document.getElementById("log").addEventListener("click", function () {
        window.location.href = "login.html";
    });

    //----------------------------login validation -----------------------------------

    function validateForm() {
            var username = document.getElementById("uname").value;
            var password = document.getElementById("pass").value;

            if (username === "" || password === "") {
                alert("Both fields must be filled out.");
                return false; 
            }

            else if (username === "Shakila" && password === "1234"){
                alert("Welcome To The Travel Lanka");
                window.location.href = "home.html";
                return false;
                
            }

            else{
                alert("Check details and try again!");
                return false;

            }
            return true; 
        }
    
    
    //-------------------------------------- register----------------------------------------

    function register() {
       
            alert("Register Completed! Now you can Sign In");
            window.location.href = "index.html";
            return false; 
    }


        // ----------------------------------- smooth scrolling -----------------------------


        function Home() {
            
            const section = document.getElementById('home');

            section.scrollIntoView({
                behavior: 'smooth'
            });
        }

        function Section1() {
            
            const section = document.getElementById('section1');

            section.scrollIntoView({
                behavior: 'smooth'
            });
        }

        function Section2() {
            
            const section = document.getElementById('section2');

            section.scrollIntoView({
                behavior: 'smooth'
            });
        }

        function Section3() {
            
            const section = document.getElementById('section3');

            section.scrollIntoView({
                behavior: 'smooth'
            });
        }