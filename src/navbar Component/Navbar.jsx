function LeftContent(){
    return <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",columnGap:"2rem"}}>
        <div>
        <button style={{cursor:"pointer",width:120,height:35,borderRadius:30,background:"#0266da",display:"flex",justifyContent:"space-evenly",alignItems:"center",border:"0px solid #fff"}}>
            <div>
            <img style={{width:15,height:15,background:"white"}} src="https://w1.pngwing.com/pngs/440/174/png-transparent-call-logo-mobile-phones-symbol-telephone-call-blue-text-line-thumbnail.png" alt="" />
            </div>
            <div>
            Talk to us
            </div>
            </button>
        </div>

        <div style={{cursor:"pointer"}}>
            <button style={{width:70,height:38,borderRadius:30,borderColor:"#0266da",background:"#fff"}}>Login</button>
        </div>
    </div>
}

function RightContent(){
    return <div style={{display:"flex",justifyContent:"space-evenly",columnGap:"2rem"}}>
        <div style={{width:"91",height:"26"}}>
        <img style={{cursor:"pointer"}} src="https://allen.in/logo_light.svg"></img>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly",columnGap:"2rem"}}>
            <div style={{cursor:"pointer"}}>Courses</div>
            <div style={{cursor:"pointer"}}>Test Series</div>
            <div style={{cursor:"pointer"}}>Scholarship</div>
            <div style={{cursor:"pointer"}}>Results</div>
            <div style={{cursor:"pointer"}}>Study MAterials</div>
            <div style={{cursor:"pointer"}}>About Us</div>
        </div>
    </div>
}

function Navbar(){

    return <div style={{    width:"auto",height:60,paddingLeft:"7rem",paddingRight:"7rem",border:"0px solid #fff",backgroundColor:"#fff",
    display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:39.600,marginRight:39.600,marginTop:0}}>
   
         <div>
            <RightContent/>
         </div>
         <div>
            <LeftContent/>
         </div>
    
    </div>
}

export default Navbar
