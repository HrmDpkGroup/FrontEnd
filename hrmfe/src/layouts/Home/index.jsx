import React, { Component } from "react";
import { connect } from 'react-redux';
import {mutationAdminAction} from '../../_actions'
class Index extends Component {
    componentDidMount(){
        const{dispatch} = this.props;
        dispatch(mutationAdminAction.addSystem(
            {
                id:"",
                description:"سیستم جدید",
                name:"سیستم",
                parent:"5d219a3bfff41b23bc41e622",
                
            }))
    }
    render() {
        return <div>Hi</div>
    }
}
export default connect()(Index);
