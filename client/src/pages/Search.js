import React, { Component } from "react";
import "./style.css";
import axios      from "axios";
import SearchArea from "../components/SearchArea";
import API        from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    subject: ""
  };

  /* ================================================================== */
  saveBook = bookData => {
     API.saveBook (bookData)
      .then (res => alert("Book has been saved.") )
      .catch (err => console.log ("err"));
  }
  /* ----------------------------------- */
  loadGoogleBooks = () => {
   axios
   .get("https://www.googleapis.com/books/v1/volumes?q=quilting")
   .then(res => this.setState( {books: res.data.items} ) )
   .catch(err => console.log ("Error getting Google Books:", err));
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
      .then(res => this.setState( {books: res.data.items} ) )
      .catch(err => console.log ("Error getting Google Books:", err));
   }
  };
  /* ================================================================== */

  render() {
    return (
       <div>
          <SearchArea 
            handleInputChange={this.handleInputChange} 
            handleFormSubmit={this.handleFormSubmit}
          />

          {this.state.books.length ? 
            (
            //--------------------------------------------
            <div>
               {this.state.books.map( book => {
               
                  var authosStr = "";
                  if (book.volumeInfo.hasOwnProperty("authors")) {
                     if (book.volumeInfo.authors.length) {
                        authosStr = book.volumeInfo.authors.toString();
                     }
                  }

                  var img = "";
                  if (book.volumeInfo.hasOwnProperty("imageLinks")) {
                     img = book.volumeInfo.imageLinks.smallThumbnail;
                  }

                  var link = "";
                  if (book.volumeInfo.hasOwnProperty("previewLink")) {
                     link = book.volumeInfo.previewLink;
                  }
                  var bookData = {
                     bookId:      book.id,
                     title:       book.volumeInfo.title,
                     authors:     authosStr,
                     description: book.volumeInfo.description,
                     image:       img,
                     link:        link
                  };

                  return(
                  <div className="card mb-3" key={book.id}>
                     <div className="row no-gutters">
                        <div className="col-md-4">
                           <img src={img} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                           <div className="card-body">
                              <a href={link} target="_blank" rel="noopener noreferrer">
                                 <h5 className="card-title"> {book.volumeInfo.title} </h5>
                              </a>
                              <p className="card-text descrip"> {book.volumeInfo.description} </p>
                              <p className="card-text"><small className="text-muted"> {authosStr} </small></p>
                              <p className="card-text btns">
                                 <small> 
                                    <button className="badge badge-pill badge-warning"
                                          onClick={ () => this.saveBook(bookData) }
                                    >
                                       Save
                                    </button>
                                 </small>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  )
               
               })}
            </div>
            //--------------------------------------------
            ) : 
            ( <h5> No results to display </h5> )
          }
       </div>
    );
  }
}

export default Search;
