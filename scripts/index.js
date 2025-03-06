document.addEventListener("DOMContentLoaded", function(){ //Waiting for the DOM to load.

    let infoHTML = `<h2>Om oss</h2>
    <p>"Vi är fransmän och vi gillar bröd!"</p>`;
    
    let mainHTML = `<h2>TESTING</h2>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum."</p>`;

    document.getElementById("textDiv").innerHTML = mainHTML;
    document.getElementById("picDiv").innerHTML = "<img src='pictures/trialphoto.webp'>";

    document.getElementById("info").addEventListener("click", function(){    
        document.getElementById("textDiv").innerHTML = infoHTML;
        document.getElementById("picDiv").innerHTML = "<img src='pictures/harvesting.jpg'>";
    });
    
    document.getElementById("home").addEventListener("click", function(){    
        document.getElementById("textDiv").innerHTML = mainHTML;
        document.getElementById("picDiv").innerHTML = "<img src='pictures/trialphoto.webp'>";
    });



});