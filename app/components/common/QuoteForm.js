import React, {Component} from "react";
import API from "../../utils/API";
var FontAwesome = require('react-fontawesome');
import {Link} from "react-router";
import SubmitModal from "./SubmitModal";

class QuoteForm extends Component {
  constructor() {
    super();
    this.state = {
      // setting new quote to input val;
      inputValue: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them
    // as callbacks and 'this' will change otherwise
    this.handleInputChange = this
      .handleInputChange
      .bind(this);
    this.handleButtonClick = this
      .handleButtonClick
      .bind(this);
  }
  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  }
  handleButtonClick() {
    const newQuote = this.state.inputValue;
    API
      .saveQuote(newQuote)
      .then(this.props.getQuotes);
    this.setState({inputValue: ""});
  }
  render() {
    return (

      <div className="container-fluid">

        <div className="row">

        {/*???            <i
              onClick={() => this.favoriteQuote(this.props.quote)}
              style={styles.favoriteStyle}
              className={this.props.quote.favorited ? "fa fa-star gold" : "fa fa-star-o"}
              aria-hidden="true"
            />???*/}
        <div className="col-md-6 col-md-offset-0">

          <div style={styles.formStyle} className="form-group">
            <label htmlFor="input-box">&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We've &nbsp; got &nbsp; stories...<Link to="/concerns">&nbsp;&nbsp;&nbsp;<FontAwesome
                className=''
                name='book'
                size='sm'
                style={{
        color: "peachpuff",
        textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
      }}/>
              </Link>
              <br/>

              
            </label>
            {/*style={styles.labelStyle}*/}

            <div className="YouGotThisDekHome">
              <span className="and">
                +
              </span>
              you
              <span style={{
                fontFamily: 'Bungee Shade'
              }}>
                &nbsp;Got&nbsp;
              </span>
              This

            </div>
            <blockquote class="blockquote"><p className="beenThereHome">
 
   Courage  &nbsp;             
             <FontAwesome
                className=''
                name='thumbs-up'
                size='lg '
                style={{
                color: "navajowhite",
                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
              }}/>&nbsp;to take your next step 
               <br/>
           through life's storms  &nbsp; <FontAwesome
                className=''
                name='umbrella'
                size='lg'
                style={{
                color: "#1FBED6",
                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
              }}/>  
              <br/> 
from people         <FontAwesome
                className=''
                name='heart'
                size='sm'
                style={{
                color: "#FF264D",
                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
              }}/> &nbsp;who've
              felt hopeless, too
              {/*<span
                style={{
                fontWeight: 'bold',
                color: "white",
                fontSize: "16px"
              }}>
                &nbsp;&nbsp; &nbsp;</span>  */}

            </p>
            </blockquote>
          </div>
  </div>
        </div>

        <div className="row">
       <hr />
       <br />
          <div className="col-md-4 col-md-4 col-md-4 ">
     

            {/*col-md-offset-1*/}
            {/*FOUND START*/}
            <div className="news-card-tag">
              <span className="concernLabel">
                <a href="#">
                  <i class="fa fa-circle" aria-hidden="true"></i>

                  <Link to="/itwillchange">
                    <FontAwesome
                      className=''
                      name='circle'
                      size='1x'
                      style={{
                      color: "#FF717E",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Life feels unbearable</Link>
                </a>
              </span>

            </div>
            <div className="card news-card">
              <Link to="/itwillchange">
                <div className="view1 ">It will change</div>
              </Link>

              {/*<img src="http://i.imgur.com/6jMbuU1.jpg" />*/}
              <div className="card-section">
                <div className="news-card-date">Sunday, 16th April</div>
                <article className="news-card-article">
                  <h4 className="news-card-title">
                    <a href="#">5 Features To Watch Out For</a>
                  </h4>
                  <p className="news-card-description">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Recusandae facere, ipsam quae sit, eaque perferendis
                    commodi!...</p>
                </article>
                <div className="news-card-author">
                  <div className="news-card-author-image">
                    <img src="http://i.imgur.com/lAMD2kS.jpg" alt="user"/>
                  </div>
                  <div className="news-card-author-name">
                    By
                    <a href="#">Harry Manchanda</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/*2nd card*/}

          <div className="col-md-4 col-md-4 col-md-4 ">

            <div className="news-card-tag">
              <span className="concernLabel">

                <a href="#">
                  <i class="fa fa-circle" aria-hidden="true"></i>

                  <Link to="/youareenough">
                    <FontAwesome
                      className=''
                      name='circle'
                      size='1x'
                      style={{
                      color: "#FFdfba",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m not enough</Link>
                </a>
              </span>

            </div>
            <div className="card news-card">
              <Link to="/youareenough">

                <div className="view2 ">You ARE enough
                </div>
              </Link>
              <div className="card-section">
                <div className="news-card-date">Sunday, 16th April</div>
                <article className="news-card-article">
                  <h4 className="news-card-title">
                    <a href="#">5 Features To Watch Out For</a>
                  </h4>
                  <p className="news-card-description">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Recusandae facere, ipsam quae sit, eaque perferendis
                    commodi!...</p>
                </article>
                <div className="news-card-author">
                  <div className="news-card-author-image">
                    <img src="http://i.imgur.com/lAMD2kS.jpg" alt="user"/>
                  </div>
                  <div className="news-card-author-name">
                    By
                    <a href="#">Harry Manchanda</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/*3rd card*/}

          <div className="col-md-4 col-md-4 col-md-4 ">

            <div className="news-card-tag">
              <span className="concernLabel">

                <a href="#">
                  <i class="fa fa-circle" aria-hidden="true"></i>

                  <Link to="/seewhatisee">
                    <FontAwesome
                      className=''
                      name='circle'
                      size='1x'
                      style={{
                      color: "#1FBED6",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>

                    &nbsp;I’ve failed too much</Link>
                </a>
              </span>

            </div>
            <div className="card news-card">
              <Link to="/seewhatisee">
                <div className="view3 ">See what I see in you</div>
              </Link>
              <div className="card-section">
                <div className="news-card-date">Sunday, 16th April</div>
                <article className="news-card-article">
                  <h4 className="news-card-title">
                    <a href="#">5 Features To Watch Out For</a>
                  </h4>
                  <p className="news-card-description">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Recusandae facere, ipsam quae sit, eaque perferendis
                    commodi!...</p>
                </article>
                <div className="news-card-author">
                  <div className="news-card-author-image">
                    <img src="http://i.imgur.com/lAMD2kS.jpg" alt="user"/>
                  </div>
                  <div className="news-card-author-name">
                    By
                    <a href="#">Harry Manchanda</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/*2nd CARD ROW*/}
          {/*4th card*/}

          <div className="row">

            <div className="col-md-4 col-md-4 col-md-4 ">
              {/*col-md-offset-1*/}
              {/*FOUND START*/}
              <div className="news-card-tag">
                <span className="label">
                  <a href="#">Angular 2</a>
                </span>
                <span className="label">
                  <a href="#">Angular 4</a>
                </span>
              </div>
              <div className="card news-card">
                <div className="view4 ">I understand; others do too</div>
                <div className="card-section">
                  <div className="news-card-date">Sunday, 16th April</div>
                  <article className="news-card-article">
                    <h4 className="news-card-title">
                      <a href="#">5 Features To Watch Out For</a>
                    </h4>
                    <p className="news-card-description">Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Recusandae facere, ipsam quae sit, eaque perferendis
                      commodi!...</p>
                  </article>
                  <div className="news-card-author">
                    <div className="news-card-author-image">
                      <img src="http://i.imgur.com/lAMD2kS.jpg" alt="user"/>
                    </div>
                    <div className="news-card-author-name">
                      By
                      <a href="#">Harry Manchanda</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/*5th card*/}

            <div className="col-md-4 col-md-4 col-md-4 ">
              <div className="news-card-tag">
                <span className="label">
                  <a href="#">Angular 2</a>
                </span>
                <span className="label">
                  <a href="#">Angular 4</a>
                </span>
              </div>
              <div className="card news-card">
                <div className="view5 ">Use life to make a difference</div>
                <div className="card-section">
                  <div className="news-card-date">Sunday, 16th April</div>
                  <article className="news-card-article">
                    <h4 className="news-card-title">
                      <a href="#">5 Features To Watch Out For</a>
                    </h4>
                    <p className="news-card-description">Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Recusandae facere, ipsam quae sit, eaque perferendis
                      commodi!...</p>
                  </article>
                  <div className="news-card-author">
                    <div className="news-card-author-image">
                      <img src="http://i.imgur.com/lAMD2kS.jpg" alt="user"/>
                    </div>
                    <div className="news-card-author-name">
                      By
                      <a href="#">Harry Manchanda</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/*6th card*/}

            <div className="col-md-4 col-md-4 col-md-4 ">

              <div className="news-card-tag">
                <span className="label">
                  <a href="#">Angular 2</a>
                </span>
                <span className="label">
                  <a href="#">Angular 4</a>
                </span>
              </div>
              <div className="card news-card">
                <div className="view6 ">Continue YOUR destiny</div>
                <div className="card-section">
                  <div className="news-card-date">Sunday, 16th April</div>
                  <article className="news-card-article">
                    <h4 className="news-card-title">
                      <a href="#">5 Features To Watch Out For</a>
                    </h4>
                    <p className="news-card-description">Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Recusandae facere, ipsam quae sit, eaque perferendis
                      commodi!...</p>
                  </article>
                  <div className="news-card-author">
                    <div className="news-card-author-image">
                      <img src="http://i.imgur.com/lAMD2kS.jpg" alt="user"/>
                    </div>
                    <div className="news-card-author-name">
                      By
                      <a href="#">Harry Manchanda</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/*FOUND END*/}

          {/*CARD START*/}

          <div className="card" style={{
            width: '20rem'
          }}>
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and
                make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-block">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">This is a wider card with supporting text below as a
                  natural lead-in to additional content. This card has even longer content than
                  the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>

          {/*CARD END*/}
          <div className="col-md-4 col-md-offset-4">
            {/*<ul>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern1
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern2
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern3
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern4
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern3
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern4
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern5
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern6
                </button>
              </li>*/}

            {/*FORM*/}
            {/*<textarea
            style={{
              resize: "none"
            }}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder="Add a new quote here!"
            className="form-control"
            id="input-box"
            rows="3"
          />*/}

            {/*</ul>*/}
          </div>

        </div>
      </div>

    );
  }
}

const styles = {
  buttonStyle: {
    // float: "right",
    marginTop: 10
  },
  // labelStyle: { float: "center", // marginTop: 10; fontFamily: 'Open Sans',
  // sans-serif; },
  formStyle: {
    marginBottom: 60,
    marginTop: 60
  }
};

export default QuoteForm;