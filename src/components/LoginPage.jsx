import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Container, Card, Form, Nav } from "react-bootstrap";

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  // Load users from localStorage on component mount
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const saveUsers = (newUsers) => {
    localStorage.setItem("users", JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      if (!email || !password) {
        setError("Please enter both email and password");
        return;
      }

      const existingUser = users.find(
        (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
      );

      if (existingUser) {
        setUser({ name: existingUser.name, email: existingUser.email });
        navigate(from, { replace: true });
      } else {
        setError("Invalid email or password");
      }
    } else {
      if (!name || !email || !password) {
        setError("Please fill in all fields");
        return;
      }

      const existingUser = users.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
      );

      if (existingUser) {
        setError("This email is already registered");
        return;
      }

      const newUser = { name, email, password };
      const newUsersList = [...users, newUser];
      saveUsers(newUsersList);

      setUser({ name, email });
      navigate(from, { replace: true });
    }
  };

  const handleTabSwitch = (loginSelected) => {
    setIsLogin(loginSelected);
    setError("");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section style={{ paddingTop: "120px", minHeight: "80vh", background: "#f8f9fa" }}>
      <Container style={{ maxWidth: "400px" }}>
        <Card className="p-4 shadow-lg rounded-4">
          <Nav variant="tabs" className="justify-content-center mb-3">
            <Nav.Item>
              <Nav.Link active={isLogin} onClick={() => handleTabSwitch(true)}>
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active={!isLogin} onClick={() => handleTabSwitch(false)}>
                Signup
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <h2 className="text-center mb-3">{isLogin ? "Login" : "Signup"}</h2>
          {error && <p className="text-danger text-center">{error}</p>}

          <Form onSubmit={handleSubmit}>
            {!isLogin && (
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              {isLogin ? "Login" : "Signup"}
            </Button>
          </Form>
        </Card>
      </Container>
    </section>
  );
};

export default LoginPage;
