import { Buffer } from 'buffer';
import { useState } from 'react';
import crypto from 'crypto-js';
import main from '../assets/main.svg';
import hash from '../assets/hash.svg';
import encriptacion from '../assets/encriptacion.svg';
import codificacion from '../assets/codificacion.svg';
import ejemplo from '../assets/ejemplo.svg';


function PassCheck() {
  const [encodedValue, setEncodedValue] = useState('');
  const [reduceValue, setReducepValue] = useState('');
  const [encripValue, setEncripValue] = useState('');

  
  const onChange = (evento: any) => {

    const text = evento.target.value;
    const encodedString = Buffer.from(text).toString('base64');
    const reduceString = crypto.SHA256(text);
    const encriptString = crypto.AES.encrypt(encodedString, "secretKey");

    setEncodedValue(evento.target.value == "" ? "" : encodedString);
    setReducepValue(evento.target.value == "" ? "" : reduceString.toString());
    setEncripValue(evento.target.value == "" ? "" : encriptString.toString());
  };

  return (
    <div className="container">

      <div className='header'>
        <div className="text-container">
          <h1>¡Protegiendo tu web: Encriptación, Codificación y Hashing!</h1>
          <p>En el mundo digital actual, la seguridad web es de suma importancia. Los datos confidenciales, como contraseñas e información personal, deben estar protegidos contra accesos no autorizados. Aquí es donde entran en juego la encriptación, la codificación y el hashing, tres herramientas esenciales para la seguridad web.</p>
        </div>
        <div className="img-container">
          <img src={main} />
        </div>
      </div>


      <section className='encriptacion'>
        <div className="text-container">
          <h2>Encriptación: ¿Qué es y cómo funciona?</h2>
          <p>La encriptación se utiliza para proteger datos durante su transmisión, como en formularios web o inicios de sesión. SSL/TLS es un protocolo de seguridad común que utiliza técnicas de encriptación para garantizar la confidencialidad, integridad y autenticación de los datos.</p>
          <p>Los datos confidenciales se transforman en un formato indescifrable, incluso para aquellos que tienen acceso a los datos originales. La encriptación utiliza algoritmos complejos y claves secretas para cifrar y descifrar datos. Este proceso es reversible, lo que significa que los datos originales pueden recuperarse a partir de la versión cifrada con la clave correcta.</p>
          <p>En este ejemplo, utilizaremos AES (Advanced Encryption Standard) para cifrar un mensaje de ejemplo y demostrar el proceso de encriptación.</p>
        </div>
        <div className="img-container">
          <img src={encriptacion} />
        </div>
      </section>



      <section className='codificacion'>
        <div className="text-container">
          <h2>Codificación: Conversión de datos sin alterar su contenido</h2>
          <p>La codificación es la transformación de datos de un formato a otro, sin alterar su contenido original. Se utiliza para que los datos sean interpretados por diferentes sistemas o para su transmisión a través de canales no seguros.</p>
          <p>Un ejemplo común de codificación es la codificación URL, que se utiliza para convertir caracteres especiales en cadenas de texto que puedan ser interpretadas por navegadores web y servidores. Esto es esencial para enviar datos a través de formularios web o URLs. Tambien es utilizado para el guarado de imagenes codificandolas a base64</p>
          <p>En este ejemplo, codificaremos un fragmento de texto utilizando la codificación base64.</p>
        </div>
        <div className="img-container">
          <img src={codificacion} />
        </div>
      </section>



      <section className='reduccion'>
        <div className="text-container">
          <h2>Reducción (hash): Verificación de integridad y autenticidad</h2>
          <p>Convierte datos de cualquier tamaño en una cadena de texto de longitud fija llamada "hash". No es reversible, lo que significa que no se puede recuperar el original a partir del mismo.</p>
          <p>Se utiliza para verificar la integridad de los datos y detectar alteraciones, si los datos se modifican, incluso levemente, el hash resultante será diferente. Se utiliza comúnmente para: Asegurar la integridad de descargas de archivos, verificar la autenticidad de software o almacenar contraseñas de forma segura.</p>
          <ul>
            <li>Asegurar la integridad de descargas de archivos, verificando que el archivo descargado coincida con el original.</li>
            <li>Verificar la autenticidad de software, comprobando que el software descargado no haya sido modificado o corrompido.</li>
            <li>Almacenar contraseñas de forma segura, ya que el hash no revela la contraseña original.</li>
          </ul>
          <p>En este ejemplo usaremos SHA256</p>
        </div>
        <div className="img-container">
          <img src={hash} />
        </div>
      </section>


      <section className='ejemplo'>
          <div className="text-container">
            <h2>Hora de unir lo explicado con un ejemplo practico:</h2>
            <p>En el siguiente imput ingresa el texto que quieras y se codificara, encriptara y reduccira a modo de ejemplo</p>

            <input type="text" onChange={onChange} />
            <p>Texto encriptado: {encripValue} </p>
            <p>Texto codificado: {encodedValue}</p>
            <p>Texto reduccido: {reduceValue}</p>
          </div>
          <div className="img-container">
            <img src={ejemplo} />
          </div>
      </section>
    </div>
  );
}

export default PassCheck;
