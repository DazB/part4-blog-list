const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
  },
  {
    title: 'bum',
    author: 'bum',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 100,
  },
  {
    title: 'bum2',
    author: 'bum',
    url: 'fjdlksfjdlskfjdslkjfl',
    likes: 10,
  },
  {
    title: 'fdsfsdf',
    author: 'bufdsfsdfm',
    url: 'hfdsfdsfl',
    likes: 5,
  }
]

const testUser = {
  username: 'daz',
  name: 'daz b',
  password: 'bum',
  token: ''
}

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs, testUser, nonExistingId, blogsInDb, usersInDb
}