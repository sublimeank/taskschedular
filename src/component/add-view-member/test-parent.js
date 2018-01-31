import React  from 'react';
import MemberView from './member-view.js';
export default class ParentMember extends React.Component {
   
       state = {
           members: [{'_id':101, 'name': 'Ankit', 'doj': '12-03-15', 'designation': 'software trainee'},
           {'_id':102, 'name': 'Anit', 'doj': '12-03-15', 'designation': 'software trainee'},
           {'_id':109, 'name': 'Ankit', 'doj': '12-03-15', 'designation': 'software trainee'},
           {'_id':111, 'name': 'Ankit', 'doj': '12-03-15', 'designation': 'software trainee'},
           {'_id':101, 'name': 'Ankit', 'doj': '12-03-15', 'designation': 'software trainee'} 
        ]
       } 
 
    render() {
        return(<MemberView  members={this.state.members} />);

    }

}