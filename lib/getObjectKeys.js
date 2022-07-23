export default function getObjectKey(obj, path) {
    const keys = path.toString().split('.');
    let result = obj;
    for (const key of keys) {
        const keyResult = result[key];
        result = keyResult;
    }
    return result;
}
//# sourceMappingURL=getObjectKeys.js.map