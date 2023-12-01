/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import NavbarItem from "./navBarItem";
import Logo from "../assets/logo/SVG/upcycle(1).svg";
import { useAuth } from "../context/userContext";

function Navbar() {
  const {user, usuarioAutenticado, logout} = useAuth();

  useEffect(() => {
    const validateUser = async() => {
        await usuarioAutenticado();
    }
    validateUser()
  },[])

  const userLogout = async() => {
    await logout();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img src={Logo} width={100} height={40} alt="upcycle_logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor04"
          aria-controls="navbarColor04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav me-auto">
            <NavbarItem href="/home" label="Home" />
            {
              user && <NavbarItem href="/criar_publicacao" label="Publicar" />
            }
            <NavbarItem href="/reciclaveis" label="Reciclaveis" />
            {
              !user ? 
              (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Entrar
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Com Google
                    </a>
                    <a className="dropdown-item" href="#">
                      Com Reddit
                    </a>
                    <a className="dropdown-item" href="/login">
                      Com Email
                    </a>
                  </div>
                </li>
              ) :
              (
                <div className="d-flex align-items-center justify-content-center">
                  <text style={{cursor: 'pointer'}} onClick={userLogout}>
                    Sair
                  </text>
                </div>
              )
            }
            
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Pesquisar"
            />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
