import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import CardMedia from '@mui/material/CardMedia';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import '../../components/card/MediaCard.css'
import '../../data/product'
import FishCard from './FishCard'
import Card from '@mui/material/Card';

export default function ProdPage () {
  const product = data.map((data) => {
    return <FishCard key={data.id} item={data}/>
  })
  return (
    <>
    <Navbar />
    <div> 
    {/*<Grid style={{display:'flex', flexDirection : 'row', minHeight :'85vh'}}> 
    <Grid item xs={6} sm={2} md={2}>
          <Paper  elevation = {0} style={{ backgroundColor : '#F2F2F2' ,  minHeight : '90vh', minWidth: '55vw', padding : '0px', margin : '0px', textAlign: 'center', zIndex : '1', borderRadius : '0px'}}>
          <div>{product}</div></Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={1} >
            <Paper  elevation = {0} style={{ backgroundColor : '#D9D9D9' ,  minHeight : '90vh', minWidth: '35vw',padding : '0px', margin : '0px', textAlign: 'center', zIndex : '1', borderRadius : '0px'}}>
            <CardMedia
          sx={{ height: 140 }}
          title="products"
          image = {props.item.url}
        />
        </Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={1} >
        <Paper  elevation = {0} style={{ backgroundColor : '#F2F2F2' ,  minHeight : '90vh', minWidth: '10vw',padding : '0px', margin : '0px', textAlign: 'center', zIndex : '1', borderRadius : '0px', alignItems:'center'}}>
        
        </Paper>
    </Grid>
  </Grid> */}
    </div>
    
    </>
  )
}
