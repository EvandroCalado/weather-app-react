import React, { useState } from 'react';
import Card from './components/Card/Card';
import fetchData from './services/api';
import initialData from './services/initialData';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
    });
    setCity('');
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none shadow-md"
          onChange={({ target: { value } }) => setCity(value)}
          value={city}
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold hover:bg-blue-700 transition"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
