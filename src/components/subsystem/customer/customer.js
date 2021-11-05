import '~/components/subsystem/subsystem.scss';
import React,{useState,useEffect } from 'react';
function Record(data) {
    
   const [customer,setRecords] = useState([]);

        useEffect(() => {
            setRecords(data.data);
        }, []);


    function ShowTable()
    {
        return (
            <table  className="table">
                <thead>
                    <tr className="table_th">
                            <th >名稱</th>
                            <th >機構</th>
                            <th>基本資料</th>
                            <th>註冊時間</th>
                            <th >登入時間</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customer.map(note => (
                                <tr  key={note.id}  className="table_th">
                                        <td className="table_td">{customer.name}</td>
                                        <td className="table_td">{customer.institution}</td>
                                        <td className="table_td">{customer.content}</td>
                                        <td className="table_td">{customer.time_signup}</td>
                                        <td className="table_td">{customer.time_login}</td>
                                </tr>
                        ))
                    }
                </tbody>
            </table> 
        )
    }

    return (
            <ShowTable />
      );
}

export default Record;