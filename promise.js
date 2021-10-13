var promise =(name1,name2)=>{
    return  new Promise((resolve, reject) => {
      
        if (name1 === name2) {
            resolve();
        }
        else {
            reject();
        }
    });
}

promise("ajith","ajith")
    .then(()=>{
        console.log("success")
    })
    .catch(()=>{
        console.log("Some Error")
    })
