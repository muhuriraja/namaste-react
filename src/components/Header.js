import foodLogo from '../../Good-food-logo-design-on-transparent-background-PNG.png'
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={foodLogo} />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Card</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header