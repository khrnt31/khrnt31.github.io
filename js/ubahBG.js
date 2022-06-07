let homeProperties = document.getElementById("Home");


const listbg = ['imgs/bg0.jpg', 'imgs/bg1.jpg', 'imgs/bg2.jpg', 'imgs/bg3.jpg', 'imgs/bg4.jpg'];

let index_BG = 0;
changeBG();

function changeBG() {

    index_BG++;

    if(index_BG>=listbg.length) {
        index_BG=0;
    }
    
    homeProperties.style.backgroundImage = 'url(' + listbg[index_BG] + ')';

    setTimeout(changeBG,5000);
}







   




