$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    
   toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(1250, 1250, 300, 20, "orange", 1150, 1150, 0, 0, 700, 1.25);
    createPlatform(1000, 250, 200, 20, "teal");
    createPlatform(100, 200, 200, 20, "teal");
    createPlatform(850, 250, 50, 20, "teal");
    createPlatform(600, 250, 50, 20, "teal");
    createPlatform(400, 300, 50, 20, "orange", 400, 400, 0, 100, 350, 1.25);
    createPlatform(700, 400, 100, 20, "teal");

    // TODO 3 - Create Collectables

    createCollectable("database", 100, 100, 0, 1, 100, 100, 2);
    createCollectable("database", 730, 330);
    createCollectable("database", 1350, 50,)

    
    // TODO 4 - Create Cannons

    createCannon("right", 900, 1500, 20, 330);
    createCannon("right", 900, 2900, 20, 370, );
    createCannon("right", 900, 4400, 20, 420, );
    createCannon("left", 900, 60000, 1, 9999);
    createCannon("top", 200, 2250, 5, 650, 100, 1200, 10);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
