import { isEqual } from 'lodash';

const compareTwoObject = (object1 = {}, object2 = {}) => {
  return isEqual(object1, object2);
};

const isEmptyObject = object => {
  !object ||
    (Object.keys(object).length === 0 && object.constructor === Object);
};

export default {
  compareTwoObject,
  isEmptyObject,
};
