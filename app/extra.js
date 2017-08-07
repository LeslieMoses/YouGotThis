// dk what this is, but maybe it's important de wh Dustin did?       
 {/*<PostItem headline={val.headline} story={val.story} source={val.source} /> */} 

 
      {/*CODE TO USE*/}
               {/*{this.state.notes.map(function(val, i) {
                  return <PostItem headline={val.headline} story={val.story} source={val.source} /> 
                } 
              )} */} 


// {
//           gematriaValues.map((val, i) => {
//             return  <OverlayTrigger placement="top" overlay={<Tooltip id={val.name}>{val.name} {val.gematria}</Tooltip>} key={i}>
//                       <Col lg={1} md={1} sm={1} xs={2} className="pull-right">
//                         <Panel className="gematriaPanel" onClick={this.props.getLetter.bind(this, val)} >
//                           <div className="text-center hebrewLetter">
//                             {val.letter}
//                           </div>
//                         </Panel>
//                       </Col>
//                     </OverlayTrigger>
//           })
//         }
// CSS ON PG
// const styles = {
//   buttonStyle: {
//     // float: "right",
//     marginTop: 10
//   },

//   formStyle: {
//     marginBottom: 60,
//     marginTop: 60
//   }
// };

// CONCERNS DROPDOWN
//             <div className="row">

//               <div className="container">
//                 <div id="accordion" role="tablist" aria-multiselectable="true">
//                   <div className="card">
//                     <div className="card-header" role="tab" id="headingOne">
//                       <h5 className="mb-0">
//                         <a
//                           data-toggle="collapse"
//                           data-parent="#accordion"
//                           href="#collapseOne"
//                           aria-expanded="false"
//                           aria-controls="collapseOne">
//                           <a
//                             role="menuitem"
//                             tabIndex={-1}
//                             onClick={() => this.concernUpdate("…at this moment. It will change")}
//                             href="#">1. Life feels unbearable</a>
//                         </a>
//                       </h5>
//                     </div>
//                     <div
//                       id="collapseOne"
//                       className="collapse "
//                       role="tabpanel"
//                       aria-labelledby="headingOne">
  
//                       <div className="card-block">
//                             <ul className="list-group">
   
