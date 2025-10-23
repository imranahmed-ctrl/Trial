import React, { useState } from 'react';
import { useMutation } from '../../hooks/useApi';
import { ENDPOINTS } from '../../services/endpoints';

const ResourceForm = ({ onSuccess }) => {
  const { mutate: createResource, loading, error } = useMutation();
  const [resource, setResource] = useState({
    title: '',
    type: 'article',
    url: '',
    description: '',
    category: 'Programming'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createResource(ENDPOINTS.MODULES.ADD_RESOURCE(1), resource); // moduleId would be dynamic
      setResource({ title: '', type: 'article', url: '', description: '', category: 'Programming' });
      onSuccess && onSuccess();
    } catch (error) {
      console.error('Failed to create resource:', error);
    }
  };

  return (
    <div className="resource-form">
      <h3>Add New Resource</h3>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={resource.title}
            onChange={(e) => setResource({...resource, title: e.target.value})}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Type:</label>
          <select 
            value={resource.type}
            onChange={(e) => setResource({...resource, type: e.target.value})}
            disabled={loading}
          >
            <option value="article">Article</option>
            <option value="video">Video</option>
            <option value="tutorial">Tutorial</option>
            <option value="documentation">Documentation</option>
          </select>
        </div>

        <div className="form-group">
          <label>URL:</label>
          <input
            type="url"
            value={resource.url}
            onChange={(e) => setResource({...resource, url: e.target.value})}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select 
            value={resource.category}
            onChange={(e) => setResource({...resource, category: e.target.value})}
            disabled={loading}
          >
            <option value="Programming">Programming</option>
            <option value="Frontend">Frontend Development</option>
            <option value="Backend">Backend Development</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={resource.description}
            onChange={(e) => setResource({...resource, description: e.target.value})}
            rows="4"
            required
            disabled={loading}
          />
        </div>

        <button 
          type="submit" 
          className="btn-primary"
          disabled={loading}
        >
          {loading ? 'Adding Resource...' : 'Add Resource'}
        </button>
      </form>
    </div>
  );
};

export default ResourceForm;