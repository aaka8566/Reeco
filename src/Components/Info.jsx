import { Box, Button, Icon, Typography } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Info = () => {
  return (
    <Box width={'full'} sx={{paddingTop:"1rem",paddingBottom:"1rem",border:"0px solid green",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <Box sx={{display:"flex",alignItems:"center",width:"70%",margin:"auto"}}>
            <Typography>
                Orders
            </Typography>
            <Icon>
              <ChevronRightIcon/>
            </Icon>
            <Typography>
                Orders 32567EBVS
            </Typography>
        </Box>
<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"70%",margin:"auto"}}>
    <Box >
        <Typography sx={{fontWeight:"700",fontSize:"1.5rem"}}>
        Orders 32567EBVS
        </Typography>

    </Box>
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1.5rem" }}>
<Button sx={{'&:hover':{backgroundColor:"rgb(61,202,114)"},color:"rgb(30,99,63)",border:"1px solid rgb(30,99,63)",borderRadius:"9rem",padding:"0.5rem 1rem 0.5rem 1rem",textTransform:"none",fontWeight:"700"}}>Back</Button>
<Button sx={{'&:hover':{backgroundColor:"rgb(61,202,114)"},backgroundColor:"rgb(30,99,63)",color:"white",borderRadius:"9rem",padding:"0.5rem 1rem 0.5rem 1rem",textTransform:"none"}} >Approve Order</Button>
    </Box>
</Box>
    </Box>
  )
}

export default Info