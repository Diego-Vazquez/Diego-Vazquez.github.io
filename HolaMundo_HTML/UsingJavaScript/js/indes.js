import formatDate from 'https://cdn.jsdelivr.net/npm/@bitty/format-date@latest/dist/format-date.esm.js';
window.onload = () =>{
    let usuario =  JSON.parse(localStorage.getItem("usuario"));
    document.getElementById("imgUser").src="./img/"+usuario.imagen;
    let arrayTw=[];
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET","./js/tweets.json","true");
    xobj.onreadystatechange=()=>{
        if(xobj.readyState == 4 && xobj.status == "200"){
            arrayTw=JSON.parse(xobj.responseText);
            console.log(arrayTw);
            crearPost();
        }
    };
    xobj.send(null); 
    //document.getElementById("usuario").innerHTML="Hola "+usuario.nombre;

    let txtTweet = document.getElementById("txtTweet");
    let btnTweet = document.getElementById("btnTweet");
    btnTweet.addEventListener("click",()=>{
        if(txtTweet.value.trim() != ""){
            let obj = {
                id:arrayTw.length,
                img:usuario.imagen,
                nombre:usuario.nombre,
                tweet:txtTweet.value,
                username:usuario.username,
                fecha:formatDate(new Date(), 'YYYY-MM-DD-HH-mm-ss'),
                retweets:0,
                likes:0,
                comentarios:[
                ]
            };
            arrayTw.push(obj);
            crearPost();
            txtTweet.value="";
        }
    });

    txtTweet.addEventListener("keyup",()=>{

    });

    function crearPost(datos){
        var todo="";
        arrayTw.forEach(el=>{
            todo+=`<div class="post">
            <div>
                <img src="./img/${el.img}" alt="" class="imgUser">
            </div>
            <div>
                <h2> 
                    <span>${el.nombre}</span>
                    <span>@${el.username}</span>
                </h2>
                <div class="textTweet">
                    ${el.tweet}
                </div>
            </div>
        </div>
        ${crearSubPost(el.comentarios)}`;
        document.getElementById("posts").innerHTML=todo;      
        });
    }

     function crearSubPost(dato){
        var todo="";
        if(dato.length>0){
            dato.forEach(e=>{
                todo+=`<div id="subpost" class="post">
                <div>
                    <img src="./img/${e.img}" alt="" class="imgUser">
                </div>
                <div>
                    <h2> 
                        <span>${e.nombre}</span>
                        <span>@${e.username}</span>
                    </h2>
                    <div class="textTweet">
                        ${e.comentario}
                    </div>
                </div>
            </div>`
            });
        }  
        return todo;
    }
}