

import React, { useState } from 'react';

function MultiStepForm() {


    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        personal: { firstName: '', lastName: '', age: '' },
        contact: { email: '', phone: '' },
        address: { street: '', city: '', zip: '' }
    });
    const handleChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async () => {
        const finalData = {
            ...formData.personal,
            ...formData.contact,
            ...formData.address
        };
    };
    try {
        await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalData)
          });
          alert('Form submitted successfully!');
        }
        catch(error){
            console.error('Error:', error);
        }
  
    return (
        <div className="multi-step-form">
      <div className="steps">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Personal</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Contact</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Address</div>
      </div>
      
      <form onSubmit={(e) => { e.preventDefault(); step === 3 ? handleSubmit() : nextStep(); }}>
        {step === 1 && (
          <div className="form-step">
            <h3>Personal Information</h3>
            <input
              type="text"
              placeholder="First Name"
              value={formData.personal.firstName}
              onChange={(e) => handleChange('personal', 'firstName', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.personal.lastName}
              onChange={(e) => handleChange('personal', 'lastName', e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={formData.personal.age}
              onChange={(e) => handleChange('personal', 'age', e.target.value)}
              required
            />
          </div>
        )}
        
        {step === 2 && (
          <div className="form-step">
            <h3>Contact Information</h3>
            <input
              type="email"
              placeholder="Email"
              value={formData.contact.email}
              onChange={(e) => handleChange('contact', 'email', e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.contact.phone}
              onChange={(e) => handleChange('contact', 'phone', e.target.value)}
            />
          </div>
        )}
        
        {step === 3 && (
          <div className="form-step">
            <h3>Address Information</h3>
            <input
              type="text"
              placeholder="Street"
              value={formData.address.street}
              onChange={(e) => handleChange('address', 'street', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="City"
              value={formData.address.city}
              onChange={(e) => handleChange('address', 'city', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="ZIP Code"
              value={formData.address.zip}
              onChange={(e) => handleChange('address', 'zip', e.target.value)}
              required
            />
          </div>
        )}
        
        <div className="form-navigation">
          {step > 1 && (
            <button type="button" onClick={prevStep}>
              Previous
            </button>
          )}
          <button type="submit">
            {step === 3 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
    );


};
export default MultiStepForm;