import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart(); 

  return (
    <NavbarBs
      sticky="top"
      className="bg-white shadow-sm mb-4 py-3"
      style={{ borderBottom: "1px solid #f1f1f1" }}
    >
      <Container>
        <Nav className="me-auto gap-3">
          <Nav.Link
            to="/"
            as={NavLink}
            className="fw-medium text-dark nav-hover"
          >
            Home
          </Nav.Link>
          <Nav.Link
            to="/store"
            as={NavLink}
            className="fw-medium text-dark nav-hover"
          >
            Store
          </Nav.Link>
          <Nav.Link
            to="/about"
            as={NavLink}
            className="fw-medium text-dark nav-hover"
          >
            About
          </Nav.Link>
        </Nav>

        <Button
          onClick={openCart}
          variant="light"
          className="rounded-circle border position-relative"
          style={{
            width: "3.2rem",
            height: "3.2rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="16.5" cy="18.5" r="1.5" />
            <circle cx="9.5" cy="18.5" r="1.5" />
            <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16z" />
          </svg>

          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center fw-semibold"
            style={{
              color: "white",
              width: "1.4rem",
              height: "1.4rem",
              fontSize: "0.75rem",
              position: "absolute",
              top: "-4px",
              right: "-4px",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
