import '~/components/subsystem/subsystem.scss';
import React,{useState,useEffect } from 'react';
function AppList(data) {
    
   const [applist,setApplists] = useState([]);

        useEffect(() => {
            setApplists(data.data);
        }, []);


    let style_Title1 = {
        width: '10%'
    };
    let style_Title2 = {
        width: '10%'
    };
    let style_Title3 = {
        width: '20%'
    };
    let style_Title4 = {
        width: '70%'
    };
    function ShowTable()
    {
        return (
            <table  className="table">
                <thead>
                    <tr >
                            <th style={style_Title1}>軟體名稱</th>
                            <th style={style_Title2}>目前版本</th>
                            <th style={style_Title3}>更新時間</th>
                            <th style={style_Title4}>具體描述</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applist.map(note => (
                                <tr  key={note.id}  className="table_th">
                                        <td className="table_td">{note.name}</td>
                                        <td className="table_td">{note.version}</td>
                                        <td className="table_td">{note.update_time}</td>
                                        <td className="table_td">{note.description}</td>
                                </tr>
                        ))
                    }
                </tbody>
            </table> 
        )
    }
    
    return (
            <div>
                <ShowTable />
            </div>
      );
}

export default AppList;