import React,{useState, useEffect} from 'react';
import './marketplace.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {InputAdornment} from '@mui/material';
import searchIcon from '../../assets/frame71.svg';
import Navbar from '../../components/Navbar/Navbar'

export default function Marketplace() {
    const [value,setValue] = useState('');
    function handleChange(event){
      setValue((preValue)=>{
          return{
              ...preValue,
              value
          }
      })
      console.log(value)
    }
  return (
    <>
    <Navbar />
    <div style={{backgroundColor: 'white', minHeight:'100vh',display:'flex',flexDirection:'row'}}>
    <div style={{width:'87vw',display:'flex',alignItems:'center',justifyContent:'flex-start',flexDirection:"column"}}>
    <TextField 
            name='Name'
            autoComplete='off'
            onChange={handleChange} 
            sx={{
                width: '70%',
                paddingTop:'30px',
                paddingLeft:'60px',
                display: 'flex' ,
                '& .MuiOutlinedInput-root':{
                    borderRadius:'20px',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #FFFFFF;',
                  '& fieldset':{
                    borderColor: 'white'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white'
                  },
                },
                '& .MuiOutlinedInput-root:hover':{
                  '& fieldset':{
                    borderColor:'white'
                  }
                }
                }} 
            InputProps={{startAdornment: (
                        <InputAdornment position="start">
                        <button style={{background:'transparent',border:'none',display: 'flex',position:'relative',right:'35px',zIndex:'10000000'}}>
                                <img style={{height:'55px'}} src={searchIcon}></img>
                        </button>
                        </InputAdornment>),
                        style: {color:'black'}}}
            InputLabelProps={{
              style: { color:'white' },
            }}
            variant='outlined'
            label=''
            id="outlined-basic"/>  
    </div>
</div></>
  )
}
