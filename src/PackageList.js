import React from 'react';
import PackageItem from './PackageItem';

const PackageList = ({ packages, updatePackage, deletePackage }) => {
  return (
    <div>
      {packages.map((pkg, index) => (
        <PackageItem
          key={pkg.id}
          index={index}
          pkg={pkg}
          updatePackage={updatePackage}
          deletePackage={deletePackage}
        />
      ))}
    </div>
  );
};

export default PackageList;
