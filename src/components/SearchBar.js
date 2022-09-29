import React from 'react';
import {Paper, TextField} from '@mui/material';

class SearchBar extends React.Component {
  state={
    searchTerm: ''
  }
  handleChange = (e) => {
    //this here refers to the class
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    const { searchTerm } = this.state;
    const { onFormSubmit} = this.props;

    onFormSubmit(searchTerm); 
    // All forms, on hitting enter, refresh the whole react component, Need to prevent it from happening
    e.preventDefault(); 
  }

  render(){
    return(
      <div>
        {/* <h1>SearchBar Component</h1> */}
        <Paper elevation={6} style={{padding: '25px', backgroundColor: 'black'}}>
          <form onSubmit={this.handleSubmit}>
            <TextField fullWidth sx={{input: {color: 'white'} }} style={{border:'2px solid white'}} label="Search Anything..." onChange={this.handleChange}/>
            
          </form>

        </Paper>
      </div>
    )
  }
}

export default SearchBar;