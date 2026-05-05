import React from 'react';
import About from '../components/About';

const AboutPage = ({ theme }) => {
  return (
    <div style={{ paddingTop: '0' }}>
      <About theme={theme} />
    </div>
  );
};

export default AboutPage;
