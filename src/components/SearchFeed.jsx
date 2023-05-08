import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from '../components';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {setVideos(data.items)})
  }, [searchTerm])
  

  return (
    <Box p={2} sx={{ overflowY: 'auto' }}>
      <Typography variant='h4' fontWeight="bold" md={2} sx={{color: 'white'}}>
      Search result for <span style={{color: '#FC1503'}}>
          {searchTerm}
        </span> videos
      </Typography >
    <Videos videos={videos}/>
  </Box>
  )
}

export default SearchFeed