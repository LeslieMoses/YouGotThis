import React, {Component} from "react";
import API from "../../utils/API";
var FontAwesome = require('react-fontawesome');
import {Link} from "react-router";
import SubmitModal from "./SubmitModal";
import itWillChange from "./itWillChange";

import youAreEnough from "./youAreEnough";

import borrowView from "./borrowView";

import iUnderstand from "./iUnderstand";

import makeADifference from "./makeADifference";

import youAreUnique from "./youAreUnique";


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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We've &nbsp; got &nbsp; stories...<Link to="/concerns">&nbsp;&nbsp;&nbsp;
              <FontAwesome
                className=''
                name='book'
                size='lg'
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
                size='lg'
                style={{
                color: "navajowhite",
                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
              }}/>&nbsp;to step 
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
from we         <FontAwesome
                className=''
                name='heart'
                size='lg'
                style={{
                color: "#FF264D",
                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
              }}/> &nbsp;who've
        been there
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
  
              </span>

            </div>
            <div className="card news-card">
              {/*<img className="homePic" src="https://static.pexels.com/photos/12567/photo-1444703686981-a3abbc4d4fe3.jpeg" />*/}
          
 <Link to="/itwillchange">
              {/*<img src={"/pics/change.jpg"}/>*/}
                <div className="view1 ">It Will Change
                                   

                <FontAwesome
                      className=''
                      name='bolt'
                      size='5x'
                      style={{
                      color: "#FF717E",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>
                </div>              </Link>

              <div className="card-section">
                 <article className="news-card-article">
                
                  <p className="news-card-description "><br /> <br /> <br />He was a boy steeped in the “unbearable.” 
But his painful path also led to brilliant writing.
</p>
                </article>
                <div className="news-card-author">
           
                  <hr />
                </div>
              </div>
            </div>

          </div>
          {/*2nd card*/}

          <div className="col-md-4 col-md-4 col-md-4 ">

            <div className="news-card-tag">
              <span className="concernLabel">

              
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
                
              </span>

            </div>
            <div className="card news-card">
 
              {/*<img className="homePic"  src={"/pics/change.jpg"}/> */}
        
   <Link to="/youareenough">
              
                <div className="view2 ">You ARE Enough
                                   

                  <FontAwesome
                      className=''
                      name='battery-full'
                      size='5x'
                      style={{
                      color: "#FFdfba",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>
          
                </div>    </Link>
               <div className="card-section">
                  <article className="news-card-article">
                
                  <p className="news-card-description "><br /> <br /> "I am ill every time (the wind) blows hard and nothing but my enthusiastic love for my profession keeps me one hour at sea" 
</p>
                </article>
                <div className="news-card-author">
           
                  <hr />         </div>
              </div>
            </div>

          </div>
          {/*3rd card*/}

          <div className="col-md-4 col-md-4 col-md-4 ">

            <div className="news-card-tag">
              <span className="concernLabel">

            
                  <i class="fa fa-circle" aria-hidden="true"></i>

                  <Link to="/borrowview">
                    <FontAwesome
                      className=''
                      name='circle'
                      size='1x'
                      style={{
                      color: "#1FBED6",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>

                    &nbsp;I’ve failed too much</Link>
     
              </span>

            </div>
            <div className="card news-card">
        <Link to="/borrowview">
                <div className="view3 ">Borrow Another View   
                                  <FontAwesome
                      className=''
                      name='eye'
                      size='5x'
                      style={{
                      color: "#1FBED6",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/> </div></Link>
             
              <div className="card-section">
                 <article className="news-card-article">
                
                  <p className="news-card-description "><br /> <br /> <br /><br />This “backward” boy grew up to be among the world’s best inventors. 
</p>
                </article>
                <div className="news-card-author">
           
                  <hr />          </div>
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
 <span className="concernLabel">
               
                  <i class="fa fa-circle" aria-hidden="true"></i>

                  <Link to="/iunderstand">
                    <FontAwesome
                      className=''
                      name='circle'
                      size='1x'
                      style={{
                      color: "#20b2aa",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No one understands</Link>
  
              </span>

            </div>
              <div className="card news-card">
                                  <Link to="/iunderstand">

                <div className="view4 ">Someone understands
                                          <FontAwesome
                      className=''
                      name='heart-o'
                      size='5x'
                      style={{
                      color: "#20b2aa",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>
                    </div> </Link>

                <div className="card-section">
                   <article className="news-card-article">
                
                  <p className="news-card-description "><br /> <br /><br /> <br /><br /> <br /> <br />And she did. She got up and walked.
</p>
                </article>
                <div className="news-card-author">
           
                  <hr />                  </div>
                </div>
              </div>

            </div>
            {/*5th card*/}

            <div className="col-md-4 col-md-4 col-md-4 ">
              <div className="news-card-tag">
              <span className="concernLabel">

              
                  <i class="fa fa-circle" aria-hidden="true"></i>

                  <Link to="/makeadifference">
                    <FontAwesome
                      className=''
                      name='circle'
                      size='1x'
                      style={{
                      color: "rgba(255,192,203,1)",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's hopeless</Link>
                
              </span>

            </div>
  
              <div className="card news-card">
                    <Link to="/makeadifference">
                <div className="view5 ">Live to make a difference
                          <FontAwesome
                      className=''
                      name='gift'
                      size='5x'
                      style={{
                      color: " rgba(255,192,203,1)",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>
                    </div> </Link>
                <div className="card-section">
                    <article className="news-card-article">
                
                  <p className="news-card-description "><br /> <br /> <br /> <br /> <br />“My assignment is to take my situation and to use it to help others who feel hopeless and/or helpless because of loss. 
</p>
                </article>
                <div className="news-card-author">
           
                  <hr />              </div>
                </div>
              </div>

            </div>
            {/*6th card*/}

            <div className="col-md-4 col-md-4 col-md-4 ">

              <div className="news-card-tag">
               <span className="concernLabel">

              
                  <i class="fa fa-circle" aria-hidden="true"></i>

                  <Link to="/youareunique">
                    <FontAwesome
                      className=''
                      name='circle'
                      size='1x'
                      style={{
                      color: "#ffa36d",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m not enough</Link>
                
              </span>

            </div>             <div className="card news-card">
                  <Link to="/youareunique">
                <div className="view6 ">Continue YOUR destiny
                                         <FontAwesome
                      className=''
                      name='road'
                      size='5x'
                      style={{
                      color: "#ffa36d",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>
                    </div> </Link>
                <div className="card-section">
                  <article className="news-card-article">
                
                  <p className="news-card-description "><br /><br /> <br /> <br />“If you live in such a manner as to stand the test of the last judgment,
you can depend upon it that the world will not speak well of you.”

 





</p>
                </article>
                <div className="news-card-author">
           
                  <hr />                  </div>
                </div>
              </div>
            </div>

          </div>
          {/*FOUND END*/}

     
         

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