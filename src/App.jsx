import {RouterProvider} from "react-router-dom";
import {router} from "./router.jsx";
import './css/main.css'

function App() {
  return (
      <RouterProvider router={router}  basename="/m8_fcc_front_projects/" />
  )
}

export default App
