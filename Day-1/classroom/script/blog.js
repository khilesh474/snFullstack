
// that is simple function which is giving undefined
// const getBlog = ()=> {

//     setTimeout(() => {
//         return{
//             title: 'welcome to my app'
//         }
//     }, 2000);
// }

// const mydata = getBlog()

// console.log(mydata.title);

const getBlog =(callbackDemo)=> {

    setTimeout(() => {
        callbackDemo({
            title: 'welcome to my app'
        })
    }, 2000);
}

getBlog((bp)=> {
    console.log(bp.title);
    document.write(bp.title);
})