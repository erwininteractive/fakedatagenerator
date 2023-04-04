export function randomElement<T>(element: T): T[keyof T] {
    const values = Object.keys(element)
        .map(n => Number.parseInt(n))
        .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]

    const index = Math.floor(Math.random() * values.length)

    return values[index]
}
