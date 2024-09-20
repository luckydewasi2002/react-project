import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const NavbarMember = () => {
  const [show, setShow] = useState(false);
  const [datas,setDatas]=useState([])
  const[YourName,setYourName]=useState("");
  const[FatherName,setFatherName]=useState("");
  const[MobileNumber,setMobileNumber]=useState("");
  const[Email,setEmail]=useState("");
 

  const handlerAddclick=()=>{
      if(YourName && FatherName && MobileNumber && Email){
        const newExpense={YourName,FatherName,MobileNumber,Email}
        setDatas([...datas,newExpense])
        setYourName("")
        setFatherName("")
        setMobileNumber("")
        setEmail("")
        setDatas([...datas,newExpense])
        YourName="",FatherName="",MobileNumber="",Email=""
      }
      console.log(datas)
  }
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div >
        

      <Navbar  bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src="https://static.vecteezy.com/system/resources/thumbnails/012/574/694/small/people-linear-icon-squad-illustration-team-pictogram-group-logo-icon-illustration-vector.jpg" width="100" height="60" className="d-inline-block align-top " />{' '}
         
        </Navbar.Brand>
        <Navbar.Brand href="#home" className=' logo'> LuckyGroup</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <div className='text-center'>
<Button variant="warning " onClick={handleShow}>
        Add Member
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Add Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
     <Form.Group className="mb-3 expense" controlId="formGridAddress1">
        <Form.Label>Your Name</Form.Label>
        <Form.Control placeholder="Enter Your Name" onChange={(e)=>setYourName(e.target.value)} />
      </Form.Group>
     <Form.Group className="mb-3 expense" controlId="formGridAddress1">
        <Form.Label>Father Name</Form.Label>
        <Form.Control placeholder="Enter Your Father Name" onChange={(e)=>setFatherName(e.target.value)} />
      </Form.Group>
     <Form.Group className="mb-3 expense" controlId="formGridAddress1">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control placeholder="Enter Your Mobile Number" onChange={(e)=>setMobileNumber(e.target.value)} />
      </Form.Group>
    
     <Form.Group className="mb-3 expense" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
     

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close</Button>
            <div className='text-center'>
      <Button variant="primary" onClick={handlerAddclick}>Sign In</Button>
      </div>
         
        </Modal.Footer>
      </Modal>
</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

    {datas && 
    datas.map((data,index)=>(  
      <Card className='card' >
      <Card.Header style={{textAlign: 'center', color: 'black', backgroundColor: 'gold'}}>Lucky Group Member</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item >Name : {data.YourName}</ListGroup.Item>
        <ListGroup.Item  >Father's Name : {data.FatherName}</ListGroup.Item>
        <ListGroup.Item  >Mobile No. : {data.MobileNumber}</ListGroup.Item>
        <ListGroup.Item >Email : {data.Email}</ListGroup.Item>
        <ListGroup.Item >_____Thank You For The Join Lucky Group._____</ListGroup.Item>
      </ListGroup>
    </Card>
    ))
      
    }
    </div>
  )
}

export default NavbarMember