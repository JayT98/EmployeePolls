import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleLogout} from '../actions/authedUser';

const Nav = ({dispatch, authedUserId}) => {
    const logout = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
    };

    return (
        <nav className='w-full h-14 flex justify-between border-b-2 border-slate-600/200'>
            <div className='flex'>
            <Link to="/"
                    className='
                        font-bold w-24 h-14
                        text-center
                        flex justify-center items-center
                        hover:border-b-2 border-black'>Home
            </Link>
            <Link to="/leaderboard"
                    className='
                        font-bold w-32 h-14
                        text-center
                        flex justify-center items-center
                        hover:border-b-2 border-black'>Leaderboard
            </Link>
            <Link to="/new"
                    className='
                        font-bold w-24 h-14
                        text-center
                        flex justify-center items-center
                        hover:border-b-2 border-black'>New
            </Link>
            </div>
            <div className=' w-64 flex justify-between'>
            <span
                className='font-bold h-14 text-slate-700 flex items-center'
                data-testid= 'user-information'>
                User: {authedUserId}
            </span>
            <button
                onClick={logout}
                className='  font-medium w-24 h-14
                            text-center
                            hover:border-b-2 border-black'
            >
                Logout
            </button>
            </div>
        </nav>
    );
};

const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
}) 

export default connect(mapStateToProps)(Nav);