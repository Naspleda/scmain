import React, { useState } from 'react';

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isGBA, setIsGBA] = useState(false);

  const data = [
    // Datos de ejemplo para pruebas
    { name: 'Juan', birthdate: '2000-01-15', isGBA: true },
    { name: 'Maria', birthdate: '1995-07-20', isGBA: false },
    { name: 'Pepe', birthdate: '2001-02-17', isGBA: true },
    { name: 'Prueba 1', birthdate: '1990-05-12', isGBA: false },
    { name: 'Prueba 2', birthdate: '2004-03-25', isGBA: true },
    { name: 'Prueba 3', birthdate: '1999-08-10', isGBA: false },
  ];

  // Filtrar por fechas y si es_GBA
  const filteredData = data.filter((item) => {
    const searchTermMatches = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const dateMatches =
      (!startDate || item.birthdate >= startDate) && (!endDate || item.birthdate <= endDate);
    const locationMatches = !isGBA || item.isGBA === isGBA;

    return searchTermMatches && dateMatches && locationMatches;
  });

  return (
    <div className="container mx-auto pb-24">
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className="flex space-beetween py-20 mx-4">
                <input
                type="text"
                placeholder="Buscar por nombre"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border rounded-md"
                />
            </div>
            <div className=" py-10">
                <label className="block mb-1 mx-4">Filtrar por rango de fechas de nacimiento:</label>
                <div className="flex space-beetween py-4 mx-4">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-4 py-2 mr-2 border rounded-md"
                />
                <span className="mr-2">-</span>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="px-4 py-2 border rounded-md"
                />
                </div>
            </div>

        </div>

      <div className="mb-4">
        <label className="block mb-1">
          <input
            type="checkbox"
            checked={isGBA}
            onChange={() => setIsGBA(!isGBA)}
            className="mr-2 mx-4"
          />
          Mostrar solo ubicación en GBA
        </label>
      </div>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Fecha de Nacimiento</th>
            <th className="px-4 py-2">Ubicación en GBA</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className="text-center px-4 py-2">{item.name}</td>
              <td className="text-center px-4 py-2">{item.birthdate}</td>
              <td className="text-center px-4 py-2">{item.isGBA ? 'Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Table;
