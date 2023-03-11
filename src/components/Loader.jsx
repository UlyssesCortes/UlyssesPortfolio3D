import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html center>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 80,
          height: 80,
          background: 'red',

          borderRadius: '50%',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(135deg, #0077ff, #00aaff)',
          animation: 'spin 1s linear infinite',
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'white',
          }}
        ></div>
      </div>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Html>
  );
};

export default Loader;