//                               <li className="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
//                               <li className="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
//                               <li className="list-group-item list-group-item-warning">Porta ac consectetur ac</li>
//                               <li className="list-group-item list-group-item-danger">Vestibulum at eros</li>
//                           </ul>    
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card">
//                     <div className="card-header" role="tab" id="headingTwo">
//                       <h5 className="mb-0">
//                         <a
//                           className="collapsed"
//                           data-toggle="collapse"
//                           data-parent="#accordion"
//                           href="#collapseTwo"
//                           aria-expanded="false"
//                           aria-controls="collapseTwo">
//                           <a
//                             role="menuitem"
//                             tabIndex={-1}
//                             onClick={() => this.concernUpdate("You ARE enough")}
//                             href="#">2. I'm not enough</a>
//                         </a>
//                       </h5>
//                     </div>
//                     <div
//                       id="collapseTwo"
//                       className="collapse"
//                       role="tabpanel"
//                       aria-labelledby="headingTwo">
//                       <div className="card-block">
//                         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
//                         richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
//                         brunch. Food truck quinoa nesciunt proident. Ad vegan excepteur butcher vice lomo.
//                         Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
//                         you probably haven't heard of them accusamus labore sustainable VHS.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card">
//                     <div className="card-header" role="tab" id="headingThree">
//                       <h5 className="mb-0">
//                         <a
//                           className="collapsed"
//                           data-toggle="collapse"
//                           data-parent="#accordion"
//                           href="#collapseThree"
//                           aria-expanded="false"
//                           aria-controls="collapseThree">
//                           <a
//                             role="menuitem"
//                             tabIndex={-1}
//                             onClick={() => this.concernUpdate("I want you to see what I see in you")}
//                             href="#">3. I’ve failed too much</a>
//                         </a>
//                       </h5>
//                     </div>
//                     <div
//                       id="collapseThree"
//                       className="collapse"
//                       role="tabpanel"
//                       aria-labelledby="headingThree">
//                       <div className="card-block">
//                         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                       
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                  <div className="card">
//                   <div className="card-header" role="tab" id="headingFour">
//                     <h5 className="mb-0">
//                       <a
//                         className="collapsed"
//                         data-toggle="collapse"
//                         data-parent="#accordion"
//                         href="#collapseFour"
//                         aria-expanded="true"
//                         aria-controls="collapseFour">
//                         <a
//                           role="menuitem"
//                           tabIndex={-1}
//                           onClick={() => this.concernUpdate("I understand and others do, too")}
//                           href="#">4. No one understands</a>
//                       </a>
//                     </h5>
//                   </div>
//                   <div
//                     id="collapseFour"
//                     className="collapse"
//                     role="tabpanel"
//                     aria-labelledby="headingFour">
//                     <div className="card-block">
//                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
//                       richardson ad squid, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
//                       sunt aliqua put a bird on itr labore wes anderson craft beer farm-to-table, raw denim aesthetic synth nesciunt
//                       you probably haven't heard of them accusamus labore sustainable VHS.
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card">
//                   <div className="card-header" role="tab" id="headingFive">
//                     <h5 className="mb-0">
//                       <a
//                       className="collapsed"
//                         data-toggle="collapse"
//                         data-parent="#accordion"
//                         href="#collapseFive"
//                         aria-expanded="true"
//                         aria-controls="collapseFive">
//                         <a
//                           role="menuitem"
//                           tabIndex={-1}
//                           onClick={() => this.concernUpdate("We only have one life; it’s your choice to make a difference")}
//                           href="#">5.	It’s hopeless</a>
//                       </a>
//                     </h5>
//                   </div>
//                   <div
//                     id="collapseFive"
//                     className="collapse"
//                     role="tabpanel"
//                     aria-labelledby="headingFive">
//                     <div className="card-block">
//                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
//                       richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
//                       brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
//                       sunt assumenda keffiyeh helvetica, craft beer labore wes anderson
//                       cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
//                       Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
//                       you probably haven't heard of them accusamus labore sustainable VHS.
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card">
//                   <div className="card-header" role="tab" id="headingSix">
//                     <h5 className="mb-0">
//                       <a
//                       className="collapsed"
//                         data-toggle="collapse"
//                         data-parent="#accordion"
//                         href="#collapseSix"
//                         aria-expanded="true"
//                         aria-controls="collapseSix">
//                         <a
//                           role="menuitem"
//                           tabIndex={-1}
//                           onClick={() => this.concernUpdate("Continue your own destiny; you are unique")}
//                           href="#">6. I thought my life would be different </a>
//                       </a>
//                     </h5>
                    
                   
      
//       {/*bt here*/}

//       {/*and here*/}
//                   </div>
//                   <div
//                     id="collapseSix"
//                     className="collapse"
//                     role="tabpanel"
//                     aria-labelledby="headingSix">
//                     <div className="card-block">
//                       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
//                       richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
//                       brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
//                       sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
//                       shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
//                       cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
//                       Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
//                       you probably haven't heard of them accusamus labore sustainable VHS.
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>


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

                                  {/*YOYO*/}
   {/*<div className="callout">
        <h4><strong>FOUNDATION FOR EMAILS</strong></h4>
        <p>We know things, like building amazing products.</p>
        <button data-toggle="read-more-content" href="#">SHOW MORE <i className="fa fa-plus" /></button>
        <div className="read-more-content" id="read-more-content" data-toggler data-animate="hinge-in-from-top slide-out-right">
          <h5>Spend Less Time Coding, Testing, and Preparing:</h5>
          <ul>
            <li>Responsive Grid for Any Layout</li>
            <li>Common UI Patterns to Build Faster</li>
            <li>Make stylish emails fast with Sass</li>
            <li>Inky: A New Templating Language</li>
            <li>The ZURB Email Stack will make you an email pro</li>
            <li>Emails that work in all of the major clients, even Outlook</li>
            <li>Inlining CSS <strike>is</strike> was a pain</li>
          </ul>
        </div>
      </div>*/}


                {/*YOYO*/}

