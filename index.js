function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  
  // Function 
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  // Function 
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Function
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate of $25 for distances over 2000 feet
    } else {
      return "cannot travel that far"; // Over 2500 feet is not allowed
    }
  }
