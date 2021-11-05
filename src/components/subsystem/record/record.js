import '~/components/subsystem/subsystem.scss';
import React,{useState,useEffect } from 'react';
function Record(data) {
    
   const [records,setRecords] = useState([]);

        useEffect(() => {
            setRecords(data.data);
        }, []);


    function ShowTable()
    {
        return (
            <table  className="table">
                <thead>
                    <tr className="table_th">
                            <th className="table_th">暱稱</th>
                            <th className="table_th">機構</th>
                            <th className="table_th">訂閱系統</th>
                            <th className="table_th">訂閱時間</th>
                            <th className="table_th">啟動時間</th>
                            <th className="table_th">狀態</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map(note => (
                                <tr  key={note.id}  className="table_th">
                                        <td className="table_td">{note.name}</td>
                                        <td className="table_td">{note.institution}</td>
                                        <td className="table_td">{note.app}</td>
                                        <td className="table_td">{note.sub_time}</td>
                                        <td className="table_td">{note.sub_start}</td>
                                        <td className="table_td">{note.active}</td>
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