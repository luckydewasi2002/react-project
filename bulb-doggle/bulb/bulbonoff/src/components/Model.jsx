import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';


const Model = () => {
    const [show, setShow] = useState(false);
    const [datas,setDatas]=useState([])
    const[ExpenseName,setExpenseName]=useState("");
    const[ExpenseAmount,setExpenseAmount]=useState("");
  
    const handlerAddclick=()=>{
        if(ExpenseName && ExpenseAmount){
          const newExpense={ExpenseName,ExpenseAmount}
          setDatas([...datas,newExpense])
          setExpenseName("")
          setExpenseAmount("")
        }
        console.log(datas)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
     
     <>
      <h2 className='text-center '>Expense List</h2>
<div className='text-center'>
<Button variant="primary mt-3" onClick={handleShow}>
        Add Expense
      </Button>
</div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Expense Name And Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3 expense" controlId="formGridAddress1">
          <Form.Label>Expense Name</Form.Label>
          <Form.Control placeholder="Enter Expense Name" onChange={(e)=>setExpenseName(e.target.value)} />
        </Form.Group>
       <Form.Group className="mb-3 expense" controlId="formGridAddress1">
          <Form.Label>Expense Amount</Form.Label>
          <Form.Control placeholder="Enter Expense Amount" onChange={(e)=>setExpenseAmount(e.target.value)} />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          <div className='text-center'>
        <Button variant="primary" onClick={handlerAddclick}>Add Expense</Button>
        </div>
        </Modal.Footer>
      </Modal>

        <Table striped bordered hover className='tableofexpense'>
        <thead>
          <tr>
            <th>SL/No.</th>
            <th>Expense Name</th>
            <th>Expense Amount</th>
            
          </tr>
        </thead>
        <tbody>
      {datas && 
      datas.map((data,index)=>(  
        <tr>
            <td>{index+1}</td>
            <td>{data.ExpenseName}</td>
            <td>{data.ExpenseAmount}</td>
            
          </tr>
      ))
        
      }
      </tbody>
      </Table>
     </>
    )
}

export default Model