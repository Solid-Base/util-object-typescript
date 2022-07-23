import { Primitive } from '../types/primitive';
import isNullOrUndefined from './isNullOrUndefined';
import { isObjectType } from './isObject';

// eslint-disable-next-line import/no-anonymous-default-export
export default (value: unknown): value is Primitive => isNullOrUndefined(value) || !isObjectType(value);
