const App = () => {
  // Guardar Datos del formulario
  const verificador = {
    name: "",
    lastName: "",
    email: "",
    password: "",
  };

  // Eliminar si una alerta ya existe
  function eliminarAlerta(contenedor, clase) {
    if (contenedor.querySelector(clase)) {
      contenedor.removeChild(contenedor.querySelector(clase));
    }
  }

  // Validar inputs
  const validator = (e) => {
    const valor = e.target.value;
    const elemento = e.target.id;
    const padreContenedor = e.target.parentNode;

    // Cambiar valor de cada input al ingresar datos en un input
    verificador[elemento] = valor;

    // Si un input no tiene valor
    if (!valor) {
      // Crear alerta
      const alerta = document.createElement("P");
      alerta.textContent = `El ${elemento} no puede estar vacío`;
      alerta.classList.add("error");

      // Agregar alerta
      padreContenedor.append(alerta);
      return;
    }

    if (valor) {
      // Eliminar alertas
      eliminarAlerta(padreContenedor, ".error");
    }
  };

  // Validar envio de form
  const enviar = (e) => {
    e.preventDefault();
    const padreContenedor = document.getElementById("btn-container");

    // Array de valores de los inputs
    const valores = Object.values(verificador);

    // Si todos los inputs tienen valores distintos de vacio
    if (valores.every((valor) => valor !== "")) {
      // Eliminar alertas existentes
      eliminarAlerta(padreContenedor, ".error");
      eliminarAlerta(padreContenedor, ".alerta-enviado");

      // Crear alerta
      const enviado = document.createElement("P");
      enviado.textContent = "Se envió tu mensaje";
      enviado.classList.add("alerta-enviado");
      // Agregar alerta
      padreContenedor.append(enviado);

      setTimeout(() => {
        // Despues de 3 segundos quitar las alertas
        eliminarAlerta(padreContenedor, ".error");
        eliminarAlerta(padreContenedor, ".alerta-enviado");

        // Resetear Datos del formulario
        verificador.name = "";
        verificador.lastName = "";
        verificador.email = "";
        verificador.password = "";

        const form = document.querySelector(".formulario");
        form.reset();
      }, 3000);

      return;
    }

    // Eliminar alertas existentes
    eliminarAlerta(padreContenedor, ".error");
    eliminarAlerta(padreContenedor, ".alerta-enviado");

    // Crear alerta
    const enviado = document.createElement("P");
    enviado.textContent = "Verifica bien tus campos";
    enviado.classList.add("error");
    // Agregar alerta
    padreContenedor.append(enviado);

    setTimeout(() => {
      // Despues de 3 segundos quitar las alertas
      eliminarAlerta(padreContenedor, ".error");
      eliminarAlerta(padreContenedor, ".alerta-enviado");
    }, 3000);
  };

  return (
    <section className="container">
      <header className="description">
        <h1 className="description__title">Learn to code by watching others</h1>
        <p className="description__paragraph">
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
          understanding how developers think is invaluable.
        </p>
      </header>
      <div className="dates">
        <div className="dates__alerta">
          <p>
            <span className="dates__bold">Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>
        <form className="formulario" onSubmit={enviar}>
          <div>
            <input
              id="name"
              name="name"
              className="formulario__input"
              type="text"
              placeholder="Your Name"
              onChange={validator}
            />
          </div>
          <div>
            <input
              id="lastName"
              name="lastName"
              className="formulario__input"
              type="text"
              placeholder="Last-Name"
              onChange={validator}
            />
          </div>
          <div>
            <input
              id="email"
              name="email"
              className="formulario__input"
              type="text"
              placeholder="Email Address"
              onChange={validator}
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              className="formulario__input"
              type="password"
              placeholder="Password"
              onChange={validator}
            />
          </div>
          <div id="btn-container">
            <button type="submit" className="formulario__btn">
              Claim your free trial
            </button>
          </div>
          <p className="formulario__paragraph">
            By clicking the button, you are agreeing to our{" "}
            <a className="formulario__paragraph__link" href="#!">
              Terms and Services
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default App;
