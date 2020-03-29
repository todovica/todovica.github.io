import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 345,
    margin: '20px'
  },
  media: {
    height: 140,
  },
});

export default function LinkCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={()=> window.location = props.link}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}