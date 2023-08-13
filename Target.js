// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `ring${i}`;
      var id1 = `bird${i}`;
      //position variables     
      var posX =(Math.random() * 3000 + (-1000));      
      var posY = (Math.random() * 2 + (-1));
      var posZ = (Math.random() * 3000 + -1000);

      var posx =(posX + 0.5);      
      var posy = (posY + 0.5);
      var posz = (posZ + 0.5);

      var position = { x: posX, y: posY, z: posZ };
      var positionb = { x: posx, y: posy, z: posz };



      //call the function 
      this.createRings(id, position);
      this.createBirds(id1, positionb);
    }
  } ,

  createRings: function(id, position) { 
    
    var terrainEl = document.querySelector("#terrain");

    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id",id);
    ringEl.setAttribute("position",position);
    ringEl.setAttribute("static-body",{shape:"sphere",sphereRadius:2});
    ringEl.setAttribute("material","color","#ff9100");
    ringEl.setAttribute("game-play",{
      elId : `#${id}`
    });
    ringEl.setAttribute("geometry",{ primitive: "torus",radius: 8 });   

    terrainEl.appendChild(ringEl);
  },

  createBirds: function(id1,positionb){
    var terrainB1 = document.querySelector("#terrain");
    
    var birdB1 = document.createElement("a-entity");

    birdB1.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf");
    birdB1.setAttribute("static-body",{shape:"sphere",sphereRadius:2});
    birdB1.setAttribute("id",id1);
    birdB1.setAttribute("game-play",{
      elId : `#${id1}`
    });
    birdB1.setAttribute("position",positionb);
    birdB1.setAttribute("scale",{x:500 , y:500 , z:500});
    birdB1.setAttribute("animation-mixer",{});

    terrainB1.appendChild(birdB1);


  }
});

