import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react';
import Story from './Story';
import '../css/styles.css'

export default function Storys() {

  return (
    <MDBContainer fluid className='d-inline-flex border bg-white rounded-2 overflow-auto'>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
    </MDBContainer>
  );
}