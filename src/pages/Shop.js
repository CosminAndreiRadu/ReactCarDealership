import { useNavigate } from 'react-router-dom';
import CarList from '../components/shopComponents/CarList';
import ReusableFooter from '../components/reusable/ReusableFooter.js';



const Shop = () => {
  const connectedUser = localStorage.getItem("currentUser")
  const userName = JSON.parse(localStorage.getItem(connectedUser))
  const navigate = useNavigate()

  const handleLogout = () => {
   localStorage.removeItem("loggedin")
   localStorage.removeItem("currentUser")
   navigate("/login")



  }

    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flexGrow: 1 }} >
        <div
        style={{
          display: 'flex-box',
          justifyContent: 'left',
          //alignItems: 'Center',
          paddingLeft: 50,
          paddingRight: 50,
          height: '20vh'
        }}>
          <div>
            <h1 style={{float: "left"}}>  Welcome {userName.firstName} {userName.lastName}</h1> 
            <button style={{marginTop: 40, float: "right"}} onClick={handleLogout} type="button" class="logoutbtn" >
                  Logout
              </button> 
          </div>
        </div>

        <div style={{display: "flex", alignContent: "center",alignItems: "center"}}>
            <div>
            <CarList/>
            </div>
        </div>


      </div>
      <div style={{}}>
        <ReusableFooter/>
      </div>
      </div>

    )
  };
  
  export default Shop;