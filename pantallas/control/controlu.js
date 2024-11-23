class user {
    constructor(iduser, username, password, telefono, puesto) {
      this.iduser = iduser;
      this.username = username;
      this.password = password;
      this.telefono = telefono;
      this.puesto = puesto;
    }
  
    getIduser() {
      return this.iduser;
    }
  
    getusername() {
      return this.username;
    }
  }
  
  class controlu {
    static listausers = [];
    static codigoAuto = 1;
  
    static buscar(codigo) {
      return this.listausers.find(user => user.getIduser() === codigo) || null;
    }
  
    static buscarPorNombre(username) {
      return this.listausers.find(user =>
        user.getusername().toLowerCase().includes(username.toLowerCase())
      ) || null;
    }
  
    static buscarIndice(user) {
      return this.listausers.indexOf(user);
    }
  
    static agregar(username, password, telefono, puesto) {
      const nuevou = new user(
        this.codigoAuto++, username, password, telefono, puesto
      );
      this.listausers.push(nuevou);
    }
  
    static editar(idusers, user) {
      const indice = this.listausers.findIndex(c => c.getIduser() === idusers);
      if (indice !== -1) {
        this.listausers[indice] = user;
      }
    }
  
    static listar() {
      return this.listausers.map(user => user.getusername());
    }
  
    static eliminar(cliente) {
      const indice = this.buscarIndice(cliente);
      if (indice !== -1) {
        this.listausers.splice(indice, 1);
      }
    }
  
    static listarClientes() {
      return this.listausers;
    }
  
    obtenerTodos() {
      return controlu.listausers;
    }
  }
  
  // Inicialización estática de usuarios
  controlu.listausers.push(new user(
    controlu.codigoAuto++, 
    "Juan Pérez", 
    "12345", 
    5512345678, 
    "Super intendente"
  ));
  
  controlu.listausers.push(new user(
    controlu.codigoAuto++, 
    "María López", 
    "qwert", 
    5519876543, 
    "Trabajador"
  ));
  
  controlu.listausers.push(new user(
    controlu.codigoAuto++, 
    "Carlos", 
    "sexo", 
    5511122233, 
    "Existe"
  ));

  
  
  export { user, controlu };
  