import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [guests, setGuests] = useState('');
    const [roomtype, setRoomtype] = useState('');
    const [adate, setAdate] = useState('');
    const [ddate, setDdate] = useState('');
    const [error, setError] = useState({
        name: '',
        age: '',
        address: '',
        phonenumber: '',
        email: '',
        gender: '',
        guests: '',
        roomtype: '',
        adate: '',
        ddate: ''

    });
    







    return (
        <>
        <div className='form'>
            <label class='left'>Name :</label> 
            <input type="text" placeholder="Enter your name" />
            
            <label>Age :</label>
            <input type="number" placeholder="Enter your age" />
            <br />
            <br />
            
            <label  className='left'>Address :</label>
            <input type="text" placeholder="Enter your address" />
           
            <label>Phone Number :</label>
            <input type="number" placeholder="Enter your phone number" />
            <br />
            <br />
            <label>Email :</label>
            <input type="email" placeholder="Enter your email" />
           
            <label>Gender :</label>
          
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
            <br />
            <br />
            
            <label>Number of Guests :</label>
            <input type="number" placeholder="Enter number of person" />
           
            <label>Room-Type :</label>
            <input type="checkbox" name="room" value="single" /> AC Room
            <input type="checkbox" name="room" value="double" /> Non-AC Room
            <br />
            <br />
            <label>A. Date :</label>
            <input type="date" />
            
            <label>D. Date :</label>
            <input type="date" />
            <br />
            <br />
            <button type="submit">Submit</button>
            </div>
            <div style={{marginTop:'20px',border :"1px solid black"  }}>
                <table style={{ width:'100%', margin:'auto', padding:'20px'}}>
                    <tr style={{margin:'auto', padding:'20px'}}>
                        <th >Name</th>
                        <th  >Age</th>
                        <th  >Address</th>
                        <th  >P.Number</th>
                        <th >Email</th>
                        <th  >Gender</th>
                        <th  >Guests</th>
                        <th >Room Type</th>
                        <th >A Date</th>
                        <th  >D Date</th>
                        <th ><button>Edit</button></th>

                    </tr>
                    <tr>
                        
                        <th ></th>
                        <th  ></th>
                        <th ></th>
                        <th  ></th>
                        <th  ></th>
                        <th  ></th>
                        <th  ></th>
                        <th > </th>
                        <th  ></th>
                        <th  ></th>
                        <th  ><button>Delete</button></th>

                    </tr>

                </table>
            </div>
            </>
            )
}

            export default Form