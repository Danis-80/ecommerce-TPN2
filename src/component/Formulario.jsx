import "./Formulario.css"
export function Formulario() {
    return (
      <section>
        <h1>Ingresar</h1>
        <form className="Formulario">
          <input type="text" id="User" name="Usuario" placeholder="Ingresa tu Usuario" />
          <input type="password" id="Contraseña" name="Contraseña" placeholder="Ingresa tu Contraseña" />
          <button>Aceptar</button>
        </form>
      </section>
    );
  }
