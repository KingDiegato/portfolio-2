const getRandomInt = (arr) => {
  return Math.floor(Math.random() * arr.length)
}

export const handleLoad = (arr) => {
  return arr[getRandomInt(arr)]
}

export const srcs = [
  'https://res.cloudinary.com/diegato/image/upload/portfolio/personal/Escopeta-png_c2od5t.png',
  'https://res.cloudinary.com/diegato/image/upload/portfolio/personal/king_at_phone_left_fqe9fj.png',
  'https://res.cloudinary.com/diegato/image/upload/portfolio/personal/Blink_king_ehe.png',
  'https://res.cloudinary.com/diegato/image/upload/portfolio/personal/Sweter_wnsgjs.png',
  'https://res.cloudinary.com/diegato/image/upload/portfolio/personal/Ups_svfcx6.png',
  'https://res.cloudinary.com/diegato/image/upload/portfolio/personal/world_best_me_i8sjso.png'
]
