import React from 'react';
import SelectList from './SelectList';

const SelectAnidados = () => {
 const [state, setState] = useState('');
 const [town, setTown] = useState('');
 const [suburn, setSuburn] = useState('');

 return (
  <div>
   <h2>SelectAnidados</h2>
   <h3>México</h3>
   <SelectList
    title='estados'
    url=''
    handleChange={(e) => {
     setState(e.target.value);
    }}
   />
   <SelectList
    title='municipios'
    url=''
    handleChange={(e) => {
     setState(e.target.value);
    }}
   />
   <SelectList
    title='colonia'
    url=''
    handleChange={(e) => {
     setState(e.target.value);
    }}
   />
   <pre>
    <code>
     {state} - {town} - {suburn}
    </code>
   </pre>
  </div>
 );
};

export default SelectAnidados;
