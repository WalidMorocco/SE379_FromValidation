import './App.css';
import {SignUpForm} from './Form'

function App() {
  const navigate = useNavigate();

  const handleShowUseStateDemo = () => {
    navigate('/state-demo');
  };

  const handleShowUseEffectDemo = () => {
    navigate('/effect-demo');
  };

  return (
    <div className="App">
      <hr />
      <button className="button" onClick={handleShowUseStateDemo}>
        UseState Demo
      </button>
      <button className="button" onClick={handleShowUseEffectDemo}>
        UseEffect Demo
      </button>

      <Routes>
        <Route path="state-demo" element={<UseStateDemo />} />
        <Route path="effect-demo" element={<UseEffectDemo />} />
      </Routes>
    </div>
  );
}

export default App;
