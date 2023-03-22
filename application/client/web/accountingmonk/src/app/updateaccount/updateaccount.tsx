import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./updateaccount.scss";
import  {service}   from './updateaccount.service';

class Updateaccount extends React.Component<any, any> {
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
        <h2 className="screen-align">updateaccount</h2>
        <div id="template-inkrc" className="gjs-row">
    <div id="template-ipi1x" className="gjs-cell">
        <div id="template-inukl" className="gjs-row">
            <div id="template-iovaj" className="gjs-cell">
                <div id="template-i2off">Reports</div>
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
        <div id="template-iaz26" className="gjs-row">
            <div id="template-i5pgo" className="gjs-cell">
                <div id="template-ieu27" className="gjs-row">
                    <div id="template-idtp9" className="gjs-cell">
                        <div id="template-ign8jo">Update Accounts</div>
                    </div>
                </div>
            </div>
            <div id="template-i7shl" className="gjs-cell">
                <div id="template-i8bfg" className="gjs-row">
                    <div id="template-ihrjg" className="gjs-cell">
                        <input id="template-ixvvf" placeholder="Account Name" className="input form-control "
                        />
                        <input id="template-iwzi4" placeholder="Description" className="input form-control "
                        />
                        <select id="template-it3kn" className="select ">
                            <option value="" id="template-i70jq">- Select option -</option>
                            <option id="template-ilxcw">Option 1</option>
                        </select>
                    </div>
                    <div id="template-i9h42" className="gjs-cell">
                        <button id="template-itl74" className="button btn btn-primary ">Update</button>
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

    export default Updateaccount;