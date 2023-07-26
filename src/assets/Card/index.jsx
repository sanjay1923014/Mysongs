import React from 'react'
import { Box, CardMedia, Paper,Stack,Card,Typography,Skeleton } from "@mui/material"

const SongCard = ({allSongs}) => {
  return (
    <Stack direction="row" sx={{  display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",mt:2}}>

  {allSongs.map(data=>{
if(data.id){
    return(
  <Paper key={data.id} elevation={5} sx={{m:1,maxWidth:"25%" ,p:2}}>
  <Card>
  <CardMedia alt="logo" 
  component="img"
  src={data.album.cover_big} />
  <Box sx={{p:1}}>
  <Typography>{data.title}</Typography>
  <audio src={data.preview} controls/>
  </Box>
  </Card>
  </Paper> )
    }else{
      return(
 <Paper  elevation={5} sx={{m:1,maxWidth:"25%" ,p:2}} key={data}>
<Card>
<Skeleton variant="rectangular" width={300} height={200} sx={{m:1}}/>
<Skeleton variant="rectangular" width={300} height={40} sx={{m:1}}/>
<Skeleton variant="rectangular" width={300} height={50} sx={{m:1,borderRadius:"20px"}}/>

</Card>
</Paper>
      )
    }
})}

</Stack>
  )
}

export default SongCard