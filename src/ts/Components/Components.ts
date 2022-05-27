import { iAnaConfiguration } from "../Ana/Ana.interface";
import { RenderDictionary } from "../types";

export class AnaComponent {
  constructor(
    public a: RenderDictionary,
    public config: iAnaConfiguration,
    public classRoot: string
  ) {}
}

export function getAtoms(configuration: iAnaConfiguration) {

}