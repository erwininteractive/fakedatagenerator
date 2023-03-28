import validFormatters from './data/formatters.json'
import { Gender } from './enums'

type formatter = keyof typeof validFormatters

export default class Generator
{
    public format(f: keyof typeof validFormatters): string {
        const formatter: formatter = f
        const valid: boolean = Object.keys(validFormatters).includes(f)

        if (!valid) {
            throw new Error(`${f} is not a valid formatter`)
        }

        return this.generateText(formatter)
    }

    private generateText(f: formatter): string {
        const index: number = Math.floor(Math.random() * validFormatters[f].length)

        return validFormatters[f][index] as string
    }

    public Name(gender?: Gender, title?: boolean, suffix?: boolean): string {
        let g: formatter = null

        if (typeof gender !== 'undefined') {
            g = gender == Gender.Male ? 'firstNameMale' : 'firstNameFemale'
        }

        return this.generateText(g)
    }
}
