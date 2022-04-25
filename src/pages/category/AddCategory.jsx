import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button1 } from '../../components/Button';
import { Form1 } from '../../components/Form';
import { Input1, Textarea } from  '../../components/Input';
import url from '../../url';

function AddCategory() {
  const [value, setValue] = useState({name:'', description:''});
  const navigate = useNavigate();

  function set(e){
    setValue({...value, [e.target.name]:e.target.value});
  }

  function send(){
    fetch(`${url}/category`,{
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
    <Form1 title="Add Category">
        <Input1 onChange={set} name="name" placeholder="Enter category name:" value={value.name} lavel="Category name:" />
        <Textarea onChange={set} name="description" placeholder="Enter category description:" value={value.description} lavel="Category description:" />
        <Button1 click={send} name="Save" />
    </Form1>

  )
}

export default AddCategory