
//functie care adauga un televizor
function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/televizor"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },

        mode:"cors"
    };

    if(body !==null){

    options.body=JSON.stringify(body);
    
    }
    return fetch(url,options);
}


async function getAllTv(){

    let data=await api("/all",'GET');

    data=await data.json();

    return data;
}

async function addTv(tv){

    let data=await api("add",'POST',car);

    return data.json();
}

async function getAllMarci(){

    let data=await api("televizoare/marci",'GET');

    data=await data.json();

    return data;
}

async function getAllTvByMarca(marca){
    let data=await api(`televizoare/${marca}`,'GET');

    data=await data.json();

    return data;

}

async function deleteTv(tvId){
    let data=await api(`delete/${tvId}`,tv);

    return data;
}

async function sortByPrice(){

    let data=await api(`sortByPrice`,'GET');
    data=await data.json();

    return data;
}

async function sortByMarca(){

    let data=await api(`sortByMarca`,'GET');

    data=await data.json();

    return data;
}

async function sortByModel(){

    let data=await api(`sortByModel`,'GET');

    data=await data.json();

    return data;
}