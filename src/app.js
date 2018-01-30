import React, { Component } from 'react';
import Store from './store/index.js';
import TaskSchedular from 'taskschedular.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      storeProps:Store.getInitialState()
    };
  }
  
  componentDidMount(){
    this.unsubscribe = Store.listen(this.onStoreUpdate, this);

  }

  onStoreUpdate(storeProps){  
    this.setState({storeProps});
  }
  render () {
      const {state:{storeProps}} = this;
      return (
        <div>
                <TaskSchdular  status={this.state.storeProps}/>
        </div>
      );
  }

}

