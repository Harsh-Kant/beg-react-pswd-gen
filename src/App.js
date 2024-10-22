import './App.css';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-red-200 via-purple-200 to-purple-300">
      <h1 className='text-3xl font-bold py-16 text-blue-900'>Password Manager</h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;
