
import React from 'react';

function ContactList({ contacts }) {
    return (
        <ul className="list-group">
            {contacts.map((contact, index) => (
                <li key={index} className="list-group-item">
                    {contact.nombre} {contact.apellido} - {contact.telefono}
                </li>
            ))}
        </ul>
    );
}

export default ContactList;
