
//functie care adauga un televizor
function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/tv/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },

       
    };

    if(body !==null){

    options.body=JSON.stringify(body);
    
    }
    return fetch(url,options);
}


async function getAllTv(){

    let data=await api("all",'GET');

    data=await data.json();

    return data;
}

async function addTv(tv){

    let data=await api(`add`,'POST',tv);

    return data.json();
}

async function getAllMarci(){

    let data=await api(`televizoare/marci`,'GET');

    data=await data.json();

    return data;
}

async function getAllTvByMarca(marca){
    let data=await api(`televizoare/${marca}`,'GET');

    data=await data.json();

    return data;

}

async function deleteTv(tvId){
    let data=await api(`delete/${tvId}`,'DELETE');

}
async function deleteTvByModel(model){
    let data=await api(`deleteTvByModel/${model}`,'DELETE');

}


async function updateTv(tv){

let data=await api(`update`,'PUT',tv);

return data;
}

async function sortByPret(){

    let data=await api(`sortByPret`,'GET');
    data=await data.json();

    return data;
}

async function sortByMarca(){

    let data=await api(`sortByMarca`,'GET');

    data=await data.json(data);

    return data;
}

async function sortByModel(){

    let data=await api(`sortByModel`,'GET');

    data=await data.json(data);

    return data;
}

async function sortByPret(){

    let data=await api(`sortByPret`,'GET');

    data=await data.json();

    return data;

}

