/*
    JavaScript file for Breeze with trees



*/

//global varables
var photoOrder = [1, 2, 3, 4, 5, 6]

window.addEventListener('load', setUpPage);

function setUpPage(){
    events();
    addPicture();
}

function events(){
    var nextArrow = document.getElementById('nextImg');
    nextArrow.addEventListener('click', NextImage); 
    var prevArrow = document.getElementById('prevImg');
    prevArrow.addEventListener('click', PrevImage);
}

function addPicture(){
    var fileName;
    var currentFig;
    var treeName = document.getElementById('treeName');
    var treeCaption = document.getElementById('treeCaption');
    for(var i = 0; i < 6; i++){
        fileName = 'image' + photoOrder[i] + '.jpg';
        currentFig = document.getElementById('affect');
        currentFig.src = fileName;
        switch(fileName){
            case 'image1.jpg':
            treeName.innerHTML = 'Palo Verde:';
            treeCaption.innerHTML = "The Palo Verde is Arizona's state tree with greenish branches and trunk.";
            break;
            case 'image2.jpg':
            treeName.innerHTML = 'Palo Verde:';
            treeCaption.innerHTML = "The Palo Verde is Arizona's state tree with greenish branches and trunk.";
            break;
            case 'image3.jpg':
            treeName.innerHTML = 'Apple Tree:';
            treeCaption.innerHTML = 'Apple trees are cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus';
            break;
            case 'image4.jpg':
            treeName.innerHTML = 'Apple Tree:';
            treeCaption.innerHTML = 'Apple trees are cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus';
            break;
            case 'image5.jpg':
            treeName.innerHTML = 'Velvet Mesquite:';
            treeCaption.innerHTML = 'Prosopis velutina, commonly known as velvet mesquite, is a small to medium-sized perennial tree. It is a legume adapted to a dry, desert climate.';
            break;
            case 'image6.jpg':
            treeName.innerHTML = 'Velvet Mesquite:';
            treeCaption.innerHTML = 'Prosopis velutina, commonly known as velvet mesquite, is a small to medium-sized perennial tree. It is a legume adapted to a dry, desert climate.';
            break;
            default:
            treeName.innerHTML = 'cool'

        }
    }
}

function NextImage(){
    // console.log('hey');
    for(var i = 0; i < 6; i++){
        if((photoOrder[i] + 1) === 7 ){
            photoOrder[i] = 1;
        }
        else{
            photoOrder[i] += 1;
        }
        addPicture();
    }
}

function PrevImage(){
    for (var i = 0; i < 6; i++) {
        if ((photoOrder[i] - 1) === 0) {
            photoOrder[i] = 6;
        } else {
            photoOrder[i] -= 1;
        }
        addPicture();
    }
}