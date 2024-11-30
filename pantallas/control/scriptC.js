import { controllu } from "./controllu";
window.onload = function () {
  const tableBody = document.getElementById('userTableBody');
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  // Cargar los lugares desde controlu y generar filas de la tabla
  function cargarTabla() {
    // Limpiar la tabla antes de agregar los nuevos resultados
    tableBody.innerHTML = '';

    controllu.listalugares.forEach(lugar => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${lugar.ciudad}</td>
        <td>${lugar.estado}</td>
        <td>${lugar.telefono}</td>
        <td>${lugar.estado_act}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Filtrar lugares según el texto ingresado
  searchButton.addEventListener('click', function() {
    const searchQuery = searchInput.value.toLowerCase(); // Obtener el texto del input
    const rows = document.querySelectorAll('#userTableBody tr'); // Obtener todas las filas de la tabla

    rows.forEach(row => {
      const cells = row.getElementsByTagName('td'); // Obtener todas las celdas de la fila
      const ciudad = cells[0].textContent.toLowerCase(); // Ciudad
      const estado = cells[1].textContent.toLowerCase(); // Estado
      const telefono = cells[2].textContent.toLowerCase(); // Teléfono
      const estado_act = cells[3].textContent.toLowerCase(); // estado actual de la compa;ia

      // Verifica si el texto de búsqueda coincide con la ciudad, estado o teléfono
      if (ciudad.includes(searchQuery) || estado.includes(searchQuery) || telefono.includes(searchQuery)) {
        row.style.display = ''; // Mostrar fila si coincide
      } else {
        row.style.display = 'none'; // Ocultar fila si no coincide
      }
    });
  });

  // Agregar un nuevo lugar (simulando una entrada de formulario)
  document.getElementById('newUserButton').addEventListener('click', () => {
    const ciudad = prompt("Ingresa la ciudad:");
    const estado = prompt("Ingresa el estado:");
    const telefono = prompt("Ingresa el teléfono:");
    const estado_act = prompt("Ingresa el estado actaul de la empresa:");

    if (ciudad && estado && telefono && estado_act) {
      // Llamar a la función para agregar el lugar
      controlu.agregar(ciudad, estado, telefono && estado_act);
      cargarTabla(); // Volver a cargar la tabla con los nuevos datos
    }
  });

  // Cargar los datos iniciales al cargar la página
  cargarTabla();
};