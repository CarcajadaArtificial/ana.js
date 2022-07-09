//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
//   ____       __
//  |  _ \ ___ / _| ___ _ __ ___ _ __   ___ ___
//  | |_) / _ \ |_ / _ \ '__/ _ \ '_ \ / __/ _ \
//  |  _ <  __/  _|  __/ | |  __/ | | | (_|  __/
//  |_| \_\___|_|  \___|_|  \___|_| |_|\___\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export class Reference {
  constructor(public value: any, public name: string) {}
  get: Function = (): any => this.value
  map: Function = (cb: Function) =>
    new ReferenceFunction(this.name, () => this.value.map(cb))
}

/**
 *
 */
export class ReferenceFunction {
  constructor(public name: string, public f: Function) {}
}
