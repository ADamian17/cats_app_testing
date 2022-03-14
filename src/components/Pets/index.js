import React, { useEffect, useState, createContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

import Cards from '../Cards';
import Filter from '../Filter';

export const PetsContext = createContext({
  cats: [],
  setCats: () => {}
});

const Pets = (props) => {
  const [cats, setCats] = useState([])
  const [filteredCats, setFilteredCats] = useState([]);
  const [filter, setFilter] = useState({
    gender: 'any',
    favoured: 'any'
  });

  console.log(cats);
  
  useEffect(() => {
    fetchCats()
  }, []);

  useEffect(() => {
    let catsFiltered = [...cats]

    if(filter.gender !== 'any') {
      catsFiltered = catsFiltered.filter(cat => cat.gender === filter.gender);
    }

    if(filter.favoured !== 'any') {
      catsFiltered = catsFiltered.filter(cat => cat.favoured === (filter.favoured === 'favoured' ? true : false ));
    }

    setFilteredCats(catsFiltered);
  }, [filter])

  const fetchCats = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/cats');
      setCats(data);
      setFilteredCats(data);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <>
      {
        cats && (
          <PetsContext.Provider value={{cats: filteredCats}}>
            <Container className='p-5'>
              <Row>
                <Col sm={4}>
                  <Filter filters={filter} setFilters={setFilter} />
                </Col>
                <Col sm={8}>
                  <Cards />
                </Col>
              </Row>
            </Container>
          </PetsContext.Provider>
        )
      }
    </>
  )
}

export default Pets;
