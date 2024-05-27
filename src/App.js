import React, { useState } from 'react';
import PackageForm from './PackageForm';
import PackageList from './PackageList';

function App() {
  const [packages, setPackages] = useState([]);

  const addPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  const updatePackage = (id, updatedData) => {
    setPackages(packages.map(pkg => pkg.id === id ? {...pkg, ...updatedData} :pkg));
  };

  const deletePackage = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  return (
    <div className="App">
      <PackageForm addPackage={addPackage} />
      <PackageList 
        packages={packages} 
        updatePackage={updatePackage} 
        deletePackage={deletePackage}
      />
    </div>
  );
}

export default App;
