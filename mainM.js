window.onload = () => {

    let score = document.getElementById("score");
    let cps = document.getElementById("cps");
    let cookie = document.querySelector("#cookie");
    let checkB1 = document.getElementById("checkB1");
    let checkB2 = document.getElementById("checkB2");
    let checkB3 = document.getElementById("checkB3");
    let checkB4 = document.getElementById("checkB4");
    let B1 = document.getElementById("B1");
    let B2 = document.getElementById("B2");
    let B3 = document.getElementById("B3");
    let B4 = document.getElementById("B4");
    let total = document.getElementById("total");
    let Game = {
        scoreJs: 0,
        possAutocl:  true,
        // total: 0,
        /* store:[
            {
                id: 0,
                name: 'patate',
                price: 10,
                multiplicateur: 1.2,
                times: 0
            },
            {
                id:1,
                name: 'autruche',
                price: 10,
                multiplicateur: 1.2,
                times: 4,
            },
        ], */
    }

    let onAutoclick = false;
    console.log(onAutoclick);    
    let B1Js = 1
    let multiplicateur = 1
    
    
    cookie.addEventListener("click", function(){
        Game.scoreJs = Game.scoreJs + multiplicateur 
        score.innerHTML = "Le score est de \n " + Game.scoreJs 
        
    })
    
    
    B2.addEventListener( "click", function (){
        if (Game.possAutocl == true){
            if (Game.scoreJs>= 200){
                onAutoclick = true
                Game.possAutocl = false
                Game.scoreJs = Game.scoreJs - 200
            }       
        }
        console.log(Game);
        score.innerHTML = "Le score est de \n " + Game.scoreJs
    })
    console.log(Game.scoreJs)

    setInterval (function(){
        if (onAutoclick == true){
        Game.scoreJs = Game.scoreJs + multiplicateur
        score.innerHTML = "Le score est de " + Game.scoreJs;
    }    
    },1000);


}