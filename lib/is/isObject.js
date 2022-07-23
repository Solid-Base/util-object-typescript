import isDateObject from './isDateObject';
import isNullOrUndefined from './isNullOrUndefined';
export const isObjectType = (value) => typeof value === 'object';
// eslint-disable-next-line import/no-anonymous-default-export
export default (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
//# sourceMappingURL=isObject.js.map