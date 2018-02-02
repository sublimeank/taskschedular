import React ,{Component} from 'react';
//import ToDoAction from "../action/eventaction";
import EditEvent from "./editevent.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class Event extends Component {
        state = {
            events:{
                _id :"000",
                name: "stand up",
                startTime:"11:00",
                endTime:"11:30",
                startDate:"2018-02-01",
                endDate:"2018-02-01",
                location:"meeting Room"
            }
        }
           
    render() {
        return(
            <div>
                
                    <EditEvent events={this.state.events}/>
            </div>
        );
    }
}
