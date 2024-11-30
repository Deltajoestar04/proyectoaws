export const controllu={
    listalugares:[ 
        {ciudad:"Guaymas",estado:"Sonora",telefono:"4357878453",estado_act: "abierto"},
        {ciudad:"Hermosillo",estado:"Sonora",telefono:"35643333",estado_act: "abierto"},
        {ciudad:"Guadalajara",estado:"Jalisco",telefono:"84573456",estado_act: "cerrado"},
        {ciudad:"Culiacan",estado:"Sinaloa",telefono:"734645235",estado_act: "abierto"},
    ],
        agregar:function(ciudad,estado,telefono,estado_act){
          this.listalugares.push({ciudad,estado,telefono,estado_act});
        }
};