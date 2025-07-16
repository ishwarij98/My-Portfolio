import { useEffect, useState } from 'react';
import axios from 'axios';
 const apiUrl = import.meta.env.VITE_API_URL;

export default function Messages() {
  const [msgs, setMsgs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Messages • Ishwari.dev';
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await axios.get("apiUrl/messages");
      setMsgs(res.data.messages || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clearMessages = async () => {
    await axios.delete("apiUrl/deleteMessages");
    setMsgs([]);
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">All Received Messages</h2>
          <button
            onClick={clearMessages}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
          >
            Clear All
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>
        ) : msgs.length ? (
          <ul className="space-y-4">
            {msgs.map((m, i) => (
              <li key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {m.name} <span className="text-gray-500 dark:text-gray-400 text-sm">&lt;{m.email}&gt;</span>
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{m.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">No messages yet.</p>
        )}
      </div>
    </section>
  );
}
