import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import Post from './Post';

export default function Posts() {
  return (
    <MDBContainer className='p-0'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MDBContainer>
  );
}