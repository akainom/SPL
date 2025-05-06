let prom1 = new Promise<number>((res, rej) => {
    res(21);
})
prom1.then((value:number) => {console.log(value); return value;})
.then((value) => console.log(value*2))

async function test1() {
    return 11;
}

async function task6() {
    let num = await test1();

    console.log(num);
    console.log(num*2);
}

task6()