document.addEventListener("DOMContentLoaded", function(){ //Waiting for the DOM to load.

    let infoHTML = `
    <div id= infoDiv>
    <div id="leftContent">
        <h2>Om Oss</h2>
        <p>"Bla bla bla bla bla bla bla bla bla"</p>
        
    </div>
    <section id="rightContent">
        <img src="pictures//harvesting.jpg">
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

    document.getElementById("productsButton").addEventListener("click", async function(){
        document.getElementById("mainDiv").innerHTML = "<h2>Produkter</h2>";
        await fetchGoods(1,"Matbröd");
        await fetchGoods(3,"Viennoiserie"); 
        
    });    

    async function fetchGoods(goodsType, title){
        let response = await fetch("includes/fetch.php?type="+goodsType);  
        let htmlText = await response.text();
        console.log(htmlText)
        document.getElementById("mainDiv").insertAdjacentHTML("beforeend", `<h3>${title}</h3>
            <div class="productGrid">${htmlText}</div>`);       
    }
});