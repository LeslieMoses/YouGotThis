import React, {Component} from "react";
import Panel from "./Panel";
// import API from "../utils/API";

class SubmitStory extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      true: true,
    
    };
    // Binding getQuotes to this component since we'll be passing this method to
    // other components to use
    this.getQuotes = this
      .getQuotes
      .bind(this);

    // www
    this.handleInputChange = this
      .handleInputChange
      .bind(this);
  }
  // www
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  // Getting all quotes once the component has mounted
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    API
      .getQuotes()
      .then((res) => {
        const favoriteQuotes = res
          .data
          .filter(quote => quote.favorited);
        this.setState({quotes: favoriteQuotes});
      });
  }
  // A helper method for rendering one panel for each quote
  renderQuotes() {
    return this
      .state
      .quotes
      .map(quote => (<Panel quote={quote} key={quote._id} getQuotes={this.getQuotes}/>));
  }

  render() {
    return (
      
   <div className="container-fluid">

      <div>
       
<div>

 
        
        <div className="input-group">

         
          <div className="container">
        
            <form>
              <div className="form-group">
         
                <h3 className="inputTitle">Storyteller</h3>
                <input type="text" placeholder=" &nbsp;Your Name " className="form-control" id="by" />           
                
    <br />               

            <h3 className="inputTitle" htmlFor="sel1">Story's Concern</h3>
            <select className="form-control" id="sel1">
              <option> &nbsp; Concern 1</option>
              <option> &nbsp; Concern 2</option>
              <option> &nbsp; Concern 3</option>
              <option> &nbsp; Concern 4</option>
              <option> &nbsp; Concern 5</option>
              <option> &nbsp; Concern 6</option>
              <option> &nbsp; Other</option>

            </select>            
        <br />       
            <h3 className="inputTitle" htmlFor="usr">Headline</h3>
                <input type="text" className="form-control" placeholder=" &nbsp;Story Title " id="title" />
   
         <div>
        <div className="form-group"> {/* Name field */}
          <label className="control-label " htmlFor="name">Name</label>
          <input className="form-control" id="name" name="name" type="text" />
        </div>
        <div className="form-group"> {/* Email field */}
          <label className="control-label requiredField" htmlFor="email">Email<span className="asteriskField">*</span></label>
          <input className="form-control" id="email" name="email" type="text" />
        </div>
        <div className="form-group"> {/* Subject field */}
          <label className="control-label " htmlFor="subject">Subject</label>
          <input className="form-control" id="subject" name="subject" type="text" />
        </div>
        <div className="form-group"> {/* Message field */}
          <label className="control-label " htmlFor="message">Message</label>
          <textarea className="form-control" cols={40} id="message" name="message" rows={10} defaultValue={""} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary " name="submit" type="submit">Submit</button>
        </div>
      </div>


            </div>
 

            </form>

          </div>

        </div>


  <form>
    
    <div className="form-group">
      <h3 className="inputTitle" for="comment">Story:</h3>
 <form>
          <h3 className="inputTitle">
            True story? 
            <input
              name="true"
              type="checkbox"
              checked={this.state.true}
              onChange={this.handleInputChange}/>
          </h3>
          <br/>
           <h3 className="inputTitle">Source</h3>
                <input type="password" placeholder=" &nbsp;Your Name " className="form-control" id="by" />           
        </form>
      <textarea className="form-control" rows="9" id="comment" spellCheck="true"></textarea>
             <span className="input-group-addon" id="basic-addon3">Guidelines:





          </span> </div>
  </form>
</div>
     
      </div></div>

    );
  }

}

// }

export default SubmitStory;