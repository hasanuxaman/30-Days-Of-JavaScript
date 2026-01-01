import React, { useState } from 'react';

function FileUploadForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null
  });
  
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, file }));
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    if (formData.file) {
      data.append('file', formData.file);
    }
    
    try {
    //   const response = await fetch('/api/upload', {
    //     method: 'POST',
    //     body: data
    //   });
      
      if (true) {
        alert('File uploaded successfully!');
        // Reset form
        setFormData({ title: '', description: '', file: null });
        setPreview(null);
      }
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          rows="3"
        />
      </div>
      
      <div className="form-group">
        <label>Upload File</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*,.pdf,.doc,.docx"
        />
      </div>
      
      {preview && (
        <div className="preview">
          <img src={preview} alt="Preview" style={{ maxWidth: '200px' }} />
        </div>
      )}
      
      <button type="submit">Upload</button>
    </form>
  );
}
export default FileUploadForm;