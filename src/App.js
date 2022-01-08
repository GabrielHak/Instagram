import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import NavBar from './components/NavBar';
import Body from './components/Body';

function App() {
  return (
    <MDBContainer className='p-0' fluid style={{minHeight:'100vh', background: '#F5F5F5'}}>
      <NavBar/>
      <Body/>
    </MDBContainer>
  );
}

export default App;
