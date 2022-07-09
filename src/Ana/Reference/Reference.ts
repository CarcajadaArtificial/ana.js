//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 */
export class Reference {
  constructor(public value: any, public name: string) {}
  get: Function = (): any => this.value
  map: Function = (cb: Function) => this.value.map(cb)
}
