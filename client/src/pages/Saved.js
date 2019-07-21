import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";

class Saved extends Component {
	state = {
		books: {}
	};

   /* ================================================================== */
   componentDidMount() {
      this.loadBooks();
   }
   /* ----------------------------------- */
   loadBooks = () => {
      API.getBooks()
      .then( res => this.setState({ books: res.data }) )
      .catch( err => console.log(err) );
   }
   /* ----------------------------------- */
   deleteBook = id => {
      API.deleteBook (id)
      .then ( res => this.loadBooks() )
      .catch ( err => console.log ("err") );
   }
   /* ================================================================== */

	render() {
		return (
         <div>
            <h5> Saved Books </h5>

            {this.state.books.length ? 
            (
               this.state.books.map (
                  book => {
                     return(
                        //------------------------------------------------
                        <div className="card mb-3" key={book._id}>
                           <div className="row no-gutters">
                              <div className="col-md-4">
                                 <img src={book.image} className="card-img" alt="..."/>
                              </div>
                              <div className="col-md-8">
                                 <div className="card-body">
                                    {book.id}
                                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                                       <h5 className="card-title"> {book.title} </h5>
                                    </a>
                                    <p className="card-text descrip"> {book.description} </p>
                                    <p className="card-text"><small className="text-muted"> {book.authors} </small></p>
                                    <p className="card-text btns">
                                       <small> 
                                          <button className="badge badge-pill badge-warning"
                                                onClick={ () => this.deleteBook(book._id) }
                                          >
                                             Delete
                                          </button>
                                       </small>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        //------------------------------------------------
                     )
                  }
               )
            ) : 
            ( <h5> No results to display </h5> )
            }
      </div>
		);
	}
}

export default Saved;
