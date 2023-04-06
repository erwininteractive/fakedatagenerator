export function randomElement(e: any) {
    const values = Object.keys(e);
    const key = values[Math.floor(Math.random() * values.length)]

    return e[key]
}
