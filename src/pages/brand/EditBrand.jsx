import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button1 } from '../../components/Button';
import { Form1 } from '../../components/Form';
import { Input1, Option, Select, Textarea } from '../../components/Input';
import url from '../../url';

function EditBrand() {
  const [value, setValue] = useState({name:'', description:'',categoryId:''});
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();

  function set(e){
    setValue({...value, [e.target.name]:e.target.value});
  }

  function send(){
    fetch(`${url}/subCategory/${id}`,{
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

    fetch(`${url}/category?page=1&limit=0`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
        if(data.status === true){;
            setCategory(data.result.data)
        }
    });

    fetch(`${url}/subCategory/${id}`,{
      method:"GET",
      credentials: 'include'
  }).then((data)=>data.json()).then((data)=>{
      if(data.status === true){
        setValue({name: data.data.name, description: data.data.description, categoryId:data.data.category._id});
      }
  });

  },[]);



  return (
    <Form1 title="Edit Brand">
        <Input1 onChange={set} name="name" placeholder="Enter brand name:" value={value.name} lavel="Brand name:" />
        <Textarea onChange={set} name="description" placeholder="Enter brand description:" value={value.description} lavel="Brand description:" />
        <Select onChange={set}  name="categoryId" value={value.categoryId}  id="input4"  lavel="Select category :">
                <Option value="" disable={true}>Select a category</Option>
                    {
                        category.map((data, index)=>{
                            return(
                                <Option key={index} value={data._id}>{data.name}</Option>
                            )
                        })
                    }
                    
                </Select>
        <Button1 click={send} name="Save" />
    </Form1>

  )
}


export default EditBrand;