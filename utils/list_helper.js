const countBy = require('lodash/countBy')

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

const mostBlogs = (blogs) => {
  // countBy returns number of times the key was returned by iteratee, in
  // this case, the author. Returns object.
  const authorApprearCount = countBy(blogs.map((blog) => blog.author))
  // Turn object into array of array with [["author", "authorCount"]....],
  // and reduce that array
  return Object.entries(authorApprearCount).reduce((currentMost, authorCount) => {
    return currentMost.blogs > authorCount[1]
      ? currentMost
      : { author: authorCount[0], blogs: authorCount[1] }
  }, {})
}

const mostLikes = (blogs) => {
  // Reduces to array of authors and their number of likes
  const authorLikes = blogs.reduce((totalLikes, blog) => {
    if (blog.author in totalLikes) {
      totalLikes[blog.author] += blog.likes
    }
    else {
      totalLikes[blog.author] = blog.likes
    }
    return totalLikes
  }, {})

  return Object.entries(authorLikes).reduce((currentMost, authorLikes) => {
    return currentMost.likes > authorLikes[1]
      ? currentMost
      : { author: authorLikes[0], likes: authorLikes[1] }
  }, {})}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}