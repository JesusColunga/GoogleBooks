import React, { Component } from "react";
import "./style.css";
//import ResultsSaved from "../components/ResultsSaved";
import API          from "../utils/API";

class Saved extends Component {
	state = {
		books: {}
	};

  /* ================================================================== */
  componentDidMount() {
		API.getBooks()
			.then(res => this.setState({ books: res.data }))
			.catch(err => console.log(err));
	}
  /* ----------------------------------- */
  deleteBook = id => {
     API.deleteBook (id)
      .then (res => console.log ("Ya borró el llbro:", res))
      .cath (err => console.log ("err"));
  }
  /* ================================================================== */

	render() {
		return (
         <div>
            <h5> Saved Books </h5>

            {this.state.books.length ? 
            (
            <div className="card mb-3" key={this.state.book.id}>
               <div className="row no-gutters">
                  <div className="col-md-4">
                     <img src={
                             this.state.book.volumeInfo.hasOwnProperty("imageLinks") ?
                             this.state.book.volumeInfo.imageLinks.smallThumbnail :
                             ""
                          } 
                          className="card-img" 
                          alt="..."
                     />
                  </div>
                  <div className="col-md-8">
                     <div className="card-body">
                        {this.state.book.id}
                        <a href={link} target="_blank" rel="noopener noreferrer">
                           <h5 className="card-title"> {book.volumeInfo.title} </h5>
                        </a>
                        <p className="card-text descrip"> {book.volumeInfo.description} </p>
                        <p className="card-text"><small className="text-muted"> {authosStr} </small></p>
                        <p className="card-text btns">
                           <small> 
                              <button className="badge badge-pill badge-warning"
                                      //onClick={ () => this.props.saveBook(bookData) }
                              >
                                 Delete
                              </button>
                           </small>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            ) : 
            ( <h5> No results to display </h5> )
            }
      </div>
		);
	}
}

export default Saved;


/*
esto esta mal x q viene de la base de datos dfe mongo y no de la api de google:

import React, { Component } from "react";
import "./style.css";
//import ResultsSaved from "../components/ResultsSaved";
import API          from "../utils/API";

class Saved extends Component {
	state = {
		books: {}
	};

  /* ================================================================== */
  componentDidMount() {
   API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
}
/* ----------------------------------- */
deleteBook = id => {
  API.deleteBook (id)
   .then (res => console.log ("Ya borró el llbro:", res))
   .cath (err => console.log ("err"));
}
/* ================================================================== */

render() {
   return (
      <div>
         <h5> Saved Books </h5>

         {this.state.books.length ? 
         (
            this.state.books.title
         ) : 
         ( <h5> No results to display </h5> )
         }
   </div>
   );
}
}

export default Saved;
/*
         <div className="card mb-3" key={this.state.book.id}>
            <div className="row no-gutters">
               <div className="col-md-4">
                  <img src={
                          this.state.book.volumeInfo.hasOwnProperty("imageLinks") ?
                          this.state.book.volumeInfo.imageLinks.smallThumbnail :
                          ""
                       } 
                       className="card-img" 
                       alt="..."
                  />
               </div>
               <div className="col-md-8">
                  <div className="card-body">
                     {this.state.book.id}
                     <a href={link} target="_blank" rel="noopener noreferrer">
                        <h5 className="card-title"> {book.volumeInfo.title} </h5>
                     </a>
                     <p className="card-text descrip"> {book.volumeInfo.description} </p>
                     <p className="card-text"><small className="text-muted"> {authosStr} </small></p>
                     <p className="card-text btns">
                        <small> 
                           <button className="badge badge-pill badge-warning"
                                   //onClick={ () => this.props.saveBook(bookData) }
                           >
                              Delete
                           </button>
                        </small>
                     </p>
                  </div>
               </div>
            </div>
         </div>

*/