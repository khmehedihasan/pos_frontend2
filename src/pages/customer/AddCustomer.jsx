import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button1 } from '../../components/Button';
import { Form1 } from '../../components/Form';
import { Input1, Textarea } from  '../../components/Input';
import url from '../../url';

function AddCustomer() {
  const [value, setValue] = useState({name:'', email:'', phone:'', address:''});
  const navigate = useNavigate();

  function set(e){
    setValue({...value, [e.target.name]:e.target.value});
  }

  function send(){
    fetch(`${url}/customer`,{
      method:"POST",
      body: JSON.stringify(value),
      credentials: 'include'
  }).then((data)=>data.json()).then((data)=>{
      if(data.status === true){
        navigate(-1);
      }
    });
  }


  return (
    <Form1 title="Add Customer">
        <Input1 onChange={set} name="name" type="text" placeholder="Enter customer name:" value={value.name} lavel="Customer name:" />
        <Input1 onChange={set} name="email" type="email" placeholder="Enter customer email:" value={value.email} lavel="Customer email:" />
        <Input1 onChange={set} name="phone" type="number" placeholder="Enter customer Phone:" value={value.phone} lavel="Customer phone:" />
        <Textarea onChange={set} name="address" placeholder="Enter customer address:" value={value.address} lavel="Customer address:" />
        <Button1 click={send} name="Save" />
    </Form1>

  )
}

export default AddCustomer;