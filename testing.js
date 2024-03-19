let a = 0, b = 1, c, n = 3;
if(n == 1){
    console.log(a);
} else if (n == 2) {
    console.log(a);
    console.log(b);
} else{
    console.log(a);
    console.log(b);
    for(let i = 0; i <= n-3; i++){
        c = a + b;
        a = b;
        b = c;
        console.log(b);
    }
}

	

