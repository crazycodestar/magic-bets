const round = (value: number, decimals: number): number => {
  const power = 10 ** decimals
  return Math.round(value * power) / power;
}

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { round, numberWithCommas };