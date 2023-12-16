import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { updateorder } from '../Redux/action';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open,handleClose,handleOpen,setOpen,food,id,updated,setupdated,setstatuscolor}) {
//console.log(open);
const dispatch=useDispatch();   
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Box sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
         <Typography id="modal-modal-title" variant="h6" component="h2">
            Missing Product
          </Typography>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"right",cursor:"pointer"}} onClick={()=>handleClose()}><ClearIcon/></Box>
         </Box>
          <Box>
         
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           is {food} missing
          </Typography>
          </Box>
         
        
          <Box sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"right"}}>
            <Button sx={{color:"blue"}} onClick={()=>
                dispatch(updateorder(id,{"requiredstatus":"urgent"}))
                .then((res)=>{setupdated(!updated);handleClose();})
                .catch((err)=>{console.log(err);})
                }>YES</Button>
            <Button sx={{color:"red"}} onClick={()=>
                dispatch(updateorder(id,{"requiredstatus":"needed"}))
                .then((res)=>{setupdated(!updated);handleClose();})
                .catch((err)=>{console.log(err);})
                }>NO</Button>
        </Box>
        </Box>
       
      </Modal>
    </div>
  );
}