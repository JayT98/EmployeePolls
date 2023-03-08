import {Navigate} from 'react-router-dom';
import {useState} from 'react';
import {connect} from 'react-redux';
import { handleLogin } from '../actions/authedUser';

const Login = ({dispatch, loggedIn}) => {
    const [username, setUsername] = useState("sarahedo");
    const [password, setPassword] = useState("password123");

    if(loggedIn){
        const urlParams = new URLSearchParams(window.location.search)
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : '/'}/>;
    }

    const handleUserName = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <h1 className='text-3xl font-bold mt-9 text-center'>Employee Polls</h1>
            <div className='w-full h-max mt-10 flex justify-center'>
                <img src={require('../images/avatar_brand.png')} alt='Avatar_brand'/>
            </div>
            <h2 className='text-3xl font-bold mt-9 mb-5 text-center'
                data-testid="login-heading">
                Log In
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username' 
                            className='block mb-5 text-base
                                        font-bold text-black text-center'>
                        User
                    </label>
                    <div className='mt-1'>
                        <input
                            value={username}
                            onChange={handleUserName}
                            type='text'
                            name='username'
                            id='username'
                            data-testid='username'
                            className='px-4 py-2 bg-white 
                                        border shardow-sm
                                        border-slate-400
                                        placeholder-slate-300
                                        disabled:bg-slate-50
                                        disabled:text-slate-500
                                        disabled:border-slate-200
                                        focus:outline-none
                                        focus:border-green-400
                                        focus:ring-green-500
                                        block w-full
                                        rounded-md sm:text-sm
                                        focus:ring-1
                                        invalid:border-red-700
                                        invalid:text-red-600
                                        focus:invalid:border-red-500
                                        focus:invalid:ring-red-500
                                        disabled:shadow-none
                                        '
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor='password' 
                            className='block mb-5 mt-5 text-base
                                        font-bold text-black text-center'>
                        Password
                    </label>
                    <div className='mt-1'>
                        <input
                            value={password}
                            onChange={handlePassword}
                            type='password'
                            name='password'
                            id='password'
                            data-testid='password'
                            className='px-4 py-2 bg-white 
                                        border shardow-sm
                                        border-slate-400
                                        placeholder-slate-300
                                        disabled:bg-slate-50
                                        disabled:text-slate-500
                                        disabled:border-slate-200
                                        focus:outline-none
                                        focus:border-green-400
                                        focus:ring-green-500
                                        block w-full
                                        rounded-md sm:text-sm
                                        focus:ring-1
                                        invalid:border-red-700
                                        invalid:text-red-600
                                        focus:invalid:border-red-500
                                        focus:invalid:ring-red-500
                                        disabled:shadow-none
                                        '
                        />
                    </div>
                </div>

                <div className='mt-6 text-center'>
                    <button type='submit'
                            data-testid='submit'
                            className='bg-green-500
                                        hover:bg-green-700 px-7 py-3
                                        text-sm leading-5 font-bold
                                        rounded-md text-white'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);