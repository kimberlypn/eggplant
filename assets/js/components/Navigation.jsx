import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

// Renders the navigation bar
export default function Navigation(props) {
  // Indicates whether a dropdown is open
  let isOpen = false;

  // Toggles a dropdown menu
  function toggle() {
    isOpen = !isOpen;
    console.log(isOpen);
    return isOpen;
  }

  return (
    <Fragment>
      <Navbar expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                GALLERY
              </DropdownToggle>
              <DropdownMenu left="true">
                <DropdownItem href="/gallery/writing">
                  WRITING
                </DropdownItem>
                <DropdownItem href="/gallery/watercolor">
                  WATERCOLOR
                </DropdownItem>
                <DropdownItem href="/gallery/acrylic">
                  ACRYLIC
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                PROJECTS
              </DropdownToggle>
              <DropdownMenu left="true">
                <DropdownItem href="/projects/kickstarter">
                  KICKSTARTER
                </DropdownItem>
                <DropdownItem href="/projects/artshows">
                  ART SHOWS
                </DropdownItem>
                <DropdownItem href="/projects/spokenword">
                  SPOKEN WORD
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/inquiries">INQUIRIES</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
}
