function loadHeader() {
    const headerHTML = `
      <header style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background-color: #f4f4f4; border-bottom: 1px solid #ddd;">
        <h1 style="margin: 0; font-size: 1.5em;">Mi Aplicación</h1>
        
        <div>
          <button style="margin-right: 10px; padding: 8px 15px; font-size: 0.9em;" id="loginButton">Iniciar Sesión</button>
          <button style="padding: 8px 15px; font-size: 0.9em;" id="registerButton">Registrarse</button>
        </div>
      </header>
    `;
  
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }
  
  loadHeader();
  