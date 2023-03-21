import Generator from './Generator'

export class Factory
{
    constructor() {}

    protected static defaultProviders = ['Address', 'Person']

    public static create(): Generator {

        const generator = new Generator()

        this.defaultProviders.forEach((provider) => {
            // TODO: get provider methods
        })

        return generator
    }


}
