function myFunction(a,b){
    if(a.length!==b.length){
        return "Array is not pairing";
    }

   /* const obj = {};
    for(let i=0;i<a.length;i++){
        obj[a[i]] = b[i];
    }

    
    return obj;*/

    return a.reduce((obj, key, index) => {
        obj[key] = b[index];
        return obj;
    }, {});
}



console.log(myFunction(['a','b','c'],[1,2,3]));
// Expected
// {a:1,b:2,c:3}
console.log(myFunction(['w','x','y','z'],[10,9,5,2]))
// Expected
// {w:10,x:9,y:5,z:2}
console.log(myFunction([1,'b'],['a',2]))
// Expected
// {1:'a',b:2}
