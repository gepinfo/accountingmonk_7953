import React, { useState,useEffect } from 'react';
  import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      UncontrolledDropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
      NavbarText
  } from 'reactstrap';
  import "./header.scss";
  import DropdownButton from 'react-bootstrap/DropdownButton';
  import Dropdown from 'react-bootstrap/Dropdown';
  import { details, deleteUser, UpdateUserImg, uploadImgFile } from '../user/user.service';
  import {Logout} from '../login/login.services';
  import { Web,Upload  } from '../../shared/shared.service';
  import {useJwt} from "react-jwt";

  const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userId,setUserId] = useState<any|null>("");
    const [UserName, setUserName] = useState<any|null>();
    const [images,setImages] = useState<any|null>();
    const [check, setCheck] = useState<any | null>();

      const toggle = () => setIsOpen(!isOpen);
      const openNav = () => {
         document.getElementById('mySidenav')!.style.width = "250px";
         document.getElementById("main")!.style.marginLeft = "250px";
         document.getElementById("foot")!.style.marginLeft = "250px";
          document.getElementById("mySidenav")!.style.backgroundColor = "#1E1E1E";
         };
    const closeNav = () => {
         document.getElementById("mySidenav")!.style.width = "0";
         document.getElementById("main")!.style.marginLeft = "0%";
         document.getElementById("foot")!.style.marginLeft = "0%";
         };      
     const decodedToken: any = useJwt(sessionStorage.getItem("JwtToken") || "");
    useEffect(() => { setUserId (sessionStorage.getItem('Id') || null);  setUserName(sessionStorage.getItem("Name") || null);  setImages(sessionStorage.getItem('Image') || null); setCheck(sessionStorage.getItem("JwtToken"));  });
  
    useEffect(() => {
        setCheck(decodedToken.decodedToken?.role);
      }, [decodedToken]);
      
      const logout=()=> {
        const temp = {
             id: sessionStorage.getItem('Id')
            };
    
	        Logout(temp).then((data:any) => {
    
	            sessionStorage.clear();
    
	             let userId = sessionStorage.getItem('Id') || null;
    
	             // this.router.navigate(['']);
    
	             }, (error:any) => {
    
	                console.error('error:', error);
    
	                });
    
	                 window.location.reload();
    
	                 };
    
	               
    
	 const onSelectFile = (event:any) => { 
    
	    let image = event.target.files[0];
    
	    if (event.target.files && event.target.files[0]) {
    
	        let formData = new FormData();
    
	        var reader = new FileReader();
    
	        reader.readAsDataURL(event.target.files[0]); 
    
	        reader.onload = (event: any) => { 
    
	              let url = event.target.result;
    
	             }} if (image)
    
	             { alert('* confirm u can upload click ok');
    
	                const endpoint = uploadImgFile();
    
	                 const formData: FormData = new FormData();
    
	                 formData.append('fileKey', image, image.name);
    
	         fetch(endpoint, {
    
	            method: 'POST',
    
	            body: formData
    
	            }).then(res => res.json()).then((resultData: any) => {
    
	                let userImage = `${Upload()}/${resultData}`;
    
	                 var imgJson = {
    
	                    avatar: userImage,
    
	                     id: sessionStorage.getItem('Id') } ;                      
    
	                     UpdateUserImg(imgJson).then((response: any) => {
    
	                         sessionStorage.removeItem('Image');
    
	                         sessionStorage.setItem('Image', response.data.avatar);
    
	                              setImages(sessionStorage.getItem('Image'));
    
	                        window.location.reload(); }) }) }};
    
	                        return(
    <nav data-gjs="navbar" id="template-igjrk" className="navbar ">
<div id="template-intck" className="navbar-container ">
<div id="template-icpy" className="">
</div>
<img id="ii0r8m" src="https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/dad97ef59d704ea0b66e4e5416c67f0a_new_logo_gep.png" className=""/>
<div id="template-iak8e" className="navbar-burger ">
<div id="template-iygi4" className="navbar-burger-line ">

         </div>
<div id="template-ikntj" className="navbar-burger-line ">

         </div>
<div id="template-i0h9u" className="navbar-burger-line ">

         </div>
</div>
<div data-gjs="navbar-items" id="template-ior1x" className="navbar-item-c ">
<nav data-gjs="navbar-menus" id="template-iyv8e" className="navbar-menus ">
<label id="template-i1jwl" className="">
Home</label>
<label id="template-i1rhd" className="">
About</label>
<label id="template-ic1kh" className="btn btn-primary ">
Contact us</label>
</nav>
<div id="MainMenu" className="">
<div id="i0xya-2" className="cell gpd-clm">
                                                            <div id="i60c7-2" className="gdp-row gpd-grid">
                                                                <div onClick={closeNav}  id="ibuiwl" className="cell gpd-clm"><img id="imvflv" /></div>
                                                                {check? <div id="icrvgp" className="cell gpd-clm" >
                                                                        <div id="i6vd27" className="gdp-row gpd-grid" >
                                                                            <div id="inlo1l" className="cell gpd-clm" >
                                                                                <i id="iyxitk" className="fa fa-home" aria-hidden="true"></i>
                                                                            </div>
                                                                            <div id="iytw4t" className="cell gpd-clm">
                                                                                <a id="i9imej" className="gpd-text"
                                                                                     href='/home'>home</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>:<></>}{check ==="Admin"?<div id="icrvgp" className="cell gpd-clm" >
                                                            <div id="i6vd27" className="gdp-row gpd-grid" >
                                                                <div id="inlo1l" className="cell gpd-clm" >
                                                                    <i id="iyxitk" className="fa fa-user" aria-hidden="true"></i>
                                                                </div>
                                                                <div id="iytw4t" className="cell gpd-clm" >
                                                                    <a id="i9imej" className="gpd-text"
                                                                    href='/admin'>admin</a>
                                                                </div>
                                                            </div>
                                                        </div>:<></>}
{check?<div id="icrvgp" className="cell gpd-clm"  >
                                                        <div id="i6vd27" className="gdp-row gpd-grid"  >
                                                            <div id="inlo1l" className="cell gpd-clm"  >
                                                                <i id="iyxitk" className="fa fa-folder-open" aria-hidden="true"></i>
                                                            </div>
                                                            <div id="iytw4t" className="cell gpd-clm" >
                                                                <a id="i9imej" className="gpd-text" href="#logins" data-toggle="collapse" data-parent="#MainMenu">logins <i className="fa fa-caret-down"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>):<></>}
                                                    {check?( <div className="collapse" id="logins">
                                                        <div id="icrvgp" className="cell gpd-clm">
                                                            <div id="i6vd27" className="gdp-row gpd-grid">
                                                                <div id="iytw4t" className="cell gpd-clm">
<a id="i9imej" className="gpd-text" href='/login'>login</a>
                                        </div>
                                    </div>
<a id="i9imej" className="gpd-text" href='/signup'>signup</a>
                                        </div>
                                    </div>
<a id="i9imej" className="gpd-text" href='/dashboard'>dashboard</a>
                                        </div>
                                    </div>
<a id="i9imej" className="gpd-text" href='/report'>report</a>
                                        </div>
                                    </div>
<a id="i9imej" className="gpd-text" href='/updateaccount'>updateaccount</a>
                                        </div>
                                    </div>
<a id="i9imej" className="gpd-text" href='/createentries'>createentries</a>
                                        </div>
                                    </div>
<a id="i9imej" className="gpd-text" href='/generalledger'>generalledger</a>
                                        </div>
                                    </div>
<a id="i9imej" className="gpd-text" href='/template'>template</a>
                                        </div>
                                    </div>
</div>
</div>):<></>}<div id="icrvgp" className="cell gpd-clm" >
                                                                <div id="i6vd27" className="gdp-row gpd-grid" >
                                                                    <div id="inlo1l" className="cell gpd-clm" >
                                                                        <i id="iyxitk" className="fa fa-sign-out" aria-hidden="true"></i>
                                                                    </div>
                                                                    <div id="iytw4t" className="cell gpd-clm">
                                                                        <a id="i9imej" className="gpd-text" onClick={logout} style={{cursor:"pointer"}}
                                                                         >logout</a>
                                                                    </div>
                                                                </div>
                                                            </div>
<li>
                                                                <div id="icrvgp" className="cell gpd-clm" >
                                                                    <div id="i6vd27" className="gdp-row gpd-grid" >
                                                                        <div id="inlo1l" className="cell gpd-clm" >
                                                                            <i id="iyxitk" className="fa fa-sign-in" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div id="iytw4t" className="cell gpd-clm">
                                                                            <a id="i9imej" className="gpd-text" 
                                                                            href='/login'>login</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>




{check?<div id="icrvgp" className="cell gpd-clm" >
                                                                <div id="i6vd27" className="gdp-row gpd-grid" >
                                                                    <div id="inlo1l" className="cell gpd-clm" >
                                                                        <i id="iyxitk" className="fa fa-desktop" aria-hidden="true"></i>
                                                                    </div>
                                                                    <div id="iytw4t" className="cell gpd-clm">
                                                                        <a id="i9imej" className="gpd-text"
                                                                         href='/sefscreen'>sefscreen</a>
                                                                    </div>
                                                                </div>
                                                            </div>:<></>}

                    </div>
                </div>
            

            </div>
</div>
</div>
</nav>

        );
      };
      
      export default Header;
    