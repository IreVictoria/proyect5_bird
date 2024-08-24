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
