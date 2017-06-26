import React, {Component} from "react";
import Panel from "./Panel";
// import API from "../utils/API";

class SubmitStory extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      true: true,
      numberOfGuests: 6
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
      
      <div>
        <form>
          <label>
            True?
            <input
              name="true"
              type="checkbox"
              checked={this.state.true}
              onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}/>
          </label>
        </form>

         

<div className="container">

  <h2>Form control: textarea</h2>
  <p>The form below contains a textarea for comments:</p>

  <form>
    
    <div className="form-group">
      <label for="comment">Story:</label>

      <textarea className="form-control" rows="9" id="comment" spellCheck="true"></textarea>
    </div>
  </form>
</div>
      </div>

    );
  }

}

// }

export default SubmitStory;