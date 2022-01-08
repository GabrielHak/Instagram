import { MDBCol, MDBRow} from 'mdb-react-ui-kit';
import React from 'react';
import Posts from './Posts';
import Storys from './Storys';
import Suggestions from './Suggestions';

export default function Body() {
  return (
    <div style={{ minHeight: '100vh', marginRight: '19vw', marginLeft: '19vw' }} className='pt-4 text-center'>
      <MDBRow style={{ minHeight: '100vh' }}>
        <MDBCol className='col-md-8'>
          <Storys />
          <Posts />
        </MDBCol>
        <MDBCol className='col-md-4'>
          <Suggestions/>
        </MDBCol>
      </MDBRow>
    </div>
  );
}