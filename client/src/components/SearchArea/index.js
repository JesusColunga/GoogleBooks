import React, { Component } from "react";
import "./style.css"

class SearchArea extends Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      return (
         <div className="card">
               <form>
                  <div className="form-group">
                     <label> Book search </label>
                     <input 
                        value={this.props.subject}
                        onChange={this.props.handleInputChange}
                        name="subject"
                        type="text" 
                        className="form-control" 
                        id="InputSearch" 
                        placeholder="Enter the subject of your interest" 
                     />
                  </div>
                  <div className="text-right">
                     <button 
                        onClick={this.props.handleFormSubmit}
                        className="btn btn-info badge-pill btn-sm"
                     > 
                        Search 
                     </button>
                  </div>
               </form>
         </div>
      );
   }
}

export default SearchArea;
