import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard style={{ maxWidth: '100vw' }} className='mt-5 shadow-0'>
      <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp' position='top' alt='Fissure in Sandstone' class='square' />
      <MDBCardBody className='px-0'>
        <MDBCardBody className='p-0 mx-2'>
          <MDBRow>
            <MDBCol className='col-md-1 p-0'>
              <MDBIcon far icon="heart" className='fa-lg m-0 p-0 ' />
            </MDBCol>
            <MDBCol className='col-md-1 p-0'>
              <MDBIcon far icon="comment" className='fa-lg m-0 p-0' />
            </MDBCol>
            <MDBCol className='col-md-1 p-0'>
              <MDBIcon far icon="paper-plane" className='fa-lg m-0 p-0' />
            </MDBCol>
            <MDBCol className='col-md-9 text-end p-0'>
              <MDBIcon far icon="file" className='fa-lg ml-0 m-0 pe-4' />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCardText className='text-start m-0 pt-2'>
              1234 Likes
            </MDBCardText>
          </MDBRow>
          <MDBRow>
            <MDBCardBody className='d-inline-flex p-2 m-0'>
              <MDBCardText className='text-start m-0 text-black'>
                NameAccount
              </MDBCardText>
              <MDBCardText className='text-start ps-2'>
                Text
              </MDBCardText>
            </MDBCardBody>
          </MDBRow>
          <MDBRow>
            <MDBCardBody className='d-inline-flex p-2 m-0'>
              <MDBCardText className='text-start'>
                View all 145 comments
              </MDBCardText>
            </MDBCardBody>
          </MDBRow>
          <MDBRow>
            <MDBCardBody className='d-inline-flex p-2 m-0 border-0'>
              <MDBCol className='d-flex align-items-center justify-content-center'>
                <MDBIcon far icon="smile" className='fa-lg ml-0'/>
              </MDBCol>
              <MDBCol className='col-md-11'>
                <textarea placeholder='Add a comment ...' class='w-100'></textarea>
              </MDBCol>
            </MDBCardBody>
          </MDBRow>
        </MDBCardBody>
      </MDBCardBody>
    </MDBCard>
  );
}