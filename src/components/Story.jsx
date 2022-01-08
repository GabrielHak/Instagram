import { MDBContainer, MDBCard, MDBCardText, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';

export default function Story() {
  return (
    <MDBContainer className='m-2 shadow-0 p-0' style={{ maxWidth: '6rem', maxHeight: '6rem' }}>
			<MDBCard style={{ maxWidth: '4rem'}} className='text-center shadow-0'>
				<MDBBtn className='rounded-circle ' style={{ maxWidth: '4rem', minHeight: '4rem' }}><MDBIcon fas icon="user-astronaut" /></MDBBtn>
				<MDBCardText className='text-nowrap'>
					Jon Smith
				</MDBCardText>
			</MDBCard>
		</MDBContainer>
  );
}