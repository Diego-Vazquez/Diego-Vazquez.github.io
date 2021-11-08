import formatDate from 'https://cdn.jsdelivr.net/npm/@bitty/format-date@latest/dist/format-date.esm.js';
window.onload = () => {
    
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    var bt = document.getElementById("boton");
    bt.addEventListener("click",() => {
        let usuario = txt1.value;
        let pass = txt2.value;
        let arreglousuarios=[
            {
                "id":1,
                "nombre":"maquina de fuego",
                "imagen":"ludo.jpg",
                "username":"MaquinaDeFuego",
                "password":"123"
            },
            
            {
                "id":2,
                "nombre":"golosa 69",
                "imagen":"go6.jpg",
                "username":"golosa69",
                "password":"12345"
            },

            {
                "id":3,
                "nombre":"vivi",
                "imagen":"vivi.jpg",
                "username":"vivi",
                "password":"1234"
            }
        ];

        let encontro = false;
        arreglousuarios.forEach(fila =>{
            if(fila.username == usuario.trim() && fila.password == pass.trim()){
                encontro=true;
                localStorage.setItem("usuario",JSON.stringify(fila));
                let fecha = new Date();
                localStorage.setItem("fecha",formatDate(new Date(), 'YYYY-MM-DD-HH-mm-ss'));
            }
        });
        if(encontro){
            location.href = "./index.html";
            
        } else{ document.getElementById("error").innerHTML="Credenciales incorrectas";
            txt1.style.borderColor="#ff0000";
            txt2.style.borderColor="#ff0000";
        }   
    });

    txt1.onkeyup=()=>{
        txt1.style.borderColor="#fff";
        txt2.style.borderColor="#fff";
    };
    txt2.onkeyup=txt1.onkeyup;
}


