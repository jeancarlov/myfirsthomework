<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <title>My First Object</title>
  </head>
  <body>
    <script>
// global function
// object 
      var car = {
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        mileage: 3000,
        isWorking: true,
        driveToWork: function() {
          alert("Old Mileage: " + this.mileage);
          this.mileage = this.mileage + 8;
          alert("New mileage: " + this.mileage);
        },
        driveAroundWorld: function() {
          alert("Old Mileage: " + this.mileage);
          this.mileage = this.mileage + 24000;
          alert("New Mileage: " + this.mileage);
          alert("Car needs a tuneup!");
          this.isWorking = false;
        },
        getTuneUp: function() {
          alert("Car is ready to go!");
          this.isWorking = true;
        },
        honk: function() {
          alert("Honk! Honk!");
        }
      };
      function reWriteStats() {
    console.log(car.make)
    console.log(car.model)
    console.log(car.mileage)
    console.log(car.color)
    console.log("Is Working: " + car.isWorking)
}
    //   var userChoices = ["h" , "d", "w", "t"]
    console.log("where are you at?");
      document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log("hey look at me");
        if (userGuess === "h") {
            car.honk();
            reWriteStats();
        } 
        else if (userGuess === "d") {
            car.driveToWork();
            reWriteStats();
         }
        
        else if (userGuess === "w") {
            car.driveAroundWorld();
            reWriteStats();
        }
        else if (userGuess === "t") {
            car.getTuneUp();
            reWriteStats();
        }
       
        else {
            alert ("CAR IS ON FIRE");
            reWriteStats();
        }
      }
      
      // How would we log...
      // The car's make?
    //   console.log(car.make);
      // The car's model?
    //   console.log(car.model);
      // The car's mileage?
    //   console.log(car.milage);
      // How would we run the car's driveToWork method?
    //   car.driveToWork();
      // How would we run the car's driveAroundWorld method?
    //   car.driveAroundWorld();
      // How would we run the getTuneUp method?
    //   car.getTuneUp();
    </script>
    
  </body>
</html>

