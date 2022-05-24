import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  const { user } = useContext(Context);
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>BuyDevice</Navbar.Brand>
        {user.isAuth ? (
          <Nav className='ml-auto' style={{ color: 'white' }}>
            <Button variant={'outline-light'} className='m-2'>
              Admin Page
            </Button>
            <Button variant={'outline-light'} className='m-2'>
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className='ml-auto' style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Login
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
