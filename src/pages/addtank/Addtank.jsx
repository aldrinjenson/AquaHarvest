import React,{useState, useRef, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import './Addtank.css'
import { ThemeContext } from '../../App';
import { Autocomplete } from '@mui/material';
import { useNavigate } from 'react-router';

export default function Addfarm() {
    const [dis, setDis] = useState(false)
    const {state,setState} = useContext(ThemeContext);
    const [fishes, setFishes] = useState(0);
    const ref0 = useRef();
    function handleSubmit(event){
        navigate('/addFish')
        // console.log(state)
        // setState({
        //     tname: '',
        //     fishes:''
        //   });
          event.preventDefault();
    }
    // function handleChangeAuto1(e,v,r){
    //     const name = ref0.current.getAttribute('name');
    //     setState(
    //       (preValue)=>{
    //         return{
    //           ...preValue,
    //           [name]: v
    //         }
    //       }
    //     )
    // }
    const navigate = useNavigate();  
    function handleChange(event){
        const { name, value } = event.target;
        setState((preValue) => {
          return {
            ...preValue,
            [name]: value
          };
        });
    }
  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column',justifyContent:'center'}}>
        <div style={{backgroundColor: '#4CE0D2', height: '30vh', width: '100vw',position:'absolute', top:'0px', display:'flex',alignItems:'center', justifyContent:'center'}}>
            <button onClick={()=>(setDis(true))} className='button2'><p>Add A New Tank</p><AddIcon sx={{'& .MuiSvgIcon-root':{color:'black',marginLeft:'15px',border:'2px black solid',borderRadius:'5px'},'& .MuiSvgIcon-root:hover':{color:'#4CE0D2',borderColor:'#4CE0D2'}}} /></button>
        </div>
        <div style={{zIndex: dis ? '1000000': '0', display: dis ? 'flex' : 'none',alignItems:'center', flexDirection:'column',justifyContent:'center', position: 'absolute', height:'90vh',width:'90vw', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)', backgroundColor: 'white',top:'0' }}>
        <form onSubmit={handleSubmit} className='parent-form1'>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h2>Enter Tank Name: </h2>
                <TextField
                    InputProps={{style: {color:'black'}}}
                    InputLabelProps={{
                    style: { color: '#22AAA1'},
                    }}
                    variant='outlined'
                    label="Tank Name"
                    name='tname'
                    required
                    autoComplete='off'
                    value={state.tname}
                    onChange={handleChange} 
                    sx={{
                    width: '40vw',
                    '& .MuiOutlinedInput-root':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4CE0D2',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover':{
                      '& fieldset':{
                        borderColor: '#4CE0D2'
                      }
                    }
                    }} 
                />
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px'}}>
            {/* #22AAA1   #4CE0D2 */}
            <div style={{width: '40vw', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:'30px'}}>
            <label style={{fontSize:'1.3rem',width:'50%'}}>Enter number of fishes:</label>
                <select ref={ref0} onChange={handleChange} value={state.ftype} id='number-of-fishes' name='ftype' style={{width:'50%',borderColor:'#22AAA1',height:'50px',borderRadius:'5px'}}>
                    <option value={1} style={{backgroundColor:'#22AAA1',color:'black'}}>1</option>
                    <option value={2} style={{backgroundColor:'#22AAA1',color:'black'}}>2</option>
                    <option value={3} style={{backgroundColor:'#22AAA1',color:'black'}}>3</option>
                    <option value={0} style={{backgroundColor:'#22AAA1',color:'black'}}>0</option>
                </select>
            </div>
            </div>
            <button className='button2'><p style={{fontFamily:"'Poppins',sans-serif",fontSize:'1.5rem'}}>Submit</p></button>

        </form>
        
        </div>
    </div>
  )
}
