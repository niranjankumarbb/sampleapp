import React, {useState} from 'react'
import './About.css'
import frame19 from '../../images/Frame 19.png'
import Grid from '@mui/material/Grid';
import {connect} from 'react-redux'
import axios from 'axios'
import {startGetPosts} from '../../actions/PostsAction.js'
import Button from '@mui/material/Button';


function About(props) {
  const [posts, setPosts] = useState([])
  const [btnDisable, setbtnDisable] = useState(false)


  const handleDetails= ()=>{     
       props.dispatch(startGetPosts(posts))
  }

  return (
    <div className='about-container'>
        <br/><br/><br/><br/>
             <Grid container spacing={2}>
              <Grid item xs={6}>
              <img src={frame19} alt='notification' />
               </Grid>
              <Grid item xs={6}>
                <span style={{color:'skyBlue', fontSize:'50px'}}>Comes with all you need for daily life</span><br/>
                <span style={{fontStyle:'italic', fontSize:'30px', marginTop: '100px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel semper nisl. Nunc ante elit, egestas non ipsum cursus, pharetra sollicitudin leo. Phasellus euismod pulvinar quam a malesuada. Suspendisse molestie ante augue, sed fringilla magna posuere non. Donec dapibus id ipsum in aliquet. In fermentum ipsum a arcu pretium, nec iaculis leo porta. Suspendisse potenti. </span><br/><br/><br/>
                <span style={{ fontSize:'30px', color: 'skyblue',  marginTop: '50px'}}>{props.posts[0]?.title}</span><br/><br/>
                 <Button variant="contained" disabled={btnDisable} onClick={handleDetails}>More details</Button>

               </Grid>
            </Grid>
        </div>
  )
}

const mapStateToprops=(state, props)=>{
  return {
    posts: state.posts
  }
}

export default connect(mapStateToprops)(About)