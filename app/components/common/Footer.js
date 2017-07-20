import React from "react";
var FontAwesome = require('react-fontawesome');

const Footer = () => (
  <footer className="footer">
    <hr />
    <p className="pull-right">
      {/*<i className="fa fa-github" aria-hidden="true" />
            <i className="fa fa-heart" aria-hidden="true" />*/}

        &nbsp;&nbsp; built from da <FontAwesome
                      className=''
                      name='heart-o'
                      size='1x'
                      style={{
                      color: "deeppink",
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>
    </p>
  </footer>
);

export default Footer;
