import React, { Component } from "react";
import API from "../utils/API";
import "./style.css";
import axios from "axios";
import SearchArea from "../components/SearchArea";

class Search extends Component {
  state = {
    books: [],
    subject: "",
    title: "",
    author: "",
    synopsis: ""
  };

  /* ================================================================== */
  componentDidMount() {
    // this.loadGoogleBooks();
  }
  /* ----------------------------------- */
  loadGoogleBooks = () => {
   axios
   .get("https://www.googleapis.com/books/v1/volumes?q=quilting")
   .then(res => this.setState( {books: res.data.items} ) )
   .catch(err => console.log ("Error getting Google Books:", err));
   /*
   .then(function(response) {
     // If the axios was successful...
     // Then log the body from the site!
     //console.log(response.data);
     //console.log(response.data.items);
     let arr = response.data.items;
     arr.forEach ( (reg, index) => {
        console.log (index, reg.id, reg.volumeInfo.title);
     } );
   })
   
   .catch(function(error) {
     if (error.response) {
       // The request was made and the server responded with a status code
       // that falls out of the range of 2xx
       console.log(error.response.data);
       console.log(error.response.status);
       console.log(error.response.headers);
     } else if (error.request) {
       // The request was made but no response was received
       // `error.request` is an object that comes back with details pertaining to the error that occurred.
       console.log(error.request);
     } else {
       // Something happened in setting up the request that triggered an Error
       console.log("Error", error.message);
     }
     console.log(error.config);
   });
   */
 
  };
  /* ----------------------------------- */
  handleInputChange = event => {
   const { name, value } = event.target;
   this.setState({
     [name]: value
   });
  };
  /* ----------------------------------- */
  handleFormSubmit = event => {
   event.preventDefault();
   if (this.state.subject) {
      axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.subject)
      //.then(res => this.setState( {books: res.data.items} ) )
      .then(res => console.log(res.data.items) )
      .catch(err => console.log ("Error getting Google Books:", err));
   }
  };
  /* ================================================================== */

  render() {
    return (
       <div>
          <SearchArea handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
          {/* -------------------------- 
          <div className="card mb-3" style="max-width: 540px;"> */}
          <div className="card mb-3">
            <div className="row no-gutters">
               <div className="col-md-4">
                  <img src="..." className="card-img" alt="..."/>
               </div>
               <div className="col-md-8">
                  <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
               </div>
            </div>
          </div>
          {/* -------------------------- */}
       </div>
    );
  }
}

export default Search;
