function createRow(televizor){
    let tr=document.createElement("tr");

    tr.innerHTML=`
    <td>${televizor.id}</td>
    <td>${televizor.marca}</td>
    <td>${televizor.model}</td>
    <td>${televizor.pret}</td>
    `

    return tr;
}

function attachRows(arr){
    let container=document.querySelector(".container");
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }
}


