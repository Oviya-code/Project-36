//Create variables here
var dog,happyDog,foods,database,foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(1000,1000);
  dog = createSprite(500,500);
  dog.addImage(dogImg);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogImg1);
  }
  drawSprites();
  //add styles here
  textSize(20);
  fill("pink");
  stroke("purple");

}

function readStock(data){
  foods = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


