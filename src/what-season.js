import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(springDate) {
  
    //console.log (Object.prototype.toString.call([2019, '27', 0 + '1']));
    //console.log (Object.prototype.toString.call(springDate));
    if (springDate !== undefined) {
      if (Object.prototype.toString.call(springDate) === "[object Date]" && isNaN(Date.parse(springDate)) === false) {
        if (springDate.getMonth() === 11 || springDate.getMonth() === 0 || springDate.getMonth() === 1) return 'winter';
      if (springDate.getMonth() === 2 || springDate.getMonth() === 3 || springDate.getMonth() === 4) return 'spring';
      if (springDate.getMonth() === 5 || springDate.getMonth() === 6 || springDate.getMonth() === 7) return 'summer';
      if (springDate.getMonth() === 8 || springDate.getMonth() === 9 || springDate.getMonth() === 10) return 'autumn';
      } else {return 'Invalid date!'};
    } else {return 'Unable to determine the time of year!'};
    

    
    
  }
    

//console.log(fakeDate);
//console.log(getSeason(20192701));

/* getSeason('foo'),
                () => getSeason({ John: 'Smith' }),
                () => getSeason(20192701), 
                new Date(1661, 4, 25, 6, 22, 21, 37)
                Date.prototype.getMonth.call(new Date())
                */