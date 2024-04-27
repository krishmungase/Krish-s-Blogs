import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext, useEffect } from "react"
import { AppContext } from "./components/Context/AppContext"
function App() {

  const { fetchBlogPost } = useContext(AppContext)

  useEffect(() => {
    fetchBlogPost();
  }, [])

  return (
    <div className="min-w-screen min-h-screen">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App
