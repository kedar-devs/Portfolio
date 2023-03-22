import './App.css';
import AppRoute from './Component/Routes/AppRoute';
import home from './assets/Home.png'
function App() {
  return (
    <div className="dark">
      <div className='dark:bg-black dark:min-h-screen' >
      <AppRoute />
    </div>
    </div>
  );
}

export default App;
