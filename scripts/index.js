document.addEventListener("DOMContentLoaded", function(){ //Waiting for the DOM to load.  
    
    //The HTML used on the "Om Oss" page.
    let infoHTML = `
    <div class= infoDiv>
    <section class="leftContent">
        <img src="pictures/team2.jpg" alt="Picture of the team working at Bon Temp">
    </section>
    <section class="rightContent">
        <h2>Om Oss</h2>
            <p>Bontemps grundades 2023 av Marine och Aurélien, efter att de hade blivit kära i Sverige 5 år tidigare. <br>
            De bestämde då att lämna Frankrike bakom sig för att öppna ett bageri i staden som låg dem varmast om hjärtat: Sundsvall! <br><br>
            Som fransk bagare tyckte Aurélien att det var viktigt att först lära sig det svenska smakerna.
            Sagt och gjort! De bestämde sig att först bosätta sig i Stockholm i några månader för att arbeta i ett svenskt bageri.
            Efter denna upplevelse kände de sig äntligen redo för att göra verklighet av sitt projekt. Franskt kunnande, blandat med svenska smaker!</p>        
    </section></div>
    `;
    
    //The HTML used on the home page.
    let mainHTML = `
    <div class= infoDiv>    
    <section class="leftContent">
        <img src="pictures/logo_blue.png" id="frontLogo" alt="Bon temp Logo">
        <h2 class="mainHeader">Bonjour!</h2>
        <p>Välkommen till det franska bageriet i hjärtat av Sundsvall!<br><br>
        I vårt lilla bageri brinner vi för hantverksmässigt framställda bröd och bakverk.<br>
        Här delar franska specialiteter som baguetter, croissant och levainbröd broderlikt plats med svenska klassisker, såsom kanelbullen.<br>
        Kom in på en kopp kaffe, slå dig ner och njut av Sundsvalls egna lilla del av Frankrike!<br><br>
        Accueillir! 
        </p>
        <h2 class="mainHeader" id="openingheader">Öppettider</h2>
        <ul id=openinghours>
            <li><p>Måndag</p><p>07 - 14</p></li>
            <li><p>Tisdag</p><p>07 - 14</p></li>
            <li><p>Onsdag</p><p>07 - 16</p></li>
            <li><p>Torsdag</p><p>07 - 16</p></li>
            <li><p>Fredag</p><p>07 - 16</p></li>
            <li><p>Lördag</p><p>08 - 15</p></li>
            <li><p>Söndag</p><p>Stängt</p></li>
        </ul>        
    </section>
    <section class="rightContent">
        <img src="pictures/counter6.jpg" class="picture" alt="Picture of the counter with various baked goods"></img>
    </section></div>
    `;

    //The HTML used on the "Kontakt" page.
    let contactHTML = `
    <div class= infoDiv>
    <div class="leftContent">
        <img class="picture" src="pictures/street7.jpg" alt="Croissant in the street">        
    </div>
    <section class="rightContent">
        <h2>Kontakt</h2>
        <p>Kom gärna in och prata med oss om det är något du undrar!<br><br>
        Vi tar även emot beställningar via <a href=mailto:hej@bontempsbageri.com>email.</a><br><br>
        Eller på Instagram!        
        </p>
        <a href=http://www.instagram.com/bontemps_bageri> <img src="pictures/instagram.png" id=instaIcon> </a>
    </section></div>
    `;

    //Sets the main html as the default one on start.
    document.getElementById("mainDiv").innerHTML = mainHTML;    

    //Following three functions changes the HTML of the main content.
    document.getElementById("infoButton").addEventListener("click", function(){
        document.getElementById("mainDiv").innerHTML = infoHTML;       
    });
    
    document.getElementById("homeButton").addEventListener("click", function(){    
        document.getElementById("mainDiv").innerHTML = mainHTML;
    });
    
    document.getElementById("contactButton").addEventListener("click", function(){
        document.getElementById("mainDiv").innerHTML = contactHTML;       
    });

    //Prints out all the different products available
    document.getElementById("productsButton").addEventListener("click", async function(){
        document.getElementById("mainDiv").innerHTML = "<h2>Produkter</h2>";
        await fetchGoods("Bread","Matbröd");
        await fetchGoods("Pastry","Viennoiserie");
        await fetchGoods("Drink","Drycker"); 
        
    });    

    //Fetches the goods of a certain category and adds prints them on the site.
    async function fetchGoods(goodsType, title){
        let response = await fetch("includes/fetch.php?type="+goodsType);  
        let htmlText = await response.text();        
        document.getElementById("mainDiv").insertAdjacentHTML("beforeend", `<h3>${title}</h3>
            <div class="productGrid">${htmlText}</div>`);       
    }        
    //
});