import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Card = ({question, author}) => {
    return (
        <Link to={'questions/' + question.id}>
        <div className=' m-4 p-6 rounded-xl border-2 border-gray-500/300 flex justify-center items-center space-x-4'>
            <div className = "shrink-0">
                <img className=" h-16 w-16" src={author?.avatarURL} alt="Author_Avatar"/>
            </div>
            <div className=' w-80 text-center'>
                <div className='text-xl font-bold text-black'>{question.author}</div>
                <p className='text-xs italic'>{new Date(question.timestamp).toDateString()}</p>
                <p className='w-64 h-8 flex items-center
                            justify-center mr-auto ml-auto mt-4 border-2 
                            rounded-md text-green-700/90
                            border-green-500'>Show</p>
            </div>
        </div>  
        </Link>
    );
}

export default connect()(Card);