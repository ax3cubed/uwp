import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./src/css/tailwind.config.js')
}
export const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}

export const categorize =(string)  =>{
  if (string.toLowerCase().includes("pickup")) {
    return "pickup";
  }
  if (string.toLowerCase().includes("intermediary")) {
    return "intermediary";
  } else {
    return "delivery";
  }
}
export const areEqual = (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
};

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

