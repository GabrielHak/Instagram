import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='white' className='shadow-1 sticky-top'>
      <MDBContainer style={{ marginRight:'19vw', marginLeft:'19vw' }}>
        <MDBNavbarBrand href='#' className='py-2'>
          <img
            src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
            height='30'
            alt=''
            loading='lazy'
          />
        </MDBNavbarBrand>

          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 pe-5 justify-content-end'>
            <form className='input-group w-auto rounded-3 pe-2' style={{ maxWidth: '100vw' }}>
              <input className='rounded' type='search' placeholder='Look for' aria-label='Search' style={{ background: '#EEEEEE', outline: 0, border: 0 }} />
            </form>
          </MDBNavbarNav>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fas icon="home" size='lg' className='px-1' />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon far icon="paper-plane" size='lg' className='px-1' />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon far icon="plus-square" size='lg' className='px-1' />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon far icon="compass" size='lg' className='px-1' />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon far icon="heart" size='lg' className='px-1' />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon far icon="user-circle" size='lg' className='px-1' />
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
      </MDBContainer>
    </MDBNavbar >
  );
}