import React, { useContext } from 'react'

import { Row } from 'react-bootstrap'

import CardComponent from '../Card'

import { PetsContext } from '../Pets'

const Cards = () => {
  const { cats } = useContext(PetsContext);

  return(
    <Row>
      {
        cats.map((cat, idx) => (
          <CardComponent
            idx={idx} 
            key={`${Date.now()}-${idx}`} 
            {...cat} />)
        )
      }
    </Row>
  )
}

export default Cards
