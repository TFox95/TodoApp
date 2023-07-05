import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './Components/counter';
import Layout from './hoc/layout';
import Index from './Pages/Index';
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/counter' element={<Counter />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
