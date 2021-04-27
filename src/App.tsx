import {Header} from './components/Header'

import s from './style.module.scss'
import {About} from './components/About'
import {Navbar} from './components/Navbar'
import {Feedback} from './components/Feedback'

const App = () => {
  return (
      <div className={s.root}>
        <Header />
        <About />
        <Navbar />
        <Feedback />
      </div>
  )
}

export default App;
