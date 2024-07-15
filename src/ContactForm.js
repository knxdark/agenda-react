
import React, { useState } from 'react';

function ContactForm({ addContact }) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { nombre, apellido, telefono };
        addContact(newContact);
        setNombre('');
        setApellido('');
        setTelefono('');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="text" 
                    id="nombre" 
                    className="form-control" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input 
                    type="text" 
                    id="apellido" 
                    className="form-control" 
                    value={apellido} 
                    onChange={(e) => setApellido(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input 
                    type="text" 
                    id="telefono" 
                    className="form-control" 
                    value={telefono} 
                    onChange={(e) => setTelefono(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Agregar</button>
        </form>
    );
}

export default ContactForm;
