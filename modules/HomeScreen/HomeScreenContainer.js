import React, {PureComponent} from 'react';
import HomeComponent from './HomeScreenComponent';

class HomeContainer extends PureComponent {
  render() {
      return(
        <HomeComponent {...this.props}/>
      );
  }
}

export default HomeContainer;