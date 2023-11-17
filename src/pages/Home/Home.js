import React, {useState} from 'react'
import './Home.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Home() {
const [open, setOpen]= useState(false)

  const handleOpen= ()=>{
    console.log('This is branch 1')
    setOpen(true)
  }

  const handleClose= ()=>{
     setOpen(false)
  }

  return (
    <div className='home-container'>
      <br /><br /><br /><br />
      <div className='home-space'>
        <span style={{ color: 'skyBlue', fontSize: '50px' }}>Launch your App</span>
        <p style={{ fontSize: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis et felis bibendum congue. </p>
        
          <Tooltip title="more information" placement="top">
          <Button 
        // startIcon={<SaveIcon/>}
          variant="contained" 
          style={{ marginTop: '60px', width: '200px',color:'primary', backgroundColor: 'skyblue' }}
          onClick={handleOpen}>
          Details
          </Button>    
        </Tooltip>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
             <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Steps to launch app : 
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
      </div>
      {/* <img src= {background} alt='home background'/> */}
      <a href="/Feature">link to feature</a><br/>
      <a href="https://netbanking.hdfcbank.com/netbanking/">link to hdfc</a>

    </div>
  )
}

export default Home