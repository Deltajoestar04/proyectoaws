document.getElementById('saveButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const telefono = document.getElementById('telefono').value;
    const puesto = document.getElementById('puesto').value;
  
    window.location.href = `pantalla.html?usuario=${username}&telefono=${telefono}&posicion=${puesto}`;
  });
  