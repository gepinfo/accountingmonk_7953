import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./template.scss";
import  {service}   from './template.service';

class Template extends React.Component<any, any> {
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
        <h2 className="screen-align">template</h2>
        <div id="template-igcy" className="gjs-row">
    <div id="template-ib6i" className="gjs-cell"></div>
    <div id="template-in5k" className="gjs-cell">
        <button id="template-iu3i" className="button btn btn-primary ">Login</button>
        <button id="template-ix8h" className="button btn btn-primary ">Signup</button>
    </div>
</div>
<div id="template-i5354" className="gjs-row">
    <div id="template-i4vxf" className="gjs-cell">
        <div id="template-iab2l">Get paid faster </div>
        <div id="template-idz9yw">and grow your</div>
        <div id="template-i89oi">Business
            <br id="template-iajof"></br>
        </div>
        <div id="template-iov3i">Simple, Well-Designed, Desktop Accounting </div>
        <div id="template-im47e6">Software for Freelancers and Small Businesses</div>
    </div>
    <div id="template-icb7j" className="gjs-cell"></div>
</div>
<div id="template-izw8dv" className="gjs-row">
    <div id="template-im5jqr" className="gjs-cell">
        <div id="template-i9lrsn">Almost Everything You Need</div>
        <div id="template-iqezye">Feature packed to handle your accounting requirements.</div>
    </div>
</div>
<div id="template-iwyp9d" className="gjs-row">
    <div id="template-ixyb4i" className="gjs-cell">
        <div id="template-imhtyn" className="gjs-row">
            <div id="template-ih3aky" className="gjs-cell">
                <div id="template-itbfjf">Invoicing</div>
                <div id="template-ipk5la">Draft professional invoices and export them using customizable templates.</div>
            </div>
            <div id="template-ixygus" className="gjs-cell">
                <div id="template-iam3fj">Journal Entries</div>
                <div id="template-i9v9y8">Record ad-hoc accounting entries to make expense entries and balance your
                    books.</div>
            </div>
            <div id="template-ix4vwd" className="gjs-cell">
                <div id="template-iuf3rl">Payments</div>
                <div id="template-i7y5mm">Record the transfer of funds from your customers, or to your suppliers.</div>
            </div>
        </div>
        <div id="template-itavy4" className="gjs-row">
            <div id="template-i4ujo6" className="gjs-cell">
                <div id="template-i57a41">Discounts</div>
                <div id="template-imcc8l">Apply item-wise discounts to your invoices and track them using separate
                    discount accounts.</div>
            </div>
            <div id="template-irae7c" className="gjs-cell">
                <div id="template-iyc8dt">Reports</div>
                <div id="template-igxkkb">Keep track of your business' health using financial reports such as profit
                    and loss, and balance sheet.</div>
            </div>
            <div id="template-iv68cw" className="gjs-cell">
                <div id="template-ixiduk">Quick Search</div>
                <div id="template-ikix0e">Instantly find what you are looking for within nine keystrokes.</div>
            </div>
        </div>
        <div id="template-itp7vx" className="gjs-row">
            <div id="template-iv3bgt" className="gjs-cell">
                <div id="template-ijmalv">Data Import</div>
                <div id="template-ilqd5v">Import business data from other accounting software with ease using csv
                    templates.</div>
            </div>
            <div id="template-i9srmt" className="gjs-cell">
                <div id="template-ivc0rc">Multi Currency Invoicing</div>
                <div id="template-ikjzng">Create and export invoices in your customer's currency.</div>
            </div>
            <div id="template-i0jd7y" className="gjs-cell">
                <div id="template-i4homk">Inventory Management</div>
                <div id="template-iojvum">Track and manage the flow of items and their valuation.</div>
            </div>
        </div>
    </div>
</div>
<div id="template-id6x33" className="gjs-row">
    <div id="template-icc9j6" className="gjs-cell">
        <div id="template-iuogiw" className="gjs-row">
            <div id="template-ikh81v" className="gjs-cell">
                <div id="template-ipscez">Simple And Beautiful</div>
                <div id="template-i6e1tf">An intuitive interface you will love using</div>
            </div>
        </div>
        <div id="template-iiu6fe" className="gjs-row">
            <div id="template-ihg6fk" className="gjs-cell">
                <div id="template-ibdwni" className="gjs-row">
                    <div id="template-ib8qsr" className="gjs-cell">
                        <div id="template-ih3107" className="gjs-row">
                            <div id="template-ih28y1" className="gjs-cell"></div>
                        </div>
                        <div id="template-itzslh">Invoicing</div>
                    </div>
                    <div id="template-ila50n" className="gjs-cell">
                        <div id="template-inaa0h" className="gjs-row">
                            <div id="template-igu6nq" className="gjs-cell"></div>
                        </div>
                        <div id="template-isk86c">Payments</div>
                    </div>
                    <div id="template-i02wwu" className="gjs-cell">
                        <div id="template-i8xskx" className="gjs-row">
                            <div id="template-i5i8yw" className="gjs-cell"></div>
                        </div>
                        <div id="template-ij9872">Ledger</div>
                    </div>
                    <div id="template-i7urb8" className="gjs-cell">
                        <div id="template-i92vok" className="gjs-row">
                            <div id="template-isbjrz" className="gjs-cell"></div>
                        </div>
                        <div id="template-iyn5gg">Reports</div>
                    </div>
                    <div id="template-ie7r8g" className="gjs-cell">
                        <div id="template-ira8ci" className="gjs-row">
                            <div id="template-imrc8a" className="gjs-cell"></div>
                        </div>
                        <div id="template-i47kvy">Quick Search</div>
                    </div>
                    <div id="template-ioru1f" className="gjs-cell">
                        <div id="template-igqzrx" className="gjs-row">
                            <div id="template-i8oij9" className="gjs-cell"></div>
                        </div>
                        <div id="template-i5gizi">Customizable</div>
                    </div>
                </div>
            </div>
            <div id="template-isit6s" className="gjs-cell"></div>
        </div>
    </div>
</div>
<div id="template-idysi1" className="gjs-row">
    <div id="template-inm53x" className="gjs-cell">
        <div id="template-iud7ue" className="gjs-row">
            <div id="template-injr1i" className="gjs-cell">
                <div id="template-ia1ol8">Built On Principles</div>
                <div id="template-iw0oeg">Why 10decoders books stands apart</div>
            </div>
        </div>
        <div id="template-ilt8lw" className="gjs-row">
            <div id="template-idav3k" className="gjs-cell">
                <div id="template-i866fe">Why 10decoders books stands apart</div>
                <div id="template-iuwgm8">Draft professional invoices and export them using customizable templates.</div>
            </div>
            <div id="template-iqd77r" className="gjs-cell">
                <div id="template-ivh91h">No Cloud</div>
                <div id="template-i96q9k">Record ad-hoc accounting entries to make expense entries and balance your
                    books.</div>
            </div>
        </div>
        <div id="template-iw5syb" className="gjs-row">
            <div id="template-iwe14g" className="gjs-cell">
                <div id="template-iabm7p">Privacy</div>
                <div id="template-ifm4ha">Apply item-wise discounts to your invoices and track them using separate
                    discount accounts.</div>
            </div>
            <div id="template-iytd57" className="gjs-cell">
                <div id="template-i3tnwf">Free And Open Source</div>
                <div id="template-in7q0y">Keep track of your business' health using financial reports such as profit
                    and loss, and balance sheet.</div>
            </div>
        </div>
    </div>
</div>
<div id="template-i2mkhh" className="gjs-row">
    <div id="template-i8ymtx" className="gjs-cell">
        <div id="template-izjin5" className="gjs-row">
            <div id="template-i4ai3b" className="gjs-cell">
                <div id="template-itr1db">10Decoders Books For Free Now</div>
                <div id="template-iae45j">10Decoders books simplifies invoicing, billing, and accounting for </div>
                <div
                id="template-i1m5vn">freelancers and small business owners.</div>
        </div>
    </div>
    <div id="template-i1znre" className="gjs-row">
        <div id="template-ilpjas" className="gjs-cell">
            <button id="template-i4d7h6" className="button btn btn-primary ">Login</button>
            <button id="template-ixhf85" className="button btn btn-primary ">Signup</button>
        </div>
    </div>
</div>
</div>
    </>
    );
    };
    };

    export default Template;