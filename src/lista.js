let lista =[];

export function hozzaad(a)
{
    if (a<0) {
   console.log("Hiba");
    }  
    else if(a>=0){
lista.push(a)
    }
}

export function atlag()
{
    let osszeg =0;
 for (const item of lista) {
 
    osszeg+=item;
 }
 return osszeg/lista.length;

}