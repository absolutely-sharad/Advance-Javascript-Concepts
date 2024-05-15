function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = 6;
            if (a == 5) {
                resolve("i am resolved");
            } else {
                reject(new Error("failed"))
            }
        }, 2000)
    })
}
getdata().then((msg) => console.log(msg)).catch((err) => console.log(err));