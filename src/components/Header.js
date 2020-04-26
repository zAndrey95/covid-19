import React from 'react';

import Container from 'components/Container';
import Covid from 'assets/images/icon.svg';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <img src={Covid} />
        <h2 className="home-start">COVID-19 Dashboard</h2>
        <span>Last update</span>
      </Container>
    </header>
  );
};

export default Header;
