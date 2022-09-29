import React from 'react';
import {Grid} from '@mui/material';
import youtube from './api/youtube';

// import {SearchBar, VideoList, VideoDetails} from './components'
// Need to create a index.js in components for above line to work
import VideoList from './components/VideoList';
import SearchBar  from './components/SearchBar';
import VideoDetails from './components/VideoDetails';

class App extends React.Component{
  state = {
    videos: [], 
    selectedVideo: null
  }

  componentDidMount(){
    this.handleSubmit('Youtube Clone using React');
  }

  handleSubmit = async (searchTerm) =>{
    const response = await youtube.get('search', {params: {q: searchTerm}});
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    // console.log(response.data.items);
  }

  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video});
    // console.log('Video changed!!!');

  }
  
  render(){
    const {videos, selectedVideo} = this.state;
    return(
      <div>
        {/* <h1>Youtube UI Clone using React18</h1> */}
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit}/>
              </Grid>
              <Grid item xs={8}>
                <VideoDetails video={selectedVideo}/>
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.handleVideoSelect}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      
    )
  }
}

export default App;