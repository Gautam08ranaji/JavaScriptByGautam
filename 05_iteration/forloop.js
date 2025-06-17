for (let i = 0; i < 10; i++) {

    if ( i== 5) {
        // console.log("5 is  best number");
    }
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
   
    // console.log(`out ${i}`);
    
    for (let j = 1; j <= 10 ; j++){
        // console.log(`inner ${j}`);
    
    } 
}


for (let i = 0; i <= 20; i++) {
    
    if (i == 5) {
        // console.log("5 Detected");
        break;
    }
    // console.log(i);
}

for (let i = 0; i <= 20; i++) {
    
    if (i == 5) {
        console.log("5 Detected");
        continue
    }
    console.log(i);
}