declare var global: typeof globalThis & {
    crypto?: {
        getRandomValues?(array: Uint8Array): void;
    };
    performance?: {
        now: () => number;
    };
};
