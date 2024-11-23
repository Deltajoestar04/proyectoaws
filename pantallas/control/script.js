import { user, controlu } from './controlu.js';

console.log(controlu.listausers);

window.onload = function () {
  const tableBody = document.getElementById('userTableBody'); // ID correcto

  // Obtener la lista de usuarios desde controlu.listausers
  const users = controlu.listausers;

  users.forEach(user => {
    const row = document.createElement('tr'); // Crear una fila

    // Crear columnas y añadir datos
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.telefono}</td>
      <td>${user.puesto}</td>
    `;

    tableBody.appendChild(row); // Añadir la fila a la tabla
  });

  // Obtener los parámetros de la URL y agregar el nuevo usuario si existen
  const params = new URLSearchParams(window.location.search);
  const username = params.get('usuario');
  const telefono = params.get('telefono');
  const puesto = params.get('posicion');

  if (username && telefono && puesto) {
    // Agregar el nuevo usuario a la lista
    controlu.agregar(username, 'defaultPassword', telefono, puesto); // Contraseña por defecto

    // Volver a cargar la tabla con el nuevo usuario
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${username}</td>
      <td>${telefono}</td>
      <td>${puesto}</td>`;
    tableBody.appendChild(newRow); // Añadir la fila a la tabla
  }
};

// Funcionalidad de búsqueda
document.getElementById('searchButton').addEventListener('click', function () {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const rows = document.querySelectorAll('#userTableBody tr');

  if (searchValue === '') {
    rows.forEach(row => {
      row.style.display = ''; // Muestra todas las filas si no hay búsqueda
    });
  } else {
    rows.forEach(row => {
      const name = row.cells[0].textContent.toLowerCase();
      row.style.display = name.includes(searchValue) ? '' : 'none';
    });
  }
});

// Redirigir a la pantalla de agregar usuario
document.getElementById('saveButton').addEventListener('click', function () {
  window.location.href = 'nuevor.html';
});

// Mensaje para la funcionalidad de borrar
document.getElementById('deleteButton').addEventListener('click', function () {
  if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
    // Función para eliminar el usuario
  }
});
