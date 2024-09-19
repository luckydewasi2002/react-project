import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';


const Expence = () => {
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
  return (
   
   <>
       <h2 className='text-center'>Add Expense</h2>
     <Form.Group className="mb-3 expense" controlId="formGridAddress1">
        <Form.Label>Expense Name</Form.Label>
        <Form.Control placeholder="Enter Expense Name" onChange={(e)=>setExpenseName(e.target.value)} />
      </Form.Group>
     <Form.Group className="mb-3 expense" controlId="formGridAddress1">
        <Form.Label>Expense Amount</Form.Label>
        <Form.Control placeholder="Enter Expense Amount" onChange={(e)=>setExpenseAmount(e.target.value)} />
      </Form.Group>
      <div className='text-center'>
      <Button variant="primary" onClick={handlerAddclick}>Add Expense</Button>
      </div>
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

export default Expence