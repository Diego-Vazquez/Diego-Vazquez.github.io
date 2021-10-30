window.onload = () => {
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    var bt = document.getElementById("boton");
    bt.addEventListener("click",() => {
        let usuario = txt1.value;
        let pass = txt2.value;
        if(usuario.trim() == "admin" && pass.trim() == "123"){
            alert("Listo");
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


