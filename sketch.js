var satellite, earth, earth1, jupiter, sun, callisto, pluto, sacle, blackHole, PLAY, asteroid, asteroid_img1, asteroid_img2, earth_moon, earth_moon_img, moon, mars, mars_image, asteroid, ast1, ast2, ast1_image, ast2_image;
var europa, europa_img, fire, fire_img, asteroid3, asteroid3_img, satellite_refuel, satellite_refuel_img, space, rock, rock_img;
var PLAY = 1;
var END = 0;
var END2 = 2;



function preload()
{
  background1 = loadImage("images/Dbg1.jpg");
  background3 = loadImage("images/Dbg3.jpg");
  background4 = loadImage("images/Dbg4_long.jpg");
  space_asteroid = loadImage("images/space_ast.png");

  satellite1_up = loadImage("images/satellite_image.png");
  satellite2_down = loadImage("images/satellite_down.jpg");
  satellite3_right = loadImage("images/satellite_right.jpg");
  satellite4_left = loadImage("images/satellite_left.jpg");

  satellite11_up = loadImage("images/satellite2_up.png");
  satellite22_down = loadImage("images/satellite2_down.png");
  satellite33_right = loadImage("images/satellite2_right.png");
  satellite44_left = loadImage("images/satellite2_left.png");

  jupiter_image = loadAnimation("images/jupiter.gif");
  callisto_image = loadAnimation("images/callisto.jpg");
  pluto_image = loadAnimation("images/pluto_planet.gif");

  earth = loadAnimation("images/earth.gif");
  sun_image = loadAnimation("images/sun7.gif");
  blackhole_image = loadImage("images/blackholeimage.gif");
  earth_moon_img = loadAnimation("images/earth_moon.gif");
  mars_image = loadAnimation("images/mars_image.gif");

  europa_img = loadAnimation("images/eurpoa.gif");

  notifi = loadSound("sounds/space_notifcation_sound.mp3");
  ast1_image = loadImage("images/ast1_img.png");
  ast2_image = loadImage("images/ast2_img.png");
  fire_img = loadImage("images/fire_img.png");

  satellite_refule_img = loadImage("images/satellite_refuel_img.png");

  rock_img = loadImage("images/rock.png");

  

  
}

function setup() {
  createCanvas(displayWidth,displayHeight);

 
  
  //createSprite(400, 200, 50, 50);


  earth1 = createSprite(displayWidth/2, 300, 10, 10);
  earth1.addAnimation("earth_spinning", earth);
  earth1.scale = 0.5;
  
  jupiter = createSprite(-1100, -4000, 10, 10);
  jupiter.addAnimation("jupiter_spinning", jupiter_image);
  jupiter.scale = 0.5;

  europa = createSprite(1200, -4200, 100, 100);
  europa.addAnimation("europa", europa_img);
  
  pluto = createSprite(1500, -5999, 10, 10);
  pluto.addAnimation("pluto_spinning", pluto_image);
  pluto.scale = 1.5;
  

  satellite_refule = createSprite(1000, -5000, 20, 20);
  satellite_refule.addImage(satellite_refule_img);
  satellite_refule.scale = 0.3;

  satellite = createSprite(displayWidth/2, 138, 10, 10);
  satellite.addAnimation("satellite_spinning", satellite1_up);
  satellite.scale = 0.3;

  sun = createSprite(displayWidth/2, 1300, 10, 10);
  sun.addAnimation("sun_animation", sun_image);
  sun.scale = 2.4;

  earth_moon = createSprite(-177, -508, 10, 10);
  earth_moon.addAnimation("moon_spinning", earth_moon_img);
  earth_moon.scale = 0.1;

  mars = createSprite(-1500, -2000, 10, 10);
  mars.addAnimation("mars_spinning", mars_image);
  mars.scale = 1.5;
  


  asteroidGroup = new Group();
  asteroidGroup2 = new Group();

}

