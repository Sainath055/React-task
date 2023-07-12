
import "../../src/styles/home.scss"

const Home = () => {
  return (
    <>
    <div>

      <div id="Home_top_div">
        <h2>Dashboard</h2>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="18px" height="18px" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15M12 3v13m0 0l4-4.375M12 16l-4-4.375">
          </path></svg>
          Data
        </button>
      </div>

      <div id="home_cards_div">
        <div className="home_card">
          <h2>
            Blog Posts
          </h2>
          <p>3</p>
        </div>
        <div className="home_card">
          <h2>
            Products
          </h2>
          <p>3</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Home