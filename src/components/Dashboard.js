import {connect} from "react-redux";
import Card from './Card';

const Dashboard = ({authedUser, questions, users}) => {
    const unanswered = (question) => (
        !question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id)
    );

    const answered = (question) => (
        question.optionOne.votes.includes(authedUser.id)
        || question.optionTwo.votes.includes(authedUser.id)
    );

    return (
        <div>
            <h1 className="text-3xl font-bold mt-9 text-center" data-testid="heading">Dashboard</h1>
            <h2 className="text-2xl font-bold mt-9 pl-6 border-2 h-12 flex items-center border-gray-500/300">New Questions</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 border-2 border-t-0 border-gray-500/300">
                {questions
                    .filter(unanswered)
                    .map((question) => (
                        <li key={question.id}>
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))}
            </ul>

            <h2 className="text-2xl font-bold mt-9 pl-6 border-2 h-12 flex items-center border-gray-500/300">Done</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions
                    .filter(answered)
                    .map((question) => (
                        <li key={question.id}>
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users
});

export default connect(mapStateToProps)(Dashboard);