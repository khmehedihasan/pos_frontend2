import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button1 } from '../../components/Button';
import { Form1 } from '../../components/Form';
import { Input1 } from  '../../components/Input';
import url from '../../url';

function EditUnit() {
  const [value, setValue] = useState({name:'', shortName:''});
  const navigate = useNavigate();
  const {id} = useParams();

  function set(e){
    setValue({...value, [e.target.name]:e.target.value});
  }

  function send(){
    fetch(`${url}/unit/${id}`,{
      method:"PUT",
      body: JSON.stringify(value),
      credentials: 'include'
  }).then((data)=>data.json()).then((data)=>{
      if(data.status === true){
        navigate(-1);
      }
    });
  }

  useEffect(()=>{

    fetch(`${url}/unit/${id}`,{
        method:"GET",
        credentials: 'include'
    }).then((data)=>data.json()).then((data)=>{
        if(data.status === true){
          setValue({name: data.data[0].name, shortName: data.data[0].shortName});
        }
    });

  },[]);




  return (
    <Form1 title="Edit Unit">
        <Input1 onChange={set} name="name" placeholder="Enter unit name:" value={value.name} lavel="Unit name:" />
        <Input1 onChange={set} name="shortName" placeholder="Enter unit short name:" value={value.shortName} lavel="Unit short name:" />
        <Button1 click={send} name="Save" />
    </Form1>

  )
}

export default EditUnit;