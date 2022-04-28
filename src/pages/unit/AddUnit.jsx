import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button1 } from '../../components/Button';
import { Form1 } from '../../components/Form';
import { Input1 } from  '../../components/Input';
import url from '../../url';

function AddUnit() {
  const [value, setValue] = useState({name:'', shortName:''});
  const navigate = useNavigate();

  function set(e){
    setValue({...value, [e.target.name]:e.target.value});
  }

  function send(){
    fetch(`${url}/unit`,{
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
    <Form1 title="Add Unit">
        <Input1 onChange={set} name="name" placeholder="Enter unit name:" value={value.name} lavel="Unit name:" />
        <Input1 onChange={set} name="shortName" placeholder="Enter unit Short name:" value={value.shortName} lavel="Unit short name:" />
        <Button1 click={send} name="Save" />
    </Form1>

  )
}

export default AddUnit;