import { controlf } from './controlf.js';

document.getElementById('saveButton').addEventListener('click', function () {
  const nombreE = document.getElementById('nombreE').value;
  const descripcion = document.getElementById('descripcion').value;
  const fecha = document.getElementById('fecha').value;

  controlf.agregar(nombreE,descripcion,fecha);

  window.location.href = `pantallaF.html?nombreE=${encodeURIComponent(nombreE)}&descripcion=${encodeURIComponent(descripcion)}&fecha=${encodeURIComponent(fecha)}`;
});
