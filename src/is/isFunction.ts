// eslint-disable-next-line import/no-anonymous-default-export
export default (value: unknown): value is () => void => typeof value === 'function';
