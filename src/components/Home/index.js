import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import firebase from 'firebase';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import addWorks from '../../actions/add_works';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.getWorks = this.getWorks.bind(this);
  }

  componentDidUpdate() {
    console.log(this.props);
  }
  componentDidMount() {
    console.log(this.props);
    const { onSetUsers } = this.props;
    const storeData = firebase.firestore().collection('works');
    // console.log(storeData.firestore());


    db.getWorks(this.getWorks);
    db.onceGetUsers().then(snapshot =>
       onSetUsers(snapshot.val())
    );
    db.addWork('one', 1000, 'dsdfdfsdf');
  }
   
  getWorks(data) {
    this.props.addWorks(data);
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        { !!users && <UserList users={users} /> }
          {
            this.props.state.works.works ? 
              this.props.state.works.works.map(work => 
                <div> {work.workName} Rs -/ {work.price} 
                </div> 
            ) : null
          }

      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  
  </div>

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.userState.users,  
    state
  }  
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
  addWorks 
}, dispatch);

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
