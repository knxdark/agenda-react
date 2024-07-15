import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('http://www.raydelto.org/agenda.php')
            .then(response => response.json())
            .then(data => setContacts(data));
    }, []);

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
        
        fetch('http://www.raydelto.org/agenda.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        });
    };

    return (
      <div className="container mt-5">
            <h1 className="text-center mb-5">Agenda de Contactos</h1>
            <div className="content">
                <div className="list-container">
                    <h2 className="text-center">Lista de Contactos</h2>
                    <ContactList contacts={contacts} />
                </div>
                <div className="form-container">
                    <h2 className="text-center">Agregar Contacto</h2>
                    <ContactForm addContact={addContact} />
              </div>
          </div>
      </div>
  );

}

export default App;
