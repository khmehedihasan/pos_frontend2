import React from 'react';
import { Link } from 'react-router-dom';
import { Input1, Option, Select } from './Input';

function Table({rowNames, to, name, children, srcVal, srcFunc, data, page, limit, setLimit}){


    const buttons = [];

    for(let i = 1; i <= data.totalPage; i++){
        buttons.push(<button key={i} onClick={()=>page(i)} className={` ${i=== (data.previous.page+1)?' text-green-400':' text-white' } h-11 w-11 mr-1`}>{i}</button>)
    }



    return(
        <>
        <div className={` w-max md:w-full flex flex-col mx-auto p-2`}>
            <div className={` w-full   p-2 h-32 mt-20 bg-dark-blue-1 mx-auto rounded-tl-md rounded-tr-md`}>
                    <div>
                        <Link to={to}><button className=" rounded-3xl bg-cyan-200 hover:bg-dark-blue-1 border-2 border-cyan-200 hover:text-white   float-right mt-2 mr-2 px-2 py-1">{name}</button></Link>
                    </div>
                    <div className=' mb-2'>
                        <div className=' w-36 md:w-56'>
                            <Select value={limit} onChange={(e)=>setLimit(e.target.value)}>
                                <Option value={3}>3</Option>
                                <Option value={5}>5</Option>
                                <Option value={10}>10</Option>
                                <Option value={25}>25</Option>
                                <Option value={50}>50</Option>
                                <Option value={100}>100</Option>
                                <Option value={1000}>1000</Option>
                                <Option value={0}>All</Option>
                            </Select>
                            <Input1 name='search' onChange={srcFunc} placeholder="Search..." type="text" value={srcVal} />
                        </div>
                    </div>
                </div>
                <table className={` w-full mx-auto table-auto border-collapse border border-slate-500`}>
                    <thead>
                        <tr>
                            {
                                rowNames.map((data, index)=>{
                                    return(
                                        <th key={index} className="border border-slate-600">{data}</th>
                                    );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
                <div className={` w-full h-auto sm:h-11 mb-10 bg-dark-blue-1 mx-auto rounded-bl-md rounded-br-md text-white flex flex-col sm:flex-row`}>
                    <div className=' flex '>
                    {
                        (data.previous.page === 0)? <button className=' h-11 px-2 mr-1 text-gray-400 cursor-not-allowed'>Previous</button>:<button onClick={()=>page(data.previous.page)} className=' h-11 px-2 mr-1'>Previous</button>
                    }
                        <div  className=' flex flex-row'>
                            {
                                buttons
                            }
                        </div>
                        {
                          (data.next.page === 0)?  <button className='h-11 px-2 text-gray-400 cursor-not-allowed'>Next</button>: <button onClick={()=>page(data.next.page)} className='h-11 px-2'>Next</button>
                        }
                       
                    </div>
                    <div className=' pl-2 sm:pl-8 py-2 mt-0.5'>Showing {(data.previous.page*data.previous.limit)+1} to { (data.next.page === 0)? data.totalData : (data.previous.page+1)*data.previous.limit} of {data.totalData} entries</div>
                    
                </div>
        </div>

        </>
    );
}

function Tr({children}){
    return(
        <tr className=" even:bg-gray-200">{children}</tr>
    );
}

function Td({children}){
    return(
        <td className={`border max-w-xs p-2 border-slate-700 text-center`}>{children}</td>
    );
}

function Img({children}){
    return(
        <td className="border border-slate-700 text-center"><img className=" text-center block mx-auto" width="100" src={children} alt=" "  /></td>
    );
}

export default Table;

export { Tr, Td, Img};