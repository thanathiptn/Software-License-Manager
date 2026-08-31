import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Licences from './pages/Licences';
import AssignLicence from './pages/AssignLicence';
import MyLicences from './pages/MyLicences';
import AuditLogs from './pages/AuditLogs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/licences" element={<Licences />} />
        <Route path="/assign" element={<AssignLicence />} />
        <Route path="/my-licences" element={<MyLicences />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
      </Routes>
    </Router>
  );
}

export default App;
