export const controlf={
    listfecha:[
        {nombreE:"Rifa Intercambio navideño",descripcion:"UN pequeña rifa para el intercambio dee invierno",fecha:"10/11/2024"},
        {nombreE:"Posada e Intercambio navideño",descripcion:"Fiesta navideña donde se organizara el intercambio dee invierno",fecha:"20/12/2024"},
        {nombreE:"Dias libres de invierno",descripcion:"Dias libres de invierno",fecha:"21/12/2024-12/01/2025"},

    ],
    agregar: function(nombreE,descripcion,fecha){
        this.listfecha.push({nombreE,descripcion,fecha});
    }
};