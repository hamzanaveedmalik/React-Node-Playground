import React from 'react';

const PickEngineers = ({ selectTodaysEngineers }) => {
  return (
    <div
    onClick={() => selectTodaysEngineers()}
    className=" f4 pv3 pa3 bg-black-30 tc pointer br0 ttu b">
      Pick Engineers
    </div>
  )
};

export default PickEngineers;
