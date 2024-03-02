import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function Search() {
  return (
    <Form inline className="w-100 mb-3">
    <div className="d-flex flex-fill">
      <FormControl type="text" placeholder="Buscar Pokemon" className="flex-grow-1 mr-2" />
      <Button variant="primary" style={{ marginLeft: '5px' }}>Buscar</Button>
    </div>
  </Form>
  );
}

export default Search;
