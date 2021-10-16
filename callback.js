let Obj1 ={
    username : "Ajith",
    details:"employee",
    tasks:"",


}

function login(email,password, callback)
{    setTimeout(() => {
        console.log("login SuccessFully");
        callback({username:"Ajithkumar"});
}, 5000);}

function getdetails(username,callback){
    setTimeout(() => {
    callback ({username,proffession:"software Developer",salary:25000});  
    }, 6000);
}

login("Ajithaktech01@gmail.com","123456",(Obj1)=>{
    console.log("welcome");
    console.log(Obj1)
})

getdetails(Obj1.username,(details)=>{
    console.log(details)
});


