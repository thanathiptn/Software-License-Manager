import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { useAuth } from '../context/AuthContext';

const AuditLogs = () => {
  const { user } = useAuth();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axiosInstance.get('/api/auditlogs', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setLogs(response.data);
      } catch (err) {
        if (err.response?.status === 403) {
          setError('You do not have access to this page. Only a Licence Admin can view the audit log.');
        } else {
          setError('Could not load audit logs.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, [user]);

  if (loading) return <p className="p-8">Loading...</p>;
  if (error) return <p className="p-8 text-red-600">{error}</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-lg font-semibold mb-6">Audit Log</h1>
      {logs.length === 0 ? (
        <p className="text-gray-500">No activity recorded yet.</p>
      ) : (
        logs.map((log) => (
          <div key={log._id} className="border rounded-xl p-4 mb-3">
            <p className="font-semibold">
              {log.actorName} {log.action} {log.target}
            </p>
            {log.details && (
              <p className="text-sm text-gray-600">{log.details}</p>
            )}
            <p className="text-xs text-gray-400 mt-1">
              {new Date(log.timestamp).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AuditLogs;
