import React, { useState } from "react";
import { Container, Card, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as emailjs from "@emailjs/browser";

const CheckoutPage = ({ cart, setCart, user }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [card, setCard] = useState({ name: "", number: "", expiry: "", cvv: "" });
  const [selectedCardType, setSelectedCardType] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setCard({ ...card, [e.target.name]: e.target.value });

  const handlePayment = async () => {
    if (!selectedCardType) return alert("Please select a card type!");
    if (!card.name || !card.number || !card.expiry || !card.cvv)
      return alert("Please fill all fields!");
    if (!user?.email) return alert("User email not found!");

    // Send Email
    const productList = cart.map((i) => `${i.name} x${i.quantity}`).join(", ");
    const templateParams = {
      to_name: card.name,
      to_email: user.email,
      message: `Thank you for your purchase! You bought: ${productList}. Total: $${total.toFixed(
        2
      )}`,
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      );

      setSuccess(true);
      setCart([]); // clear cart
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.error("Email send error:", error);
      alert("Failed to send email. Check your EmailJS configuration.");
    }
  };

  const cardTypes = [
    { name: "Visa", img: "/img/vis1.png" },
    { name: "Mastercard", img: "/img/ma1.png" },
  ];

  return (
    <section style={{ paddingTop: "120px", minHeight: "100vh", background: "#f8f9fa" }}>
      <Container style={{ maxWidth: "600px" }}>
        <Card className="p-4 shadow-lg rounded-4 bg-white">
          <h2 className="text-center mb-4">💳 Checkout</h2>

          {success && <Alert variant="success">✅ Payment successful! Redirecting...</Alert>}

          <div className="d-flex justify-content-center gap-3 mb-4">
            {cardTypes.map((type) => (
              <div
                key={type.name}
                onClick={() => setSelectedCardType(type.name)}
                style={{
                  border:
                    selectedCardType === type.name ? "2px solid #28a745" : "2px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  cursor: "pointer",
                  width: "80px",
                  textAlign: "center",
                  transition: "all 0.2s",
                }}
              >
                <img src={type.img} alt={type.name} width={50} />
                <div>{type.name}</div>
              </div>
            ))}
          </div>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control type="text" name="name" value={card.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" name="number" value={card.number} onChange={handleChange} />
            </Form.Group>

            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Expiry</Form.Label>
                  <Form.Control type="text" name="expiry" value={card.expiry} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" name="cvv" value={card.cvv} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Button className="w-100 mt-3" variant="success" onClick={handlePayment}>
              Pay ${total.toFixed(2)}
            </Button>
          </Form>
        </Card>
      </Container>
    </section>
  );
};

export default CheckoutPage;


