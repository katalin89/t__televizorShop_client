async function attachHomePage(){
    let container=document.querySelector(".container");

    container.innerHTML=`
    <h1>Televizoare</h1>

    <p><a class="button new-televizor">Create new Televizor</a></p>

    <table>
        <thead>
        <tr>
            
            <th  class="id">Id</th>
            <th class="marca">Marca</th>
            <th class="model">Model</th>
            <th class="pret">Pret</th>
            
        </tr>

        <tbody class="container-televizoare>

        </body>

    </table>
    `

    container.addEventListener("click",async(e)=>{
        let data=e.target;

        if(data.classList.contains("pret")){
            let vec=await sortByPrice();
            attachRows(vec);
        }else if(data.classList.contains("marca")){
            let vec=await sortByMarca();
            attachRows(vec);
        }else if(data.classList.contains("model")){   const tv={
            tvId:tvProperties[0].innerHTML,
            marca:tvProperties[1].innerHTML,
            model:tvProperties[2].innerHTML,
            pret:tvProperties[3].innerHTML
        }
            let vec=await sortByModel();
            attachRows(vec);
        }
    })

    let data=await getAllTv();
    attachRows(data);

    let btnNewTv=document.querySelector(".new-televizor");

    btnNewTv.addEventListener("click",(e)=>{
        attaNewTvpage();
    });

    let rowsContainer=document.querySelector(".container-televizoare");

    rowsContainer.addEventListener("click",(e)=>{
        let data=e.target.parentNode;

        console.log(data);

        let tvProperties=data.children;
        
        const tv={
            tvId:tvProperties[0].innerHTML,
            marca:tvProperties[1].innerHTML,
            model:tvProperties[2].innerHTML,
            pret:tvProperties[3].innerHTML
        }

        attachUpdatePage(tv);
    });
}

function update(){
    let inp1=document.getElementById('marca');
    let inp2=document.getElementById('model');
    let inp3=document.getElementById('pret');

    const tv={
        marca:tvProperties[1].innerHTML,
        model:tvProperties[2].innerHTML,
        pret:tvProperties[3].innerHTML
    }
    updateTv(tv);
    
}

async function attachUpdatePage(tv){
    let container=document.querySelector("container")

    container.innerHTML=`
    <h1>Update Tv</h1>
    <input name="tvId" class="tvId" type="hidden" value="${tv.tvId}"/>

    <ul class="error">

    </ul>

    <p>
    <label for="marca">marca</label>
    <input name="marca" type="text" class="marca" id="marca" value="${tv.marca}"  disabled>
</p>
<p>
    <label for="model">Model</label>
    <input name="model" type="text" class="model" id="model" value="${tv.model}">
</p>

<p>
    <label for="pret">Pret</label>
    <input name="pret" type="text" class="pret" id="pret" value="${car.pret}">
</p>
<div>
    <button class="update">Update tv</button>
    <button class="delete" >Delete tv</button>
    <button class="cancel">Cancel</button>
</div>

    `

    let btnCancel=document.querySelector(".cancel")
    btnCancel.addEventListener("click",async()=>{
        attachHomePage();
    })


    let btnUpdate=document.querySelector(".update");
    btnUpdate.addEventListener("click",async()=>{
        let inp1=document.querySelector(".marca");
        let inp2=document.querySelector(".model");
        let inp3=document.querySelector(".pret");

        const tv={
            marca:inp1.value,
            model:inp2.value,
            pret:inp3.value,
        }

        let erors=[];

        if(inp1.value==""){
            erors.push("trebuie pusa marca");

            inp1.style.borderColor="red";
        }

        if(inp2.value==""){
            erors.push("trebuie pusa modelul");

            inp3.style.borderColor="red";
        }

        if(inp3.value==0){
            erors.push("trebuie pusa pretul");

            inp3.style.borderColor="red";
        }

        if(erors.length>0){
            let errorContainer=document.querySelector(".error");
             let h1=document.createElement("h1");
             h1.textContent="Ooops";
             errorContainer.appendChild(h1);

             for(let i=0;i<erors.length;i++){
                let li=document.createElement("li");

                li.textContent=erors[i];

                errorContainer.appendChild(li);
             }
        }else{

            let errorContainer=document.querySelector(".error");

            errorContainer.innerHTML="";

    
        }

        if(erors.length==0){
            let data=await updateTv(tv);
            attachHomePage();
        }

    })

    let btnDelete=document.querySelector(".delete");

    btnDelete.addEventListener("click",async()=>{
        let input=document.querySelector(".tvId");

        let tvId=input.value;

        let data=await deleteTv(tvId);

        attachHomePage();
    });
       
}

function attachNewTvPage(){

    let container=document.querySelector(".container");

    container.innerHTML=`
    <h1>New Tv</h1>

    <ul class="error">

    </ul>

  
    <p>
        <label for="title">Marca</label>
        <input name="title" type="text" id="marca" class="marca">
    </p>
    <p>
        <label for="author">Model</label>
        <input name="author" type="text" id="model" class="model">
    </p>



    <p>
        <label for="year">pret</label>
        <input name="year" type="text" id="pret" class="pret">
    </p>

    <div class="butoane">
        <button class="add">Add new  Car</button>
        <button class="cancel">Cancel</button>
    </div

    `

    let btnCancel=document.querySelector(".cancel")
    btnCancel.addEventListener("click",()=>{
        attachHomePage();
    })

    let btnAddNewTv=document.querySelector(".add");
    let inp0=document.getElementById('carId');
    let inp1=document.getElementById('marca');
    let inp2=document.getElementById('model');
    let inp3=document.getElementById('pret');

    btnAddNewTv.addEventListener("click",async()=>{
     
        let inp1=document.querySelector(".marca");
        let inp2=document.querySelector(".model");
        let inp3=document.querySelector(".pret");

        let tv={
            marca:inp1.value,
            model:inp2.value,
            pret:inp3.value,
        }
        

        let erors=[];
        if(inp1.value=="" && inp2=="" && inp3==0){
            erors.push("Nu ati completat campurile");
        }

        if(inp1.value==""){
            erors.push("Trebuie pusa marca");
            inp1.style.borderColor="red"
        }

        if(inp2.value==""){
            erors.push("Trebuie pusa modelul");

            inp2.style.borderColor="red";

        }

        if(inp3.value==""){
            erors.push("Trebuie pusa pretul");

            inp3.style.borderColor="red";
        }

        if(erors.length>0){
            let errorContainer=document.querySelector(".error");

            errorContainer.innerHTML="";

            let h1=document.createElement("h1");

            h1.textContent="Ooops";

            errorContainer.appendChild(h1);

            for(let i=0;i<erors.length;i++){

                let li=document.createElement("li");

                li.textContent=erors[i];

                errorContainer.appendChild(li);
            }
        }else{
            let data=await addTv(tv);
            attachHomePage();
        }

        
    })

    
}

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





