import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { useAuth } from '../context/AuthContext';

const AssignLicence = () => {
  const { user } = useAuth();
  const [licences, setLicences] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedLicence, setSelectedLicence] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [available, setAvailable] = useState(null);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const headers = { Authorization: `Bearer ${user.token}` };
      const licRes = await axiosInstance.get('/api/licences', { headers });
      const usrRes = await axiosInstance.get('/api/auth/users', { headers });
      setLicences(licRes.data);
      setUsers(usrRes.data.filter((u) => u.role === 'user'));
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    const licence = licences.find((l) => l._id === selectedLicence);
    setAvailable(licence ? licence.available : null);
  }, [selectedLicence, licences]);

  const handleAssign = async () => {
    setMessage('');
    try {
      const res = await axiosInstance.post(
        '/api/assignments',
        { licenceId: selectedLicence, userId: selectedUser },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setSuccess(true);
      setAvailable(res.data.available);
      setMessage('Licence assigned successfully.');
    } catch (err) {
      setSuccess(false);
      setMessage(err.response?.data?.message || 'Could not assign licence.');
      if (err.response?.data?.available !== undefined) {
        setAvailable(err.response.data.available);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-lg font-semibold mb-6">Assign Licence</h1>

      <label className="block text-sm text-gray-600 mb-1">Product</label>
      <select
        className="w-full border rounded p-2 mb-4"
        value={selectedLicence}
        onChange={(e) => { setSelectedLicence(e.target.value); setMessage(''); }}
      >
        <option value="">Select a product</option>
        {licences.map((l) => (
          <option key={l._id} value={l._id}>{l.product}</option>
        ))}
      </select>

      <label className="block text-sm text-gray-600 mb-1">Assign to</label>
      <select
        className="w-full border rounded p-2 mb-4"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select a user</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>{u.name}</option>
        ))}
      </select>

      {available !== null && (
        <p className={`text-sm mb-4 ${available <= 0 ? 'text-red-600' : 'text-gray-600'}`}>
          Available: {available}
          {available <= 0 && ' — no licences left'}
        </p>
      )}

      {message && (
        <p className={`text-sm mb-4 ${success ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}

      <button
        className="w-full bg-blue-600 text-white rounded p-2 mb-2 disabled:opacity-40"
        disabled={!selectedLicence || !selectedUser || available <= 0}
        onClick={handleAssign}
      >
        Confirm
      </button>
    </div>
  );
};

export default AssignLicence;
