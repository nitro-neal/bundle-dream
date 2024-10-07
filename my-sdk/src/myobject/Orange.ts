// src/myobject/Orange.ts
export class Orange {
  type: string;

  constructor() {
    this.type = 'Orange';
  }

  getInfo(): string {
    return `This is an ${this.type}.`;
  }
}
