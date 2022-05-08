import React, { useState } from 'react';
import { Input1, Option, Select, Textarea } from '../../components/Input';
import { Button1 } from '../../components/Button';
import { Form1 } from '../../components/Form';
import { AlertContainer, Alert1, Alert2 } from '../../components/Alert';
import url from '../../url'
import { Link } from 'react-router-dom';


function AddProduct(){
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([]);
    const [alert, setAlert] = useState([]);
    const [value,setValue] = useState({name:'', description:'', salePrice: 0, purchasePrice: 0, subCategory:'', file:{}});


    function input(e){
        setValue({...value,[e.target.name]:e.target.value});
    }
    function file(e){
        setValue({...value,[e.target.name]:e.target.files[0]});
    }

    function getCategory(e){
        fetch(`${url}/category/${e.target.value}`,{credentials: 'include'}).then((data)=>data.json()).then((data)=>{
            setSubCategory(data.data[0].subCategorys);
        })    
    }


    function send(){
        if(value.name === ''){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild !" message="Name field is required." />]);
        }

        if(value.subCategory === ''){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild !" message="Please select sub category." />]);
        }

        if(value.name !== '' && value.subCategory !== ''){

            const formData = new FormData();

            formData.append('name',value.name);
            formData.append('description',value.description);
            formData.append('salePrice',value.salePrice);
            formData.append('purchasePrice',value.purchasePrice);
            formData.append('subCategoryId',value.subCategory);
            formData.append('photo',value.file);

            fetch(`${url}/product`,{
                method:"POST",
                body: formData,
                credentials: 'include'
            }).then((data)=>data.json()).then((data)=>{
                if(data.status === true){
                    // dispatch(ADD_PRODUCT(data.data));
                    setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successful" message={data.message} />]);
                    setValue({name:'', description:'', salePrice: 0, purchasePrice: 0, subCategory:'', file:{}});
                }else{
                    setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild !" message={data.message} />]);
                }
            });
        }
        

    }


    return(<>
            <AlertContainer>
                {alert}
            </AlertContainer>
            <Form1 title="Add Product" >
                <Input1 type="text" onChange={input} name="name" value={value.name} placeholder="Enter product name..." lavel="Product name:" id="input1" />
                <Textarea onChange={input} name="description" value={value.description}  placeholder="Enter product description..." lavel=" Product description:" id="input2" />
                <div className=' flex gap-4 '>
                  <div className=' w-1/2 flex'>
                    <Select onChange={getCategory}  name="category" value={value.category}  id="input4"  lavel="Select brand :">
                    <Option value="" disable={true}>Select a brand</Option>
                        {
                            category.map((data, index)=>{
                                return(
                                    <Option key={index} value={data._id}>{data.name}</Option>
                                )
                            })
                        }
                        
                    </Select>
                    <Link to='/addBrand' className=' block w-5 h-5 rounded-full bg-white text-dark-blue-1 -ml-7  mt-9 text-2xl'><i className="fa-solid fa-circle-plus"></i></Link>
                  </div>
                  <div className=' w-1/2 flex'>        
                    <Select onChange={input}  name="subCategory" value={value.subCategory}  id="input4"  lavel="Select category :">

                    <Option value="" disable={true}>Select a category</Option>
                        {
                            subCategory.map((data, index)=>{
                                return(
                                    <Option key={index} value={data._id}>{data.name}</Option>
                                )
                            })
                        }
                        
                    </Select>
                    <Link to='/addCategory' className='  block w-5 h-5 rounded-full bg-white text-dark-blue-1 -ml-7  mt-9 text-2xl'><i className="fa-solid fa-circle-plus"></i></Link>
                  </div>

                </div>
                <div className="flex gap-4">
                  <Input1 type="number" onChange={input} name="purchasePrice" value={value.purchasePrice} placeholder="Enter purchase price..." lavel="Purchase price:" id="input6" />
                  <Input1 type="number" onChange={input} name="salePrice" value={value.salePrice} placeholder="Enter sale price..." lavel="Sale price:" id="input5" />
                </div>

                <div className="flex gap-4">
                  <Input1 type="number" onChange={input} name="purchasePrice" value={value.purchasePrice} placeholder="Enter purchase price..." lavel="Discount in Tk:(৳)" id="input6" />
                  <Input1 type="number" onChange={input} name="salePrice" value={value.salePrice} placeholder="Enter sale price..." lavel="Discount in percentage:(%)" id="input5" />
                </div>

                <div className="flex gap-4">
                  <div className=' w-full flex'>
                      <Select onChange={getCategory}  name="category" value={value.category}  id="input4"  lavel="Select brand :">
                      <Option value="" disable={true}>Select a brand</Option>
                          {
                              category.map((data, index)=>{
                                  return(
                                      <Option key={index} value={data._id}>{data.name}</Option>
                                  )
                              })
                          }
                          
                      </Select>
                      <Link to='/addBrand' className=' block w-5 h-5 rounded-full bg-white text-dark-blue-1 -ml-7  mt-9 text-2xl'><i className="fa-solid fa-circle-plus"></i></Link>
                    </div>
                  <Input1 type="number" onChange={input} name="salePrice" value={value.salePrice} placeholder="Enter sale price..." lavel="Discount in percentage:(%)" id="input5" />
                </div>

                <Input1 onChange={file} name="file" type="file" lavel="Product photo:" id="input3" />
                <Button1 click={send} name="Save" />
            </Form1> 
          </>)
}

export default AddProduct;