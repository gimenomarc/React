import React from 'react';
import './Registro.css';

function Registro() {
  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Registrarse</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input type="text" className="form-control" id="nombre" placeholder="Introduce tu nombre completo" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="Introduce tu correo electrónico" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Introduce tu contraseña" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirmar contraseña</label>
                  <input type="password" className="form-control" id="confirm-password" placeholder="Introduce de nuevo tu contraseña" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
