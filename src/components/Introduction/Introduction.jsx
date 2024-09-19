import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Introduction = () => {
  return (
    <div style={{ fontSize: '40px', fontWeight: 'bold' }}>
        <span>A </span>
      <Typewriter
        words={[
          'Backend',
          'Frontend',
          'Deep-Learning'
        ]}
        loop={0}  // Set to 0 for infinite loop
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
      <span>Engineer</span>
    </div>
  );
};

export default Introduction;