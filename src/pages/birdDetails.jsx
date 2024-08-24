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
