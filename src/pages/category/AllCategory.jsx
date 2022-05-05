import React, {  useEffect, useState } from 'react';
import { Delete, Edit } from '../../components/Button';
import Table, { Tr, Td } from '../../components/Table';
import url from '../../url'

function AllCategory() {

const [category, setCategory] = useState({data:[],next:{},previous:{}});
const [src, setSrc] = useState('');
const [page, setPage] = useState(1);
const [limit, setLimit] = useState(3);



function delet(id){
    fetch(`${url}/category/${id}`,{method:'DELETE',mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        if(data.status === true){
            if(src === ''){
                fetch(`${url}/category?page=${page}&limit=${limit}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
                    if(data.status === true){;
                        setCategory(data.result)
                    }
                });
            }else{
               
                fetch(`${url}/category/search?page=${page}&limit=${limit}&search=${src}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
                    if(data.status === true){
                        setCategory(data.result)
                    }
                });
                 
            }
        }else{

        }
    });
}
useEffect(()=>{
    if(src === ''){
        fetch(`${url}/category?page=${page}&limit=${limit}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        
            if(data.status === true){;
                setCategory(data.result);
            }
        });
    }

    return () => setCategory({data:[],next:{},previous:{}});

},[page,src, limit]);

useEffect(()=>{
    if(src !== ''){
        fetch(`${url}/category/search?page=${page}&limit=${limit}&search=${src}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        
            if(data.status === true){
                setCategory(data.result)
            }
        });
    
    }

    return () => setCategory({data:[],next:{},previous:{}});
},[page, limit, src]);

function search(e){
    setSrc(e.target.value);
}


  return (
    <Table to="/addCategory" name="Add Category" rowNames={["#","Name","Description","Actions"]} page={setPage} limit={setLimit} srcVal={src} srcFunc={search} data={category} width='w-full'>
                {
                    category.data.map(({_id, name, description}, index)=>{
                        return(
                            <Tr key={index}>
                                <Td>{((category.previous.page*category.previous.limit)+1)+index}</Td>
                                <Td>{name}</Td>
                                <Td width='w-40'>{description}</Td>
                                <Td>
                                    <Edit to={"/editCategory/"+_id} />
                                    <Delete id={_id} click={delet} />
                                </Td>
                            </Tr>
                        );
                    })
                }
                
            </Table>
  )
}

export default AllCategory;