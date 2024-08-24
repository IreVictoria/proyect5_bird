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