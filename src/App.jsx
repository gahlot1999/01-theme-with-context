import { darkTheme, lightTheme } from './themeStyles';
import useTheme from './useTheme';

function App() {
  const { theme, changeTheme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div
      className='main'
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
      }}
    >
      <button className='theme-btn' onClick={changeTheme}>
        {theme === 'light' ? '☀️' : '🌑'}
      </button>

      <nav className='navbar'>
        <ul>
          <li>
            <a
              style={{
                color: currentTheme.textColor,
              }}
              href='#'
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={{
                color: currentTheme.textColor,
              }}
              href='#'
            >
              About Us
            </a>
          </li>
          <li>
            <a
              style={{
                color: currentTheme.textColor,
              }}
              href='#'
            >
              Contact
            </a>
          </li>
          <li>
            <a
              style={{
                color: currentTheme.textColor,
              }}
              href='#'
            >
              Login
            </a>
          </li>
        </ul>
      </nav>

      <div className='hero'>
        <h1>Sample Website</h1>
      </div>

      <button>Click Me</button>
    </div>
  );
}

export default App;
