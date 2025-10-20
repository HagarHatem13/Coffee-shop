import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const items = [
  { id: 1, name: "Ground Coffee", price: 25, img: "/img/p1.png" },
  { id: 2, name: "Simple Coffee", price: 15, img: "/img/p2.png" },
  { id: 3, name: "Dark Coffee", price: 30, img: "/img/p3.png" },
];

const Products = ({ addToCart, searchTerm = "" }) => {
  const filtered = items.filter((i) =>
    i.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section
      id="products"
      className="py-5"
      style={{ background: "linear-gradient(180deg, #f9f6f2 0%, #fff 100%)" }}
    >
      <Container>
        <h2 className="text-center text-uppercase fw-bold mb-5" style={{ color: "#2c2c2c", letterSpacing: "2px" }}>
          Our Popular Products
        </h2>

        <Row className="g-4">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <Col md={4} sm={6} xs={12} key={product.id}>
                <Card
                  className="h-100 text-center product-card shadow-sm"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center bg-light" style={{ height: "250px", overflow: "hidden" }}>
                    <Card.Img
                      variant="top"
                      src={product.img}
                      alt={product.name}
                      style={{ width: "200px", height: "auto", transition: "transform 0.4s ease" }}
                      onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                      onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                    />
                  </div>

                  <Card.Body>
                    <Card.Title className="fw-semibold mt-3" style={{ color: "#333", fontSize: "1.2rem" }}>
                      {product.name}
                    </Card.Title>
                    <Card.Text className="fw-bold mb-3" style={{ color: "#c7a16a", fontSize: "1.2rem" }}>
                      ${product.price}
                    </Card.Text>
                    <Button
                      variant="dark"
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 fw-semibold text-uppercase"
                      style={{
                        borderRadius: "30px",
                        backgroundColor: "#c7a16a",
                        border: "none",
                        transition: "0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "#b08b57")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "#c7a16a")}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-muted">No products match your search.</p>
          )}
        </Row>
      </Container>

      <style>{`
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
};

export default Products;


