import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { updateorder } from '../Redux/action';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
};
const buttonstyle={
    border:'1px solid rgb(211,211,211)',
    fontSize:"0.7rem",
    borderRadius:"4rem",
   color:"black",

}
const optionstyle={
    width:"30%",
}
const inputstyle={
    width:"5rem",
    border:'1px solid rgb(211,211,211)',
    borderRadius:"0.5rem",
    input: {textAlign: "center"}
}


export default function BasicModalEdit({handleOpenedit,handleCloseedit,openedit,setOpenedit,props,updated,setupdated}) {
    // const [updateobj,setupdateobj]=React.useState({});
    const {id,image,productname,brand,price,quantity,requiredstatus}=props;
    const updprice=React.useRef(price);
    const updquantity=React.useRef(quantity);
    const updreason=React.useRef(null);
    const [bprice,setbprice]=React.useState(false);

    const dispatch=useDispatch();
  
    const update=()=>{
        let obj={};
   updprice.current!=price&&updquantity.current!=quantity?obj={"price":updprice.current,"quantity":updquantity.current,"requiredstatus":updreason.current}:
   updprice.current!=price&&updquantity.current==quantity?obj={"price":updprice.current,"requiredstatus":updreason.current}:
   updprice.current==price&&updquantity.current!=quantity?obj={"quantity":updquantity.current,"requiredstatus":updreason.current}:
   obj={};

   dispatch(updateorder(id,obj))
   .then((res)=>{setupdated(!updated);
updprice.current=price;
updquantity.current=quantity;
updreason.current=null;
handleCloseedit();
})
   .catch((err)=>console.log(err))
    }


  return (
    <div>
      <Modal
        open={openedit}
        onClose={handleCloseedit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{width:"100%",display:"flex",justifyContent:"end",alignItems:"center",cursor:"pointer"}} onClick={()=>{handleCloseedit();updprice.current=price;
        updquantity.current=quantity;updreason.current=null;}}>
          <ClearIcon/>
          </Box>
          <Box>
            <Typography sx={{fontWeight:"600",fontSize:"1.2rem"}}>
                {productname}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{fontWeight:"500",fontSize:"1.1rem",color:"grey"}}>
                {brand}
            </Typography>
          </Box>
         <Box sx={{width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"2rem"}}>
            <Box sx={{width:"20%"}}>
                <img width={'100%'} src={image} alt="error" />
            </Box>
           <Box sx={{width:"60%"}}>
           <Box sx={{width:"100%",border:"0px solid green",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"0.8rem"}}>
            <Typography sx={optionstyle}>Price</Typography>
            <Box flexGrow={1}/>
            <Input onChange={(e)=>updprice.current=e.target.value} name='price' sx={inputstyle} size="sm" placeholder="Search..." defaultValue={price} disableUnderline={true}/>
            <Box flexGrow={1}/>
            </Box>
            <Box sx={{width:"100%",border:"0px solid green",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1rem"}}>
            <Typography sx={optionstyle}>Quantity</Typography>
     
                <Box flexGrow={1} sx={{display:"flex",justifyContent:"center"}}>
                    <Box sx={{borderRadius:"1rem",backgroundColor:"rgb(0,128,0)",color:"white"}} onClick={()=>{updquantity.current=Number(updquantity.current)+1;setbprice(!bprice)}}>
                    <AddIcon/>
                    </Box>
                    </Box>
            <Input name='quantity' sx={inputstyle} size="sm" placeholder="Search..." value={updquantity.current} disableUnderline={true}/>
            <Box flexGrow={1} sx={{display:"flex",justifyContent:"center"}}>
            <Box sx={{borderRadius:"1rem",backgroundColor:"rgb(0,128,0)",color:"white"}} onClick={()=>{updquantity.current=updquantity.current-1;setbprice(!bprice)}} >
            <RemoveIcon/>
            </Box>
            </Box>
            

            </Box>
            <Box sx={{width:"100%",border:"0px solid green",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1rem"}}>
            <Typography sx={optionstyle}>Total</Typography>
            <Box flexGrow={1}/>
            <Typography sx={{width:"5rem",textAlign:"center"}}>{price*quantity} </Typography>
      
            <Box flexGrow={1}/>
            </Box>
           </Box>
         </Box>

          <Box>
          <Box>
            <Typography>
                Choose Name <span style={{color:"grey"}}>(optional)</span>
            </Typography>
          </Box>
          <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",marginTop:"1rem"}}>
            <Button  onClick={()=>{updreason.current="Missing Product";setbprice(!bprice)}} sx={[buttonstyle,{backgroundColor:`${updreason.current=="Missing Product"?'green':null}`}]} >Missing Product</Button>
            <Button  onClick={()=>{updreason.current="Quality is not the same";setbprice(!bprice)}} sx={[buttonstyle,{backgroundColor:`${updreason.current=="Quality is not the same"?'green':null}`}]}>Quality is not the same</Button>
            <Button  onClick={()=>{updreason.current="Price is not the same";setbprice(!bprice)}} sx={[buttonstyle,{backgroundColor:`${updreason.current=="Price is not the same"?'green':null}`}]}>Price is not the same</Button>
            <Button  onClick={()=>{updreason.current="Other";setbprice(!bprice)}} sx={[buttonstyle,{backgroundColor:`${updreason.current=="Other"?'green':null}`}]}>Other</Button>
          </Box>
          </Box>
          <Box sx={{width:"100%",display:"flex",justifyContent:"end",alignItems:"center",gap:"1.5rem",marginTop:"1.5rem"}}>
            <Button sx={{color:"green",borderRadius:"3rem"}} onClick={()=>{handleCloseedit();updprice.current=price;
        updquantity.current=quantity;updreason.current=null;}}>Cancel</Button>
            <Button sx={{backgroundColor:"green",borderRadius:"3rem",color:"white",'&:hover':{backgroundColor:"green"}}} onClick={()=>update()}>Send</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
