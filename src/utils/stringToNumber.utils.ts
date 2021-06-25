import {StringToNumberModels} from '../interfaces/stringToNumber.interfaces'


const A_ASCII_CODE = 65;
const Z_ASCII_CODE = 90;

export class StringToNumberUtils {
    public static getModels(argValue: string): StringToNumberModels {
        const value = argValue.toLowerCase();
        let total = 0;
        const models = value.split(' ').map((word) => {
            const number = this.stringToNumber(word);
            total += number;
            return {label: word, number};
        }).filter((model) => model.number > 0);
        return {
            total,
            models,
            word: value
        }
    }

    public static stringToNumber(value: string): number {
        let number: number = 0; 
    
        const upperCase = value.toUpperCase();
        for (let charIndex = 0; charIndex < upperCase.length; charIndex++) {
            const charCode = upperCase.charCodeAt(charIndex);
            if (charCode >= A_ASCII_CODE && charCode <= Z_ASCII_CODE) {
                number += charCode - A_ASCII_CODE + 1;
            }
        }
        
        return number;
    }
}
