[![banner.png](https://i.postimg.cc/RZyJQ6GR/banner.png)](https://postimg.cc/FYbKhKMd)

# Proyecto n°5: "Aplicación web con React."

<p>
  
En este proyecto se dará a conocer la construcción de una aplicación web basada en el `consumo de una API pública` utilizando el lenguaje de programación en JavaScript implementado con `React` una librería Javascript de código abierto, que permite construir interfaces de usuario rápidas y dinámicas. Este trabajo está realizado en el editor de código Visual Studio Code y el consumo de datos se hizo con la API publica `https://aves.ninjas.cl/api/birds`. A continuación, se mostrarán los requisitos del proyecto y el paso a paso de cómo se realizó el sistema de votación en JavaScript.

</p>


------------


### Requisitos del proyecto. 


------------


- Crear componentes en React y entender cómo se relacionan entre sí.
- Pasar datos entre componentes usando props.
- Manejar eventos en React.
- Manejar el estado de los componentes con el hook useState.
-  Uso de useEffect para manejar efectos secundarios.
- Implementar rutas con React Router.
- Manejo de errores con Error Boundaries.
- Conectar tu aplicación React a una API para obtener datos.
- De manera opcional y si lo require, Uso de useRef, useCallback, y useMemo.
-  Uso de vite para la generación del proyecto.
- Crear componentes funcionales.
-  Utilizar una API pública y mostrar los datos obtenidos en tu interfaz de usuario.
-   Uso de Hooks (mínimo useEffect para los procesos asíncronos).
-  Implementar rutas en tu aplicación con React Router.
-  Manejar errores de renderizado con Error Boundaries.
-   Implementación CSS a través de un framework (TailwindCSS, MUI, Bootstrap).


------------


### Construcción del proyecto paso a paso. 


------------


1. Creación del proyecto utilizando la terminal y los comandos correspondientes.


[![terminal.png](https://i.postimg.cc/pTt94ww5/terminal.png)](https://postimg.cc/QB0xWyxj)



2. Una vez creado el proyecto debemos instalar todas las librerías y framwork a utilizar en el código.

[![1-5-5-instalacion.png](https://i.postimg.cc/j2xDdzds/1-5-5-instalacion.png)](https://postimg.cc/1ndmvVqT)


3. Estructuración del proyecto, creamos las carpetas y archivos correspondientes para poder comenzar a escribir el código de forma organizada.


[![Captura-de-pantalla-2024-08-24-001033.png](https://i.postimg.cc/02NzTdBn/Captura-de-pantalla-2024-08-24-001033.png)](https://postimg.cc/9zvXTTVw)



4. Primero estructuramos el código en el archivo `main.jsx`.


```javascript
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </StrictMode>
);

```


5. Luego creamos cada uno de los componentes funcionales en el código y lo que utilizáremos para construir la `Aplicación web con React`.


- Error Boundary: 


```javascript
import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
 
    console.log(`Se ha detectado un error: ${error}`, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>¡Ups! Algo salió mal.</h1>;
    }

    return this.props.children; 
  }
}

ErrorBoundary.propTypes = {
  children:PropTypes.node
};

export default ErrorBoundary;


```


- Footer:


```javascript
import React from "react";

function Footer () {
    return (
        <>
            <footer className="footer bg-neutral text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p className="text-lg font-serif">Copyright © {new Date().getFullYear()} - Irene Victoria Espinoza Guzmán.</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </nav>
            </footer>
        </>
    );
}

export default Footer;


```

- Hero: 


```javascript
import React from "react";

function Hero() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="src\images\pajaro-sentado-arbol_1048944-15228193.jpg" alt="Images of bird"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-6xl font-serif"> Aves de Chile. </h1>
                        <p className="py-6">
                        <strong className="text-xl font-sans">¡Bienvenidos todos! A este sitio web creado con React mediante el consumo de una API. Aquí podrás interactuar con un listado de las aves de Chile. Aprenderás sus nombres en distintos idiomas y además podrás visualizar sus fotos y conocer a estas aves de una forma entretenida. ¡Que lo disfrutes!. </strong>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;

```

- NavBar: 


```javascript
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="navbar bg-gray-800 text-white text-lg shadow-lg">
                <div className="flex-1 flex items-center"> {/* flex y items-center para alinear los elementos */}
                    <div className="w-16 h-16 mr-2 overflow-hidden rounded-full border border-white"> {/* Contenedor de la imagen */}
                        <img src="src\images\Social_Twitter_animal_bird_2600.png" alt="Icon" className="object-cover w-full h-full"/> {/* Ajusta la clase object-cover */}
                    </div>
                    <a className="btn btn-ghost text-3xl font-sans">Consumo de una API con React</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-3">
                        <li>
                            <details>
                                <summary ><strong className="text-lg font-sans cursor-pointer">Inicio</strong></summary>
                                <ul className="bg-gray-700 rounded-t-none p-2">
                                    <li><a><Link to="BirdDetail" className="text-white hover:text-gray-300 font-sans">Aves</Link></a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;

```


6. Estructurar el código en el archivo `birdDetails`, aquí estará el código el cual contendrá toda la información del consumo de la API y renderización de la interfaz de usuario donde se podrá visualizar el listado de aves por orden alfabético.


```javascript
//Importar los hooks necesarios para realizar el codigo. 
import { useMemo, useState, useEffect } from "react";

// Constanste a utilizar en funciones y sus respectivos Hooks y setters. 
const BirdDetails = () => {
    const [birds, setBirds] = useState([]);
    const [selectedBird, setSelectedBird] = useState(null);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    // Función para realizar llamado de la API.
    useEffect(() => {
        fetch(`https://aves.ninjas.cl/api/birds`)
        .then(response => response.json())
        .then(data => setBirds(data))
        .catch(setError)
    }, []);
    
    //Función para Agrupar a las Aves por la primera letra de su nombre en orden alfabético.
    const birdsGroupedByAlphabet = useMemo(() => {
        const groups = {};
        birds.filter(bird => bird.name.spanish.toLowerCase().includes(search.toLowerCase()))
             .forEach(bird => {
                const letter = bird.name.spanish.charAt(0).toUpperCase();
                if (!groups[letter]) {
                    groups[letter] = [];
                }
                groups[letter].push(bird);
            });
        return groups;
    }, [birds, search]);
    
    // Función para manejar eventos por medio un handleClick para selecionar el ave.
    const handleBirdClick = bird => {
        setSelectedBird(bird);
        setShowModal(true);
    };
    
    //Función para manejar eventos del cierre modal.
    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    // Uso del condicional if para manejar los erros al cargar el listado de aves.
    if (error) return <div>Error fetching birds.</div>;
    if (!birds.length) return <div className="text-lg font-serif"> Cargando Listado de Aves... </div>;
    
    //Renderizado de la interfaz de usuario con sus respectivos diseños realizados con tailwind css. 
    return (
        <div>
            <input
                type="text"
                placeholder="Buscar aves..."
                className= "p-2 mx-4 mt-4 mb-2 w-3/4 border rounded shadow text-md"
    style={{ textAlign: 'center' }}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="overflow-auto h-96">
                {Object.keys(birdsGroupedByAlphabet).sort().map(letter => (
                    <div key={letter}>
                        <h2 className=" bg-gray-200 p-2 sticky top-0 font-semibold">{letter}</h2>
                        <table className="min-w-full leading-normal">
                            <tbody>
                                {birdsGroupedByAlphabet[letter].map(bird => (
                                    <tr key={bird.uid} onClick={() => handleBirdClick(bird)} className="hover:bg-gray-100 cursor-pointer">
                                        <td className="p-2 text-center font-serif">{bird.name.spanish}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            {showModal && selectedBird && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-2xl leading-6 font-extrabold text-gray-900">{selectedBird.name.spanish}</h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="font-serif"><strong>Nombre en inglés: </strong>{selectedBird.name.english}</p> 
                                <p className="font-serif"><strong>Nombre Científico: </strong> {selectedBird.name.latin}</p>
                                <img src={selectedBird.images.main} alt={`Nombre del ave ${selectedBird.name.spanish}`} className="mx-auto my-4 w-64" />
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    onClick={handleCloseModal}
                                    className="px-4 py-2  bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BirdDetails;

```


7. Y por último estructuramos el código en el archivo `App.jsx` el cual hacemos las importaciones de nuestros componentes funcionales y los organizamos en el orden que queremos que se vea la interfaz de usuario. Además, establecemos el ruteo de la página.



```javascript
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BirdDetails from './pages/birdDetails';
import Hero from './components.jsx/hero';
import './App.css';
import NavBar from './components.jsx/navBar';
import Footer from './components.jsx/footer';
import ErrorBoundary from './components.jsx/errorBoundary';

function App() {
  return (
    <>
      <div>
        <ErrorBoundary>
          <NavBar />
          <Hero />
          <Routes>
            <Route path="/birdDetail" element={<BirdDetails />} />
          </Routes>
          <Footer />
        </ErrorBoundary>

      </div>
    </>
  );
}

export default App;


```


------------


### Aplicación web React. 


------------

<P>
  
Finalmente, nuestro proyecto queda de esta forma organizado y estructurado por partes: 

</P>

- Barra de navegación.

foto

- Hero.

foto

- Barra de navegación --> Inicio --> Aves.

foto 

- Tabla del listado de aves por orden alfabético. 

foto.

- footer. 

foto 

