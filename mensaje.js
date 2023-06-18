const formPost = document.getElementById('postMensaje');

formPost.addEventListener('submit', async(e) => {
  e.preventDefault();
  let mensaje = '';
  const nombre = e.target.nombres.value;
  const correo = e.target.email.value;
  const asunto = e.target.asunto.value;
  const msj = e.target.msj.value;
  //console.log([nombre, correo, asunto, msj]);

  await fetch('http://localhost:3000/msj', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "nombre": nombre,
      "correo": correo,
      "mensaje": msj,
      "asunto": asunto
    }),
    })
  .then((response) => response.json())
  .then((data) => {
    mensaje = data.mensaje;
  });  
  
  window.alert('Mensaje enviado');
  
});