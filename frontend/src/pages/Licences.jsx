import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { useAuth } from '../context/AuthContext';

const Licences = () => {
  const { user } = useAuth();
  const [licences, setLicences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLicences = async () => {
      try {
        const response = await axiosInstance.get('/api/licences', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setLicences(response.data);
      } catch (err) {
        if (err.response?.status === 403) {
          setError('You do not have access to this page. Only a Licence Admin can open licence management.');
        } else {
          setError('Could not load licences.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchLicences();
  }, [user]);

  if (loading) return <p className="p-8">Loading...</p>;
  if (error) return <p className="p-8 text-red-600">{error}</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-lg font-semibold mb-6">Licences</h1>
      {licences.length === 0 ? (
        <p className="text-gray-500">No licence records yet.</p>
      ) : (
        licences.map((licence) => (
          <div key={licence._id} className="border rounded-xl p-4 mb-3">
            <p className="font-semibold">{licence.product}</p>
            <p className="text-sm text-gray-600">
              {licence.usedCount} of {licence.purchasedQuantity} Used
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Licences;
