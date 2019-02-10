import React, { Component } from "react";
import './PearsonUsersList.css';
import USERS  from "./../../StaticData/Users";
import User from "./../../Components/User";
import FETCH_USERS  from "./../../Services/Api";
import { REMOVE_DUPLICATE_DATA, DELETE_USER }  from "./../../Utilities/Helper";

class PearsonUsersList extends Component {
  constructor(props) {
    super(props)
    this.state = { users: USERS, isError : false }
  }

  componentDidMount () {
    FETCH_USERS(1, 10).then(res=>{
      let  users = REMOVE_DUPLICATE_DATA([...this.state.users, ...res.data])
      this.setState({users, isError : false})
    }).catch(err=>this.setState({isError : true}))
  }

  deleteUser = (id) => {
    let users =  DELETE_USER(this.state.users, id)
    this.setState({users})
  }

  render() {
		let { users, isError } = this.state
    if(isError) {
      return (<div className= "pearon-users"><p className= "heading">Check API Service</p></div>)
    }
    return (
      <div className= "pearon-users">
        <p className= "heading">Pearson User Management</p>
        {users.map((data, index) =><User key = {data.id} {...data} clickHandler = {this.deleteUser}/>)}
      </div>
    )
  }
}
export default PearsonUsersList
