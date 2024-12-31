import { useEffect } from "react";
import {useState} from "react"

function OnRight(){

  const[count, setCount] = useState(0);

  if(count>=5){
    setCount(0)
  }

    useEffect(function(){
      setInterval(() => {
        setCount(count=>count+1)
        console.log(count);
      }, 3000);
    },[])


  
  if(count == 0){  
    return <div style={{display:"flex",justifyContent:"flex-end",height:"100%",marginLrft:"auto",alignItems:"center",flexDirection:"column",width:"fitContent",maxHeight:"fitContent",
     margin:"auto",boxSizing:"border-box",border:"0 solid #eee"}}>
      <div style={{scrollbarWidth:"none",scrollBehavior:"smooth",overflowX:"auto",scrollSnapType:"x mandatory",maxWidth:"28.125rem",width:"100%",display:"flex",boxSizing:"border-box",border:"0 solid #eee"}}>
        <div id ={0} style={{display:"flex",justifyContent:"center",scrollSnapAlign:"center",minWidth:"100%",boxSizing:"border-box",border:"0 solid #eee"}}>
          <div>
            <picture>
              <img style={{width:400,height:225,loading:"eager",decoding:"async",draggable:"false",fetchpriority:"heigh",alt:"Onboarding",aspectRatio:1.78/1,verticalAlign:"middle"}} 
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911179/m6l4kbtrdldjtbbzuyrk.webp?_upload_ref=ic_img_tool&__ar__=1.78" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
   }

   
  if(count == 1){
    
    return <div style={{display:"flex",justifyContent:"flex-end",height:"100%",marginLrft:"auto",alignItems:"center",flexDirection:"column",width:"fitContent",maxHeight:"fitContent",
     margin:"auto",boxSizing:"border-box",border:"0 solid #eee"}}>
      <div style={{scrollbarWidth:"none",scrollBehavior:"smooth",overflowX:"auto",scrollSnapType:"x mandatory",maxWidth:"28.125rem",width:"100%",display:"flex",boxSizing:"border-box",border:"0 solid #eee"}}>
      <div id = {1} style={{display:"flex",justifyContent:"center",scrollSnapAlign:"center",minWidth:"100%",boxSizing:"border-box",border:"0 solid #eee"}}>
        <div>
          <picture>
            <img style={{width:400,height:225,loading:"eager",decoding:"async",draggable:"false",fetchpriority:"heigh",alt:"Onboarding",aspectRatio:1.78/1,verticalAlign:"middle"}}
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911254/tjoxygcum0qc6gp9lxuw.webp?_upload_ref=ic_img_tool&__ar__=1.78" alt="" />
          </picture>
        </div>
      </div>       
       </div>
     </div>
   }

   
  if(count == 2){
    
    return <div style={{display:"flex",justifyContent:"flex-end",height:"100%",marginLrft:"auto",alignItems:"center",flexDirection:"column",width:"fitContent",maxHeight:"fitContent",
     margin:"auto",boxSizing:"border-box",border:"0 solid #eee"}}>
      <div style={{scrollbarWidth:"none",scrollBehavior:"smooth",overflowX:"auto",scrollSnapType:"x mandatory",maxWidth:"28.125rem",width:"100%",display:"flex",boxSizing:"border-box",border:"0 solid #eee"}}>
      <div id = {2} style={{display:"flex",justifyContent:"center",scrollSnapAlign:"center",minWidth:"100%",boxSizing:"border-box",border:"0 solid #eee"}}>
        <div>
          <picture>
            <img style={{width:400,height:225,loading:"eager",decoding:"async",draggable:"false",fetchpriority:"heigh",alt:"Onboarding",aspectRatio:1.78/1,verticalAlign:"middle"}}
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911304/zl7pbyskofrwmwncyppm.webp?_upload_ref=ic_img_tool&__ar__=1.78" alt="" />
          </picture>
        </div>
      </div>       
       </div>
     </div>
   }

   
  if(count == 3){
    
    return <div style={{display:"flex",justifyContent:"flex-end",height:"100%",marginLrft:"auto",alignItems:"center",flexDirection:"column",width:"fitContent",maxHeight:"fitContent",
     margin:"auto",boxSizing:"border-box",border:"0 solid #eee"}}>
      <div style={{scrollbarWidth:"none",scrollBehavior:"smooth",overflowX:"auto",scrollSnapType:"x mandatory",maxWidth:"28.125rem",width:"100%",display:"flex",boxSizing:"border-box",border:"0 solid #eee"}}>
      <div id = {3} style={{display:"flex",justifyContent:"center",scrollSnapAlign:"center",minWidth:"100%",boxSizing:"border-box",border:"0 solid #eee"}}>
        <div>
          <picture>
            <img style={{width:400,height:225,loading:"eager",decoding:"async",draggable:"false",fetchpriority:"heigh",alt:"Onboarding",aspectRatio:1.78/1,verticalAlign:"middle"}}
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911357/o5vw0mvt9ovusu2l8lqe.webp?_upload_ref=ic_img_tool&__ar__=1.78" alt="" />
          </picture>
        </div>
      </div> 
       </div>
     </div>
   }

   if(count == 4){
    
    return <div style={{display:"flex",justifyContent:"flex-end",height:"100%",marginLrft:"auto",alignItems:"center",flexDirection:"column",width:"fitContent",maxHeight:"fitContent",
     margin:"auto",boxSizing:"border-box",border:"0 solid #eee"}}>
      <div style={{scrollbarWidth:"none",scrollBehavior:"smooth",overflowX:"auto",scrollSnapType:"x mandatory",maxWidth:"28.125rem",width:"100%",display:"flex",boxSizing:"border-box",border:"0 solid #eee"}}>
      <div id = {4} style={{display:"flex",justifyContent:"center",scrollSnapAlign:"center",minWidth:"100%",boxSizing:"border-box",border:"0 solid #eee"}}>
        <div>
          <picture>
            <img style={{width:400,height:225,loading:"eager",decoding:"async",draggable:"false",fetchpriority:"heigh",alt:"Onboarding",aspectRatio:1.78/1,verticalAlign:"middle"}}
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911428/wpslqk3e1lpalk1hsqid.webp?_upload_ref=ic_img_tool&__ar__=1.78" alt="" />
          </picture>
        </div>
      </div> 
       </div>
     </div>
   } 

}

