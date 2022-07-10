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
}

/**
 *
 */
export class ReferenceFunction {
  argNames: string[]
  constructor(public f: Function, ...args: Reference[]) {
    this.argNames = args.map((arg) => arg.name)
  }
  run: Function = () =>
    this.f(...this.argNames.map((name: string) => window.ana.state[name]))
}
