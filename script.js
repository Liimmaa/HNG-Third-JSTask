function letteredNumbers(num) {
    let arr = [];

    for(let i = 0; i <= num; i++){
        if((i % 2 === 0) && (i % 3 === 0) && (i % 5 === 0)) {
            // console.log('yu-gi-oh');
            arr.push('yu-gi-oh');
    } else if ((i % 2 === 0) && (i % 3 === 0)) {
        // console.log('yu-gi');
        arr.push('yu-gi');
    } else if (i % 2 === 0) {
       // console.log('yu');
       arr.push('yu');
    } else if (i % 3 === 0) {
        // console.log('gi');
        arr.push('gi');
    } else if (i % 5 === 0) {
        // console.log('oh');
        arr.push('oh');
    } else {
        // console.log('i');
        arr.push(i);
    }
}
    console.log(arr);
}

letteredNumbers(10);