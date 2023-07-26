import React from 'react'
import {Box,Typography} from "@mui/material";

const Header = () => {
  return (
  <Box sx={{width:"50%",
  p:1,
  mx:"auto",
  my:2,
  borderRadius:"55px",
  textAlign:"center",
backgroundImage:"url(https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/635a8fdcb55609fa235d7c6c_edisons-broken-bulb.svg)",
backgroundSize:"cover"
}}>
  <Typography variant="h3" color="#fff">Let's get our favourite song</Typography>
  </Box>
  )
}

export default Header;