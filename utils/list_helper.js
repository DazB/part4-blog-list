const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likesReducer = (sum, blogs) => {
    return sum + blogs.likes
  }
  return blogs.length === 0
    ? 0
    : blogs.reduce(likesReducer, 0)
}

module.exports = {
  dummy,
  totalLikes
}