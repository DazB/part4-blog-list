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

const favouriteBlog = (blogs) => {
  const favouriteReducer = (currentMax, blogs) => {
    return currentMax.likes > blogs.likes
      ? currentMax
      : blogs
  }
  blogs.reduce(favouriteReducer, 0)
  return blogs.length === 0
    ? {}
    : blogs.reduce(favouriteReducer, 0)
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}