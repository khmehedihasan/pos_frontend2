import React, {  useEffect, useState } from 'react';
import { Delete, Edit } from '../../components/Button';
import Table, { Tr, Td } from '../../components/Table';
import Loader from '../../components/Loader';
import url from '../../url'

function AllSupplier() {

const [supplier, setSupplier] = useState({data:[],next:{},previous:{}});
const [src, setSrc] = useState('');
const [page, setPage] = useState(1);
const [limit, setLimit] = useState(3);
const [loader, setLoader] = useState(true);





function delet(id){
    fetch(`${url}/supplier/${id}`,{method:'DELETE',mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        if(data.status === true){
            if(src === ''){
                setLoader(true);
                fetch(`${url}/supplier?page=${page}&limit=${limit}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
                    if(data.status === true){
                        setLoader(false);
                        setSupplier(data.result)
                    }
                });
            }else{
                setLoader(true);
                fetch(`${url}/supplier/search?page=${page}&limit=${limit}&search=${src}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
                    if(data.status === true){
                        setLoader(false);
                        setSupplier(data.result)
                    }
                });
                 
            }
        }else{

        }
    });
}
useEffect(()=>{
    if(src === ''){
        setLoader(true);
        fetch(`${url}/supplier?page=${page}&limit=${limit}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        
            if(data.status === true){;
                setLoader(false);
                setSupplier(data.result);
            }
        });
    }

    return () => setSupplier({data:[],next:{},previous:{}});

},[page, src, limit]);

useEffect(()=>{
    if(src !== ''){
        fetch(`${url}/supplier/search?page=${page}&limit=${limit}&search=${src}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        
            if(data.status === true){
                setSupplier(data.result);
            }
        });
    }

    return () => setSupplier({data:[],next:{},previous:{}});
},[page, limit, src]);

function search(e){
    setSrc(e.target.value);
}


  return (<>{
      loader?<div className=' w-full flex justify-center mt-5 '><Loader /></div>:
      <Table to="/addsupplier" name="Add supplier" rowNames={["#","Name","Email","Phone No.","Address","Actions"]} page={setPage} limit={limit} setLimit={setLimit} srcVal={src} srcFunc={search} data={supplier} width='w-max'>
      {
          supplier.data.map(({_id, name, email, phone, address}, index)=>{
              return(
                  <Tr key={index}>
                      <Td>{((supplier.previous.page*supplier.previous.limit)+1)+index}</Td>
                      <Td>{name}</Td>
                      <Td>{email}</Td>
                      <Td>{phone}</Td>
                      <Td>{address}</Td>
                      <Td>
                          <Edit to={"/editsupplier/"+_id} />
                          <Delete id={_id} click={delet} />
                      </Td>
                  </Tr>
              );
          })
      }
  </Table>
  }</>)


}

export default AllSupplier;