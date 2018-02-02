import React from "react";
import ToDoAction from '../action/action';
import Immutable from "immutable";

let state = Immutable.FromJs({
    member : undefined
}),

init()
{
    var memberList = localStorage.getItem('memberList');
    
}
getInitialState() {
    return member;
}

onMemberAdded(id,name){

}

update(){
    localStorage.setItem();
}