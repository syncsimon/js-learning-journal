//loops 
//1)for loop
//printing from 0-100
for(let i = 0;i<=100 ; i++){
    console.log(i)
}
//prining odd numbers
for (let j=1 ; j<=100 ; j+=2){
    console.log(j)
}
//printing even numbers
for (let j=1 ; j<=100 ; j+=2){
    console.log(j)
}
//back counting till 10
for (let num = 10;num>=0;num--){
    console.log(num)
}

//2) while loop
let x = 1
while (x<=10){
    console.log(x)
    x++
}


//3)do-while
let z = 1
do{
    console.log(z)
    z++
}while(z<=5)

// break

for(let value = 1;value <= 5; value++){
    if(value===3){
        break
    }
    console.log(value)
}

//continue
for (let number = 1;number <= 5; number++){
    if (number===3){
        continue
    }
    console.log(number)
}