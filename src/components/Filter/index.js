import React from 'react'
import { Container, Form } from 'react-bootstrap';

export const Filter = ({filters, setFilters}) => {
  return(
    <Container>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Favorite</Form.Label>
        <Form.Select
          onChange={(e) => setFilters({...filters, favoured: e.target.value})}
          aria-label="Default select example" 
          data-testid="filter-favorite">
            <option value="any">Any</option>
            <option value="favoured">favoured</option>
            <option value="not favoured">not favoured</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Gender</Form.Label>
        <Form.Select
          onChange={(e) => setFilters({...filters, gender: e.target.value})} 
          aria-label="Default select example" 
          data-testid="filter-gender">
            <option value="any">any</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </Form.Select>
      </Form.Group>
    </Container>
  )
}

export default Filter;
