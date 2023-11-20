const tools=[{
    id:0,
    nombre:"html",
    años:5
},
{
    id:1,
    nombre:"css",
    años:4
},
{
    id:2,
    nombre:"javascript",
    años:3
},
{
    id:3,
    nombre:"react",
    años:2
},
{
    id:4,
    nombre:"node js",
    años:2
},
{
    id:5,
    nombre:"express",
    años:1
},
{
    id:6,
    nombre:"mysql",
    años:3
},
{
    id:7,
    nombre:"mongoDB",
    años:1
},
{
    id:8,
    nombre:"git",
    años:2
}];

// const tools_organizados2 = tools.map(herramienta=>{
//     return(
//         <div key={herramienta.id} class="card">
//                 <div class="arriba" id={herramienta.nombre} onMouseEnter={()=>{
//                     setTimeout(()=>{document.getElementById(herramienta.id).style.display="flex"},280)}
//                 } onMouseLeave={()=>{
//                     setTimeout(()=>{document.getElementById(herramienta.id).style.display="none"},250)
//                 }}
//                 >{herramienta.nombre}</div>                
//                 <div class="abajo" id={herramienta.id}>{herramienta.años} años</div>
//             </div>
//     )
// });

// const tools_organizados3 = tools.map(herramienta=>`<h2>${herramienta.nombre}</h2>`);
const tools_organizados3 = tools.map(herramienta=>{
    return(
        `<div class="card" id="card2">
            <div class="arriba" id=${herramienta.id} onmouseover="alert(${herramienta.nombre})">${herramienta.nombre}</div>
            <div class="abajo" id=${herramienta.id}>${herramienta.años} años</div>
        </div>`
    )
});
// mouseover,mouseleave
const insercion = document.getElementsByClassName("lenguajes-nombres");
const insercion2 = document.getElementById("contenedor");
const insercion3 = document.querySelector("#contenedor");

// miniinsercion.addEventListener("mouseover",()=>alert("pasaste sobre mi"));
insercion3.innerHTML=tools_organizados3.join("");
// for(let i=0;i<11;i++){
//     document.getElementById(i).addEventListener("mouseover",()=>{
//         setTimeout(()=>{document.getElementById(i).style.display="flex"},280)
//     })
// }
// document.querySelector("#0").addEventListener("mouseover",()=>{
//     if(document.querySelector().style.display=="flex"){}

// })
// insercion3.addEventListener("mousenter",()=>{
//     alert("pasaste sobre mi");
//     setTimeout(()=>{document.getElementById("0").style.display="flex"},280)
// });
// insercion3.addEventListener("mouseleave",()=>{
//     setTimeout(()=>{document.getElementById("herramienta.id").style.display="none"},250)
// });