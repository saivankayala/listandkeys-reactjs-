import UserProfile from './components/UserProfile/index'
import './App.css'
// code 
const userdetailsList = [
  {
    uniqueNo: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'sai',
    role: 'fullstack Developer',
  },
  {
    uniqueNo: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'sai',
    role: 'fullstack Developer',
  },
  {
    uniqueNo: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'sai',
    role: 'fullstack Developer',
  },
  {
    uniqueNo: 4,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'sai',
    role: 'fullstack Developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users Lists</h1>
    <ul>
      {userdetailsList.map(each => (
        <UserProfile userdetails={each} key={each.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
