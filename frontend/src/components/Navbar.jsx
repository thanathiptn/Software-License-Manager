import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <Link to="/" className="text-xl sm:text-2xl font-bold">Software Licence Manager</Link>
      <div className="flex flex-wrap items-center gap-3">
        {user ? (
          <>
            {user.role === 'admin' && (
              <>
                <Link to="/licences">Licences</Link>
                <Link to="/assign">Assign</Link>
                <Link to="/audit-logs">Audit Log</Link>
              </>
            )}
            {user.role === 'user' && (
              <Link to="/my-licences">My Licences</Link>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link
              to="/register"
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
