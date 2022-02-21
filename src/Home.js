import logo from './unnamed.png';
import UrlSection from './UrlSection';

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="url-logo" alt="logo" />
                <UrlSection/>
            </header>
        </div>
    );
}
 
export default Home;