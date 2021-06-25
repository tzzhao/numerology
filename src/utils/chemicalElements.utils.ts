import {ChemicalElement, chemicalElements} from '../resources/chemicalElements';

export class ChemicalElementsUtils {
    public static getChemicalElement(number: number): ChemicalElement | undefined {
        if (number  < 1) return undefined; 
        const element = chemicalElements[number - 1];
        return !!element ? element : undefined;
    }
}
