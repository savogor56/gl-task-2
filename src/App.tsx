import {Header} from './components/Header'

import s from './style.module.scss'
import {About} from './components/About'
import {Navbar} from './components/Navbar'

const App = () => {
  return (
      <div className={s.root}>
        <Header />
        <About />
        <Navbar />
      </div>
  )
}

export default App;
