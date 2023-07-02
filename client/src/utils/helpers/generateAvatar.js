import { TinyColor } from '@ctrl/tinycolor';

const getCorrectIndex = number => {
    return number > 255 ? 255 : number < 0 ? 0 : number;
};

export default hash => {
    const [r, g, b] = hash
        .substr(0, 3)
        .split('')
        .map(char => getCorrectIndex(char.charCodeAt(0)));
    return {
        color: new TinyColor({ r, g, b }).toHexString(),
        colorLight: new TinyColor({ r, g, b }).lighten(40).toHexString()
    };
}; 