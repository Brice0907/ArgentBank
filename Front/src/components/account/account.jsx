import './style/account.css';

// eslint-disable-next-line react/prop-types
export default function Account({ mult, mount }) {
    return <>
        <div className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x{mult})</h3>
                <p className="account-amount">{mount}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </div>
    </>
}