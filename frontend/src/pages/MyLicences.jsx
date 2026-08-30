import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { useAuth } from '../context/AuthContext';

const MyLicences = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMyLicences = async () => {
      try {
        const response = await axiosInstance.get('/api/assignments/my', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setAssignments(response.data);
      } catch (err) {
        setError('Could not load your licences.');
      } finally {
        setLoading(false);
      }
    };
    fetchMyLicences();
  }, [user]);

  if (loading) return <p className="p-8">Loading...</p>;
  if (error) return <p className="p-8 text-red-600">{error}</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-lg font-semibold mb-6">My Licences</h1>
      {assignments.length === 0 ? (
        <div className="border border-dashed rounded-xl p-6 text-center text-gray-500">
          <p>No licences assigned to you yet.</p>
          <p>Contact your Licence Admin.</p>
        </div>
      ) : (
        assignments.map((a) => (
          <div key={a._id} className="border rounded-xl p-4 mb-3">
            <p className="font-semibold">{a.licence?.product}</p>
            <p className="text-sm text-gray-600">
              Expires {a.licence?.expiryDate
                ? new Date(a.licence.expiryDate).toLocaleDateString()
                : 'N/A'}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyLicences;
