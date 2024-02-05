import './style/profile.css'
import Account from '../../components/account/account'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { userPut } from '../../service/modif';

export default function Profile() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user.profil);
    const token = useSelector((state) => state.auth.user.token);
    const content = useSelector((state) => state.auth.user.content);

    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [lastname, setLastname] = useState('');

    async function Put() {
        try {
            await userPut(username, lastname, token)
            dispatch({ type: 'PUT', payload: { firstName: username, lastName: lastname } });
            setOpen(false);
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
            {open === false ?
                (<button className="edit-button" onClick={() => setOpen(true)} >Edit Name</button>)
                :
                (<div>
                    <div className='edit-input'>
                        <div >
                            <input className="edit-input-wrapper" type="text" id="username" placeholder='First Name' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="edit-input-wrapper">
                            <input className="edit-input-wrapper" type="text" id="lastname" placeholder='Last Name' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                    </div>
                    <div className='edit-input'>
                        <div className='edit-input-button button-color' onClick={Put}>Save</div>
                        <div className='edit-input-button button-color' onClick={() => setOpen(false)}>Cancel</div>
                    </div>
                </div>)}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {content.transaction.map((el) =>
            <Account mult={el.multiplicator} mount={el.mount} key={el.id} />
        )}
    </div>
}