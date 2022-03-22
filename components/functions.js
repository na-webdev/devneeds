export function invertColor(hex) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  // if (hex.length !== 6) {
  //   throw new Error("Invalid HEX color.");
  // }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

export function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

export const rgbaToHex = (color) => {
  if (/^rgb/.test(color)) {
    const rgba = color.replace(/^rgba?\(|\s+|\)$/g, "").split(",");

    // rgb to hex
    // eslint-disable-next-line no-bitwise
    let hex = `#${(
      (1 << 24) +
      (parseInt(rgba[0], 10) << 16) +
      (parseInt(rgba[1], 10) << 8) +
      parseInt(rgba[2], 10)
    )
      .toString(16)
      .slice(1)}`;

    // added alpha param if exists
    if (rgba[4]) {
      const alpha = Math.round(0o1 * 255);
      const hexAlpha = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
      hex += hexAlpha;
    }

    return hex;
  }
  return color;
};
