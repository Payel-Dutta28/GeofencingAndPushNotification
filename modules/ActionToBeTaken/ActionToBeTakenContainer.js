import React, {PureComponent} from 'react';
import ActionToBeTakenComponent from './ActionToBeTakenComponent';

class ActionToBeTakenContainer extends PureComponent {
    constructor(props) {
        super(props);
     
        this.state = {
            actionToBeTaken: '',
        };
      }
     
    componentDidMount()
    {
        if(this.props.condition === 'smile') 
        {
            this.setState({actionToBeTaken:'That`s perfect!!! Please continue working'});
        }
        else if (this.props.condition === 'sick')
        {
            this.setState({actionToBeTaken:'You should contact the HR administrator to figure out what you should do.'});
        }
    }
  render() {
      return(
        <ActionToBeTakenComponent {...this.props} actionToBeTaken={this.state.actionToBeTaken}/>
      );
  }
}

export default ActionToBeTakenContainer;