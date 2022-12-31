import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './MediaCard.css'
import { Link } from "react-router-dom";

const MediaCard = (props) => {
  return (
    <Card sx={{ minWidth: 345 }} className="card">  {/*change back to maxWidth */}
      <CardMedia
        sx={{ height: 140 }}
        title="Products"
        image = {props.item.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="overline" color="text.secondary" component="div">
          {props.item.location}  
        </Typography>
        <Typography variant="overline" color="text.secondary" component="div">
          {props.item.contact}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/product3" style={{textDecoration : 'none'}}>
        <Button size="medium" variant="contained">Buy Now</Button>
      </Link>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
