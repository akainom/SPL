let prom = new Promise((res, rej) => {
    setTimeout(() => res(console.log(Math.random())), 3000);
});

function numGen(interval: number) {
    return new Promise((res, rej) => {
        setTimeout(() => res(console.log(Math.random())), interval);
    })
}

Promise.all([numGen(1000), numGen(500), (250)]).then((values) => {
    console.log(values);
})

let prom2 = new Promise ((res, rej) => {
    rej('asd');
})
prom2. 
then (()=>console.log(1))
.catch (()=>console.log(2))
.catch (()=>console.log(3))
.then (()=>console.log(4))
.then (()=>console.log(5))

