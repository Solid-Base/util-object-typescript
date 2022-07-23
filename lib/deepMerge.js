import isObject from './is/isObject';
import isPrimitive from './is/isPrimitive';
export default function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) || (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) {
            continue;
        }
    }
    return target;
}
//# sourceMappingURL=deepMerge.js.map