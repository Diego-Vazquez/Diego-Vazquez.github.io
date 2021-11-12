window.onload=()=>{
    //cargar json
    let arrayElem=[];
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET","./js/PeriodicTableJSON.json","true");
    xobj.onreadystatechange=()=>{
        if(xobj.readyState == 4 && xobj.status == "200"){
            let json=JSON.parse(xobj.responseText);
            arrayElem=json.elements;
            let todo="";
            arrayElem.forEach(element => {
                if(element.name=="Hydrogen"){
                    todo+=`<li id="${element.name.toLowerCase()}" class="hydrogen" 
                    data-name="Hidrogen" 
                    data-id="${arrayElem.indexOf(element)+1}" 
                    data-sim="${element.symbol}" 
                    data-descr="${element.summary}">
                    <abbr title="${element.name}">${element.symbol}</abbr>
                </li>`;
                //el hidrogeno es el unico elemento de color diferente
                }else{
                if(element.category.toLowerCase().includes("unknown")){
                    todo+=`<li id="${element.name.toLowerCase()}" class="unknown"
                    data-name="${element.name}" 
                    data-id="${arrayElem.indexOf(element)+1}" 
                    data-sim="${element.symbol}" 
                    data-descr="${element.summary}">
                        <abbr title="${element.name}">${element.symbol}</abbr>
                    </li>`;
                    //habia elementos que no decian completamente unknown
                }else{
                    todo+=`<li id="${element.name.toLowerCase()}" class="${element.category.replace(" ","-").replace(" ","")}"
                    data-name="${element.name}" 
                    data-id="${arrayElem.indexOf(element)+1}" 
                    data-sim="${element.symbol}" 
                    data-descr="${element.summary}">
                        <abbr title="${element.name}">${element.symbol}</abbr>
                    </li>`;
                }
                }
                
            });
            document.getElementsByClassName("periodic-table")[0].innerHTML=todo;
               //crear eventos
            var elem =document.getElementsByTagName("li");
            for(var x=0;x<elem.length;x++){
                let nom=elem[x].getAttribute("data-name");
                let sim=elem[x].getAttribute("data-sim");
                let desc=elem[x].getAttribute("data-descr");
                elem[x].addEventListener('click',(w)=>{
                    document.getElementById("txtElemento").innerText=nom;
                    document.getElementById("txtSimbolo").innerText=sim;
                    document.getElementById("txtDescripcion").innerText=desc;
                });
            }
        }
    };
    xobj.send(null); 

 
    
    
   
}