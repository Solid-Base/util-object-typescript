export default function omitKeys(source, key) {
    const copy = { ...source };
    delete copy[key];
    return copy;
}
//# sourceMappingURL=omitKeys.js.map