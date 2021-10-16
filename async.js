async function getdata() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hi , this is Ajith "), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}

getdata();