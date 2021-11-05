import './subsystem.scss';
import { API, Storage } from 'aws-amplify';
// import config from './aws-exports';
import React,{useState,useEffect } from 'react';
import {listRecords,listApps} from '../../graphql/queries';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import {
    createRecord as createNoteMutation, 
    deleteRecord as deleteNoteMutation,
    createApp as createAppMutation, 
    deleteApp as deleteAppMutation
} from '../../graphql/mutations';
import logo_sub from '../img/subscription.png';

import Record from "~/components/subsystem/record/record";
import AppList from "~/components/subsystem/appList/appList";
import Customer from "~/components/subsystem/customer/customer";
const initialFormState =
{
    name:'陳先生',
    institution:'禾禾',
    app:'設備稼動率',
    sub_time:'2021-9-30',
    sub_start:'60 天',
    active:'啟用'
}

const initialAppFormState =
{
    name:'設備狀態監控',
    version:'1.0',
    update_time:'2021-5-22',
    description:'監控設備內部運轉資訊。'
}

function Subsystem() {
    
    const [notes,setNotes] = useState([]);
    const [applist,setApplists] = useState([]);
    const [customer,setCustomer] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [appFormData, setappFormData] = useState(initialAppFormState);
    const [page,setPages] = useState(1);
    //const page = useState(page);
    useEffect(() => {
        fetchNotes();
        fetchAppLists();
      }, []);

    async function fetchNotes() {
    const apiData = await API.graphql({ query: listRecords });
    setNotes(apiData.data.listRecords.items);
    }

    async function createNote() {
    if (!formData.name) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
    }


    async function fetchAppLists() {
        const apiData = await API.graphql({ query: listApps });
        setApplists(apiData.data.listApps.items);
    }
    
    async function createAppList() {
        console.log(appFormData);
        if (!appFormData.name) return;
        await API.graphql({ query: createAppMutation, variables: { input: appFormData } });
        setApplists([ ...applist, appFormData ]);
        setappFormData(initialAppFormState);
    }



    function click_p1(){
        setPages(1);
    }
    function click_p2(){
        setPages(2);
    }
    function click_p3(){
        setPages(3);
    }


    function Panel_active() {
        if(page ===1)
        {
            return (
                <Record  data ={notes}/>
            )
        }
        else if (page ===2)
        {
            return (
                <AppList  data ={applist}/>
            );
        }
        else if (page ===3)
        {
            return (
                <div></div>
                // <Customer  data ={applist}/>
            );
        }

    }

    return (
        <div className="subsystem">
                <div className="navbar">
                    <div>系統訂閱服務</div>
                </div>
                <div className="main">
                    <div className="leftbar">
                         <img src={logo_sub} alt="logo" />
                        <div className="bar_btn">軟體訂閱管理</div>
                    </div>
                    <div className="right">
                        <div className="page">
                            <div  className={page==1?'page_sub_active':'page_sub'}  onClick={click_p1}>
                                    訂閱管理
                            </div>
                            <div  className={page==2?'page_sub_active':'page_sub'} onClick={click_p2}>
                                    軟體管理
                            </div>
                            <div  className={page==3?'page_sub_active':'page_sub'} onClick={click_p3}>
                                    客戶名單
                            </div>
                        </div>

                        {/* <button onClick={createAppList}>Create Note</button> */}
                        <Panel_active />


                    </div>
                 </div>

        </div>
      );
}

export default Subsystem;