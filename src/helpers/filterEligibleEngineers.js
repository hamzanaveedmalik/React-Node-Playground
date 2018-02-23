const filterEligibleEngineers = (allEngineers, shiftToday) => {
  const newShiftYesterday = shiftToday;
  //const shiftYesterday = shiftYesterday;

  let meetsCriteria;
  // if some engineers worked less than one shift, select from that pool
  if (allEngineers.some(eng => eng.shifts_worked < 1)) {
    meetsCriteria = (engineer) => {
      const rules = !newShiftYesterday.includes(engineer.name) && engineer.shifts_worked < 1;
      return rules;
    }
  }

// one engineer cannot work on consecutive days
  else if(allEngineers.some(eng => eng.shiftToday && eng.shifts_worked === 1) ){


    meetsCriteria = (engineer) => {
      const rules = !newShiftYesterday.filter(engineer.name) && engineer.shifts_worked === 1;
      return rules;
    }
     console.log('Consecutive days logged');
    // return allEngineers.map((engineer) =>{
    // //   return engineer;
    // });
  }


  // all engineers reached the 2 shift limit, reset the shifts_worked count
 else if (allEngineers.every(eng => eng.shifts_worked === 2)) {
   return allEngineers.map(engineer => {
     engineer.shifts_worked = 0;
     return engineer;
   });
 }


  else {
    meetsCriteria = (engineer) => {
      const rules = !newShiftYesterday.includes(engineer.name) && engineer.shifts_worked < 2;
      return rules;
    }
  }

  return allEngineers.filter(meetsCriteria);
};

export default filterEligibleEngineers;
