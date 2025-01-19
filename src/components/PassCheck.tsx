import { Buffer } from 'buffer';
import { ChangeEvent, useState } from 'react';
import crypto from 'crypto-js';
import main from '../assets/main.svg';
import example from '../assets/ejemplo.svg';
import InfoSection from './InfoSection';
import {sectionsData} from './sections';

function PassCheck() {

  const [passCheckValues, setPassCheckValues] = useState({
				encodedValue: '',
				reduceValue: '',
				encriptValue: ''
	});

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {

    const text = event.target.value;
    const encodedString = Buffer.from(text).toString('base64');
    const reduceString = crypto.SHA256(text);
    const encriptString = crypto.AES.encrypt(encodedString, "secretKey");    

    setPassCheckValues({
      ...passCheckValues,
      encodedValue: event.target.value == "" ? "" : encodedString,
      reduceValue: event.target.value == "" ? "" : reduceString.toString(),
      encriptValue: event.target.value == "" ? "" : encriptString.toString()
    });
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

      <div>
      {sectionsData.map((section, index) => (
        <InfoSection
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
        />
      ))}
      </div>

      <section className='example'>
          <div className="text-container">
            <h2>Hora de unir lo explicado con un ejemplo practico:</h2>
            <p>En el siguiente imput ingresa el texto que quieras y se codificara, encriptara y reduccira a modo de ejemplo</p>

            <input type="text" onChange={onChange} />
            <p>Texto encriptado: {passCheckValues.encriptValue} </p>
            <p>Texto codificado: {passCheckValues.encodedValue}</p>
            <p>Texto reduccido: {passCheckValues.reduceValue}</p>
          </div>
          <div className="img-container">
            <img src={example} />
          </div>
      </section>
    </div>
  );
}

export default PassCheck;
