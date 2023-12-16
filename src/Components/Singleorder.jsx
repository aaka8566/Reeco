import { useDispatch } from 'react-redux';
import { Box, Button, TableCell, TableRow } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { updateorder } from '../Redux/action';
import BasicModal from './Modal';
import BasicModalEdit from './EditModal';
import CircularProgress from '@mui/material/CircularProgress';

const Singleorder = ({props,updated,setupdated,islength}) => {
    // console.log(props.requiredstatus,"props");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [openedit, setOpenedit] = React.useState(false);
    const handleOpenedit = () => setOpenedit(true);
    const handleCloseedit = () => setOpenedit(false);
  
    const [statuscolor,setstatuscolor]=React.useState(null); 
    const [loader,setloader]=React.useState(true);
 const dispatch=useDispatch();   
  return (
    <>
       <TableRow
              key={props.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="props">
                <img width={"100%"} src={props.image} alt="error" />
              </TableCell>
              <TableCell align="left" ><Box sx={{height:{xs:"4rem",sm:"4rem",md:"6rem"},overflowY:{xs:"hidden",sm:"hidden",md:"scroll"}}}>{props.productname}</Box></TableCell>
              <TableCell align="left">{props.brand}</TableCell>
              <TableCell align="left">{props.price}</TableCell>
              <TableCell align="left">{props.quantity}</TableCell>
              <TableCell align="left">{props.quantity*props.price}</TableCell>
              <TableCell align="center" >
            {props.requiredstatus!==null?
            <Button sx={{'&:hover':{backgroundColor:"rgb(61,202,114)"},width:"6rem",color:"white",backgroundColor:`${props.requiredstatus=='approved'?"green":props.requiredstatus=="needed"?"orange":props.requiredstatus=="urgent"?"red":"green"}`}}>
                <Box sx={{overflow:"hidden",height:"1.5rem"}}>{props.requiredstatus}</Box>
                </Button>:null
            }
            {!loader?<Box sx={{ display: 'flex' ,justifyContent:"center",border:"0px solid green"}}>
                        <CircularProgress />
                      </Box>:null}
              </TableCell>
              <TableCell align="left">
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",color:"green"}}>
                    <Box onClick={()=>{setloader(false);
                        dispatch(updateorder(props.id,{"requiredstatus":"approved"}))
                    .then((res)=>{setupdated(!updated);setstatuscolor("green");setloader(true)});
                    }
                    }><DoneIcon/></Box>
                    <Box sx={{color:"red"}} onClick={()=>handleOpen()}><ClearIcon/></Box>
                    
                    <BasicModal  open={open} loader={loader} setloader={setloader} handleOpen={handleOpen} handleClose={handleClose} setOpen={setOpen} food={props.productname} id={props.id} updated={updated}setupdated={setupdated} />
                    <Button sx={{color:"green"}} onClick={()=>{handleOpenedit()}}>EDIT</Button>
                    <BasicModalEdit loader={loader} setloader={setloader} handleOpenedit={handleOpenedit} handleCloseedit={handleCloseedit} openedit={openedit} setOpenedit={setOpenedit} props={props} updated={updated}setupdated={setupdated}/>
                </Box>
              </TableCell>
            </TableRow>
    </>
  )
}

export default Singleorder