import { controlu } from './controlu.js';

console.log("Lista de usuarios inicial:", controlu.listausers);

window.onload = function () {
  const tableBody = document.getElementById('userTableBody'); // ID correcto

  // Verifica que `tableBody` exista
  if (!tableBody) {
    console.error("No se encontró el elemento con ID 'userTableBody'");
    return;
  }

  // Cargar usuarios desde localStorage o usar los predeterminados
  const users = JSON.parse(localStorage.getItem('users')) || controlu.listausers;

  if (users.length === 0) {
    console.warn("La lista de usuarios está vacía");
  }

  // Generar filas dinámicamente
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

  console.log("Filas generadas en la tabla");

  // Obtener los parámetros de la URL y agregar el nuevo usuario si existen
  const params = new URLSearchParams(window.location.search);
  const username = params.get('usuario');
  const telefono = params.get('telefono');
  const puesto = params.get('posicion');

  if (username && telefono && puesto) {
    // Agregar el nuevo usuario a la lista
    controlu.agregar(username, 'defaultPassword', telefono, puesto);

    // Actualizar localStorage con el nuevo usuario
    const updatedUsers = controlu.listausers;
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Volver a cargar la tabla con el nuevo usuario
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${username}</td>
      <td>${telefono}</td>
      <td>${puesto}</td>
    `;
    tableBody.appendChild(newRow);
    console.log(`Nuevo usuario agregado: ${username}, ${telefono}, ${puesto}`);
  }
};

// Funcionalidad de eliminación y persistencia
document.getElementById('userTableBody').addEventListener('dblclick', function(event) {
  if (event.target.tagName.toLowerCase() === 'td') {
    const confirmDelete = confirm("¿Estás seguro de que deseas borrar esta información?");
    if (confirmDelete) {
      const row = event.target.parentElement;

      // Obtener el nombre del usuario a eliminar
      const usernameToDelete = row.cells[0].textContent;

      // Eliminar el usuario de la lista
      const updatedUsers = controlu.listausers.filter(user => user.username !== usernameToDelete);
      controlu.listausers = updatedUsers;

      // Actualizar el localStorage
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      // Eliminar la fila de la tabla
      row.remove();
    }
  }
});
