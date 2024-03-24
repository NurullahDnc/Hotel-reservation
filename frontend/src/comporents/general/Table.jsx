import React from 'react';
import Title from '../account/Title';

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Oda</th>
            <th>kategori</th>
            <th>Gün</th>
            <th>Fiyat</th>
            <th>Acıklama</th>
            <th>Kişi Sayısı</th>
       
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td><img src={row.img} style={{borderRadius: "10px", width:"75px", height:"60px", objectFit:"cover"  }} alt="as" /> </td>
              <td>{row.categoryName}</td>
              <td>{row.gun}</td>
              <td>{row.fiyat}</td>
              <td>{row.acıklama}</td>
              <td>{row.KisiSayısı}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
