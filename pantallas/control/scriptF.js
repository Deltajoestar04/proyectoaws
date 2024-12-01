import { controlf } from './controlf.js';

console.log("Lista de eventos inicial:", controlf.listfecha);

window.onload = function () {
  const tableBody = document.getElementById('eventTableBody'); // ID para la tabla de eventos

  // Verifica que `tableBody` exista
  if (!tableBody) {
    console.error("No se encontró el elemento con ID 'eventTableBody'");
    return;
  }

  // Cargar eventos desde localStorage o usar los predeterminados
  const events = JSON.parse(localStorage.getItem('events')) || controlf.listfecha;

  if (events.length === 0) {
    console.warn("La lista de eventos está vacía");
  }

  // Generar filas dinámicamente
  events.forEach(event => {
    const row = document.createElement('tr'); // Crear una fila

    // Crear columnas y añadir datos
    row.innerHTML = `
      <td>${event.nombreE}</td>
      <td>${event.descripcion}</td>
      <td>${event.fecha}</td>
    `;

    tableBody.appendChild(row); // Añadir la fila a la tabla
  });

  console.log("Filas generadas en la tabla");

  // Obtener los parámetros de la URL y agregar el nuevo evento si existen
  const params = new URLSearchParams(window.location.search);
  const nombreE = params.get('nombreE');
  const descripcion = params.get('descripcion');
  const fecha = params.get('fecha');

  if (nombreE && descripcion && fecha) {
    // Agregar el nuevo evento a la lista
    controlf.agregar(nombreE, descripcion, fecha);

    // Actualizar localStorage con el nuevo evento
    const updatedEvents = controlf.listfecha;
    localStorage.setItem('events', JSON.stringify(updatedEvents));

    // Volver a cargar la tabla con el nuevo evento
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${nombreE}</td>
      <td>${descripcion}</td>
      <td>${fecha}</td>
    `;
    tableBody.appendChild(newRow);
    console.log(`Nuevo evento agregado: ${nombreE}, ${descripcion}, ${fecha}`);
  }
};

// Funcionalidad de eliminación y persistencia
document.getElementById('eventTableBody').addEventListener('dblclick', function(event) {
  if (event.target.tagName.toLowerCase() === 'td') {
    const confirmDelete = confirm("¿Estás seguro de que deseas borrar esta información?");
    if (confirmDelete) {
      const row = event.target.parentElement;

      // Obtener el nombre del evento a eliminar
      const eventToDelete = row.cells[0].textContent;

      // Eliminar el evento de la lista
      const updatedEvents = controlf.listfecha.filter(event => event.nombreE !== eventToDelete);
      controlf.listfecha = updatedEvents;

      // Actualizar el localStorage
      localStorage.setItem('events', JSON.stringify(updatedEvents));

      // Eliminar la fila de la tabla
      row.remove();
    }
  }
});
