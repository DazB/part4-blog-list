const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

const singleAuthorBlogs = {
  author: 'Edsger W. Dijkstra',
  blogs: 1
}

const singleAuthorLikes = {
  author: 'Edsger W. Dijkstra',
  likes: 5
}


const listWithManyBlogs = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: 'fdsf',
    title: 'bum',
    author: 'bum',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 100,
    __v: 0
  },
  {
    _id: 'HELLO',
    title: 'bum',
    author: 'bum',
    url: 'fjdlksfjdlskfjdslkjfl',
    likes: 10,
    __v: 0
  },
  {
    _id: 'dsada',
    title: 'fdsfsdf',
    author: 'bufdsfsdfm',
    url: 'hfdsfdsfl',
    likes: 5,
    __v: 0
  }
]

const theFavouriteBlog = {
  _id: 'fdsf',
  title: 'bum',
  author: 'bum',
  url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
  likes: 100,
  __v: 0
}

const theMostAuthorBlogs = {
  author: 'bum',
  blogs: 2
}

const theMostAuthorLikes = {
  author: 'bum',
  likes: 110
}

describe('total likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(5)
  })

  test('when list has many blogs, equals combined likes', () => {
    expect(listHelper.totalLikes(listWithManyBlogs)).toBe(120)
  })

  test('when list has no blogs, equals 0', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })
})

describe('favourite blog', () => {
  test('when list has only one blog, equals that blog', () => {
    expect(listHelper.favouriteBlog(listWithOneBlog)).toEqual(listWithOneBlog[0])
  })

  test('when list has many blogs, equals blog with most likes', () => {
    expect(listHelper.favouriteBlog(listWithManyBlogs)).toEqual(theFavouriteBlog)
  })

  test('when list has no blogs, equals empty object', () => {
    expect(listHelper.favouriteBlog([])).toEqual({})
  })
})

describe('most blogs', () => {
  test('when list has only one blog, equals that author with 1 blog', () => {
    expect(listHelper.mostBlogs(listWithOneBlog)).toEqual(singleAuthorBlogs)
  })

  test('when list has many blogs, equals author with most blogs', () => {
    expect(listHelper.mostBlogs(listWithManyBlogs)).toEqual(theMostAuthorBlogs)
  })

  test('when list has no blogs, equals empty object', () => {
    expect(listHelper.mostBlogs([])).toEqual({})
  })
})

describe('most likes', () => {
  test('when list has only one blog, equals that authors likes', () => {
    expect(listHelper.mostLikes(listWithOneBlog)).toEqual(singleAuthorLikes)
  })

  test('when list has many blogs, equals author with most blogs', () => {
    expect(listHelper.mostLikes(listWithManyBlogs)).toEqual(theMostAuthorLikes)
  })

  test('when list has no blogs, equals empty object', () => {
    expect(listHelper.mostLikes([])).toEqual({})
  })
})