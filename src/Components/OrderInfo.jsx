import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

// 
const OrderInfo = () => {
  return (
    <Box sx={{margin:"auto",marginTop:"4rem",borderRadius:"1rem",backgroundColor:"white",width:"80%",border:"1px solid rgb(211,211,211)",display:"grid",gridTemplateColumns:"repeat(6,1fr)",padding:"1rem 2rem 1rem 2rem",}}>
<Box  sx={{border:"0px solid green",borderRight:"1px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Supplier</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:"1rem"}}>East Coast Fruits & Vegetables</Typography>
</Box>
</Box>
<Box  sx={{border:"0px solid green",borderRight:"1px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Shipping Date</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:"1rem"}}>Thu, Feb 10</Typography>
</Box>
</Box>
<Box  sx={{border:"0px solid green",borderRight:"1px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Total</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:"1rem"}}>$15,148</Typography>
</Box>
</Box>
<Box  sx={{border:"0px solid green",borderRight:"1px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Category</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:"1rem"}}></Typography>
</Box>

</Box>
<Box  sx={{border:"0px solid green",borderRight:"1px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Department</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:"1rem"}}>300-444-678</Typography>
</Box>
</Box>
<Box  sx={{border:"0px solid green",borderRight:"0px solid rgb(211,211,211)"}}>
<Box sx={{width:"70%",margin:"auto",border:"0px solid green"}}>
<Typography sx={{color:"grey",fontWeight:"600",fontSize:"0.8rem"}}>Status</Typography>
<Typography sx={{color:"black",fontWeight:"700",fontSize:"1rem"}}>Awaiting your Aprroval</Typography>
</Box>
</Box>
    </Box>
  )
}

export default OrderInfo