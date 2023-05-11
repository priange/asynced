// Write an asynchronous function that accepts a message string and a
//  delay time in milliseconds. The function should log the message to
const delayMessage = async (message, delay) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
  };
  delayMessage('We love you', 9000);

// You have an array of user IDs and a function getUserData(id) that 
// returns a Promise with user data when given a user ID. Write an 
// asynchronous function that fetches and logs the data for each user ID
//  one by one, in sequence.
let ids=[1,2,3,4,5];
 function given(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           let ids={
            id:id,
            name:`name of id owner ${id}`,
            email:`person${id}.gmail`
           }
           resolve(id)
        },5000)
        
    })
}
async function returnThePerson(idArray){
    for(let a=0;a<idArray;a++){
        const detailed=await ids(idArray[a]);
        console.log(detailed);
    }
}
returnThePerson(ids)

// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's 
// an error. Write a function that calls performTask() and logs a custom 
// success message if the task is successful, and a custom error message 
// if there's an error.
async function participated(nums){
    return new Promise((resolve,reject)=>{
        if(nums===2){
            resolve("equated to 8")
        }
        else{
            reject("Isn't equitable to 8")
        }
    });

}
async function giveOutput(){
    await participated(2)
    .then((result)=>{
        console.log("operation was successful",result)

    })
    .catch((error)=>{
        console.log("Error detected",error);

    })
    .finally(()=>{
        console.log("I am done running");
    });

}
giveOutput();