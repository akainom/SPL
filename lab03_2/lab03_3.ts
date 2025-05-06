class cCache<T> {
    private cache: Map<string, { value: T, expires: number }>;

    constructor() {
        this.cache = new Map();
    }
    add(key: string, value: T, ttl: number): void {
        const expires = Date.now() + ttl;
        this.cache.set(key, { value, expires });
    }

    get(key: string): T | null {
        const item = this.cache.get(key);
        if (!item) return null;

        if (Date.now() > item.expires) {
            this.cache.delete(key);
            return null;
        }

        return item.value;
    }

    // Очищает просроченные элементы
    clearExpired(): void {
        const now = Date.now();
        for (const [key, item] of this.cache.entries()) {
            if (now > item.expires) {
                this.cache.delete(key);
            }
        }
    }
}

const cache = new cCache<number>();

cache.add('foo', 42, 1000); // Добавляем значение 42 с временем жизни 1 секунда

setTimeout(() => {
    console.log(cache.get('foo')); // 42
}, 500);

setTimeout(() => {
    console.log(cache.get('foo')); // null, так как время истекло
}, 1500);

cache.clearExpired(); // Очистка просроченных элементов