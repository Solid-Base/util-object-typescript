import isFunction from './is/isFunction';
import isObject from './is/isObject';
import isWeb from './is/isWeb';
function isObjectClonable(data) {
    const isArray = Array.isArray(data);
    return !(isWeb && (data instanceof Blob || data instanceof FileList)) && (isArray || isObject(data));
}
export default function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    if (data instanceof Date) {
        copy = new Date(data);
        return copy;
    }
    if (data instanceof Set) {
        copy = new Set(data);
        return copy;
    }
    if (isObjectClonable(data)) {
        copy = isArray ? [] : {};
        for (const key in data) {
            if (isFunction(data[key])) {
                copy = data;
                break;
            }
            copy[key] = cloneObject(data[key]);
        }
        return copy;
    }
    return data;
}
//# sourceMappingURL=cloneObject.js.map