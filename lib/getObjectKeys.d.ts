declare type DTO = Record<string, any>;
declare type LiteralType = string | number | boolean | bigint;
declare type GetDirtyDTOKeys<O extends DTO> = {
    [K in keyof O]-?: NonNullable<O[K]> extends Array<infer A> ? NonNullable<A> extends LiteralType ? K : Extract<K, string> | (K extends string ? GetDirtyDTOKeys<NonNullable<A>> extends infer NK ? NK extends string ? `${K}.${NK}` : never : never : K) : NonNullable<O[K]> extends LiteralType ? K : Extract<K, string> | (K extends string ? GetDirtyDTOKeys<NonNullable<O[K]>> extends infer NK ? NK extends string ? `${K}.${NK}` : never : never : never);
}[keyof O];
declare type AllDTOKeys = string | number | symbol;
declare type TrashDTOKeys = `${string}.undefined` | number | symbol;
declare type ExcludeTrashDTOKeys<O extends AllDTOKeys> = O extends TrashDTOKeys ? never : O;
export declare type GetDTOKeys<O extends DTO> = ExcludeTrashDTOKeys<GetDirtyDTOKeys<O>>;
export default function getObjectKey<T extends object, P extends GetDTOKeys<T>>(obj: T, path: P): object | LiteralType;
export {};
//# sourceMappingURL=getObjectKeys.d.ts.map