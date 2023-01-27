fetch("http://localhost:8080/api/v1/televizoare").then(data=>{
    return data.json();
}).then(data=>{
    attachRows(data)
})

fetch("http://localhost:8080/api/v1/televizoare/marci").then(data=>{
    return data.json();
}).then(data=>{
    createOptions(data);
})

let marca=document.querySelector(".marci");
marca.addEventListener("change",(e)=>{
    console.log(marca.value);
    fetch(`http://localhost:8080/api/v1/televizoare/${marca.value}`)
    .then(data=>{
        return  data.json();
    }).then(data=>{
        attachRows(data);
    })
})


let btnAdd=document.querySelector(".add");
let inp1=document.getElementById('marca');
let inp2=document.getElementById('model');
let inp3=document.getElementById('pret');

btnAdd.addEventListener("click",()=>{

    //vom da marca etc ca in intellj proprietatile
    let tv={marca:inp1.value,model:inp2.value,pret:+inp3.value};//cu + parsam din string la int
   
    addTelevizor(tv).then(data=>{
      let container=document.querySelector(".container");
       
      let t=createRow(data);

      container.appendChild(t);
    })
})