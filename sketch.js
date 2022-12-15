var x = 250
var y = 200
var largura = 200
var altura = 50
var tela=0

//dimencionamento da tela
function setup() {
  createCanvas(700, 700)
}

// aplicação de cor fundo tela
function draw() {
  background('rgba(44,165,44,0.59)');
 // rect(x, y, largura, altura);
  if(tela == 0){
    fill(255)
    rect(x, y, largura, altura);
    rect(x, y+120, largura, altura);
    rect(x, y+240, largura, altura)
    //rect(x+230, y+400, largura, altura);
    textSize(40);
    fill(0)
    text("NÚMEROS COLORIDOS",350, 50);
    textSize(20);
    fill(0)
    textAlign(CENTER);
    text("Jogar", 350,230);
    text("Informações", 350,350);
    text("Creditos", 350,470);
    //text("Information", 580,630);
  
  }
  else if(tela == 1){
    textSize(30);
    fill(0);
    textAlign(CENTER);
    text("Jogo em construção!.", 60,200,600);
    fill(255);
    rect(x+230, y+390, largura, altura);
    fill(0);
    text("Voltar", 580,630);
    
    
    
  }
  else if(tela == 2){
    textSize(40);
    fill(0);
    textAlign(CENTER);
    text("Informações",100,50,400);    
    text("A finalidade deste jogo é mostrar de forma intuitiva as cores primárias, secundárias e terciárias. Desta forma realizando combinações pre definidas pelo jogador e vendo qual será o resultado.", 60,200,600);
  fill(255);
  rect(x+230, y+390, largura, altura);
  fill(0);
  text("Voltar", 580,630);
  
    
    
 
  }
  else if(tela == 3){
    textSize(30);
    fill(0);
    textAlign(CENTER);
    text("Creditos",100,20,400);
    text("Docente: Idalmis Milian Sardina Martins",01,80,600);
    text("Discente: Marcos Pereira da Silva", 10,160,500);
    text("Disciplina: LOP",12, 240,250)
    text("Turma: 5C",10,400,200);
    fill(255);
    rect(x+230, y+390, largura, altura);
    fill(0);
    text("Sair", 580,630);
    
    
  }
  
  
  
  
}

function mouseClicked() {
  
  if(tela==0){
    
    if(mouseX>=x && mouseX<=x+largura && mouseY>=y && mouseY<=y+altura ){
      tela=1;
    }
    if(mouseX>=x && mouseX<=x+largura && mouseY>=y+120 && mouseY<=y+120+altura){
       tela=2;
      
       }
    if(mouseX>=x && mouseX<=x+largura && mouseY>=y+240 && mouseY<=y+240+altura){
      tela=3;
    }
    
    
    
  }
  
  else if(tela==1 || tela==2 || tela==3){
    console.log('clicou')
    if(mouseX>=x+230 && mouseX<=x+230+largura && mouseY>=y+390 && mouseY<=y+390+altura ){
      tela=0;
      
    }
  }
  
  
  
  
  
  
}
