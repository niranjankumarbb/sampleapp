import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
// import Paper from '@mui/material/Paper';

function Itemlist() {
  return (
    <div style={{ marginTop: "5rem" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* <Grid item xs={8}>
                                <Box sx={{ bgcolor:'red',flexGrow: 1 }}>
                                    item1
                                </Box>
                             </Grid>
                            <Grid item xs={4}>
                                <Box sx={{bgcolor:'blue', flexGrow: 1 }}>
                                    item2
                                </Box>
                             </Grid> */}
          {/* <Grid item xs={2}>  
                                <Box sx={{bgcolor:'green', flexGrow: 1 }}>
                                        side navbar
                                    </Box>
                             </Grid> */}
          <Grid item xs={9}>
            <Box
              sx={{
                bgcolor: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <Card sx={{ maxWidth: 345, marginLeft: 20, flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://media.istockphoto.com/photos/chameleon-picture-id969103888?b=1&k=20&m=969103888&s=170667a&w=0&h=YgxQuIqmx_pZqjyMcmjGdHwV0_19wD_UsNZxzCdb114="
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345, marginLeft: 20, flexGrow: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Nature
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345, marginLeft: 20, flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dogs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      {/* <img src='/yoga.png' style={{align:'right'}} alt='logoimage' />
                    <ArrowDownwardSharpIcon/>
                    <Paper elevation={8} /> */}
              
      </div>
  );
}

export default Itemlist;
