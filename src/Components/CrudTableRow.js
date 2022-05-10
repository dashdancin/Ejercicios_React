import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
 let { name, constellation, id } = el;
 return (
  <tr>
   <td>{name}</td>
   <td>{constellation}</td>
   <td>
    <button onClick={() => setDataToEdit(e)}>Editar</button>
    <button onClick={() => deleteData(id)}>Eliminar x</button>
   </td>
  </tr>
 );
};

export default CrudTableRow;
