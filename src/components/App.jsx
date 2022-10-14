const App = () => {
  const verificador = {
    name: "",
    lastName: "",
    email: "",
    password: "",
  };

  function eliminarAlerta(contenedor, clase) {
    if (contenedor.querySelector(clase)) {
      contenedor.removeChild(contenedor.querySelector(clase));
    }
  }

  const validator = (e) => {
    const valor = e.target.value;
    const elemento = e.target.id;
    const padreContenedor = e.target.parentNode;

    verificador[elemento] = valor;

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
      eliminarAlerta(padreContenedor, ".error");
    }
  };

  const enviar = (e) => {
    const padreContenedor = document.getElementById("btn-container");
    e.preventDefault();

    const valores = Object.values(verificador);

    if (valores.every((valor) => valor !== "")) {
      eliminarAlerta(padreContenedor, ".error");
      eliminarAlerta(padreContenedor, ".alerta-enviado");

      // Crear alerta
      const enviado = document.createElement("P");
      enviado.textContent = "Se envió tu mensaje";
      enviado.classList.add("alerta-enviado");
      // Agregar alerta
      padreContenedor.append(enviado);

      return;
    }
    eliminarAlerta(padreContenedor, ".error");
    eliminarAlerta(padreContenedor, ".alerta-enviado");

    // Crear alerta
    const enviado = document.createElement("P");
    enviado.textContent = "Verifica bien tus campos";
    enviado.classList.add("error");
    // Agregar alerta
    padreContenedor.append(enviado);
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
