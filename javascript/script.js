//logic training
// 90% complete

const draw = window.document.querySelector('canvas')
const contextofgae = draw.getContext('2d')

const myimg = new Image()
myimg.src = 'img/sprites.png'
let jump = 3.6
const globalbird = {};
let createarth = {};
let soundimpactwithground = new Audio();
let soundsolo = new Audio()
soundsolo.src = "sounds/itfell_0Jkmk1IL.mp3";
let frames = 0;



let difficulty = 2;
let spacetwopípes;
let pipesnegativey;
let pipeskyx;
let pipeskyy;
let pipegroundx;
let pipegroundy;



setInterval(() => {
  difficulty += 3;
}, 15000);



const checkkk = false;
function creategameover(){
  const gameover = {
    positionx: 110,
    positiony: 155,
    totakex: 280,
    totakey: 300,
    width: 226,
    heigth: 209,
    
    draw(){
          contextofgae.drawImage(myimg, gameover.positionx, gameover.positiony, gameover.totakex, gameover.totakey, draw.width - 363, 100, gameover.width, gameover.heigth)
       

    },
    click(){
      check(screen.startlogo)
    },

    uptade(){

    }
  };

  return gameover;
};

function createrank(){
  const rank = {
    draw(){
      contextofgae.drawImage(myimg, 0, 78, 45, 44, 175, 153, 40, 40)
    
    },

    drawtwo(){
      contextofgae.drawImage(myimg, 48, 78, 45, 44, 175, 153, 40, 40)
    },

    drawthree(){
      contextofgae.drawImage(myimg, 0, 123, 45, 44, 175, 153, 40, 40)
    },

    drawfour(){
      contextofgae.drawImage(myimg, 48, 123, 45, 44, 175, 153, 40, 40)
    }
  };
  return rank;
};

const rankone = {};


function createpoints(){
  const mypoints = {
    points: 0,
  
    draw(){
      contextofgae.font = '25px "font-basic"'
      contextofgae.textAlign = "right"
      contextofgae.fillStyle = "white"
      contextofgae.fillText(mypoints.points, draw.width - 2, 20)
    },

    uptade(){
      const checkseconds = frames % 30 === 0;
      if(checkseconds){
         
            mypoints.points += mypoints.points = 1
      };

         
      
      
    }
  }
  return mypoints;
}; 






function createpipes(){

  const pipes = {
    width: 52,
    heigth: 400,
    ground:{
      takex: 0,
      takey: 169
    },
    sky: {
      takex: 52,
      takey: 169
    },

    createmypipes(){
      pipes.createofpipes.forEach(function(pip) {
       spacetwopípes = 100
       pipesnegativey = pip.y
    
       pipeskyx = pip.x;
       pipeskyy = pipesnegativey;

      contextofgae.drawImage(myimg, pipes.sky.takex, pipes.sky.takey, pipes.width, pipes.heigth, pipeskyx, pipeskyy, pipes.width, pipes.heigth )
       pipegroundx = pip.x;
       pipegroundy =  pipes.heigth + spacetwopípes + pipesnegativey
      
      
        
  
      contextofgae.drawImage(myimg, pipes.ground.takex, pipes.ground.takey, pipes.width, pipes.heigth, pipegroundx, pipegroundy, pipes.width, pipes.heigth)
      });
     
    },

    uptadestart(){

    },
      
    uptade(){
      const frameeachonehundred = frames % 100 === 0;
      if(frameeachonehundred){
        pipes.createofpipes.push({x: 600, y: -160 * (Math.random() + 1)});
        
      };

      pipes.createofpipes.forEach((event) =>{
        event.x = event.x - difficulty

        if(pipes.checkcolision(event)){
          check(screen.gameoverk)
        };

        if(event.x + pipes.width <= 0){
          pipes.createofpipes.shift()
        };
      })
    },




   

    createofpipes: [],

   //u´pppp

   checkcolision(check){    
    const legbird = globalbird.bird.positiony  + globalbird.bird.heigth;  
    const headbird = globalbird.bird.positiony ;
    const ground = pipegroundy;
    const thesky = mypipes.pipes.heigth + pipeskyy - 94;
    if(globalbird.bird.positionx >= check.x || check.x === globalbird.bird.positionx ){
      if(legbird > ground +  globalbird.bird.heigth){
        soundsolo.play()
        return true
       };
      
       if(headbird < thesky){
        soundsolo.play()
        return true;
       };

    }
     }
     }
  return pipes;
};


