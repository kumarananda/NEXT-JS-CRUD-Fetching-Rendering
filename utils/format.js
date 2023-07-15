export function nFormatter(num, digits=2) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }

  export const minToHm = (m) => {
    let h = Math.floor(m / 60);
    h += (h < 0) ? 1 : 0;
    let m2 = Math.abs(m % 60);
    m2 = (m2 < 10) ? '0' + m2 : m2;
    return (h < 0 ? '' : '+') + h + ':' + m2;
  }