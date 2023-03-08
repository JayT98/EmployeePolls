import { connect } from 'react-redux';

const Leaderboard = ({users}) => {
    return (
        <div>
            <table className='boder-collapse table-auto w-full text-sm mt-8'>
                <thead className='table-header-group h-16 bg-lime-100/80'>
                    <tr className='table-row'>
                        <th className='border-2 font-bold pl-8 text-black text-left text-lg'>Users</th>
                        <th className='border-2 font-bold pl-8 text-black text-left text-lg'>Answered</th>
                        <th className='border-2 font-bold pl-8 text-black text-left text-lg'>Created</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td className='border-2 border-slate-100 dark:border-slate-300 p-4 pl-8 text-black text-sm'>
                                    <span className='font-bold'>{user.name}</span> <br/>
                                    {user.id}
                                </td>
                                <td className="border-2 border-slate-100 dark:border-slate-300 p-4 pl-8 text-black text-sm">{Object.keys(user.answers).length}</td>
                                <td className="border-2 border-slate-100 dark:border-slate-300 p-4 pl-8 text-black text-sm">{user.questions.length}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = ({users}) => ({
    users: Object.values(users).sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length)
})

export default connect(mapStateToProps)(Leaderboard);