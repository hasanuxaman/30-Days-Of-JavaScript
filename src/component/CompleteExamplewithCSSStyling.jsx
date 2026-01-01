import React, { useState } from 'react';
import './FormStyles.css';

function CompleteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setStatus({ type: 'loading', message: 'Submitting...' });
    
    try {
      // For demo purposes - you would replace with your actual API endpoint
      // const response = await fetch('https://api.example.com/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful response
      const mockResponse = {
        ok: true,
        json: async () => ({ 
          success: true, 
          message: 'Thank you! Your message has been sent successfully.' 
        })
      };
      
      if (mockResponse.ok) {
        const responseData = await mockResponse.json();
        setStatus({ 
          type: 'success', 
          message: responseData.message 
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          contactMethod: 'email'
        });
        setErrors({});
      }
      
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again later.' 
      });
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <h2>Contact Us</h2>
        
        {status.message && (
          <div className={`status ${status.type}`}>
            {status.message}
          </div>
        )}
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              disabled={status.type === 'loading'}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              disabled={status.type === 'loading'}
              placeholder="your.email@example.com"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={status.type === 'loading'}
            placeholder="What is this regarding?"
          />
        </div>
        
        <div className="form-group">
          <label>Preferred Contact Method</label>
          <div className="radio-group">
            <label className="custom-radio">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === 'email'}
                onChange={handleChange}
                disabled={status.type === 'loading'}
              />
              <span className="checkmark"></span>
              Email
            </label>
            <label className="custom-radio">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === 'phone'}
                onChange={handleChange}
                disabled={status.type === 'loading'}
              />
              <span className="checkmark"></span>
              Phone
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={errors.message ? 'error' : ''}
            disabled={status.type === 'loading'}
            placeholder="Please type your message here..."
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        
        <button 
          type="submit" 
          disabled={status.type === 'loading'}
          className="submit-button"
          aria-label={status.type === 'loading' ? 'Sending message' : 'Send message'}
        >
          {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        
        <p className="form-note">* Required fields</p>
      </form>
    </div>
  );
}

export default CompleteForm;