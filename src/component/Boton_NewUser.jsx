import React from 'react';
import { Link } from 'react-router-dom';

const Boton_NewUser = () => {
    return (
        <Link to="./component/NewUser">
            <button>Registrarse</button>
        </Link>
    );
};

export default Boton_NewUser;
