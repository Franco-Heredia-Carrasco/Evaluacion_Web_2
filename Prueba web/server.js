const Formulario = document.querySelector('#form form');
const botonEnviar = document.getElementById('Enviar');
const allInputs = document.querySelectorAll('#form input, #form textarea, #form select');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const Nombre = document.getElementById('Nombre').value;
    const Email = document.getElementById('Email').value;
    const Telefono = document.getElementById('Telefono').value;
    const lenguaje = document.getElementById('lang').value;
    const Puesto = document.getElementById('Puesto').value;
    const Mensaje = document.getElementById('Mensaje').value;


     const datosFormulario = {
        nombre: Nombre,
        email: Email,
        telefono: Telefono,
        lenguaje: lenguaje,
        puesto: Puesto,
        mensaje: Mensaje
    };

    fetch('Datos.json', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFormulario)
    })
    .then (respuesta=> {
        if (!respuesta.ok) throw new Error('Error en el servidor');
        return respuesta.json();
    })
    .then (datos => {
        console.log('Exito', datos);
        alert ('¡Datos enviados correctamente!');
        formulario.reset();
    })
    .catch (error => {
        console.error('Error:', error);
        alert('ERROR: no se pudo procesar el envio')
    });
});

botonEnviar.addEventListener('click', function() {
    Console.Log('El usuario hizo click en el boton enviar');
});

allInputs.forEach(campo => {
    campo.addEventListener('invalid', function() {
        this.style.borderColor = 'red';
        console.warn('El campo' + this.ID + ' es requerido y se debe rellenar');
    });

    campo.addEventListener('input', function() {
        this.style.borderColor = '';
    });
});