class users {
    constructor(iduser, username, password, telefono, puesto) {
        this.iduser = iduser;
        this.username = username;
        this.password = password;
        this.telefono = telefono;
        this.puesto = puesto;
    }

    get iduser() {
        return this.iduser;
    }

    get username() {
        return this.username;
    }

    get password() {
        return this.password;
    }

    get telefono() {
        return this.telefono;
    }

    get puesto() {
        return this.puesto;
    }


    // Setters
    set iduser(value) {
        this.iduser = value;
    }

    set username(value) {
        this.username = value;
    }

    set password(value) {
        this.password = value;
    }

    set telefono(value) {
        this.telefono = value;
    }

    set puesto(value) {
        this.puesto = value;
    }


}

