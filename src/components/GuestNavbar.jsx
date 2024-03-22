import React from "react"
import { Nav, Navbar, NavbarCollapse, NavbarToggle } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const GuestNavbar = () => {
  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      collapseOnSelect
      className="custom-header"
    >
      <div className="container-fluid">
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <NavLink to="/" className="nav-link text-white fw-bold">
              Home
            </NavLink>
            <NavLink to="/about-us" className="nav-link text-white fw-bold">
              About Us
            </NavLink>
            <NavLink
              to="/public/dashboard"
              className="nav-link text-white fw-bold"
            >
              Dashboard
            </NavLink>
            <NavLink to="/forest" className="nav-link text-white fw-bold">
              Forest
            </NavLink>
            <NavLink to="/wildlife" className="nav-link text-white fw-bold">
              Wildlife
            </NavLink>
            <NavLink
              to="/social-forestry"
              className="nav-link text-white fw-bold"
            >
              Social Forestry
            </NavLink>
            <NavLink
              to="/research-training"
              className="nav-link text-white fw-bold"
            >
              Research & Training
            </NavLink>
            <NavLink
              to="/public-interface"
              className="nav-link text-white fw-bold"
            >
              Public Interface
            </NavLink>
            <NavLink
              to="/notifications"
              className="nav-link text-white fw-bold"
            >
              Notifications
            </NavLink>
            <NavLink to="/publications" className="nav-link text-white fw-bold">
              Publications
            </NavLink>
            <NavLink
              to="/boards-authorities"
              className="nav-link text-white fw-bold"
            >
              Boards
            </NavLink>
            <NavLink to="/eco-tourism" className="nav-link text-white fw-bold">
              Eco-Tourism
            </NavLink>
            <NavLink to="/gallery" className="nav-link text-white fw-bold">
              Gallery
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login" className="nav-link text-white fw-bold">
              Login
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </div>
    </Navbar>
  )
}

export default GuestNavbar
