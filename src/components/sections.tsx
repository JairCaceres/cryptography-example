import hash from '../assets/hash.svg';
import encryption from '../assets/encriptacion.svg';
import coding from '../assets/codificacion.svg';

export const sectionsData = [
  {
    title: "Encriptación: ¿Qué es y cómo funciona?",
    description: "La encriptación se utiliza para proteger datos durante su transmisión, como en formularios web o inicios de sesión. SSL/TLS es un protocolo de seguridad común que utiliza técnicas de encriptación para garantizar la confidencialidad, integridad y autenticación de los datos." +
    "Los datos confidenciales se transforman en un formato indescifrable, incluso para aquellos que tienen acceso a los datos originales. La encriptación utiliza algoritmos complejos y claves secretas para cifrar y descifrar datos. Este proceso es reversible, lo que significa que los datos originales pueden recuperarse a partir de la versión cifrada con la clave correcta." +
    "En este ejemplo, utilizaremos AES (Advanced Encryption Standard) para cifrar un mensaje de ejemplo y demostrar el proceso de encriptación.",
    image: encryption
  },
  {
    title: "Codificación: Conversión de datos sin alterar su contenido",
    description: "La codificación es la transformación de datos de un formato a otro, sin alterar su contenido original. Se utiliza para que los datos sean interpretados por diferentes sistemas o para su transmisión a través de canales no seguros." +
    "Un ejemplo común de codificación es la codificación URL, que se utiliza para convertir caracteres especiales en cadenas de texto que puedan ser interpretadas por navegadores web y servidores. Esto es esencial para enviar datos a través de formularios web o URLs. Tambien es utilizado para el guarado de imagenes codificandolas a base64",
    image: coding
  },
  {
    title: "Reducción (hash): Verificación de integridad y autenticidad",
    description: "Convierte datos de cualquier tamaño en una cadena de texto de longitud fija llamada &quot;hash&quot;. No es reversible, lo que significa que no se puede recuperar el original a partir del mismo. Se utiliza para verificar la integridad de los datos y detectar alteraciones, si los datos se modifican, incluso levemente, el hash resultante será diferente. Se utiliza comúnmente para: Asegurar la integridad de descargas de archivos, verificar la autenticidad de software o almacenar contraseñas de forma segura." +
    "<ul>" +
    "<li>Asegurar la integridad de descargas de archivos, verificando que el archivo descargado coincida con el original.</li>" +
    "<li>Verificar la autenticidad de software, comprobando que el software descargado no haya sido modificado o corrompido.</li>" +
    "<li>Almacenar contraseñas de forma segura, ya que el hash no revela la contraseña original.</li>" +
    "</ul>" +
    "En este ejemplo usaremos SHA256",
    image: hash
  }
];