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

    createPlatform(300, 660, 200, 20, "teal");
    createPlatform(600, 550, 200, 20, "teal");
    createPlatform(950, 440, 200, 20, "teal");
    createPlatform(1250, 330, 100, 20, "teal");
    createPlatform(700, 150, 200, 20, "teal");
    createPlatform(200, 430, 200, 20, "teal");
    createPlatform(250, 300, 100, 20, "teal");
    createPlatform(500, 220, 50, 20, "teal");
    createPlatform(1000, 220, 50, 20, "teal");

    // TODO 3 - Create Collectables

    createCollectable("database", 780, 100, 0, 0)
    createCollectable("database", 280, 250, 0, 0)
    createCollectable("database", 1280, 280, 0, 0)

    
    // TODO 4 - Create Cannons

    createCannon()
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
