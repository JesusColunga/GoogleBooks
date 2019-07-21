import React, { Component } from "react";
import "./style.css"

class Results extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div key="books">
            {this.props.books.map( (book, index) => {
               
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
                              {book.id}
                              <a href={link} target="_blank" rel="noopener noreferrer">
                                 <h5 className="card-title"> {book.volumeInfo.title} </h5>
                              </a>
                              <p className="card-text descrip"> {book.volumeInfo.description} </p>
                              <p className="card-text"><small className="text-muted"> {authosStr} </small></p>
                              <p className="card-text btns">
                                 <small> 
                                    <button className="badge badge-pill badge-warning"
                                          onClick={ this.props.saveBook(bookData) }
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
      );
   }
}

export default Results;
