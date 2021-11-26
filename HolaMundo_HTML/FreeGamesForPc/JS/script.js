window.onload=()=>{
    //Proyecto escolar
    var html="";
    var cardstring = [];
    var games = document.getElementById("games");
    let allgamesaux = [];
    let elements = [];



    const url = " https://www.gamerpower.com/api/giveaways?type=game";
   axios.get(url)
   .then((response)=>{
    elements = response.data;
    allgamesaux = [...elements];
    platforms(elements);
    const num = filasnum(elements);
    for(var x = 0; x<num;x++){
       html += crearfila(elements);
    }
    games.innerHTML = html;
   })
   .catch((error)=>{
       console.log(error);
   })
   .then(()=>{

   });

   var combobox = document.getElementById("combo");
   const platforms = (elements) => {
    let platfrms = [];
    elements.forEach((e)=>{
        if(!platfrms.includes(e.platforms)){
            platfrms.push(e.platforms);
        }
    });
    var options = '<option value="Todas">Todas</option>';
    platfrms.forEach((plt)=>{
        options += `<option value="${plt}">${plt}</option>`;
    });
    combobox.innerHTML = options;
};

   const filasnum = (elements) => {return Math.ceil(elements.length/4);};
   
   const crearfila = (elements) => {
    var tempcards = [];
       for(var i = 0; i<4; i++){
           if(elements.length==0){
               break;
           }else{
            tempcards.push(elements.pop());
           }
       }
       var htmlcards = "";
       tempcards.forEach((item)=>{
           htmlcards += crearCard(item);
       });
       var htmlrow = `<div class="row">${htmlcards}
       </div>`;
       return htmlrow; 
   };

   const crearCard = (item)=>{
       cardstring.push(`<div class="card">
       <img src="${item.image}" alt="" onerror="this.src='./default.jpg';">
       <h2>${item.title}</h2>
       <p>Plataforma:<br>${item.platforms}</p>
       <p><br>La oferta termina:</p>
       <p>${item.end_date}</p>
       </div>`);
        return `<div class="card">
        <img src="${item.image}" alt="" onerror="this.src='./default.jpg';">
        <h2>${item.title}</h2>
        <p>Plataforma:<br>${item.platforms}</p>
        <p><br>La oferta termina:</p>
        <p>${item.end_date}</p>
        </div>`;
   }

   combobox.addEventListener('change',(e)=>{
       var seleccion = e.target.value;
       if(seleccion=="Todas"){
        games.innerHTML = html;
       }else{
           var newhtml = "";
           var elementsaux = [];
           elements = [...allgamesaux];
           let n=elements.length;
           elements.forEach((item)=>{
            if(item.platforms.includes(seleccion)){
                elementsaux.push(item);
            }
           });
           elements=[];
           let num = filasnum(elementsaux);
           for(var x = 0; x<num;x++){
              newhtml += crearfila(elementsaux);
           }
           games.innerHTML = newhtml;
       }
   });

}