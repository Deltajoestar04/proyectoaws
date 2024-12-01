export const controlu = {
  listausers: [
    { username: "Juan Pérez", telefono: "1234567890", puesto: "Administrador" },
    { username: "Ana Gómez", telefono: "0987654321", puesto: "Trabajador" },
    { username: "Leon Kenedi", telefono: "543345534", puesto: "Trabajador" },
    { username: "Chinga Esperma", telefono: "768876876", puesto: "Trabajador" },
  ],
  agregar: function (username, password, telefono, puesto) {
    this.listausers.push({ username, telefono, puesto });
  }

};
