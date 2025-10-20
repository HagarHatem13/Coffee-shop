import React, { useState, useEffect } from "react";
import { Container, InputGroup, Form, Button } from "react-bootstrap";
import { BsX } from "react-icons/bs";

const SearchBox = ({ onClose, onSearch, value }) => {
  const [query, setQuery] = useState(value || "");

  useEffect(() => {
    setQuery(value); // sync with parent state
  }, [value]);

  const handleChange = (e) => {
    const term = e.target.value;
    setQuery(term);
    onSearch(term); // update AppContent searchTerm
  };

  return (
    <div
      className="bg-white py-4 position-fixed top-0 w-100 shadow-sm"
      style={{ zIndex: 1050, animation: "slideDown 0.4s ease forwards" }}
    >
      <Container>
        <InputGroup>
          <Form.Control
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={handleChange}
            autoFocus
          />
          <Button variant="outline-secondary" onClick={onClose}>
            <BsX size={22} />
          </Button>
        </InputGroup>
      </Container>

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SearchBox;
