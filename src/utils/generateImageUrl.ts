function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dwhvhki0j/image/upload/${option}/${format}/${filename}.${format}`
}

export default generateImageUrl
