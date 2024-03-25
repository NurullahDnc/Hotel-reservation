import React from 'react';
import Title from '../account/Title';

const Table = ({ bodyElement, titleElement }) => {

  return (
    <div className="table-container">
      <table>
        <thead>
          {titleElement}
        </thead>


        <tbody>
          {bodyElement}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
