import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Store from './store/index.js';
import Event from "./component/events.js";
import EditEvent from "./component/editevent.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TaskSchedular from 'taskschedular.js';

/*class App extends Component {
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

}*/
class App extends React.Component {
  render () {
      return (
        <div>
            <MuiThemeProvider>
              <Event/>
            </MuiThemeProvider>
        </div>
      );
  }
}
  ReactDOM.render(<App/>, document.getElementById("app"));
  


