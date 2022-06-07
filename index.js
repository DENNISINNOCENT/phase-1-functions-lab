// Code your solution in this file!
function  distanceFromHqInBlocks(distance ,block=42){
   return Math.abs(distance-block);
    
}
function  distanceFromHqInFeet(feet){
  let distance=distanceFromHqInBlocks(feet)
    return distance*264
    }

function distanceTravelledInFeet(start,destination){
   return Math.abs(destination-start)*264
}
function calculatesFarePrice(start, destination) {
   //returns the fare for the customer
   let distanceByFeet=distanceTravelledInFeet(start, destination)
   if(distanceByFeet<=400){
       return 0
   }
   else if(distanceByFeet>400 && distanceByFeet<=2000){
       const cash=(distanceByFeet-400)*2
        return cash/100
   }
   else if(distanceByFeet>=2000 && distanceByFeet<=2500){
       return 25
   }
   else if(distanceByFeet>2500){
       
       return 'cannot travel that far'
   }

 } 
