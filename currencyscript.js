const fromamountelement=document.getElementById('amount');
const convertedamountelement=document.getElementById('convertedamount');
const fromcurrencyelement=document.getElementById('fromcurrency');
const tocurrencyelement=document.getElementById('tocurrency');
const resultelement=document.getElementById('result');
const countries=[
    {
        code:"USD", name:"united state dollars"
    },
    {
        code:"INR", name:"Indian Rupees"
    },
    {
        code:"PHP",name:"Philliphine Peso"
    },
    {
        code:"PLN",name:"Polish Zoty"
    },
    {
        code:"RON",name:"Romaninan Leu"
    },
    {
        code:"RUB",name:"Russian Ruble"
    },
    {
        code:"UYU",name:"Uruguayan Peso"
    },
]
countries.forEach(country=>{
    const option1=document.createElement('option');
    option1.value=country.code;
    option1.textContent=`${country.code} (${country.name})`;
    fromcurrencyelement.appendChild(option1);

    const option2=document.createElement('option');
    option2.value=country.code;
    option2.textContent=`${country.code} (${country.name})`;
    tocurrencyelement.appendChild(option2);
    
    fromcurrencyelement.value="USD";
    tocurrencyelement.value="INR";
})
const getexchangerate=async ()=>{
    const amount = parseFloat(fromamountelement.value);
    const fromcurrency=fromcurrencyelement.value;
    const tocurrency=tocurrencyelement.value;
    //fetching
    const response=await fetch(`https://v6.exchangerate-api.com/v6/706e629e776e3aae068baa3d/latest/${fromcurrency}`);
    const data=await response.json();
   const res=data.conversion_rates[tocurrency];
    const res1=amount*res;
    convertedamountelement.value=res1;
    resultelement.textContent=`${amount} ${fromcurrency} = ${res1} ${tocurrency}`
}
fromamountelement.addEventListener('input',getexchangerate);
tocurrencyelement.addEventListener('change',getexchangerate);
fromcurrencyelement.addEventListener('change',getexchangerate);
window.addEventListener('load',getexchangerate);