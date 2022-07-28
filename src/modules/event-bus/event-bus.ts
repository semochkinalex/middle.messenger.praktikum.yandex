type TCallback = (...args: Array<any>) => void;

export default class EventBus {
    listeners: { [key: string]:  TCallback[] };  
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
          listener => listener !== callback
        );
     }


    emit(event: string, ...args: Array<any>) {
      if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
      }

      this.listeners[event].forEach((callback) => {
        callback(...args);
      })
    }
}
