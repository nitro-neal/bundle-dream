// src/myobject/Banana.ts
export class Banana {
  type: string;

  constructor() {
    this.type = 'Banana';
  }

  getInfo(): string {
    return `This is a ${this.type}.`;
  }
}
