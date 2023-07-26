import React from 'react'
import { FormControl, TextField, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Form = ({setSearch,}) => {
  return (
    <form style={{width:"100%",textAlign:"center"}} >

    <FormControl sx={{width:"50%"}}>
    <TextField 
    id="input-with-sx"
     label="Search Your song"
      variant="standard"
    InputProps={{
      endAdornment:(
      <InputAdornment position="start">
      <SearchIcon/>
      </InputAdornment>
    ),
  }}
  onChange={(e)=>setSearch(e.target.value)}
    />
    </FormControl>
    </form>
  )
}

export default Form