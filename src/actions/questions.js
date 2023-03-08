import {saveQuestion, saveQuestionAnswer} from '../data/api';
import {addAnswerUser, addQuestionUser} from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER_QUESTION = 'ADD_ANSWER_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    };
}

export function addAnswerQuestion(author, qid, answer) {
    return {
        type: ADD_ANSWER_QUESTION,
        author,
        qid,
        answer
    };
}

export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        return saveQuestion(firstOption, secondOption, authedUser)
                .then((question) => {
                    dispatch(addQuestion(question));
                    dispatch(addQuestionUser(question))
                });
    };
}

export function handleAddAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        return saveQuestionAnswer(authedUser.id, questionId, answer)
                .then(() => {
                    dispatch(addAnswerQuestion(authedUser.id, questionId, answer));
                    dispatch(addAnswerUser(authedUser.id, questionId, answer))
                });
    };
}