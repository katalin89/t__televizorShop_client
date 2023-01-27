//functie care adauga un televizor

function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/"+path;

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


async function addTelevizor(tv){

    let data= await api("add",'POST',tv);

    return data.json();
  }
