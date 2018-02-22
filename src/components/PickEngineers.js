import React from 'react';

const PickEngineers = ({ selectTodaysEngineers }) => {
  return (
    <div
    onClick={() => selectTodaysEngineers()}
    className=" justify-center f4 pv3 pa3 bg-black-30 tc pointer br0 ttu b">
Spin Wheel    </div>
  )
};

export default PickEngineers;
