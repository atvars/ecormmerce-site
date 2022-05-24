import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Login' : 'Register'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control className='m-2' placeholder='enter your email...' />
          <Form.Control className='m-2' placeholder='enter your password...' />
          <Row className='d-flex justify-content-between p-3'>
            {isLogin ? (
              <div>
                Dont have account?
                <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
              </div>
            ) : (
              <div>
                Already have account?
                <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
              </div>
            )}

            <Button className='m-2 btn-success'>
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
