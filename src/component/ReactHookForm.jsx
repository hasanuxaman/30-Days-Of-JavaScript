import React from 'react';
import { useForm } from 'react-hook-form';

function HookForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm();
  
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      console.log('Form Data:', data);
      
    //   // API call
    //   const response = await fetch('/api/users', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   });
      
      if (true) {
        alert('User created successfully!');
        reset();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook-form">
      <div className="form-group">
        <label>Full Name</label>
        <input
          {...register("fullName", { 
            required: "Full name is required",
            minLength: { value: 2, message: "Minimum 2 characters" }
          })}
          type="text"
        />
        {errors.fullName && (
          <span className="error">{errors.fullName.message}</span>
        )}
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          type="email"
        />
        {errors.email && (
          <span className="error">{errors.email.message}</span>
        )}
      </div>
      
      <div className="form-group">
        <label>Phone Number</label>
        <input
          {...register("phone", {
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits"
            }
          })}
          type="tel"
        />
        {errors.phone && (
          <span className="error">{errors.phone.message}</span>
        )}
      </div>
      
      <div className="form-group">
        <label>Country</label>
        <select {...register("country", { required: "Country is required" })}>
          <option value="">Select...</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="AU">Australia</option>
        </select>
        {errors.country && (
          <span className="error">{errors.country.message}</span>
        )}
      </div>
      
      <div className="form-group">
        <label>Subscribe to newsletter</label>
        <input
          {...register("newsletter")}
          type="checkbox"
        />
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
export default HookForm;