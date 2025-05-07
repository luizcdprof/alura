function setup() {
    createCanvas(400, 400); // cria a tela para desenhar
}

let olhoX;
let olhoY;

function draw() {
    background("#FF5722"); //cor do fundo
    
    fill("#03A9F4"); // cor do rosto
    circle(200, 200, 300); // rosto
    
    line(123,115,178,113); // sobrancelha direita
    line(225,116,279,106); // sobrancelha esquerda
    
    fill("white"); // cor dos olhos
    circle(150, 150, 60); // olho direito  
    circle(250, 150, 60); // olho esquerdo

    fill("#3F51B5");
    //circle(150, 150, 10); // pupila direita
    //circle(250, 150, 10); // pupila esquerda
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
    circle(olhoX, olhoY, 10); // nova pupila esquerda
    circle(olhoX + 100, olhoY, 10); //nova pupila direita
    triangle(200, 180, 170, 220, 220, 220); // nariz
    
    line(150, 270, 250, 270); // boca
    
    if(mouseIsPressed) {
        console.log(mouseX, mouseY);
    }
}