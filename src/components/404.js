import {connect} from 'react-redux';

const Error404 = ()=> {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-9 text-center'>Error 404</h1>
            <h2 className='text-3xl font-bold mt-9 text-center'>Page Not Found</h2>
        </div>
    )
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Error404);