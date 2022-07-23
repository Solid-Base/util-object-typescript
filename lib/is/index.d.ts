declare const is: {
    isDateObject: (value: unknown) => value is Date;
    isFunction: (value: unknown) => value is () => void;
    isNullOrUndefined: (value: unknown) => value is null | undefined;
    isObject: <T extends object>(value: unknown) => value is T;
    isObjectType: (value: unknown) => boolean;
    isPrimitive: (value: unknown) => value is import("../types/primitive").Primitive;
    isRegex: (value: unknown) => value is RegExp;
    isString: (value: unknown) => value is string;
    isUndefined: (val: unknown) => val is undefined;
    isWeb: boolean;
};
export default is;
//# sourceMappingURL=index.d.ts.map