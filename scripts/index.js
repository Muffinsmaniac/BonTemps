document.addEventListener("DOMContentLoaded", function(){ //Waiting for the DOM to load.

    let infoHTML = `
    <div id= infoDiv>
    <div id="leftContent">
        <img src="pictures//harvesting.jpg">
    </div>
    <section id="rightContent">
        <h2>Om Oss</h2>
        <p>"Bla bla bla bla bla bla bla bla bla"</p>
    </section></div>
    `;
    
    let mainHTML = `
    <div id= infoDiv>    
    <div id="leftContent">
        <img src="pictures/trialphoto.webp">
    </div>
    <section id="rightContent">
        <h2>TESTING</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </section></div>
    `;    

    document.getElementById("infoButton").addEventListener("click", function(){
        document.getElementById("mainDiv").innerHTML = infoHTML;       
    });
    
    document.getElementById("homeButton").addEventListener("click", function(){    
        document.getElementById("mainDiv").innerHTML = mainHTML;
    });

    document.getElementById("productsButton").addEventListener("click", function(){
        fetch("includes/fetch.php")
        .then(function(response){
            return response.text();
        }).then(function(htmlText) {
            console.log(htmlText);
            document.getElementById("mainDiv").innerHTML = `<h2>Produkter</h2>
            <div class="productGrid">${htmlText}</div>`;
        })       
        
    });

});