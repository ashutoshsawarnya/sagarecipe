import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import * as types from "./redux/actionTypes"
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function App() {
  const [expanded, setExpanded] = React.useState(false);
  const [spacing, setSpacing] = React.useState(2);
  const dispatch = useDispatch();
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("Grapes")
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const updateSearch = () =>{
    setQuery(search)
    setSearch("")
  }
   const {recipes} = useSelector((state) => state.data)
  useEffect(()=>{
      dispatch({type: types.FETCH_RECIPE_START, query})
  },[query])
  return (
    <div className="App">
      <h2>Recipe App</h2>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic"  variant="outlined"  type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <Button variant="contained" color="primary" 
      style={{ width: "80px", height: "50px"}}
      onClick={updateSearch}
      >Search</Button>
    </Box>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {recipes && recipes.hits && recipes.hits.map((item,index) => (
            <Grid key={index} item>
               <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.recipe.label}
        subheader={
          <span>
            <DirectionsRunIcon />
            {item.recipe.calories}
            </span>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={item.recipe.image}
        alt={item.recipe.calories}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={() => handleExpandClick(index)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography>
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
    {
      recipes && recipes.hits && recipes.hits.map((item) =>{
        (
          <h4>{item.recipe.label}</h4>
        )
      })
    }
    </div>
  );
}

export default App;
