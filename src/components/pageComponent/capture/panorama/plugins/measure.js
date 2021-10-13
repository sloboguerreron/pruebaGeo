// distance between coordinates
export function medirfotografias(coord1,coord2) {  
  let dist=Math.sqrt(Math.pow(coord2[0]-coord1[0], 2)+Math.pow(coord2[1]-coord1[1], 2)).toFixed(3)
  return `${dist} metros`
}