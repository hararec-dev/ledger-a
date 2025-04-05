export const handleError = (callback: Function, error: Error | unknown, ...args: any[]) => {
    callback(...args, error);
};
