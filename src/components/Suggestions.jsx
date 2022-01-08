import React from 'react';
import { MDBContainer, MDBCard, MDBCardText, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Suggestions() {
	return (
		<MDBContainer className='m-2 pt-3 ps-2 shadow-0' style={{ maxWidth: '6rem', maxHeight: '6rem' }}>
			<MDBCard style={{ maxWidth: '4rem', position:'fixed', background:'#F5F5F5' }} className='text-center shadow-0'>
				<MDBBtn className='rounded-circle' style={{ maxWidth: '4rem', minHeight: '4rem' }}><MDBIcon fas icon="user-astronaut" /></MDBBtn>
				<MDBCardText className='text-nowrap'>
					Jon Smith
				</MDBCardText>
			</MDBCard>
		</MDBContainer>
	);
}