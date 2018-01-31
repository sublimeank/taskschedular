import Reflux from 'reflux';
import Immutable from 'immutable';
import teamactions from ./action/teamaction.js;

let state =Immutable.fromJS({
    teams: [],
    fetch:false
}),
store = Reflux.createStore({
   listenables: teamactions,
   init: function(){

   },
   getInitialState: function() {
       return state;
   },
   updateState(newState, skipNotify = false){
    state = newState;
    if(!skipNotify){
        this.trigger(state);
    }
}

});