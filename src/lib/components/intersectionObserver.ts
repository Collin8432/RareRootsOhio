const observers = new Map();

export function createObserver(
	callback: IntersectionObserverCallback,
	options = { threshold: 0.3 }
): IntersectionObserver {
	const key = JSON.stringify(options);
	if (!observers.has(key)) {
		observers.set(key, new IntersectionObserver(callback, options));
	}
	return observers.get(key);
}
