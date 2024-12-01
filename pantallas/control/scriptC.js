import { controlC } from './controlC.js';

console.log("Lista inicial de lugares:", controlC.listalugares);

window.onload = function () {
  const tableBody = document.getElementById('userTableBody'); // ID correcto

  // Verifica que `tableBody` exista
  if (!tableBody) {
    console.error("No se encontró el elemento con ID 'userTableBody'");
    return;
  }

  // Cargar lugares desde localStorage o usar los predeterminados
  const lugares = JSON.parse(localStorage.getItem('lugares')) || controlC.listalugares;

  if (lugares.length === 0) {
    console.warn("La lista de lugares está vacía");
  }

  // Generar filas dinámicamente
  lugares.forEach(lugar => {
    const row = document.createElement('tr'); // Crear una fila

    // Crear columnas y añadir datos
    row.innerHTML = `
      <td>${lugar.ciudad}</td>
      <td>${lugar.estado}</td>
      <td>${lugar.telefono}</td>
      <td>${lugar.estado_act}</td>
    `;

    tableBody.appendChild(row); // Añadir la fila a la tabla
  });

  console.log("Filas generadas en la tabla");

  // Obtener los parámetros de la URL y agregar el nuevo lugar si existen
  const params = new URLSearchParams(window.location.search);
  const ciudad = params.get('ciudad');
  const estado = params.get('estado');
  const telefono = params.get('telefono');
  const estado_act = params.get('estado_act');

  if (ciudad && estado && telefono && estado_act) {
    // Agregar el nuevo lugar a la lista
    controlC.agregar(ciudad, estado, telefono, estado_act);

    // Actualizar localStorage con el nuevo lugar
    const updatedLugares = controlC.listalugares;
    localStorage.setItem('lugares', JSON.stringify(updatedLugares));

    // Volver a cargar la tabla con el nuevo lugar
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${ciudad}</td>
      <td>${estado}</td>
      <td>${telefono}</td>
      <td>${estado_act}</td>
    `;
    tableBody.appendChild(newRow);
    console.log(`Nuevo lugar agregado: ${ciudad}, ${estado}, ${telefono}, ${estado_act}`);
  }
};

// Funcionalidad de eliminación y persistencia
document.getElementById('userTableBody').addEventListener('dblclick', function(event) {
  if (event.target.tagName.toLowerCase() === 'td') {
    const confirmDelete = confirm("¿Estás seguro de que deseas borrar este lugar?");
    if (confirmDelete) {
      const row = event.target.parentElement;

      // Obtener la ciudad del lugar a eliminar
      const ciudadToDelete = row.cells[0].textContent;

      // Eliminar el lugar de la lista
      const updatedLugares = controlC.listalugares.filter(lugar => lugar.ciudad !== ciudadToDelete);
      controlC.listalugares = updatedLugares;

      // Actualizar el localStorage
      localStorage.setItem('lugares', JSON.stringify(updatedLugares));

      // Eliminar la fila de la tabla
      row.remove();
    }
  }
});
