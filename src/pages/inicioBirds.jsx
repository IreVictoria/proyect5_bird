import React from "react";
import { Link } from "react-router-dom";

function InicioBirds () {
    return (
        <>
            <div className="h-screen">
                <h1> </h1>
                <ul>
                    <li className="text-2xl font-serif">
                        <Link to="BirdDetail"></Link>
                
                    </li>
                </ul>
            </div>
        </>
    );

}

export default InicioBirds; 