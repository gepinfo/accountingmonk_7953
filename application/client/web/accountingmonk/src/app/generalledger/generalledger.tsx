import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./generalledger.scss";
import  {service}   from './generalledger.service';

class Generalledger extends React.Component<any, any> {
    columnDefs: any = [];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
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
    onRowSelected(event:any)
    {
     this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">generalledger</h2>
        <div id="template-inkrc" className="gjs-row">
    <div id="template-ipi1x" className="gjs-cell">
        <div id="template-inukl" className="gjs-row">
            <div id="template-iovaj" className="gjs-cell">
                <div id="template-i2off">General Ledger</div>
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
                        <div id="template-ign8jo">General Ledger
                            <br id="template-i908q"></br>
                        </div>
                    </div>
                </div>
            </div>
            <div id="template-i7shl" className="gjs-cell">
                <div id="template-i8bfg" className="gjs-row">
                    <div id="template-ihrjg" className="gjs-cell">
                        <div id="template-i87mr" className="gjs-row">
                            <div id="template-ih1rx" className="gjs-cell">
                                <div id="template-i6jv3">Ref Type</div>
                                <select id="template-itzm7" className="select ">
                                    <option value="" id="template-iaygk">- Select option -</option>
                                    <option id="template-iurl7">Option 1</option>
                                </select>
                            </div>
                            <div id="template-idbpf" className="gjs-cell">
                                <div id="template-i8jzt">Ref Name</div>
                                <select id="template-id83y" className="select ">
                                    <option value="" id="template-i29bx">- Select option -</option>
                                    <option id="template-i93bh">Option 1</option>
                                </select>
                            </div>
                            <div id="template-iaam8" className="gjs-cell">
                                <div id="template-i12fi">Account</div>
                                <select id="template-iefou" className="select ">
                                    <option value="" id="template-icba7">- Select option -</option>
                                    <option id="template-it0hc">Option 1</option>
                                </select>
                            </div>
                            <div id="template-ihat6" className="gjs-cell">
                                <div id="template-iym6i">From Date</div>
                                <input id="template-iullz" className="input form-control "
                                />
                            </div>
                        </div>
                        <div id="template-igcq6" className="gjs-row">
                            <div id="template-iwutu" className="gjs-cell">
                                <div id="template-ihbnl">To Date</div>
                                <input id="template-i4i26" className="input form-control "
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="template-izpdk" className="ag-theme-material" style={{height:
                '500px', width: '100%'}}>
                    <AgGridReact columnDefs={this.columnDefs} pagination={true} onGridReady={this.onGridReady}
                    paginationPageSize={5} domLayout={ "autoHeight"} animateRows={true}defaultColDef={{sortable:
                    true, filter: true }} rowData={this.state.rowData} rowSelection={
                    "single"} onRowSelected={this.onRowSelected }></AgGridReact>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Generalledger;