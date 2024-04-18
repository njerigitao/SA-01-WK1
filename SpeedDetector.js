function detectSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint){
        console.log("Ok");
        return;
    }
    const demeritPoints = Math.floor((speed - speedLimit)/ kmPerPoint);
    if(demeritPoints >= 12) {
        console.log("License suspended");
    } else {
        console.log("Points:" + demeritPoints);
    }
}
// Example:
detectSpeed(80); // output: Points: 2