import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const About = () => (
  <section
    id="about"
    className="py-5 position-relative"
    style={{
      background: "linear-gradient(135deg, #f9f6f2 0%, #fff 100%)",
    }}
  >
    <Container>
      <Row className="align-items-center gy-5">
        {/* Image Section */}
        <Col md={6} data-aos="fade-right">
          <div
            className="position-relative"
            style={{
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src="/img/about.jpg"
              alt="About Us"
              className="img-fluid"
              style={{
                transition: "transform 0.6s ease",
                width: "100%",
                objectFit: "cover",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
        </Col>

        {/* Text Section */}
        <Col md={6} data-aos="fade-left">
          <h2
            className="fw-bold text-uppercase mb-4"
            style={{
              color: "#2c2c2c",
              letterSpacing: "2px",
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              color: "#555",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Our journey began with a deep passion for coffee — a love for the aroma,
            the art, and the people behind every bean. We travel the world to find
            the finest coffee beans, bringing them straight to your cup.
          </p>
          <p
            style={{
              color: "#555",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            At our café, every roast tells a story — one of sustainability, fair
            trade, and craftsmanship. We don’t just make coffee; we create moments
            that matter.
          </p>

          <Button
            variant="dark"
            className="mt-3 px-5 py-2 fw-semibold text-uppercase"
            style={{
              borderRadius: "30px",
              backgroundColor: "#c7a16a",
              border: "none",
              color: "white",
              letterSpacing: "1px",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#b08b57")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#c7a16a")}
          >
            Learn More
          </Button>
        </Col>
      </Row>
    </Container>

    <style>{`
      #about {
        overflow: hidden;
      }

      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      #about h2, #about p, #about button {
        animation: fadeInUp 1.2s ease forwards;
      }
    `}</style>
  </section>
);

export default About;
