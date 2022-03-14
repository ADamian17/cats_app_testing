import React from 'react'

import { Row } from 'react-bootstrap'

import CardComponent from '../Card'

const Cards = ({ cats }) => {
  return(
    <Row>
      {
        cats.map((cat, idx) => <CardComponent key={`${Date.now()}-${idx}`} {...cat} />)
      }
    </Row>
  )
}

export default Cards
