import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { handleAddQuestion } from '../actions/questions';

const NewPoll = ({dispatch}) => {
    const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState('');
    const [secondOption, setSecondOption] = useState('');

    const handleFirstOptionChange = (e) => {
        const value = e.target.value;
        setFirstOption(value);
    }

    const handleSecondOptionChange = (e) => {
        const value = e.target.value;
        setSecondOption(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(firstOption,secondOption));
        navigate('/');
    }

    return(
        <div>
            <h1 className='text-3xl font-bold mt-9 text-center'>Would You Rather</h1>
            <p className='text-center text-slate-700/70'>Create Your Own Poll</p>

            <form onSubmit={handleSubmit}>
                <div className='mt-9'>
                    <h3 htmlFor='firstOption'
                            data-testid='firstOptionLabel'
                            className='block text-sm font-bold text-black text-center'>
                        First Option
                    </h3>
                    <div className=' mt-3'>
                        <input value={firstOption}
                                onChange={handleFirstOptionChange}
                                type='text'
                                name='firstOption'
                                id='firstOption'
                                placeholder='Option One'
                                data-testid='firstOption'
                                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none'></input>
                    </div>
                </div>

                <div className='mt-9'>
                    <h3 htmlFor='secondOption'
                            data-testid='secondOptionLabel'
                            className='block text-sm font-bold text-black text-center'>
                        Second Option
                    </h3>
                    <div className=' mt-3'>
                        <input value={secondOption}
                                onChange={handleSecondOptionChange}
                                type='text'
                                name='secondOption'
                                id='secondOption'
                                placeholder='Option Two'
                                data-testid='secondOption'
                                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none'></input>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button type="submit"
                            data-testid="submit-poll"
                            className="bg-green-500 hover:bg-green-700 px-5 py-2.5 text-sm leading-5 rounded-md font-bold text-white">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default connect()(NewPoll);