function draw() {
  background(background3);
  //background.velocityY = 2;

   /*space = createSprite(displayWidth, displayHeight)
  space.addImage(background3);
  space.velocityY = 2;

  if(space.y<50)
  {
    space.y = 10;
  }*/

  
  gameState = PLAY;

 if(gameState === PLAY)
 {
  camera.position.x = satellite.x;
  camera.position.y = satellite.y+40;

  textSize(20);
  fill("WHITE")
  text("X= "+satellite.x, camera.position.x+500, camera.position.y-300)
  fill("WHITE")
  text("Y= "+satellite.y, camera.position.x+500, camera.position.y-280)
  
        // command's given to satellite to change it's position;
        if(keyIsDown(UP_ARROW))
        {
            satellite.y = satellite.y-=2;
        }
        if(keyIsDown(DOWN_ARROW))
        {
            satellite.y = satellite.y+=2;
        }
        if(keyIsDown(RIGHT_ARROW))
        {
            satellite.x = satellite.x+=2;
        }
        if(keyIsDown(LEFT_ARROW))
        {
            satellite.x = satellite.x-=2;
        }

        if(satellite.y<300 && satellite.y>-100)
        {
          fill("YELLOW");
          textSize(20);
          text("Welcome to the 'Mystery of the Lost Planet' || Use Arrow keys to navigate", camera.position.x-680, camera.position.y-300)
        }

        if(satellite.y<300 && satellite.y>-100)
        {
          fill("YELLOW");
          textSize(20);
          text("Captain! we are ready, proceed to the cords [y = -120] || Instruction's will be given", camera.position.x-680, camera.position.y-250)
        }

        if(satellite.y<300 && satellite.y>-100)
        {
          fill("AQUA");
          textSize(20);
          text("Cordinates", camera.position.x+480, camera.position.y-260)
        }

        if(satellite.y<-100 && satellite.y>-350)
        {
          fill("CYAN");
          textSize(20);
          text("Command Center: Welcome! CAPTAIN", camera.position.x-680, camera.position.y-300)
        }

        if(satellite.y<-100 && satellite.y>-350)
        {
          fill("CYAN");
          textSize(20);
          text("We will be informing you the instrunction on your screen", camera.position.x-680, camera.position.y-270)
        }

        if(satellite.y<-100 && satellite.y>-480)
        {
          fill("CYAN");
          textSize(20);
          text("Kindly continue going upwards", camera.position.x-680, camera.position.y-240)
          //.loop(true);
          //notifi.play();
        }

        if(satellite.y<-100 && satellite.y>-110)
        {
          notifi.play();
        }

        if(satellite.y<-500 && satellite.y>-800)
        {
          fill("CYAN");
          textSize(20);
          text("Captain! We got come cords of plantes, you may explore if you want", camera.position.x-680, camera.position.y-300)
        }


        if(satellite.y<-500 && satellite.y>-510)
        {
          notifi.play();
        }

        if(satellite.y<-500 && satellite.y>-800)
        {
          fill("CYAN");
          textSize(20);
          text("Earth's Moon = x,-177 | y,-508", camera.position.x-680, camera.position.y-270)
        }

        if(satellite.y<-500 && satellite.y>-800)
        {
          fill("CYAN");
          textSize(20);
          text("Mars = x = -1500 | y = -2000", camera.position.x-680, camera.position.y-240)
        }

        if(satellite.y<-500 && satellite.y>-800)
        {
          fill("CYAN");
          textSize(20);
          text("Proceed to the cords y = -800", camera.position.x-680, camera.position.y-210)
        }

        if(satellite.y<-800 && satellite.y>-900)
        {
          fill("CYAN");
          textSize(20);
          text("Captain! we got some bad news........", camera.position.x-680, camera.position.y-300)
        }
        if(satellite.y<-800 && satellite.y>-900)
        {
          fill("CYAN");
          textSize(20);
          text("continue going in the negative Y direction", camera.position.x-680, camera.position.y-270)
        }
        if(satellite.y<-800 && satellite.y>-900)
        {
          fill("CYAN");
          textSize(20);
          text("You are about to cross the asteroid belt between", camera.position.x-680, camera.position.y-240)
        }
        if(satellite.y<-800 && satellite.y>-900)
        {
          fill("CYAN");
          textSize(20);
          text("We are speeding up your speed || head in the upward direction fastly !!", camera.position.x-680, camera.position.y-210)
          if(keyIsDown(UP_ARROW)){
            satellite.y = satellite.y-=2.9;
          }
        }


        if(satellite.y<-3000 && satellite.y>-3300)
         {
          fill("LIME");
          textSize(20);
          text("Congratulation's!!! You have crossed the asteroid belt!", camera.position.x-680, camera.position.y-330)
         }
         if(satellite.y<-3000 && satellite.y>-3300)
         {
          fill("WHITE");
          textSize(20);
          text("Alert!! You are about to get caught in jupiter's atmosphere", camera.position.x-680, camera.position.y-300)
         }
         if(satellite.y<-3000 && satellite.y>-3400)
         {
          fill("WHITE");
          textSize(20);
          text("Alert!! change your X cords between 1100-1180 And countinue going up", camera.position.x-680, camera.position.y-270)
         }
         /*if(satellite.y<-2200 && satellite.y>-2300)
        {
          fill("WHITE");
          textSize(20);
          text("Jupiter = x, -1100, | y, -4000", camera.position.x-680, camera.position.y-300)
         }*/
         if(satellite.y<-3000 && satellite.y>-4000)
         {
          fill("LIME");
          textSize(20);
          text("Goal1: Reach the moon of jupiter || Cords: x = 1200 | y = -4200", camera.position.x-680, camera.position.y-240)
         }

         if(satellite.y<100 && satellite.y>-1000){
          textSize(20);
          text("Fuel = 100 % ", camera.position.x+500, camera.position.y+300)
          fill("CYAN")
          }
         if(satellite.y<-3000 && satellite.y>-3200){
          textSize(20);
          text("Fuel = 70% ", camera.position.x+500, camera.position.y+300)
          fill("CYAN")
         }
         if(satellite.y<-3200 && satellite.y>-3300){
          textSize(20);
          text("Fuel = 65% ", camera.position.x+500, camera.position.y+300)
          fill("CYAN")
         }
         if(satellite.y<-3300 && satellite.y>-3400){
          textSize(20);
          text("Fuel = 60% ", camera.position.x+500, camera.position.y+300)
          fill("CYAN")
          }
         if(satellite.y<-3400 && satellite.y>-4200){
                  textSize(20);
                  text("Fuel = 58% ", camera.position.x+500, camera.position.y+300)
                  fill("CYAN")
                  }
                  if(satellite.y<-4200 && satellite.y>-5000){
                    textSize(30);
                    fill("RED")
                    text("Fuel = 50% ", camera.position.x+400, camera.position.y+100)
                   
                    }
                    if(satellite.y<-5000 && satellite.y>-5200){
                      textSize(25);
                      fill("HWITE")
                      text("Fuel = 100% ", camera.position.x+500, camera.position.y+200)
                     
                      }
        if(satellite.isTouching(satellite_refuel))
        {
          fill("GREEN");
          textSize(20);
          text("Refueling Succesfully Completed || Proceed to the goal", camera.position.x-680, camera.position.y-200)
        }
       if(satellite.y<-4100 && satellite.y>-6000)
        {
          fill("CYAN");
          textSize(20);
          text("Pluto Cordinates [x = -1500, y = -5999]", camera.position.x-680, camera.position.y-300)
        }
        if(satellite.y<-4100 && satellite.y>-6000)
        {
          fill("CYAN");
          textSize(20);
          text("Final Goal = , camera.position.x-680, camera.position.y-340")
        }
        if(satellite.y<-4110 && satellite.y>-5000)
        {
          fill("RED");
          textSize(20);
          text("Warning: FUEL GOING DOWN", camera.position.x-680, camera.position.y-270)
        }
        if(satellite.y<-4111 && satellite.y>-5000)
        {
          fill("RED");
          textSize(20);
          text("Get refuled from out satellite at the cords => [x= 1000, y= -5000] ", camera.position.x-680, camera.position.y-240)
        }
        if(frameCount % 100 === 0)
          {
            var asteroid = createSprite(random(0, 1500), camera.position.y-800, 10, 10);
            asteroid.velocityY = 3.5;
            asteroid.lifetime = 3000;
            asteroid.addImage(ast1_image);
            asteroid.scale = 0.3;
            asteroidGroup.add(asteroid);
          }
        

        
         
         if(satellite.y<-900 && satellite.y>-3000)
         {
          background(space_asteroid)

          textSize(20);
          fill("WHITE")
          text("X= "+satellite.x, camera.position.x+500, camera.position.y-300)
          fill("WHITE")
          text("Y= "+satellite.y, camera.position.x+500, camera.position.y-280)

          if(satellite.y<-900 && satellite.y>-1300){
          textSize(20);
          fill("CYAN")
          text("Use space to fire (fireing will destroy the asteroids)", camera.position.x-680, camera.position.y-300)
          }
          

          if(keyIsDown(UP_ARROW)){
            satellite.y = satellite.y-=2.9;
          }
          if(keyIsDown(DOWN_ARROW)){
            satellite.y = satellite.y+=2.9;
          }
          if(keyIsDown(LEFT_ARROW)){
            satellite.x = satellite.x-=2.9;
          }
          if(keyIsDown(RIGHT_ARROW)){
            satellite.x = satellite.x+=2.9;
          }
          

          if(frameCount % 20 === 0)
          {
            var asteroid = createSprite(random(0, 1500), camera.position.y-800, 10, 10);
            asteroid.velocityY = 3.5;
            asteroid.lifetime = 3000;
            asteroid.addImage(ast1_image);
            asteroid.scale = 0.3;
            asteroidGroup.add(asteroid);
          }
          if(frameCount % 40 === 0)
          {
            var asteroid2 = createSprite(random(0, 1500), camera.position.y-800, 10, 10);
            asteroid2.velocityY = 3.5;
            asteroid2.velocityX = -2;
            asteroid2.lifetime = 3000;
            asteroid2.addImage(ast2_image);
            asteroid2.scale = 0.1;
            asteroidGroup2.add(asteroid2)
          }
          

       
        
          


        }

        
        
     
            if(satellite.isTouching(europa)){
              textSize(20)
              fill("LIGHTGREEN");
              text("Getting planet Pluto Cordinates..........", 1199, -4300);
            }
            
            

         
         if(keyCode===32)
          {
            fire = createSprite(satellite.x, satellite.y, 20, 20);
            fire.addImage(fire_img);
            fire.scale = 0.09;
            fire.velocityY = -10;
            fire.lifetime = 1000;

          }
          if(asteroidGroup.isTouching(fire))
        {
          asteroidGroup.destroyEach();
        }

          if(asteroidGroup2.isTouching(fire))
        {
          asteroidGroup2.destroyEach();
        }



        if(asteroidGroup.isTouching(satellite) || asteroidGroup2.isTouching(satellite))
        {
          gameState = END;
        };

        

         
        
        if(satellite.isTouching(pluto))
        {
          gameState = END2;
        }
        
    
    }// end of play state

        


            if(gameState === END)
            {
              textSize(30);
              fill("CYAN");
              text("SATELLITE DESTROYED", camera.position.x-100, camera.position.y-200);

              textSize(30);
              fill("LIGHTBLUE");
              text("Reload To Try AGAIN!!", camera.position.x-100, camera.position.y-10);

              satellite.hide();
              satellite.velocityX = 0;
              satellite.velocityY = 0;

              asteroidGroup.destroyEach();
              asteroidGroup2.destroyEach();
            }

            if(gameState === END2)
            {
              textSize(30);
              fill("CYAN");
              text("CONGO || You found the rare rock || Part2 coming soon...", camera.position.x-200, camera.position.y);
              
              satellite.changeImage(rock_img)
              satellite.velocityX = 0;
              satellite.velocityY = 0;
            }

  drawSprites();
}

 
  

  

        

 

/*function end()
{
  background(background1);

  fill("RED");
  textSize(40)
  text("||SATELLITE DESTROYED|| (Reload to restart)", displayWidth/2-200, displayHeight/2);

  console.log("Reload to play again");
}*/