function earthcreat(){
  
  const earth = {
    startx: 0,
    starty: 590,
    totakex: 400,
    totakey: 600,
    positionx: 0,
    positiony: 340,
    width: 1600,
    heigth: 880,
  
    myearth(){
        contextofgae.drawImage(myimg, earth.startx, earth.starty, earth.totakex, earth.totakey,  earth.positionx, earth.positiony, earth.width, earth.heigth)
    },

    up(){
      const movementofground =  1;
      const moviemnt = earth.positionx - movementofground;
      earth.positionx = moviemnt % 400

      
    }
      
  
  };
  
  return earth;
  };


function createbird(){
  const mybird = {
    
    startx: 0,
    starty: 0,
    totakex: 40,
    totakey: 25,
    positionx: 10,
    positiony: 5,
    jump(){
      soundimpactwithground.src = "sounds/jump.wav"
      soundimpactwithground.play()
      mybird.speed = -jump
    },
    width: 35 ,
    heigth: 35,
    gravity: 0.25,
    speed: 0,

    birdfly:[
      {x: 0, y: 0,},
      {x: 0, y: 26,},
      {x: 0, y: 52,},
      {x: 0, y: 26,},
    ],

    framecurrent: 0,

    birdupdate(){
      const maxframe = 10;
      const intervalframes = frames % maxframe === 0;
      if(intervalframes){
        const baseincrement = 1;
        const increment = baseincrement + mybird.framecurrent;
        const baserepeat = mybird.birdfly.length;
        mybird.framecurrent = increment % baserepeat;
      };
    
    },
    
    creatmybird(){      
      frames = frames + 1;
      mybird.birdupdate()
      const { x, y }  =  mybird.birdfly[mybird.framecurrent]
      contextofgae.drawImage(myimg, x, y, mybird.totakex, mybird.totakey, mybird.positionx, mybird.positiony, mybird.width, mybird.heigth)
    },

    
    mybirddead(){
      contextofgae.drawImage(myimg, 0, 0, mybird.totakex, mybird.totakey, mybird.positionx, mybird.positiony, mybird.width, mybird.heigth)
    },

    update(){

      if(checkearth(mybird, createarth)){
        mybird.gravity = 0;
        mybird.speed = 0;
        soundsolo.play()
        jump = 0
        setTimeout(() =>{
          check(screen.gameoverk)
          jump = 4.6
        }, 230)
      

     
       
      }; 
      return;
    },
 
   bymove(){
      mybird.speed = mybird.speed + mybird.gravity 
      mybird.positiony  = mybird.positiony + mybird.speed
    }
};

return mybird;
};



function checkearth(bird, earth){
  const birdd = bird.positiony + bird.heigth
  if(birdd >= 380){
    return true;
  }else{
    return false;
  }
};


function executethebird(){  
  mybird.creatmybird();
  mybird.bymove()
  mybird.update()
};

function executefloor(){
  myfloor.twomyfloorr();
  myfloor.myfloorr();
  myfloor.threemyfloorr()
  myfloor.fourfloor()
  myfloor.fivefloor()
};


