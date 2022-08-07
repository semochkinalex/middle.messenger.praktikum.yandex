type TCallback = (...args: Array<unknown>) => void;

export default class EventBus {
  listeners: { [key: string]: TCallback[] };
  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: TCallback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: TCallback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, ...args: Array<unknown>) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((callback) => {
      callback(...args);
    });
  }
}
