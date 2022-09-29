import React from 'react';
import { Grid } from '@mui/material';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const {videos, onVideoSelect} = props; 
  const listOfVideos = videos.map( (video, id) => {
    return <VideoItem key={id} video={video} onVideoSelect={onVideoSelect}/>;
  })
  return (
    <Grid container spacing={10}>
    {listOfVideos}
    </Grid>
  )
}

export default VideoList;