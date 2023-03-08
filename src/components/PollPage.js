import {connect} from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { handleAddAnswer } from '../actions/questions';


const PollPage = ({dispatch, authedUser, question, author}) => {
    const navigate = useNavigate();

    if(!authedUser || !question || !author)
    {
        return <Navigate to='/404'/>
    }

    const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
    const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
    const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

    const handleOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id,'optionOne'));
        navigate('/');
    };

    const handleOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id,'optionTwo'));
        navigate('/');
    };

    const calcVote = (option, question) => {
        const numberVotesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch(option) {
            case 'optionOne':
                return question.optionOne.votes.length / numberVotesTotal * 100 + "%";
            case 'optionTwo':
                return question.optionTwo.votes.length / numberVotesTotal * 100 + "%";
            default:
                return '';    
        }
    };
    
    return (
        <div>
            <h1 className='text-3xl font-bold mt-9 text-center'>Poll by {author.id}</h1>
            <div className='flex justify-center mt-9'>
                <img src={author.avatarURL} alt='avatar' className='w-36 h-36'></img>
            </div>

            <div className='flex justify-center mt-6'>
                <h2 className='text-2xl font-bold mt-6'> Would you rather?</h2>
            </div>

            <div className='grid grid-cols-2 gap-4 mt-4'>
                <button onClick={handleOptionOne} disabled={hasVoted}
                        className={'p-2 rounded-xl bg-white hover:shadow-xl border-2 transition' + (hasVotedForOptionOne ? 'bg-lime-400' : '')}>
                    <div className={hasVotedForOptionOne?'chosen':''}>
                        <p className=' font-semibold mb-2'>{question.optionOne.text}</p>
                        {
                            !hasVoted && <p className=' bg-sky-500 w-full h-10 flex items-center justify-center text-white mb-3'>
                                Click
                            </p>
                        }
                        {
                            hasVoted && <p className='text-xs'>
                                Votes: {question.optionOne.votes.length} ({calcVote("optionOne", question)})
                            </p>
                        }
                    </div>
                </button>

                <button onClick={handleOptionTwo} disabled={hasVoted}
                        className={'p-2 rounded-xl bg-white hover:shadow-xl border-2 transition' + (hasVotedForOptionTwo ? 'bg-lime-400' : '')}>
                    <div className={hasVotedForOptionTwo?'chosen':''}>
                        <p className='font-bold mb-2'>{question.optionTwo.text}</p>
                        {
                            !hasVoted && <p className=' bg-sky-500 w-full h-10 flex items-center justify-center text-white mb-3'>
                                Click
                            </p>
                        }
                        {
                            hasVoted && <p className='text-xs'>
                                Votes: {question.optionTwo.votes.length} ({calcVote("optionTwo", question)})
                            </p>
                        }
                    </div>
                </button>
            </div>
        </div>
    );

}


const mapStateToProps = ({authedUser, users, questions}) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = Object.values(users).find((user) => user.id === question.author);
        return {authedUser, question, author};
    } catch (e) {
        return <Navigate to='/404'></Navigate>;
    }
}

export default connect(mapStateToProps)(PollPage);