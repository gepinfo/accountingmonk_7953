import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./report.scss";
import  {service}   from './report.service';

class Report extends React.Component<any, any> {
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
        <h2 className="screen-align">report</h2>
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
                        <select id="template-ibthm" className="select ">
                            <option value="" id="template-i8oo5r">Select Period</option>
                            <option id="template-isrpw4">This Year</option>
                            <option id="template-ibvoxh">This Month</option>
                            <option id="template-iw4it3">This Quater</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="template-i7shl" className="gjs-cell">
                <div id="template-iba3oy" className="gjs-row">
                    <div id="template-igl0eb" className="gjs-cell">
                        <div id="template-ieqga">Asset</div>
                        <div id="template-ita6f" className="gjs-row">
                            <div id="template-i848x" className="gjs-cell">
                                <div id="template-i6alf" className="gjs-row">
                                    <div id="template-ijhem" className="gjs-cell">
                                        <div id="template-ipwyg">Current Assets</div>
                                    </div>
                                    <div id="template-il9rz" className="gjs-cell">
                                        <div id="template-iljlj" className="gjs-row">
                                            <div id="template-i7rxe" className="gjs-cell">
                                                <div id="template-i8u8s">Pettycash</div>
                                                <div id="template-iln8h">$ 43678</div>
                                            </div>
                                        </div>
                                        <div id="template-i61pn" className="gjs-row">
                                            <div id="template-iqihj" className="gjs-cell">
                                                <div id="template-im2zv">Savingsaccount</div>
                                                <div id="template-irlei">$ 768900</div>
                                            </div>
                                        </div>
                                        <div id="template-isayx" className="gjs-row">
                                            <div id="template-iwqc7" className="gjs-cell">
                                                <div id="template-ifb9f">Accountsreceivable</div>
                                                <div id="template-iq2r4">$ 324677</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="template-ix3yw" className="gjs-cell">
                                        <div id="template-i6zl1" className="gjs-row">
                                            <div id="template-i2npy" className="gjs-cell">
                                                <div id="template-i2raa">Total Current Assets</div>
                                                <div id="template-in2td">$ 1137255</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="template-iwogb8" className="gjs-cell">
                                <div id="template-irmzt7" className="gjs-row">
                                    <div id="template-ik465f" className="gjs-cell">
                                        <div id="template-ikbx6e">Current Assets</div>
                                    </div>
                                    <div id="template-it3abf" className="gjs-cell">
                                        <div id="template-iaegxi" className="gjs-row">
                                            <div id="template-i0x2ax" className="gjs-cell">
                                                <div id="template-iyqvbp">Pettycash</div>
                                                <div id="template-irc16c">$ 43678</div>
                                            </div>
                                        </div>
                                        <div id="template-i8eahr" className="gjs-row">
                                            <div id="template-ipdufg" className="gjs-cell">
                                                <div id="template-iuwlci">Savingsaccount</div>
                                                <div id="template-iyn5kf">$ 768900</div>
                                            </div>
                                        </div>
                                        <div id="template-izld8f" className="gjs-row">
                                            <div id="template-i7sx5k" className="gjs-cell">
                                                <div id="template-ieks7g">Accountsreceivable</div>
                                                <div id="template-ilxtf1">$ 324677</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="template-idbgbl" className="gjs-cell">
                                        <div id="template-i24f5s" className="gjs-row">
                                            <div id="template-i4mash" className="gjs-cell">
                                                <div id="template-id3jck">Total Current Assets</div>
                                                <div id="template-i5emfl">$ 1137255</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="template-ilpzt6" className="gjs-row">
                            <div id="template-ip2c72" className="gjs-cell">
                                <div id="template-ibl2d3" className="gjs-row">
                                    <div id="template-iseau4" className="gjs-cell">
                                        <div id="template-ilb2ls">Current Assets</div>
                                    </div>
                                    <div id="template-iaff8z" className="gjs-cell">
                                        <div id="template-ij8428" className="gjs-row">
                                            <div id="template-ik155e" className="gjs-cell">
                                                <div id="template-ih426x">Pettycash</div>
                                                <div id="template-iq52tn">$ 43678</div>
                                            </div>
                                        </div>
                                        <div id="template-i9tkth" className="gjs-row">
                                            <div id="template-ipkecq" className="gjs-cell">
                                                <div id="template-i4ioqu">Savingsaccount</div>
                                                <div id="template-isqftx">$ 768900</div>
                                            </div>
                                        </div>
                                        <div id="template-i8ypxh" className="gjs-row">
                                            <div id="template-ih53cz" className="gjs-cell">
                                                <div id="template-iqbxng">Accountsreceivable</div>
                                                <div id="template-igb1bi">$ 324677</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="template-i1x26t" className="gjs-cell">
                                        <div id="template-iw2kva" className="gjs-row">
                                            <div id="template-i7du5k" className="gjs-cell">
                                                <div id="template-i2xbo1">Total Current Assets</div>
                                                <div id="template-iifj25">$ 1137255</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="template-i429c8" className="gjs-row">
                    <div id="template-i3jvtk" className="gjs-cell">
                        <div id="template-imh875">Account</div>
                        <div id="template-i8vtcb" className="gjs-row">
                            <div id="template-i3l12t" className="gjs-cell">
                                <div id="template-i1abmt" className="gjs-row">
                                    <div id="template-iyetf9" className="gjs-cell">
                                        <div id="template-icxhhk">Current Assets</div>
                                    </div>
                                    <div id="template-ij16ok" className="gjs-cell">
                                        <div id="template-ijhy6u" className="gjs-row">
                                            <div id="template-i1rwd8" className="gjs-cell">
                                                <div id="template-ily86u">Pettycash</div>
                                                <div id="template-iilouf">$ 43678</div>
                                            </div>
                                        </div>
                                        <div id="template-ilmza4" className="gjs-row">
                                            <div id="template-ivnzxg" className="gjs-cell">
                                                <div id="template-ifgew9">Savingsaccount</div>
                                                <div id="template-in2zkt">$ 768900</div>
                                            </div>
                                        </div>
                                        <div id="template-ijdjui" className="gjs-row">
                                            <div id="template-iaxdte" className="gjs-cell">
                                                <div id="template-i57zuy">Accountsreceivable</div>
                                                <div id="template-ic7gof">$ 324677</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="template-iqcian" className="gjs-cell">
                                        <div id="template-i1780s" className="gjs-row">
                                            <div id="template-ijjv7h" className="gjs-cell">
                                                <div id="template-ifasd4">Total Current Assets</div>
                                                <div id="template-iiy6bz">$ 1137255</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="template-ijtk7g" className="gjs-cell">
                                <div id="template-i57sfc" className="gjs-row">
                                    <div id="template-ihjd2g" className="gjs-cell">
                                        <div id="template-iksb5r">Fixed Assets</div>
                                    </div>
                                    <div id="template-itfwzy" className="gjs-cell">
                                        <div id="template-ijbyok" className="gjs-row">
                                            <div id="template-ircv2j" className="gjs-cell">
                                                <div id="template-i338eo">Buildings</div>
                                                <div id="template-iw0qbl">$ 97895</div>
                                            </div>
                                        </div>
                                        <div id="template-i0hy4j" className="gjs-row">
                                            <div id="template-is60mv" className="gjs-cell">
                                                <div id="template-ivqkfd">Land</div>
                                                <div id="template-irui5i">$ 867900</div>
                                            </div>
                                        </div>
                                        <div id="template-ieor2z" className="gjs-row">
                                            <div id="template-iphvle" className="gjs-cell">
                                                <div id="template-if3ovg">Equipment</div>
                                                <div id="template-isnhab">$ 867900</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="template-iiejve" className="gjs-cell">
                                        <div id="template-irtr45" className="gjs-row">
                                            <div id="template-iuujlg" className="gjs-cell">
                                                <div id="template-iq34xl">Total Fixed Assets</div>
                                                <div id="template-i252iy">$ 1137255</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="template-it9j0r" className="gjs-row">
                            <div id="template-i4eolu" className="gjs-cell">
                                <div id="template-ifrxub" className="gjs-row">
                                    <div id="template-i1b61v" className="gjs-cell">
                                        <div id="template-i6cz0l">Other Assets</div>
                                    </div>
                                    <div id="template-iyzcbk" className="gjs-cell">
                                        <div id="template-ib3nth" className="gjs-row">
                                            <div id="template-i4js9w" className="gjs-cell">
                                                <div id="template-iyfik7">Deposite</div>
                                                <div id="template-iyb7ml">$ 898900</div>
                                            </div>
                                        </div>
                                        <div id="template-i9uw94" className="gjs-row">
                                            <div id="template-i9dh3u" className="gjs-cell">
                                                <div id="template-ihxmo2">Notesrecievable</div>
                                                <div id="template-i39hvh">$ 768900</div>
                                            </div>
                                        </div>
                                        <div id="template-i0v7jf" className="gjs-row">
                                            <div id="template-i4b21v" className="gjs-cell">
                                                <div id="template-iv9oai">Oganizationcost</div>
                                                <div id="template-i51o1k">$ 324677</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="template-icd5pq" className="gjs-cell">
                                        <div id="template-ikhztf" className="gjs-row">
                                            <div id="template-iswgri" className="gjs-cell">
                                                <div id="template-imaa0c">Total Current Assets</div>
                                                <div id="template-ijn637">$ 1137255</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="template-il64kv" className="gjs-row">
                    <div id="template-ibdcsj" className="gjs-cell">
                        <div id="template-i249f2">Liabilities</div>
                        <div id="template-iwwauh" className="gjs-row">
                            <div id="template-ixrfix" className="gjs-cell">
                                <div id="template-iike2l" className="gjs-row">
                                    <div id="template-ih1jlg" className="gjs-cell">
                                        <div id="template-i20pb6">Current Assets</div>
                                    </div>
                                    <div id="template-ioolpv" className="gjs-cell">
                                        <div id="template-iar25y" className="gjs-row">
                                            <div id="template-ihyuaz" className="gjs-cell">
                                                <div id="template-i9tf8k">Pettycash</div>
                                                <div id="template-i6lj56">$ 43678</div>
                                            </div>
                                        </div>
                                        <div id="template-i3uoxl" className="gjs-row">
                                            <div id="template-idqih7" className="gjs-cell">
                                                <div id="template-iaivqq">Savingsaccount</div>
                                                <div id="template-im9peh">$ 768900</div>
                                            </div>
                                        </div>
                                        <div id="template-iqfg2g" className="gjs-row">
                                            <div id="template-i0i1b2" className="gjs-cell">
                                                <div id="template-iflvb2">Accountsreceivable</div>
                                                <div id="template-ibpu8l">$ 324677</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="template-i5fzok" className="gjs-cell">
                                        <div id="template-iyj6r3" className="gjs-row">
                                            <div id="template-ifurfs" className="gjs-cell">
                                                <div id="template-i6qali">Total Current Assets</div>
                                                <div id="template-izlbtm">$ 1137255</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="template-ihpmyi" className="gjs-cell">
                                <div id="template-i6s2kp" className="gjs-row">
                                    <div id="template-ijnznc" className="gjs-cell">
                                        <div id="template-itnmdn">Current Assets</div>
                                    </div>
                                    <div id="template-iz8k1c" className="gjs-cell">
                                        <div id="template-i6d4vj" className="gjs-row">
                                            <div id="template-ilzhaf" className="gjs-cell">
                                                <div id="template-iuem13">Pettycash</div>
                                                <div id="template-i6er7j">$ 43678</div>
                                            </div>
                                        </div>
                                        <div id="template-icd2xb" className="gjs-row">
                                            <div id="template-irxgub" className="gjs-cell">
                                                <div id="template-invgff">Savingsaccount</div>
                                                <div id="template-ijqxt6">$ 768900</div>
                                            </div>
                                        </div>
                                        <div id="template-iuvwvc" className="gjs-row">
                                            <div id="template-iq2m0j" className="gjs-cell">
                                                <div id="template-iyx7u7">Accountsreceivable</div>
                                                <div id="template-it2y39">$ 324677</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="template-i5ejx6" className="gjs-cell">
                                        <div id="template-id428q" className="gjs-row">
                                            <div id="template-i23tlw" className="gjs-cell">
                                                <div id="template-izbuug">Total Current Assets</div>
                                                <div id="template-iwjgat">$ 1137255</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

    export default Report;