
interface Square {
    width: number
}

interface Rectangle extends Square {
    height: number
}

type Shape = Square | Rectangle

function getSurface(shape:Shape): number {
    if('height' in shape) {
        return shape.width * shape.height
    } else {
        return shape.width * 2
    }
}

function toNumber(value:number | string): number {
    return typeof(value) === 'string' ? Number(value) : value
}