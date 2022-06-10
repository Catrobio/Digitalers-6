var numeroMax = 3;

function arreglo(){
    
    //let persona = new Array('Juan',123456,'Buenos Aires',113052225,21);
    let persona = ['Juan',123456,'Buenos Aires',113052225,21];
    let tamaño =  persona.length;
    alert(tamaño);
    alert(persona[1]);
}

function objetos(){

    let compras = {
        nombreProducto : 'Teclado',
        idProducto : 270915,
        cantidad:1
    };

    let persona = {
        nombre : 'Juan',
        documento: 123456,
        ciudad: 'Buenos Aires',
        telefono : 113052225,
        edad : 21,
        facturas: [213021,212121,403021]
    };

    let factura = {
        compra : compras,
        cliente : persona
    };

    alert(persona.documento + persona.edad);
}

function cicloFor(){
    let persona = ['Juan', "perez",123456,'Buenos Aires',113052225,21];

    // Derecha a izquierda
    /*for(let i =3; i >= 0; i--){

        document.writeln(persona[i]);
    }*/

    //de izquierda a derecha
    for(let i = 0; i < persona.length;){
        //i = i +1;
        escribirValores(persona[i],i)
        i++;
    }
}

function cicloForeach(){
    //alert(numeroMax);
    let persona = ['Juan', "perez",123456,'Buenos Aires',113052225,21];
    //numeroMax = 4;
    persona.forEach(escribirValores);

    //otra forma
    /*persona.forEach(function(x,y){ 

        document.writeln(y + ": "+ x);
        
    });*/

    //alert(numeroMax);
}

function escribirValores(valor, indice){
    document.writeln(indice + ": "+ valor);
}

function recorrerObjetos(){
    let personas = [{
        nombre : 'Juan',
        documento: 123456,
        ciudad: 'Buenos Aires',
        telefono : 113052225,
        edad : 21,
        facturas: [213021,212121,403021]
    },
    {
        nombre : 'Francisco',
        documento: 654321,
        ciudad: 'CABA',
        telefono : 1131558,
        edad : 34,
        facturas: [213092,923037,405060]
    }
    ];      
    
    let html = "";

    for(let i = 0; i < personas.length; i++){

        html += "<tr><td>" + personas[i].nombre +" </td>";
        html += "<td>" + personas[i].documento +" </td>";        
        html += "<td>" + personas[i].ciudad +" </td></tr>"; 
    }

    document.getElementById("datos").innerHTML = html;
}
//Recorre el objeto con forech
function recorrerObjetos2(){
    let personas = [{
        nombre : 'Juan',
        documento: 123456,
        ciudad: 'Buenos Aires',
        telefono : 113052225,
        edad : 21,
        facturas: [213021,212121,403021]
    },
    {
        nombre : 'Francisco',
        documento: 654321,
        ciudad: 'CABA',
        telefono : 1131558,
        edad : 34,
        facturas: [213092,923037,405060]
    }
    ];    

    personas.forEach(escribirValoresTabla);    
}

function escribirValoresTabla(valor, indice){

    let = html = "<tr><td>" + valor.nombre +" </td>";
    html += "<td>" + valor.documento +" </td>";        
    html += "<td>" + valor.ciudad +" </td></tr>"; 
    
    // insertAdjacentHTML = Agrega html sin pisar el contenido que tiene previamente
    //El paramentro "afterend" quiere decir despues de cargar el elemento (el del id datos).
    //Otros parametros:
    //"beforebegin": Antes que el propio elemento.
    //"afterbegin": Justo dentro del elemento, antes de su primer elemento hijo.
    //"beforeend": Justo dentro del elemento, después de su último elemento hijo.

    document.getElementById("datos").insertAdjacentHTML("afterend",html);
}

recorrerObjetos2();
//recorrerObjetos();
//cicloForeach();
//cicloFor();
//objetos();
//arreglo();
