
function myFunction(obj) {
    // return obj?.a?.b;

 }

 function myFunction(obj) {
    if (obj && typeof obj === 'object') {
        if ('a' in obj) {
            if (typeof obj.a === 'object' && 'b' in obj.a) {
                return obj.a.b;
            }
        }
    }
    return undefined;
}
myFunction({a:1})
// Expected
// undefined
myFunction({a:{b:{c:3}}})
// Expected
// {c:3}
myFunction({b:{a:1}})
// Expected
// undefined
myFunction({a:{b:2}})
// Expected
// 2