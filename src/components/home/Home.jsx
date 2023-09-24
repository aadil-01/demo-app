import './Home.scss'

const Home = () => {
    return (
        <div className="home-outer-container ocpy">
            <div className="home-inner-container ocpy">
                <div className="home ocpy flx cntr col">
                    <div className='home-heading flx cntr'>Welcome to Sowmya's Demo React JS App</div>
                    <span>This app shows the usage of routes in React JS</span>
                    <ul>
                        <li>By default the base route '/' will be redirected to 'home'</li>
                        <li>There is one navbar to help you navigate through routes</li>
                        <li>There is one basic notes app on '/app' route</li>
                        <li>There is history of all notes on '/history' route</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
