import React from 'react';
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {man, woman} from './db.js'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Search.css'

function Excursion(){
  
  //search

  const [search, setSearch] = useState('');

    return(
        <div  className="Excursion">
            <section>
            <Container>
            <Form>
                <searchInput>
                    <Form.Control 
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search...'
                        style={{fontSize:"14px"}}
                        className='search_input'
                    />
                </searchInput>
        </Form>
        <Table className='card-man'>
          <tbody className='flex-cards'>
            {man.filter((item) => {
                return search.toLowerCase() === ' '
                ? item
                : item.name.toLowerCase().includes(search);
            }).map((item, index) => (
              <Card key={index} style={{ width: '279px' }}>
      <Card.Img variant="top" src={item.img} alt="" />
      <Card.Body>
        <Card.Title style={{fontSize:"20px", fontWeight:"600"}}>{item.name}</Card.Title>
        <Card.Title style={{fontSize:"18px", fontWeight:"600"}}>{item.view}</Card.Title>
        <Card.Title style={{fontSize:"15px", fontWeight:"600"}}>{item.colors}</Card.Title>
        <Card.Text>
          <div className="street">
          <p style={{fontSize:"14px"}}>{item.about}</p>
          </div>
          <div className="flex-rating">
          <div className="center"><p>{item.feedback}</p>{item.feedbackText}</div>
          </div>
        </Card.Text>
        <h5 style={{color:"rgb(8, 7, 7"}}><strong>{item.price}</strong></h5>
        <Button style={{fontSize:"15px"}} variant="primary">Set</Button>
      </Card.Body>
    </Card>
              ))}
          </tbody>
        </Table>
        <Table className='card-woman'>
          <tbody className='flex-cards'>
            {woman.filter((item) => {
                return search.toLowerCase() === ' '
                  ? item
                  : item.name.toLowerCase().includes(search);
              }).map((item, index) => (
                <Card key={index} style={{ width: '279px' }}>
        <Card.Img variant="top" src={item.img} alt="" />
        <Card.Body>
          <Card.Title style={{fontSize:"20px", fontWeight:"600"}}>{item.name}</Card.Title>
          <Card.Title style={{fontSize:"18px", fontWeight:"600"}}>{item.view}</Card.Title>
          <Card.Title style={{fontSize:"15px", fontWeight:"600"}}>{item.colors}</Card.Title>
          <Card.Text>
            <div className="street">
            <p style={{fontSize:"14px"}}>{item.about}</p>
            </div>
            <div className="flex-rating">
            <div className="center"><p>{item.feedback}</p>{item.feedbackText}</div>
            </div>
          </Card.Text>
          <h5 style={{color:"rgb(8, 7, 7"}}><strong>{item.price}</strong></h5>
          <Button style={{fontSize:"15px"}} variant="primary">Отправиться</Button>
        </Card.Body>
      </Card>
              ))}
          </tbody>
        </Table>
      </Container>
            </section>
            
        </div>
    )
}

export default Excursion;