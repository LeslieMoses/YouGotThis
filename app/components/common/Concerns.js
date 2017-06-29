import React, {Component} from "react";
import API from "../../utils/API";
// import Panel.js from "Panel";
var FontAwesome = require('react-fontawesome');

class Concerns extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      beenThere: 0,
      hereNow: 0
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

  addClick() {
    console.log("hi");
    this.setState({
      beenThere: this.state.beenThere + 1
    });
  }

  addHereClick() {
    console.log("hey");
    this.setState({
      hereNow: this.state.hereNow + 1
    });
  }

  concernUpdate(concern) {
    console.log("concern here");
    this.setState({concernUpdate: concern});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-md-8 col-md-offset-1">
            <div style={styles.formStyle} className="form-group">
              <label className="concernHed">

                {this.state.concernUpdate}
              </label>
              <br/>
              <button
                onClick={this
                .addClick
                .bind(this)}
                type="button"
                className="btn btn-warning">Been There
                <span className="badge">
                  {this.state.beenThere}</span>
              </button>

              <button
                onClick={this
                .addHereClick
                .bind(this)}
                type="button"
                className="btn btn-danger">Here Now
                <span className="badge">
                  {this.state.hereNow}</span>
              </button>
            </div>

            <div className="row">

              <div className="container">
                <div id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                      <h5 className="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne">
                          <a
                            role="menuitem"
                            tabIndex={-1}
                            onClick={() => this.concernUpdate("Concern1")}
                            href="#">Concern1</a>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne">
                      <div className="card-block">
                            <ul className="list-group">
                              <li className="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
                              <li className="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
                              <li className="list-group-item list-group-item-warning">Porta ac consectetur ac</li>
                              <li className="list-group-item list-group-item-danger">Vestibulum at eros</li>
                          </ul>    
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingTwo">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo">
                          <a
                            role="menuitem"
                            tabIndex={-1}
                            onClick={() => this.concernUpdate("Concern2")}
                            href="#">Concern2</a>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo">
                      <div className="card-block">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                        cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingThree">
                      <h5 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree">
                          <a
                            role="menuitem"
                            tabIndex={-1}
                            onClick={() => this.concernUpdate("Concern3")}
                            href="#">Concern3</a>
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree">
                      <div className="card-block">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                       
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="card">
                  <div className="card-header" role="tab" id="headingFour">
                    <h5 className="mb-0">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour">
                        <a
                          role="menuitem"
                          tabIndex={-1}
                          onClick={() => this.concernUpdate("Concern4")}
                          href="#">Concern4</a>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingFour">
                    <div className="card-block">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                      shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                      cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                      you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingFive">
                    <h5 className="mb-0">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive">
                        <a
                          role="menuitem"
                          tabIndex={-1}
                          onClick={() => this.concernUpdate("Concern5")}
                          href="#">Concern5</a>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive">
                    <div className="card-block">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                      shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                      cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                      you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingSix">
                    <h5 className="mb-0">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseSix"
                        aria-expanded="true"
                        aria-controls="collapseSix">
                        <a
                          role="menuitem"
                          tabIndex={-1}
                          onClick={() => this.concernUpdate("Concern6")}
                          href="#">Concern6</a>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingSix">
                    <div className="card-block">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                      brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                      shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                      cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                      you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>

               
              </div>

   

            </div>
          </div>
          <div className="col-md-4 col-md-6 col-md-offset-2">

            <p className="lead storyText">#MAKE DYNAMIC isus eget urna mollis ornare vel eu
              leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo
                luctus. nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
                ullamcorper nulla non metus auctor fringilla.
              </p>
              #SCROLL diam eget risus varius blandit sit amet non magna. Donec id elit non mi
              porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat
              porttitor ligula, eget lacinia odio sem nec elit.
            </p>

          </div>
        </div >
      </div>

    );
  }
}
const styles = {
  buttonStyle: {
    // float: "right",
    marginTop: 10
  },

  formStyle: {
    marginBottom: 60,
    marginTop: 60
  }
};

export default Concerns;