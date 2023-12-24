export function arbolitoName(name: string): Array<string> {
    const emoji = "⭐"
    const arbolArray: string[] = [emoji]
    // let cadena = `   ${emoji}\n    `
    // const espacio = "   "
    // for (let i = 0; i < name.length; i++) {
    //     if (i === 0) {
    //         cadena += `${name[i]}\n`
    //         cadena += " "
    //     } else {
    //         cadena += `${espacio}${name.substring(0, i + 1)}\n`
    //         cadena += " "
    //     }
    // }
    for (let i = 0; i < name.length; i++) {
        let result = name.substring(0 , i + 1)
        arbolArray.push(result)
    }
    return arbolArray
}