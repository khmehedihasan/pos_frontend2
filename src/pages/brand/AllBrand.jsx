import React, {  useEffect, useState } from 'react';
import { Delete, Edit } from '../../components/Button';
import Filter from '../../components/Filter';
import { Option, Select } from '../../components/Input';
import Table, { Tr, Td } from '../../components/Table';
import url from '../../url'

function AllBrand() {

const [brand, setBrand] = useState({data:[],next:{},previous:{}});
const [category, setCategory] = useState([]);
const [src, setSrc] = useState('');
const [page, setPage] = useState(1);
const [limit, setLimit] = useState(3);



function delet(id){
    fetch(`${url}/subcategory/${id}`,{method:'DELETE',mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        if(data.status === true){
            if(src === ''){
                fetch(`${url}/subcategory?page=${page}&limit=${limit}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
                    if(data.status === true){;
                      setBrand(data.result)
                    }
                });
            }else{
               
                fetch(`${url}/subcategory/search?page=${page}&limit=${limit}&search=${src}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
                    if(data.status === true){
                      setBrand(data.result)
                    }
                });
                 
            }
        }else{

        }
    });
}
useEffect(()=>{
    if(src === ''){
        fetch(`${url}/subcategory?page=${page}&limit=${limit}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        
            if(data.status === true){;
                setBrand(data.result);
            }
        });
    }

    return () => setBrand({data:[],next:{},previous:{}});

},[page, src, limit]);

useEffect(()=>{
    if(src !== ''){
        fetch(`${url}/subcategory/search?page=${page}&limit=${limit}&search=${src}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        
            if(data.status === true){
                setBrand(data.result)
            }
        });
    
    }

    return () => setBrand({data:[],next:{},previous:{}});
},[page, limit, src]);


useEffect(()=>{

    fetch(`${url}/category?page=1&limit=0`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
        if(data.status === true){;
            setCategory(data.result.data)
        }
    });

  },[]);

function search(e){
    setSrc(e.target.value);
}


function byCat(cat){

    fetch(`${url}/subcategory/search?page=${page}&limit=${limit}&search=${cat}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        
        if(data.status === true){
            setBrand(data.result)
        }else{
            setBrand({data:[],next:{},previous:{}})
        }
    });
}

  return (
      <>
        <Filter >
            <div className=' w-80 '>
                <Select onChange={(e)=>byCat(e.target.value)}  name="categoryId"  id="input4"  lavel="Select category :">
                <Option value="" disable={true}>Select a category</Option>
                {
                    category.map((data, index)=>{
                        return(
                            <Option key={index} value={data._id}>{data.name}</Option>
                        )
                    })
                }
                </Select>
            </div>

        </Filter>
        <Table to="/addBrand" name="Add Brand" rowNames={["#","Name","Description","Category","Actions"]} page={setPage} limit={setLimit} srcVal={src} srcFunc={search} data={brand} width='w-full'>
                    {
                        brand.data.map(({_id, name, description, category}, index)=>{
                            return(
                                <Tr key={index}>
                                    <Td>{((brand.previous.page*brand.previous.limit)+1)+index}</Td>
                                    <Td>{name}</Td>
                                    <Td width='w-40'>{description}</Td>
                                    <Td>{category.name}</Td>
                                    <Td>
                                        <Edit to={"/editBrand/"+_id} />
                                        <Delete id={_id} click={delet} />
                                    </Td>
                                </Tr>
                            );
                        })
                    }
                    
        </Table>
    </>
  )
}
export default AllBrand;