const myfloor = {
  startx: 600,
  starty: 2,
  totakex: 66,
  totakey: 70,
  positionx: 0,
  positiony: 220,
  width: 100,
  heigth: 150,


  myfloorr(){
    contextofgae.drawImage(myimg, myfloor.startx, myfloor.starty, myfloor.totakex, myfloor.totakey, myfloor.positionx, myfloor.positiony, myfloor.width, myfloor.heigth)
  } ,

  twomyfloorr(){
    contextofgae.drawImage(myimg, myfloor.startx, myfloor.starty, myfloor.totakex, myfloor.totakey,  100, myfloor.positiony, myfloor.width, myfloor.heigth)
  },

  threemyfloorr(){
    contextofgae.drawImage(myimg, myfloor.startx, myfloor.starty, myfloor.totakex, myfloor.totakey,  200, myfloor.positiony, myfloor.width, myfloor.heigth)
  },

  fourfloor(){
    contextofgae.drawImage(myimg, myfloor.startx, myfloor.starty, myfloor.totakex, myfloor.totakey,  300, myfloor.positiony, myfloor.width, myfloor.heigth)
  },

  fivefloor(){
    contextofgae.drawImage(myimg, myfloor.startx, myfloor.starty, myfloor.totakex, myfloor.totakey,  400, myfloor.positiony, myfloor.width, myfloor.heigth)
  },

 



};







let seconds = 0;

const playergo = {
  startx: 134,
  starty: 0,
  totakex: 174,
  totakey: 152,
  positionx: 158,
  positiony: 80,
  with: 174,
  heigth: 152,

  mylogo(){
    contextofgae.drawImage(myimg, playergo.startx, playergo.starty, playergo.totakex, playergo.totakey, playergo.positionx, playergo.positiony, playergo.with, playergo.heigth)
  }
};

const pointsgame = {};
let  checkgame = {};
function check(is){
  checkgame = is;
  if(checkgame.back){
     screen.startlogo.back()
  }
};

const mypipes = {};
const game = {};
const rank = {};
const screen = {
  startlogo: { 
  back(){
    globalbird.bird = createbird()
    createarth = earthcreat()
    mypipes.pipes = createpipes()
    pointsgame.point = createpoints()
    game.over = creategameover()
    rank.ranks = createrank()
    rankone.ranks = createrank()
     
  },
  start(){ 
    executefloor()
    globalbird.bird.creatmybird();
    mypipes.pipes.createmypipes()
    createarth.myearth()
    playergo.mylogo()
    
    
    
  },

  click(){
    check(screen.startbird)
  },
  
  update(){
    createarth.up()

  }
  }
};  


screen.startbird = {
    start(){
      executefloor()
      mypipes.pipes.createmypipes()
      createarth.myearth()
      globalbird.bird.creatmybird()
      globalbird.bird.bymove()
      globalbird.bird.update()
      pointsgame.point.draw()
     

    },

    click(){
        globalbird.bird.jump()
    },

    update(){
      createarth.up()
      mypipes.pipes.uptade()
      pointsgame.point.uptade()

    }

};



screen.gameoverk = {
  start(){
    executefloor()
    mypipes.pipes.createmypipes();
    createarth.myearth();
    globalbird.bird.mybirddead();
    game.over.draw();
    seconds = pointsgame.point.points;
    contextofgae.font = "25px 'font-basic'"
    contextofgae.fillStyle = "white";
    contextofgae.fillText(seconds, 313, 194);
    
    if(seconds > 1 && seconds <= 10){
      rankone.ranks.draw();
    }
    if(seconds > 10 && seconds <= 20){
      rankone.ranks.drawtwo();
    };

    if(seconds > 20 && seconds <= 40){
      rankone.ranks.drawthree();
    };

    if(seconds > 40){
      rankone.ranks.drawfour();
    };
    
  },

  click(){
    check(screen.startlogo)
  },

  update(){

  }


}





function loop(){
  contextofgae.fillStyle = "#70c5ce"
  contextofgae.fillRect(0, 0, 500, 500)
  checkgame.start()
  checkgame.update()
  requestAnimationFrame(loop);
};



check(screen.startlogo)
loop();

window.document.addEventListener("click", () =>{
  if(checkgame.click){
    checkgame.click()
    window.document.removeEventListener
  }

  window.document.addEventListener("keydown", (envetis) =>{
      if(envetis.code == "Space"){
        
        checkgame.click()
        window.document.removeEventListener
      };
  });


});
