import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
        {['name', 'email', 'message'].map((field, i) => (
          <div key={i}>
            <label className="block text-sm font-medium mb-1 capitalize text-gray-800 dark:text-gray-200">{field}</label>
            {field === 'message' ? (
              <textarea className="w-full p-3 rounded-lg" rows="4" required value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })} />
            ) : (
              <input type={field} className="w-full p-3 rounded-lg" required value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })} />
            )}
          </div>
        ))}
        <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full transition">Send Message</button>
      </form>
    </section>
  );
}
