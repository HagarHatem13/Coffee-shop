import React, { useState } from "react";
import { Container, Table, Button, Form, Card, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, setCart, user }) => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Update quantity
  const updateQuantity = (index, delta) => {
    const newCart = [...cart];
    newCart[index].quantity = Math.max(newCart[index].quantity + delta, 1);
    setCart(newCart);
  };

  // Remove item
  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCost = subtotal > 0 ? 5 : 0;
  const total = subtotal + deliveryCost - discount;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "SAVE10") setDiscount(10);
    else alert("Invalid promo code!");
  };

  const handleProceed = () => {
    if (!user) navigate("/login", { state: { from: "/checkout" } });
    else navigate("/checkout");
  };

  return (
    <section style={{ paddingTop: "120px", minHeight: "80vh", background: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-5">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center mt-5">
            <p>Your cart is empty.</p>
            <Button onClick={() => navigate("/")} variant="primary">
              Back to Shop
            </Button>
          </div>
        ) : (
          <Row className="g-4">
            <Col md={8}>
              <Table bordered hover responsive className="bg-white shadow-sm rounded align-middle text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={item.id}>
                      <td className="d-flex align-items-center gap-3">
                        <Image src={item.img} alt={item.name} width={60} height={60} rounded />
                        <span>{item.name}</span>
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <Button size="sm" onClick={() => updateQuantity(index, -1)}>-</Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button size="sm" onClick={() => updateQuantity(index, 1)}>+</Button>
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <Button variant="danger" size="sm" onClick={() => removeItem(index)}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>

            <Col md={4}>
              <Card className="p-4 shadow-sm">
                <h5>Order Summary</h5>
                <hr />
                <p>
                  Subtotal: <b>${subtotal.toFixed(2)}</b>
                </p>
                <p>
                  Delivery: <b>{deliveryCost === 0 ? "FREE" : `$${deliveryCost}`}</b>
                </p>
                {discount > 0 && (
                  <p>
                    Discount: <b>-${discount.toFixed(2)}</b>
                  </p>
                )}
                <h5>
                  Total: <b>${total.toFixed(2)}</b>
                </h5>

                <Form.Group className="mt-3">
                  <Form.Label>Promotional Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="secondary" className="mt-2 w-100" onClick={handleApplyPromo}>
                    Apply
                  </Button>
                </Form.Group>

                <Button className="mt-4 w-100" variant="success" onClick={handleProceed}>
                  Proceed to Checkout
                </Button>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default CartPage;




