// src/App.js
import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
import Post from './components/Posts/Post'
import {UserProvider} from './contexts/UserContext'

const App = () => {
  const [posts, setPosts] = useState([
    {
      author: 'John Doe',
      title: 'Effects of Water Pollution',
      content:
        'Water pollution is a critical environmental issue that affects ecosystems, human health, and economies worldwide. It occurs when harmful substances, including chemicals, waste, and microorganisms, contaminate water bodies such as rivers, lakes, oceans, and groundwater. Major sources of water pollution include industrial discharge, agricultural runoff, untreated sewage, marine dumping, and oil spills. Factories often release toxic substances directly into water bodies, while agriculture contributes pesticides, fertilizers, and animal waste that run off fields into nearby streams and rivers. Untreated sewage introduces pathogens and harmful chemicals into water bodies, posing health risks to humans and wildlife. Marine dumping of plastic and other materials, along with oil spills, devastates marine ecosystems and harms aquatic life.',
    },
    {
      author: 'Jane Smith',
      title: 'About Data Science',
      content:
        'Data science is a rapidly growing field that combines statistics, computer science, and domain expertise to extract insights and knowledge from data. This multidisciplinary approach involves collecting, processing, and analyzing large datasets to identify patterns, make predictions, and inform decision-making. At the core of data science are techniques like machine learning, data mining, and statistical analysis, which help in uncovering hidden trends and correlations in data. With the rise of big data and advancements in technology, data science has become essential in various industries, from healthcare and finance to marketing and transportation. By leveraging data science, organizations can optimize operations, enhance customer experiences, and drive innovation.',
    },
  ])

  const addPost = newPost => {
    setPosts([...posts, newPost])
  }

  const editPost = (index, updatedPost) => {
    const newPosts = [...posts]
    newPosts[index] = updatedPost
    setPosts(newPosts)
  }

  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home posts={posts} />} />
          <Route path="/post" element={<Post addPost={addPost} />} />
          <Route
            path="/post/:index"
            element={<Post addPost={editPost} posts={posts} />}
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
