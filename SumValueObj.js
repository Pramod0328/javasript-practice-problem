function myFunction(a){
        let sum = 0;
        for(let key in a){
            if(typeof a[key]=== 'number'){
                sum += a[key];
            }
        }
}

console.log(myFunction({a:1,b:2,c:3}))
// Expected
// 6
console.log(myFunction({j:9,i:2,x:3,z:4}));
// Expected
// 18
myFunction({w:15,x:22,y:13})
// Expected
// 50