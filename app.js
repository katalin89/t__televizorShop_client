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

function createOptions(marci){
    let marcile=document.querySelector(".marci");
    for(let i=0;i<marci.length;i++){
        let option=document.createElement('option')
        option.value=marci[i];
        option.textContent=marci[i];
        marcile.appendChild(option);
    }
}

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
