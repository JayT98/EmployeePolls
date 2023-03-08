import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Error404 from './components/404';
import PollPage from './components/PollPage';
import NewPoll from './components/NewPoll';
import PrivateRoute from './components/PrivateRoute';
import {connect} from 'react-redux';
import { handleInitialData } from './actions/shared';


function App({dispatch, loggedIn}) {
  useEffect(() => {
    dispatch(handleInitialData());
  });
  
  return (
    <div className='container mx-auto py-4'>
      {loggedIn && <Nav/>}
      <Routes>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path='/leaderboard' exact element={<PrivateRoute><Leaderboard/></PrivateRoute>}/>
        <Route path='/questions/:id' element={<PrivateRoute><PollPage/></PrivateRoute>}/>
        <Route path="/new" exact element={<PrivateRoute><NewPoll/></PrivateRoute>}/>
        <Route path="/404" exact element={<Error404/>}/>
      </Routes>
    </div>
  );
}

const mapStateToProps = ({authedUser}) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