function OnLeft(){

    return <div style={{display:"flex",flexDirection:"column",textAlign:"left",maxHeight:"fit-content"}}>
        <div style={{width:"100%",paddingTop:"1rem",paddingBottom:"1rem",display:"flex",border:"0px solid #eee",boxSizing:"border-box"}}>
            <h2 style={{fontSize:"2rem",lineHeight:"2.625rem",color:"#1e1e22",fontWieght:"700"}}>Online coaching that delivers results</h2>
        </div>
        <div style={{marginTop:"2rem",boxSizing:"border-box",border:"0px solid #eee"}}>
        <p style={{lineHeight:"1.5rem",fontSize:"1rem",color:"#494a4a"}}>Explore our online courses</p>
        </div>
        <div style={{marginTop:"1.25rem",display:"flex",flexDirection:"column",boxSizing:"border-box",birder:"0 solid #eee"}}>
          <div style={{display:"flex",justifyContent:"flex-start",gap:"0.5rem",flexWrap:"wrap",}}>
            <button style={{background:"#d5e8ff",animationTimingFunction:"cubic-bezier(.4,0,.2,1)",animationDuration:".5s",
              transitionTimingFunction:"cubic-bezier(.4,0,.2,1)",transitionDuration:".5s",fontWeight:700,fontSize:".857rem",textAlign:"center",paddingTop:".75rem",
              paddingBottom:".75rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",borderWidth:"2px",borderRadius:"9999px",justifyContent:"center",cursor:"pointer",borderColor:"#0f99fa"}}>
                <span style={{display:"flex",alignItems:"center",boxSizing:"border-box",border:"0 solid #eee"}}>
                  NEET
                </span>
            </button>
            <button style={{background:"#d5e8ff",animationTimingFunction:"cubic-bezier(.4,0,.2,1)",animationDuration:".5s",
              transitionTimingFunction:"cubic-bezier(.4,0,.2,1)",transitionDuration:".5s",fontWeight:700,fontSize:".857rem",textAlign:"center",paddingTop:".75rem",
              paddingBottom:".75rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",borderWidth:"2px",borderRadius:"9999px",justifyContent:"center",cursor:"pointer",borderColor:"#0f99fa"}}>
                <span style={{display:"flex",alignItems:"center",boxSizing:"border-box",border:"0 solid #eee"}}>
                  JEE
                </span>
              </button>
              <button style={{background:"#d5e8ff",animationTimingFunction:"cubic-bezier(.4,0,.2,1)",animationDuration:".5s",
              transitionTimingFunction:"cubic-bezier(.4,0,.2,1)",transitionDuration:".5s",fontWeight:700,fontSize:".857rem",textAlign:"center",paddingTop:".75rem",
              paddingBottom:".75rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",borderWidth:"2px",borderRadius:"9999px",justifyContent:"center",cursor:"pointer",borderColor:"#0f99fa"}}>
                <span style={{display:"flex",alignItems:"center",boxSizing:"border-box",border:"0 solid #eee"}}>
                  Class 6-10
                </span>
              </button>           
          </div>
        </div>
    </div>

}

function Onbording(){

    return <div style={{background:"#edf2fa"}}>
    <div style={{marginLeft:39.600,marginRight:39.600}}>
      <div style={{paddingLeft:"11rem",paddingRight:"11rem",paddingTop:"1.5rem",paddingBottom:"1.5rem",width:"auto",height:"auto",border:"0px solid #eee",display:"flex",justifyContent:"space-between",gap:0}}>
        <div>
        <OnLeft/>
        </div>
        <div>
        <OnRight/>
        </div>
      </div>
    </div>
    </div>
    
}

export default Onbording