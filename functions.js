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
    container.innerHTML="";//face gol containerul
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }
}

function returnMarcile(arr){
    let arrNou;
    for(let i=0;i<arr.length;i++){
        arrNou.appendChild(arr[i].marca);
    }
    return arrNou;
}

function returnTelevizor(data,marca){
    for(let i=0;i<data.length;i++){
        if(data[i].marca==marca){
            return  data[i].marca;
        }
    }
    return -1;
}

function createOptions(marci){
    let marcile=document.querySelector(".marci");
        for(let i=0;i<marci.length;i++){
            let option=document.createElement('option');
            option.value=marci[i];
            option.textContent=marci[i];
            marcile.appendChild(option);
        }
}



