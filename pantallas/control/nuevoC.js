document.getElementById('saveButton').addEventListener('click', function () {
    const ciudad = document.getElementById('ciudad').value;
    const estado = document.getElementById('estado').value;
    const telefono = document.getElementById('telefono').value;
    const estado_act = document.getElementById('estado_act').value;
  
    window.location.href = `pantallaC.html?ciudad=${ciudad}&estado=${estado}&telefono=${telefono}&estado_act=${estado_act}`;
  });
  