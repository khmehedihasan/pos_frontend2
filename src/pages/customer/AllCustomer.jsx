import React, {  useEffect, useState } from 'react';
import { Delete, Edit } from '../../components/Button';
import Table, { Tr, Td } from '../../components/Table';
import Loader from '../../components/Loader';
import url from '../../url'

function AllCustomer() {

const [customer, setCustomer] = useState({data:[],next:{},previous:{}});
const [src, setSrc] = useState('');
const [page, setPage] = useState(1);
const [limit, setLimit] = useState(3);
const [loader, setLoader] = useState(true);

console.log(src)

function delet(id){
    fetch(`${url}/customer/${id}`,{method:'DELETE',mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        if(data.status === true){
            if(src === ''){
                setLoader(true);
                fetch(`${url}/customer?page=${page}&limit=${limit}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
                    setLoader(false);
                    if(data.status === true){
                        setCustomer(data.result);
                    }
                });
            }else{
                setLoader(true);
                fetch(`${url}/customer/search?page=${page}&limit=${limit}&search=${src}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                
                    setLoader(false);
                    if(data.status === true){
                        setCustomer(data.result);
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
        fetch(`${url}/customer?page=${page}&limit=${limit}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
        
            setLoader(false);
            if(data.status === true){
                setCustomer(data.result);
            }
        });
    }

    return () => setCustomer({data:[],next:{},previous:{}});

},[page, src, limit]);

useEffect(()=>{
    if(src !== ''){
        fetch(`${url}/customer/search?page=${page}&limit=${limit}&search=${src}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
            if(data.status === true){
                setCustomer(data.result);
            }
        });
    }

    return () => setCustomer({data:[],next:{},previous:{}});
},[page, limit, src]);

function search(e){
    setSrc(e.target.value);
}



  return (<>{
    loader?<div className=' w-full flex justify-center mt-5 '><Loader /></div>:
    <Table to="/addCustomer" name="Add Customer" rowNames={["#","Name","Email","Phone No.","Address","Actions"]} page={setPage} limit={limit} setLimit={setLimit} srcVal={src} srcFunc={search} data={customer} width='w-full'>
                {
                    customer.data.map(({_id, name, email, phone, address}, index)=>{
                        return(
                            <Tr key={index}>
                                <Td>{((customer.previous.page*customer.previous.limit)+1)+index}</Td>
                                <Td>{name}</Td>
                                <Td>{email}</Td>
                                <Td>{phone}</Td>
                                <Td>{address}</Td>
                                <Td>
                                    <Edit to={"/editCustomer/"+_id} />
                                    <Delete id={_id} click={delet} />
                                </Td>
                            </Tr>
                        );
                    })
                }
            </Table>
}</>)
}

export default AllCustomer;