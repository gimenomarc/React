import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Iniciar sesión</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="Introduce tu correo electrónico" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Introduce tu contraseña" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
              </form>
            </div>
            <div className="card-footer text-center">
              <a href="#">¿Olvidaste tu contraseña?</a>
              <br />
              <span>¿No tienes una cuenta? </span>
              <a href="#">Regístrate aquí</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

