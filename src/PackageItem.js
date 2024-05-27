import React, { useState } from 'react';

const PackageItem = ({ index, pkg, updatePackage, deletePackage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(pkg.name);
  const [description, setDescription] = useState(pkg.description);

  const handleUpdate = () => {
    updatePackage(pkg.id, { name, description }); // Assuming pkg.id is available
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{pkg.name}</h3>
          <p>{pkg.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deletePackage(pkg.id)}>Delete</button> {/* Pass package id to deletePackage */}
        </div>
      )}
    </div>
  );
};

export default PackageItem;
