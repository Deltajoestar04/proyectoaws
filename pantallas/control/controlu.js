export const controlu = {
  listausers: [
    { username: "Juan Pérez", telefono: "1234567890", puesto: "Administrador" },
    { username: "Ana Gómez", telefono: "0987654321", puesto: "Usuario" },
    { username: "Leon Kenedi", telefono: "543345534", puesto: "Usuario" },
    { username: "Chinga Esperma", telefono: "768876876", puesto: "Usuario" },
  ],
  agregar: function (username, password, telefono, puesto) {
    this.listausers.push({ username, telefono, puesto });
  }
};
