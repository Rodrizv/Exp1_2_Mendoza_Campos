function login(){
    var user, password

    user = document.getElementById("correo").value;
    password = document.getElementById("contrasena").value;

    if( user == "admin@caosnews.cl" && password == "caosnews"){
        alert("Iniciaste Sesion!")
    } else{
        alert("Usuario o Contraseña Incorrectos")
    }
}


function CrearCarta(){
    var genero="";
    var a=document.getElementById("rut").value;
    var b=document.getElementById("nom").value;
    var c=document.getElementById("apeP").value;
    var d=document.getElementById("apeM").value;
    var e=document.getElementById("edad").value;
    var f=parseInt(document.getElementById("genero").value);
    var n=document.getElementById("fecha").value;
   
   
        if (f===1){
        genero='Mujer';
        }
        if (f===2){
        genero='Hombre';
        }
        if (f===3){
        genero='Otro Genero';
        }

    var cadena= "Postulación Apoyo Ambiental: \n" 
                +"Rut: " + a + "\n" + "Nombre: " + b + "\n"+ "Ap. Paterno: " + c 
                + "\n" + "Ap. Materno: "+ d + "\n" + "Edad: " + e 
                + "\n" + "Fecha de nacimiento: " + n
                + "\n" + "Genero: " + genero;  
                
    document.getElementById("carta").value=cadena;
}