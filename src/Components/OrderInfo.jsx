import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AirlinesIcon from '@mui/icons-material/Airlines';
const OrderInfo = () => {
  return (
    <Box sx={{margin:"auto",marginTop:"4rem",borderRadius:"1rem",backgroundColor:"white",width:"80%",border:"1px solid rgb(211,211,211)",display:{xs:"none",sm:"grid",md:"grid",lg:"grid"},gridTemplateColumns:{sm:"repeat(3,1fr)",md:"repeat(6,1fr)",lg:"repeat(6,1fr)"},padding:"1rem 2rem 1rem 2rem",rowGap:{sm:"2rem"}}}>
<Box  sx={{border:"0px solid green",borderRight:"1px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Supplier</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:{xs:"0.8rem",sm:"1rem",md:"1rem"}}}>East Coast Fruits & Vegetables</Typography>
</Box>
</Box>
<Box  sx={{border:"0px solid green",borderRight:"1px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Shipping Date</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:{xs:"0.8rem",sm:"1rem",md:"1rem"}}}>Thu, Feb 10</Typography>
</Box>
</Box>
<Box  sx={{border:"0px solid green",borderRight:{md:"1px solid rgb(211,211,211)",lg:"1px solid rgb(211,211,211)"}}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Total</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:{xs:"0.8rem",sm:"1rem",md:"1rem"}}}>$15,148</Typography>
</Box>
</Box>
<Box  sx={{border:"0px solid green",borderRight:"1px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Category</Typography>
<Box sx={{color:"grey",border:"0px solid green",margin:"auto",display:"grid",gridTemplateColumns:'repeat(4,1fr)',gridTemplateRows:'repeat(2,1fr)',gap:'0.5rem',paddingTop:"0.5rem"}}>
<Box ><AccountTreeIcon sx={{fontSize:"medium"}}/></Box>
<Box><AdUnitsIcon sx={{fontSize:"medium"}}/></Box>
<Box><AddCircleIcon sx={{fontSize:"medium"}}/></Box>
<Box><AddHomeIcon sx={{fontSize:"medium"}}/></Box>
<Box><AdminPanelSettingsIcon sx={{fontSize:"medium"}}/></Box>
<Box><AgricultureIcon sx={{fontSize:"medium"}}/></Box>
<Box><AddToQueueIcon sx={{fontSize:"medium"}}/></Box>
<Box><AirlinesIcon sx={{fontSize:"medium"}}/></Box>
</Box>
</Box>

</Box>
<Box  sx={{border:"0px solid green",borderRight:"1px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Department</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:{xs:"0.8rem",sm:"1rem",md:"1rem"}}}>300-444-678</Typography>
</Box>
</Box>
<Box  sx={{border:"0px solid green",borderRight:"0px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Status</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:{xs:"0.8rem",sm:"1rem",md:"1rem"}}}>Awaiting your Aprroval</Typography>
</Box>
</Box>
    </Box>
  )
}

export default OrderInfo