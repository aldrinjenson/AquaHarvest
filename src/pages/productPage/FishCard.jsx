import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../../components/card/MediaCard.css'
import '../../data/product'

const FishCard = (props) => {
  return (
<Card sx={{ minWidth: 545 }} className="cards"> 
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.item.name}
              </Typography>
              <Typography variant="overline" color="text.secondary" component="div">
                {props.item.address}  
              </Typography>
              <Typography variant="overline" color="text.secondary" component="div">
                {props.item.location}
              </Typography>
              <Typography variant="overline" color="text.secondary" component="div">
              {props.item.contact}
            </Typography>      
            </CardContent>
          </Card>
    );
}

export default FishCard; 