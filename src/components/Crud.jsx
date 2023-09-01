import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

const CRUDComponent = () => {
    const [dni, setDni] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [esDeGBA, setEsDeGBA] = useState(false);

    const [personas, setPersonas] = useState([]);
    const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

    useEffect(() => {
        // cargarPersonas();
    }, []);

    const cargarPersonas = async () => {
        try {
            const response = await axios.get('/api/personas/lista');
            setPersonas(response.data);
        } catch (error) {
            console.error('Error al cargar personas:', error);
        }
    };

    const handleAgregarPersona = async () => {
        try {
            await axios.post('/api/personas/lista', {
                dni,
                nombre,
                apellido,
                fecha_nacimiento: fechaNacimiento,
                es_de_gba: esDeGBA
            });
            cargarPersonas();
        } catch (error) {
            console.error('Error al agregar persona:', error);
        }
    };

    const handleMostrarPersona = async (personaId) => {
        try {
            const response = await axios.get(`/api/personas/${personaId}/`);
            setPersonaSeleccionada(response.data);
        } catch (error) {
            console.error('Error al cargar persona:', error);
        }
    };

    const handleActualizarPersona = async () => {
        if (!personaSeleccionada) return;

        try {
            await axios.put(`/api/personas/${personaSeleccionada.id}/actualizar/`, personaSeleccionada);
            cargarPersonas();
            setPersonaSeleccionada(null);
        } catch (error) {
            console.error('Error al actualizar persona:', error);
        }
    };

    const handleEliminarPersona = async (personaId) => {
        try {
            await axios.delete(`/api/personas/${personaId}/eliminar/`);
            cargarPersonas();
        } catch (error) {
            console.error('Error al eliminar persona:', error);
        }
    };

    return (
        <div>
            <h2>Agregar Persona</h2>
            <input type="text" placeholder="DNI" onChange={(e) => setDni(e.target.value)} />
            <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
            <input type="date" onChange={(e) => setFechaNacimiento(e.target.value)} />
            <label>
                Es de GBA:
                <input type="checkbox" checked={esDeGBA} onChange={(e) => setEsDeGBA(e.target.checked)} />
            </label>
            <button onClick={handleAgregarPersona}>Agregar Persona</button>

            <h2>Personas</h2>
            <ul>
                {personas.map(persona => (
                    <li key={persona.id}>
                        {persona.nombre} {persona.apellido}
                        <button onClick={() => handleMostrarPersona(persona.id)}>Mostrar</button>
                        <button onClick={() => handleEliminarPersona(persona.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            {personaSeleccionada && (
                <div>
                    <h2>Editar Persona</h2>
                    <input type="text" value={personaSeleccionada.dni} disabled />
                    <input type="text" value={personaSeleccionada.nombre} onChange={(e) => setPersonaSeleccionada({...personaSeleccionada, nombre: e.target.value})} />
                    <input type="text" value={personaSeleccionada.apellido} onChange={(e) => setPersonaSeleccionada({...personaSeleccionada, apellido: e.target.value})} />
                    <input type="date" value={personaSeleccionada.fecha_nacimiento} onChange={(e) => setPersonaSeleccionada({...personaSeleccionada, fecha_nacimiento: e.target.value})} />
                    <label>
                        Es de GBA:
                        <input type="checkbox" checked={personaSeleccionada.es_de_gba} onChange={(e) => setPersonaSeleccionada({...personaSeleccionada, es_de_gba: e.target.checked})} />
                    </label>
                    <button onClick={handleActualizarPersona}>Actualizar Persona</button>
                </div>
            )}
        </div>
    );
};

export default CRUDComponent;
