import { useState } from 'react';
import Footer from './reusable-components/Footer';
import Header from './reusable-components/Header';
import './sendMessage.css';

export default function SendMessage() {
  const [recipient, setRecipient] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to send the message
    console.log('Sending message:', { recipient, title, message });
  };

  return (
    <div className="admin-management">
      <Header />
      <main className="admin-main">
        <h2>Send Message to {recipient}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="recipient">Recipient:</label>
            <input
              type="text"
              id="recipient"
              value={recipient}
              onChange={handleRecipientChange}
              required
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
          <button type="search-button">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
