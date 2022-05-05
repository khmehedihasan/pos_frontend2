import React, {  useEffect, useState } from 'react';
import { Delete, Edit } from '../../components/Button';
import Table, { Tr, Td } from '../../components/Table';
import url from '../../url'

function AllUnit() {

const [unit, setUnit] = useState({data:[],next:{},previous:{}});
const [src, setSrc] = useState('');
const [page, setPage] = useState(1);
const [limit, setLimit] = useState(3);



function delet(id){
    fetch(`${url}/unit/${id}`,{method:'DELETE',mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        if(data.status === true){
            if(src === ''){
                fetch(`${url}/unit?page=${page}&limit=${limit}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
                    if(data.status === true){;
                        setUnit(data.result)
                    }
                });
            }else{
               
                fetch(`${url}/unit/search?page=${page}&limit=${limit}&search=${src}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
                    if(data.status === true){
                        setUnit(data.result)
                    }
                });
                 
            }
        }else{

        }
    });
}
useEffect(()=>{
    if(src === ''){
        fetch(`${url}/unit?page=${page}&limit=${limit}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        
            if(data.status === true){;
                setUnit(data.result);
            }
        });
    }

    return () => setUnit({data:[],next:{},previous:{}});

},[page, src, limit]);

useEffect(()=>{
    if(src !== ''){
        fetch(`${url}/unit/search?page=${page}&limit=${limit}&search=${src}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        
            if(data.status === true){
                setUnit(data.result)
            }
        });
    
    }

    return () => setUnit({data:[],next:{},previous:{}});
},[page, limit, src]);

function search(e){
    setSrc(e.target.value);
}


  return (
    <Table to="/addunit" name="Add unit" rowNames={["#","Name","Short Name","Actions"]} page={setPage} limit={setLimit} srcVal={src} srcFunc={search} data={unit} width='w-full'>
                {
                    unit.data.map(({_id, name, shortName}, index)=>{
                        return(
                            <Tr key={index}>
                                <Td>{((unit.previous.page*unit.previous.limit)+1)+index}</Td>
                                <Td>{name}</Td>
                                <Td width='w-40'>{shortName}</Td>
                                <Td>
                                    <Edit to={"/editunit/"+_id} />
                                    <Delete id={_id} click={delet} />
                                </Td>
                            </Tr>
                        );
                    })
                }
                
            </Table>
  )
}

export default AllUnit;