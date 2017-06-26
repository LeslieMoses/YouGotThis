// import React from 'react';
// import {GoogleLogin} from 'react-google-login-component';
// import {FacebookLogin} from 'react-facebook-login-component';

// class LogIn extends React.Component {

//   constructor(props, context) {
//     super(props, context);
//   }

//   responseGoogle(googleUser) {
//     var id_token = googleUser
//       .getAuthResponse()
//       .id_token;
//     console.log({accessToken: id_token});
//     //anything else you want to do(save to localStorage)...
//   }

//   responseFacebook(response) {
//     console.log(response);
//     //anything else you want to do(save to localStorage)...
//   }

//   render() {
//     return (
//       <div className="row">
//       <div>
//         <GoogleLogin
//           socialId="yourClientID"
//           className="google-login"
//           scope="profile"
//           responseHandler={this.responseGoogle}
//           buttonText="Login With Google"/>
//       </div>

//       <div className="col-md-6 logbox">
//         <form id="signup" method="post" action="/signup">
//           <h1>create an account</h1>
//           <input
//             className="user[name]"
//             type="text"
//             placeholder="What's your username?"
//             pattern="^[\w]{3,16}$"
//             autofocus="autofocus"
//             required="required"
//             class="input pass"/>
//           <input
//             className="user[password]"
//             type="password"
//             placeholder="Choose a password"
//             required="required"
//             class="input pass"/>
//           <input
//             className="user[password2]"
//             type="password"
//             placeholder="Confirm password"
//             required="required"
//             class="input pass"/>
//           <input
//             className="user[email]"
//             type="email"
//             placeholder="Email address"
//             class="input pass"/>
//           <input type="submit" value="Sign me up!" class="inputButton"/>
//           <div className="text-center">
//             already have an account?
//             <a href="#" id="login_id">login</a>
//           </div>
//         </form>
//       </div>
//     </div> 
//     <div className="col-md-6"> 
//     <div id="logbox">
//       <form id="signup" method="post" action="/signup">
//         <h1>account login</h1>
//         <input
//           className="user[email]"
//           type="email"
//           placeholder="enter your email"
//           class="input pass"/>
//         <input
//           className="user[password]"
//           type="password"
//           placeholder="enter your password"
//           required="required"
//           class="input pass"/>
//         <input type="submit" value="Sign me in!" class="inputButton"/>
//         <div className="text-center">
//           <a href="#" id="">create an account</a>
          
//           <a href="#" id="">forgot password</a>
//         </div>
//       </form>
//     </div>  
//      </div>  

    


  
// }; 
      

// };

// export default LogIn;