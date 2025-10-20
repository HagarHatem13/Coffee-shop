import React from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => (
  <section
    id="home"
    className="d-flex align-items-center justify-content-center text-center text-white position-relative"
    style={{
      backgroundImage: "url('/img/photo1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    }}
  >
    {/* Overlay */}
    <div
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1,
      }}
    ></div>

    <Container style={{ zIndex: 2 }}>
      <h1
        className="fw-bold mb-4"
        style={{
          fontSize: "3.5rem",
          lineHeight: "1.2",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontFamily: "'Poppins', sans-serif",
          textShadow: "2px 3px 10px rgba(0,0,0,0.5)",
        }}
      >
        Start Your Day <br /> With <span style={{ color: "#c7a16a" }}>Coffee</span>
      </h1>

      <Button
        href="#products"
        variant="light"
        className="px-5 py-2 fw-semibold text-uppercase"
        style={{
          borderRadius: "30px",
          backgroundColor: "#c7a16a",
          border: "none",
          color: "white",
          letterSpacing: "1px",
          fontSize: "1.1rem",
          transition: "0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#b08b57")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#c7a16a")}
      >
        Shop Now
      </Button>
    </Container>

    {/* Subtle animated text glow */}
    <style>{`
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      #home h1 {
        animation: fadeInUp 1.2s ease forwards;
      }

      #home button {
        animation: fadeInUp 1.5s ease forwards;
      }

      @media (max-width: 768px) {
        #home h1 {
          font-size: 2.2rem;
        }
        #home {
          height: 90vh;
        }
      }
    `}</style>
  </section>
);

export default Home;
