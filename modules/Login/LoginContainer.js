import React, {PureComponent} from 'react';
import LoginComponent from './LoginComponent';

class LoginContainer extends PureComponent {
  render() {
      return(
        <LoginComponent {...this.props}/>
      );
  }
}

export default LoginContainer;