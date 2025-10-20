import React from "react";
import { Navbar, Nav, Container, Badge, Dropdown, Button } from "react-bootstrap";
import { BsCart3, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = ({ cartCount, onSearchClick, user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Products", id: "products" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="shadow-sm py-3"
      style={{
        backgroundColor: "#1c1c1c",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img
            src="/img/logo890.png"
            alt="Logo"
            style={{
              width: "170px",
              maxHeight: "85px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 6px rgba(0,0,0,0.4))",
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="gap-4 text-center">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className="fw-semibold text-uppercase text-light nav-link-hover"
                style={{ letterSpacing: "0.5px", fontSize: "15px", cursor: "pointer" }}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center gap-3">
          <div
            className="position-relative"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          >
            <BsCart3 size={24} className="text-white icon-hover" />
            {cartCount > 0 && (
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cartCount}
              </Badge>
            )}
          </div>

          <BsSearch
            size={23}
            className="text-white icon-hover"
            style={{ cursor: "pointer" }}
            onClick={onSearchClick}
          />

          {user ? (
            <Dropdown align="end">
              <Dropdown.Toggle variant="outline-light" size="sm">
                Hi, {user.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/")}>My Account</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button variant="outline-light" size="sm" onClick={() => navigate("/login")}>
              Login / Sign Up
            </Button>
          )}
        </div>
      </Container>

      <style>{`
        .nav-link-hover { position: relative; transition: color 0.3s ease; }
        .nav-link-hover:hover { color: #c7a16a !important; }
        .nav-link-hover::after { content: ""; position: absolute; left: 0; bottom: -4px; width: 0%; height: 2px; background: #c7a16a; transition: width 0.3s ease; }
        .nav-link-hover:hover::after { width: 100%; }
        .icon-hover { transition: transform 0.2s ease, color 0.3s ease; }
        .icon-hover:hover { transform: scale(1.2); color: #c7a16a; }
      `}</style>
    </Navbar>
  );
};

export default Header;

