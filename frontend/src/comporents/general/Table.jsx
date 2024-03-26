import React from 'react';
 
const Table = ({ bodyElement, titleElement }) => {
  return (
    <div className="table-container" >
      <table>
        <thead>{titleElement}</thead>
        <tbody>{bodyElement}</tbody>
      </table>
    </div>
  );
};

export default Table;
