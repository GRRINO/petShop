import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Bounce, ToastContainer } from 'react-toastify'

const Main = () => {
  return (
    <section>
      <ToastContainer position= "bottom-right"
        autoClose= {5000}
        hideProgressBar= {false}
        closeOnClick= {false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme= "light"
        transition= {Bounce}/>
        <Header/>
        <Outlet/>
        <Footer/>
    </section>
  )
}

export default Main