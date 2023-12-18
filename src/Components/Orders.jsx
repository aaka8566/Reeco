import { Box, Button, Input } from '@mui/material'
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector,useDispatch } from 'react-redux';
import { getorder } from '../Redux/action';
import Singleorder from './Singleorder';
import CircularProgress from '@mui/material/CircularProgress';

  
const Orders = () => {
    const [islength,setlength]=React.useState([]);
const {orders,isloaded}=useSelector((state)=>state.orderreducer);
const dispatch=useDispatch();
const [updated,setupdated]=React.useState(false);
// const []

React.useEffect(()=>{
    dispatch(getorder())
    .then((res)=>setlength(res.payload))
.catch((err)=>setlength([]))

},[updated]);

// console.log(islength,orders,"hi");
  return (
    <Box sx={{width:"80%",border:"1px solid rgb(211,211,211)",margin:"auto",padding:"3rem 2rem 1rem 2rem",marginTop:"3rem"}}>
    <Box sx={{display:{sm:"flex",md:"flex",lg:"flex"},border:"0px solid rgb(211,211,211)",alignItems:"center",justifyContent:"space-between",width:"100%",marginBottom:"3rem"}}>
        <Box sx={{color:"black",display:"flex",alignItems:"center",justifyContent:{xs:"space-between",sm:"space-between"},border:"1px solid rgb(211,211,211)",borderRadius:"1rem",padding:"0rem 1rem 0rem 1rem"}}>
        <Input size="sm" placeholder="Search..." disableUnderline={true}/>
        <SearchIcon/>
        </Box>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem",marginTop:{xs:"2rem",sm:"0rem"}}}>
        <Button sx={{'&:hover':{backgroundColor:"rgb(61,202,114)"},color:"rgb(30,99,63)",border:"1px solid rgb(30,99,63)",borderRadius:"9rem",padding:"0.5rem 1rem 0.5rem 1rem",textTransform:"none",fontWeight:"700"}}>Add Item</Button>
            <PrintIcon/>
        </Box>
    </Box>


    <Box sx={{width:"100%"}}>
  {islength.length>0?
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 400 }} aria-label="simple table">
      <TableHead  >
        <TableRow sx={{maxHeight:"3rem"}}>
          <TableCell sx={{ fontWeight:"700",width:{xs:"15%",sm:"15%",md:"10%"} }}></TableCell>
          <TableCell sx={{ fontWeight:"700",width:"30%" }} align="left">Product Name</TableCell>
          <TableCell sx={{ fontWeight:"700",width:"15%" }} align="left">Brand</TableCell>
          <TableCell sx={{ fontWeight:"700",width:"6%" }} align="left">Price</TableCell>
          <TableCell sx={{ fontWeight:"700",width:"6%" }} align="left">Quantity</TableCell>
          <TableCell sx={{ fontWeight:"700",width:"6%" }} align="left">Total</TableCell>
          <TableCell sx={{ fontWeight:"700",width:"20%" }} align="left">Status</TableCell>
          <TableCell sx={{ fontWeight:"700",width:"8%" }} align="left"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {islength.length>0&&islength.map((row,i) => (
       <Singleorder islength={islength} key={i} props={row} updated={updated} setupdated={setupdated}/>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  :
  <Box sx={{ display: 'flex' ,justifyContent:"center",border:"0px solid green"}}>
  <CircularProgress />
</Box>
  }
    </Box>
    </Box>
  )
}

export default Orders