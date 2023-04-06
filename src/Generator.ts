import validFormatters from './data/formatters.json'
import { Gender } from './enums'
import { randomElement } from './functions'

type formatter = keyof typeof validFormatters

export default class Generator
{
    private generateText(f: formatter): string {
        const valid: boolean = Object.keys(validFormatters).includes(f)

        if(!valid) {
            throw new Error(`${f} is not a valid formatter`)
        }

        const index: number = Math.floor(Math.random() * validFormatters[f].length)

        return validFormatters[f][index] as string
    }

    public FirstName(gender?: Gender): string {
        gender = gender || randomElement(Gender)
        
        let name: String = new String

        name = name.concat(gender == Gender.Male ? this.generateText('firstNameMale') : this.generateText('firstNameFemale'))

        return name.toString()
    }

    public LastName(): string {
        return this.generateText('lastName')
    }

    public Title(gender?: Gender): string {
        gender = gender || randomElement(Gender)

        let title: String = new String

        title = title.concat(gender == Gender.Male ? this.generateText('titleMale') : this.generateText('titleMale'))

        return title.toString()
    }

    public Suffix(gender?: Gender): string {
        gender = gender || randomElement(Gender)

        let suffix: String = new String
        
        suffix = suffix.concat(gender == Gender.Male? this.generateText('suffixMale') : this.generateText('suffixFemale'))

        return suffix.toString()
    }

    public FullName(gender?: Gender, title?: boolean, suffix?: boolean): string {
        gender = gender || randomElement(Gender)

        let name: String = new String

        if (title) {
            name = name.concat(this.Title(gender))
            name = name.concat(' ')
        }

        name = name.concat(this.FirstName(gender))
        name = name.concat(' ' + this.LastName())

        if (suffix) {
            name = name.concat(', ' + this.Suffix(gender))
        }

        return name.toString()
    }
}
