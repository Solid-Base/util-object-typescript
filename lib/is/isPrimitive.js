import isNullOrUndefined from './isNullOrUndefined';
import { isObjectType } from './isObject';
// eslint-disable-next-line import/no-anonymous-default-export
export default (value) => isNullOrUndefined(value) || !isObjectType(value);
//# sourceMappingURL=isPrimitive.js.map