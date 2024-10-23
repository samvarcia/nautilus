// SubscribeForm.js
import { useState } from 'react';
import styles from './SubscribeForm.module.css'

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const data = await res.json();

      if (!res.ok) {
        setIsError(true);
        setMessage(data.error || 'Something went wrong');
        return;
      }

      setMessage(data.message);
      setEmail(''); // Clear the input on success
    } catch (err) {
      setIsError(true);
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={subscribe} className={styles.form}>
      <div>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
          className=""
        />
      <button 
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </button>
      </div>
      {message && (
        <p className={`mt-2 ${isError ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
    </form>
  );
};

export default SubscribeForm;