//  <div className="col-md-4 col-md-6 col-md-offset-2">

//             <p className="lead storyText">#MAKE DYNAMIC isus eget urna mollis ornare vel eu
//               checking
//             </p>
//           </div>


background: darkgrey; /* Old browsers */
background: -moz-linear-gradient(45deg, #febbbb 0%, #fe9090 45%, #fe9090 62%, #fe9090 74%, #ff5c5c 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(45deg, #febbbb 0%,#fe9090 45%,#fe9090 62%,#fe9090 74%,#ff5c5c 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(45deg, #febbbb 0%,#fe9090 45%,#fe9090 62%,#fe9090 74%,#ff5c5c 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#febbbb', endColorstr='#ff5c5c',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */;

  
  
            {/*<blockquote class="blockquote">

      <FontAwesome
        className='pullQuoteMark'
        name='quote-left'
        size='3x'
        style={{ color: "white", textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
<p>And that’s when it all changed. That’s when I realized I saw the start of a world yet undiscovered...” </p>
  
</blockquote>*/}
  
  // updateConcern1(){
  //   console.log("updating concern")
  //       this.setState({????: this.state.???? + "Concern1"});

  // }
      /*Variables for tracking tallies*/


      {/*GREEN SNIPPET*/}
{/*<div id="MainMenu">
        <div className="list-group panel">
          <a href="#demo3" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#MainMenu">Item 3</a>
          <div className="collapse" id="demo3">
            <a href="#SubMenu1" className="list-group-item" data-toggle="collapse" data-parent="#SubMenu1">Subitem 1 <i className="fa fa-caret-down" /></a>
            <div className="collapse list-group-submenu" id="SubMenu1">
              <a href="#" className="list-group-item" data-parent="#SubMenu1">Subitem 1 a</a>
              <a href="#" className="list-group-item" data-parent="#SubMenu1">Subitem 2 b</a>
              <a href="#SubSubMenu1" className="list-group-item" data-toggle="collapse" data-parent="#SubSubMenu1">Subitem 3 c <i className="fa fa-caret-down" /></a>
              <div className="collapse list-group-submenu list-group-submenu-1" id="SubSubMenu1">
                <a href="#" className="list-group-item" data-parent="#SubSubMenu1">Sub sub item 1</a>
                <a href="#" className="list-group-item" data-parent="#SubSubMenu1">Sub sub item 2</a>
              </div>
              <a href="#" className="list-group-item" data-parent="#SubMenu1">Subitem 4 d</a>
            </div>
            <a href="javascript:;" className="list-group-item">Subitem 2</a>
            <a href="javascript:;" className="list-group-item">Subitem 3</a>
          </div>
          <a href="#demo4" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#MainMenu">Item 4</a>
          <div className="collapse" id="demo4">
            <a href className="list-group-item">Subitem 1</a>
            <a href className="list-group-item">Subitem 2</a>
            <a href className="list-group-item">Subitem 3</a>
          </div>
        </div>
      </div>*/}

    

    Red BUTTONS:
    
    <ul className="concernPgBtns">
              <li>
                <button
                
                  onClick={this.handleButtonClick}
                  className="btn btn-danger"
                  style={styles.buttonStyle}>
                  concern1
                 
                 {/*<button onClick={this.updateConcern1.bind(this)} type="button" className="btn btn-success">concern 1 try <span className="badge"> {this.state.beenThere}</span></button> */}

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
              </li>

               </ul>
    
    
    
    // var beenThereTotal = 0; var hereNowTotal = 0; FUNCTIONS
    // ==================================================================== Here we
    // create various on "click" functions which capture the clicks Inside each
    // click event is the code to create an alert, update the counter, then show the
    // updated count. $("#There").on("click", function() { beenThereCounter++;
    // alert("You've eaten " + beenThereCounter + " PB&J sandwiches"); });
    // $("#Here").on("click", function() {   alert("Nom nom nom. Gooey Gooey Grilled
    // Cheese!");   hereNowCounter++;   alert("You've eaten " + hereNowCounter + "
    // grilled cheese sandwiches"); });



    <p className="beenThere"> STORY HEADLINES < span style = {{color: '#333' }}></span>:
      
      </p> 

    } 
    <div className="YouGotThisDek">     
        <span className="and">+ </span > You Got This </div> </div> 
        
         <div className="row">
           <div>hiDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi eratDonec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.  nisi erat</div>


           RIGHT ALIGHNED DROP
           {/*<div className="dropdown">
        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          This dropdown's menu is right-aligned
        </button>
        <ul className="dropdown-menu dropdown-menu-right">
          <li >Action</li>
          <li>Another action</li>
          <li >Something else here</li>
        </ul>
      </div>*/}


        {/*<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>*/}


           <div className="container-fluid">

                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle  btn-danger"
                    type="button"
                    id="menu1"
                    data-toggle="dropdown">The Thoughts
                    <span className="caret"/></button>
                  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                    {/*<li role="presentation"><a role="menuitem" tabIndex={-1} onClick={() => this.concernUpdate("Concern1")} href="#">Concern1</a></li>*/}
                    {/*<li role="presentation"><a role="menuitem" tabIndex={-1} onClick={() => this.concernUpdate("I’ve failed too much")} href="#">I’ve failed too much</a></li>*/}
                    {/*<li role="presentation"><a role="menuitem" tabIndex={-1} onClick={() => this.concernUpdate("It’s hopeless")} href="#">It’s hopeless</a></li>*/}
                    {/*<li role="presentation">
                      <a
                        role="menuitem"
                        tabIndex={-1}
                        onClick={() => this.concernUpdate("concern4")}
                        href="#">concern4</a>
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        tabIndex={-1}
                        onClick={() => this.concernUpdate("concern5")}
                        href="#">concern5</a>
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        tabIndex={-1}
                        onClick={() => this.concernUpdate("concern6")}
                        href="#">concern6</a>
                    </li>
                    <li role="presentation" className="divider"/>
                    <li role="presentation">
                      <a role="menuitem" tabIndex={-1} href="#">About Us</a>
                    </li>*/}
                  </ul>
                </div>

              </div>


      {/*<ul>
      <li>
        <button
          onClick={this.handleButtonClick}
          className="btn btn-danger"
          style={styles.buttonStyle}>
          "And that’s when it all changed
        </button>
      </li>
      <li>
        <button
          onClick={this.handleButtonClick}
          className="btn btn-danger"
          style={styles.buttonStyle}>
          "Standing at the precipice, he at last turned from what had been.
        </button>
      </li>
      <li>
        <button
          onClick={this.handleButtonClick}
          className="btn btn-danger"
          style={styles.buttonStyle}>
          "Fried shrimp at Jango's every Tuesday changed his life
        </button>
      </li>
      <li>
        <button
          onClick={this.handleButtonClick}
          className="btn btn-danger"
          style={styles.buttonStyle}>
          "The last time I saw Pete, he was skin and bones and grace.
        </button>
      </li>


      <li>
        <button
          onClick={this.handleButtonClick}
          className="btn btn-danger"
          style={styles.buttonStyle}>
          "Falling, she suddenly found the ground beneath her
        </button>
      </li>
    </ul> */}