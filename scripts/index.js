document.addEventListener("DOMContentLoaded", function(){ //Waiting for the DOM to load.  
    
    let infoHTML = `
    <div class= infoDiv>
    <section class="leftContent">
        <h2>Om Oss</h2>
        <p>Bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla
        Bla bla bla bla bla bla bla bla blaBla bla bla bla bla bla bla bla blaBla bla bla bla bla bla bla bla bla</p>        
    </section>
    <section class="rightContent">
        <img src="pictures/team.jpeg">
    </section></div>
    `;
    
    let mainHTML = `
    <div class= infoDiv>    
    <section class="leftContent">
        <img src="pictures/counter.jpeg">
    </section>
    <section class="rightContent">
        <h2>Bonjour!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Öppettider</h2>
        <ul id=openinghours>
            <li><p>Måndag</p><p>07 - 14</p></li>
            <li><p>Tisdag</p><p>07 - 14</p></li>
            <li><p>Onsdag</p><p>07 - 16</p></li>
            <li><p>Torsdag</p><p>07 - 16</p></li>
            <li><p>Fredag</p><p>07 - 16</p></li>
            <li><p>Lördag</p><p>08 - 15</p></li>
            <li><p>Söndag</p><p>Stängt</p></li>
        </ul>

    </section></div>
    `;

    let contactHTML = `
    <div class= infoDiv>
    <div class="leftContent">
        <img src="pictures/street2.jpeg">        
    </div>
    <section class="rightContent">
        <h2>Kontakt</h2>
        <p>Something say sya sya syasyayyasyay fdfd fd fd fd f</p>
    </section></div>
    `;

    document.getElementById("mainDiv").innerHTML = mainHTML;    

    document.getElementById("infoButton").addEventListener("click", function(){
        document.getElementById("mainDiv").innerHTML = infoHTML;       
    });
    
    document.getElementById("homeButton").addEventListener("click", function(){    
        document.getElementById("mainDiv").innerHTML = mainHTML;
    });
    
    document.getElementById("contactButton").addEventListener("click", function(){
        document.getElementById("mainDiv").innerHTML = contactHTML;       
    });

    document.getElementById("productsButton").addEventListener("click", async function(){
        document.getElementById("mainDiv").innerHTML = "<h2>Produkter</h2>";
        await fetchGoods(1,"Matbröd");
        await fetchGoods(3,"Viennoiserie"); 
        
    });    

    async function fetchGoods(goodsType, title){
        let response = await fetch("includes/fetch.php?type="+goodsType);  
        let htmlText = await response.text();        
        document.getElementById("mainDiv").insertAdjacentHTML("beforeend", `<h3>${title}</h3>
            <div class="productGrid">${htmlText}</div>`);       
    }        

});