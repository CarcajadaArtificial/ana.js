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
  /**
   *
   */
  relations: string[] = []

  /**
   *
   * @param value
   * @param name
   */
  constructor(public value: any, public name: string) {}

  /**
   * @deprecated
   */
  get: Function = (): any => this.value

  /**
   *
   * @param newValue
   */
  update: Function = (newValue: any): void => {
    this.value = newValue
    // Emits
    this.relations.forEach((relation) =>
      window.ana.reactives[relation].observable.emit()
    )
  }

  /**
   *
   * @param reactiveId
   * @returns
   */
  relate: Function = (reactiveId: string): any => {
    if (reactiveId === '') {
      throw new Error()
    } else if (this.relations.includes(reactiveId)) {
      // throw new Error()
    } else {
      this.relations.push(reactiveId)
    }
    return this.value
  }
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
