

import {useState,useEffect} from "react";   

function Pics(){
      const[count, setCount] = useState(0);
    
      if(count>=5){
        setCount(0)
      }
    
        useEffect(function(){
          setInterval(() => {
            setCount(count=>count+1)
            console.log(count);
          }, 5000);
        },[])
    
    
      
      if(count == 0){  
        return <div style={{display:"flex",justifyContent:"center",alignItems:"center",scrollSnapAlign:"center",flexShrink:0,width:"100%",boxSizing:"brder-box",border:"0 solid #eee"}}>
                <picture style={{boxSizing:"border-box",border:"0 solid #eee"}}> 
                  <img style={{borderRadius:"2rem",cursor:"pointer",width:"66rem",height:"auto",maxWidth:"100%",display:"block",verticalAlign:"middle",boxSizing:"border-box",border:"0 sloid #eee"}} 
                  src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1733313377/s25vxza3uawoxbnbddtq.png?_upload_ref=ic_img_tool" alt="" />
                </picture>
              </div>
       }    
    

       if(count == 1){  
        return <div style={{display:"flex",justifyContent:"center",alignItems:"center",scrollSnapAlign:"center",flexShrink:0,width:"100%",boxSizing:"brder-box",border:"0 solid #eee"}}>
                <picture style={{boxSizing:"border-box",border:"0 solid #eee"}}> 
                  <img style={{borderRadius:"2rem",cursor:"pointer",width:"66rem",height:"auto",maxWidth:"100%",display:"block",verticalAlign:"middle",boxSizing:"border-box",border:"0 sloid #eee"}} 
                  src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1733223949/rmi3wuigrfys6kcnl4up.jpg?_upload_ref=ic_img_tool" alt="" />
                </picture>
              </div>
       }

       if(count == 2){  
        return <div style={{display:"flex",justifyContent:"center",alignItems:"center",scrollSnapAlign:"center",flexShrink:0,width:"100%",boxSizing:"brder-box",border:"0 solid #eee"}}>
                <picture style={{boxSizing:"border-box",border:"0 solid #eee"}}> 
                  <img style={{borderRadius:"2rem",cursor:"pointer",width:"66rem",height:"auto",maxWidth:"100%",display:"block",verticalAlign:"middle",boxSizing:"border-box",border:"0 sloid #eee"}} 
                  src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1731914707/jvxufnoysgcl6krun5dr.webp?_upload_ref=ic_img_tool" alt="" />
                </picture>
              </div>
       }

       if(count == 3){  
        return <div style={{display:"flex",justifyContent:"center",alignItems:"center",scrollSnapAlign:"center",flexShrink:0,width:"100%",boxSizing:"brder-box",border:"0 solid #eee"}}>
                <picture style={{boxSizing:"border-box",border:"0 solid #eee"}}> 
                  <img style={{borderRadius:"2rem",cursor:"pointer",width:"66rem",height:"auto",maxWidth:"100%",display:"block",verticalAlign:"middle",boxSizing:"border-box",border:"0 sloid #eee"}} 
                  src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1733150702/xwhr7rag5n2q1hfavikq.webp?_upload_ref=ic_img_tool" alt="" />
                </picture>
              </div>
       }

       if(count == 4){  
        return <div style={{display:"flex",justifyContent:"center",alignItems:"center",scrollSnapAlign:"center",flexShrink:0,width:"100%",boxSizing:"brder-box",border:"0 solid #eee"}}>
                <picture style={{boxSizing:"border-box",border:"0 solid #eee"}}> 
                  <img style={{borderRadius:"2rem",cursor:"pointer",width:"66rem",height:"auto",maxWidth:"100%",display:"block",verticalAlign:"middle",boxSizing:"border-box",border:"0 sloid #eee"}} 
                  src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1731914815/egtumfugrnpf1isdotdj.webp?_upload_ref=ic_img_tool" alt="" />
                </picture>
              </div>
       }
}

function Sub1(){
    return <div style={{gap:"3.5rem",backgroundColor:"#edf2fa",flexDirection:"column",width:"100%",display:"flex",position:"relative",padding:"3rem 11rem",minWidth:"unset",maxWidth:"1440px",marginLeft:"auto",marginRight:"auto",boxSizing:"border-box",border:"0 solid #eee"}}>
        <div style={{boxSizing:"border-box",border:"0 solid #eee"}}>
            <section style={{padding:0, margin:0,textAlign:"center",flexDirection:"column",display:"flex",minWidth:"unset",maxWidth:"1440px",boxSizing:"border-box",border:"0 solid #eee"}}>
                <h2 style={{fontFamily:"sans-serif",lineHeight:"1.875rem",fontSize:"1.5rem",color:"#1e1e22",fontWeight:700,margin:0,boxSizing:"border-box",border:"0 solid #eee"}}>What's Trending</h2>
                <div style={{columnGap:"2.5rem",marginTop:"2rem",scrollBehavior:"smooth",overflowX:"auto",width:"100%",display:"flex",boxSizing:"border-box",border:"0 solid #eee"}}>
                    <Pics/>
                </div>
            </section>

        </div>
    </div>
}


function Containor2(){
    return <div>
        <Sub1/>
    </div>

}

export default Containor2