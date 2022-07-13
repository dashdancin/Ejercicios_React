import React, { useState } from 'react';
import SelectList from './SelectList';

const SelectAnidados = () => {
 const [state, setState] = useState('');
 const [town, setTown] = useState('');
 const [suburn, setSuburn] = useState('');

 const TOKEN = 'd81a7ac7-976d-4e1e-b7d3-b1979d791b6c';

 return (
  <div>
   <h2>Selects Anidados</h2>
   <h3>México</h3>
   <SelectList
    title='estados'
    url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
    handleChange={(e) => {
     setState(e.target.value);
    }}
   />
   {state && (
    <SelectList
     title='municipios'
     url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
     handleChange={(e) => {
      setTown(e.target.value);
     }}
    />
   )}
   {town && (
    <SelectList
     title='colonias'
     url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
     handleChange={(e) => {
      setSuburn(e.target.value);
     }}
    />
   )}

   <pre>
    <code>
     {state} - {town} - {suburn}
    </code>
   </pre>
  </div>
 );
};

export default SelectAnidados;
