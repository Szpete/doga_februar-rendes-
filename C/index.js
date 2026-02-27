//1. osztaly
//objektumok letrehozasara szolgalo sablon amely osszefogja a belole szarmazo objektumok kozos tulajdonsagait es metodusait

//2. peldanyositas
//az a foylamat amely soran az osztaly definicioja alapjan egy konkret egyedi objektum jon letre a memoriaban a new kulcsszoval

//3.Mi a kapcsolat az osztály és a példány között?
// az osztaly egy absztrakt tervrajz vagy tipusdefinicio, a peldany pedig ennek a memoriaban letezo konkret megvalosulasa ennek a tervrajznak. Egy osztalybol akarmennyi peldany letrehozhato.

//4.Mi a higher order function?
//egy olyan fuggveny amely egy masik fuggvenyt fogad el parameterkent vagy egy masik fuggvennyel ter vissza.

//5.Mit nevezünk callbacknek?
//egy olyan fuggveny amelyet parameterkent atadunk egy masik fuggvenynek hogy az a sajat futasa soran egy megadott ponton meghivja azt.

//6.Mit ír ki az alábbi program?
/*
const foo = (a,b, callback) => {
 const c = 1;
 const result = callback(a,b)+1;
 return { er:result }
}
const result = foo("1", "2", (szam1, szam2) => {return szam1+szam2});
console.log(result.result);
console.log(result.er)
*/
//válasz:
//undefinied
//121

//7.Hogyan módosítaná a programot, hogy short hand property alkalmazásával a visszatérési objektum result tulajdonsága tartalmazza kiszámított eredményt?
/*
const foo = (a,b, callback) => {
 const c = 1;
 const result = callback(a,b)+1;
 return { result }
}
const result = foo("1", "2", (szam1, szam2) => {return szam1+szam2});
console.log(result.result);
console.log(result.er)
*/

//8. Hogyan tudná destructing alkalmazásával létrehozni azt a változót, ami foo függvény visszatérési értékének result tulajdonságát tartalmazza?

/*
const foo = (a,b, callback) => {
 const c = 1;
 const result = callback(a,b)+1;
 return { result }
}
const { result } = foo("1", "2", (szam1, szam2) => {return szam1+szam2});
console.log(result.result);
console.log(result.er)
*/

//9-10. Javítsa a programot, hogy abban az esetben ha a és b paraméter nagyobb 10-nél, akkor az eredmény objektum result tulajdonsága 0 értéket vegyen fel.
//Ha a két szám 0 és 10 között van, akkor az eredmény objektum result tulajdonsága a két szám összegét tartalmazza!

/*
const foo = (a,b, callback) => {
    const numA = Number(a)
    const numB = Number(b)
    let result

    if(numA> 10 && numB > 10){
        result=0
    }else if(numA >= 0 && numA <=10 && numB >= 0 && numB <=10){
        result=callback(numA, numB)
    }else{
        result=callback(numA, numB)
    }
    return { result }
    
}
const {result} = foo("5", "4", (szam1,szam2) => {
    return szam1 +szam2
})

console.log(result)
*/

