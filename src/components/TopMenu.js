import Navbar from "./Navbar"
import Searchbar from "./Searchbar"

const TopMenu = () => {
    return (
        <div style={{
            position:'fixed',
            width: '100vw',
            backgroundColor: '#070417',
            }}>
        <Navbar />
        <Searchbar />
        </div>
    )
};

export default TopMenu;
