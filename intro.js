function getSurface(shape) {
    if ('height' in shape) {
        return shape.width * shape.height;
    }
    else {
        return shape.width * 2;
    }
}
function toNumber(value) {
    return typeof (value) === 'string' ? Number(value) : value;
}
