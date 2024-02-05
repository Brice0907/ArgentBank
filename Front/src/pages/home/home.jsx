import './style/home.css';
import Banner from '../../components/banner/banner';
import Features from '../../components/features/features';
import chat from './assets/icon-chat.png';
import money from './assets/icon-money.png';
import shield from './assets/icon-security.png';

export default function Home() {
    return <>
        <Banner />
        <div className='features'>
            <Features image={chat}
                title="You are our #1 priority"
                content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <Features image={money}
                title="More savings means higher rates"
                content="The more you save with us, the higher your interest rate will be!"
            />
            <Features image={shield}
                title="Security you can trust"
                content="We use top of the line encryption to make sure your data and money is always safe."
            />
        </div>
    </>
}