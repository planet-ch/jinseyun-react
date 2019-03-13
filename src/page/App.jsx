import React from 'react'
import Footer from './../components/todoDemo/Footer'
import AddTodo from './../components/containers/AddTodo'
import VisibleTodoList from './../components/containers/VisibleTodoList'
import MyColorPage from './../components/containers/myColor'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <MyColorPage />
  </div>
)

export default App