import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./dashboard.scss";
import  {service}   from './dashboard.service';

class Dashboard extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    name : {
    name: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ name: { ...this.state.name, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.name.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">dashboard</h2>
        <div id="template-inkrc" className="gjs-row">
    <div id="template-ipi1x" className="gjs-cell">
        <div id="template-inukl" className="gjs-row">
            <div id="template-iovaj" className="gjs-cell">
                <div id="template-i2off">Dashboard</div>
            </div>
            <div id="template-ic6gj" className="gjs-cell">
                <input id="template-ifron" className="input form-control " />
                <div id="template-ipwzs">Robert Fox</div>
            </div>
        </div>
    </div>
</div>
<div id="template-ie78j" className="gjs-row">
    <div id="template-iqgk7" className="gjs-cell">
        <div id="template-ik4kt" className="gjs-row">
            <div id="template-iqgaq" className="gjs-cell"></div>
            <div id="template-iq3ej" className="gjs-cell"></div>
            <div id="template-ipq86" className="gjs-cell"></div>
            <div id="template-ibw7q" className="gjs-cell"></div>
        </div>
        <div id="template-i2nil" className="gjs-row">
            <div id="template-iq79g" className="gjs-cell"></div>
        </div>
    </div>
    <div id="template-iosaq" className="gjs-cell">
        <div id="template-iiml" className="gjs-row">
            <div id="template-iak9" className="gjs-cell">
                <div id="template-ih8fw" className="gjs-row">
                    <div id="template-izjog" className="gjs-cell">
                        <div id="template-iil0w">Cash Flow</div>
                    </div>
                    <div id="template-iu0sf" className="gjs-cell">
                        <div id="template-icugj" className="gjs-row">
                            <div id="template-ifmlh" className="gjs-cell">
                                <select id="template-itroy" className="select ">
                                    <option value="" id="template-iekk2">Select Period</option>
                                    <option id="template-ih6hm">This Year</option>
                                    <option id="template-ifzud">This Month</option>
                                    <option id="template-i8p77">This Quater</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="template-iem1" className="gjs-row">
            <div id="template-il86" className="gjs-cell">
                <div id="template-islm" className="gjs-row">
                    <div id="template-iczk" className="gjs-cell">
                        <div id="template-i344">Sales Invoices</div>
                        <select id="template-i5zk" className="select ">
                            <option value="" id="template-ibn5h">Select Period</option>
                            <option id="template-ib8b3">This Year</option>
                            <option id="template-iqs49">This Month</option>
                            <option id="template-ilgiu">This Quater</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="template-i9mx4" className="gjs-cell">
                <div id="template-i952y" className="gjs-row">
                    <div id="template-ibspb" className="gjs-cell">
                        <div id="template-io3ow">Purchase Invoices</div>
                        <select id="template-iej3a" className="select ">
                            <option value="" id="template-itwo5">Select Period</option>
                            <option id="template-iijih">This Year</option>
                            <option id="template-i2mh2">This Month</option>
                            <option id="template-i6zni">This Quater</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div id="template-iamqw" className="gjs-row">
            <div id="template-iw5dp" className="gjs-cell">
                <div id="template-iiylm" className="gjs-row">
                    <div id="template-i39gd" className="gjs-cell">
                        <div id="template-i7gmd">Profit Loss</div>
                        <select id="template-izod6" className="select ">
                            <option value="" id="template-i14ng">Select Period</option>
                            <option id="template-iairy">This Year</option>
                            <option id="template-irojk">This Month</option>
                            <option id="template-i7lxt">This Quater</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="template-iocoo" className="gjs-cell">
                <div id="template-ihv3y" className="gjs-row">
                    <div id="template-idotr" className="gjs-cell">
                        <div id="template-i83mv">Expenses</div>
                        <select id="template-imh1r" className="select ">
                            <option value="" id="template-i820g">Select Period</option>
                            <option id="template-iut84">This Year</option>
                            <option id="template-irwgd">This Month</option>
                            <option id="template-irxlc">This Quater</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Dashboard;