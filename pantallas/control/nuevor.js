document.getElementById('saveButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const telefono = document.getElementById('telefono').value;
    const puesto = document.getElementById('puesto').value;
  
    // Redirigir a pantalla.html con los parámetros en la URL
    window.location.href = `pantalla.html?usuario=${username}&telefono=${telefono}&posicion=${puesto}`;
  });
  