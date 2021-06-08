async function main() {
    const results = await getData();
    const elem = document.getElementById("result");
    results.forEach(result => {
        let li = document.createElement('li');
        let text = document.createTextNode(result.full_name);
        li.appendChild(text);
        elem.appendChild(li);
    })
}

main()
// const sleep = () => new Promise(resolve => {
//     setTimeout(resolve, 1000);
// });
// async function test () {
//     console.log('a');

//     await sleep(); // 1 秒待機

//     console.log('b');

//     await sleep(); // 1 秒待機

//     console.log('c');
// }

// test()

