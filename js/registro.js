window.addEventListener("load", iniciar);

function iniciar() {
    const formulario = document.getElementById("registro");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const fechaInicio = document.getElementById("fechaInicio");
    const errorPassword = document.getElementById("errorPassword");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        errorPassword.textContent = "";

        if (password1.value !== password2.value) {
            errorPassword.textContent = "Las contraseñas deben coincidir";
            password2.focus();
            return;
        }

        if (fechaInicio.value) {
            let hoy = new Date();
            hoy.setHours(0, 0, 0, 0);
            let fechaUsuario = new Date(fechaInicio.value);
            if (fechaUsuario < hoy) {
                alert("La fecha debe ser hoy o futura");
                fechaInicio.focus();
                return;
            }
        }

        alert("Formulario enviado correctamente");
    });

    password1.addEventListener("input", function () {
        errorPassword.textContent = "";
    });

    password2.addEventListener("input", function () {
        if (password1.value !== password2.value) {
            errorPassword.textContent = "Las passwords deben coincidir";
        } else {
            errorPassword.textContent = "";
        }
    });
}