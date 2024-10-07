// src/myobject/Banana.ts
export class Apple {
  type: string;

  constructor() {
    this.type = 'Apple';
  }

  getInfo(): string {
    return `This is a ${this.type}.`;
  }
}
