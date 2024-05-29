import React from 'react';

const Loading = () => {
  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        fontSize: "50px",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      Yukleniyor
    </div>
  );
}

export default Loading;
