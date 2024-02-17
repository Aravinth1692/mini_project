
import './header.css'
import pink from '../../assets/logoImg.jpg'

const Header = ({orderCount}) => {

    return (
        <div className="headerStyle">
              <div className='orderwidth displayFlexTxt'>
            <img src={pink} alt="loading..." className='imgWidth' />
            <div className='mrntpp'>
            Order Management
            </div>
            </div>
            
            <div className='createBtn'>
            <button className='btnStyle'>Order Count : {orderCount}</button>
            </div>
            </div>
    )
}

export default Header;