import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={new URL('./logo/logo.jpg', import.meta.url)}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>  
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
}

const Card = (props) => {
  const { restaurant } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={restaurant.image}
          alt="card"
        />
      </div>
      <div className="card-content">
        <h3>{restaurant.name}</h3>
        <p>⭐ {restaurant.rating}</p>
        <p className="desc">{restaurant.cuisines.join(', ')}</p>
        <p>{restaurant.costForTwo}</p>
        <p className="meta"><span className="time">• {restaurant.deliveryTime}</span></p>
      </div>
    </div>
  );
}

const restoResultData = {
  restaurants: [
  {
    "id": "1",
    "name": "Burger Kingdom",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    "rating": 4.4,
    "deliveryTime": "28 mins",
    "costForTwo": "₹400 for two",
    "cuisines": ["Burgers", "Fast Food"]
  },
  {
    "id": "2",
    "name": "Pizza Hub",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "rating": 4.2,
    "deliveryTime": "32 mins",
    "costForTwo": "₹600 for two",
    "cuisines": ["Pizza", "Italian"]
  },
  {
    "id": "3",
    "name": "Biryani House",
    "image": "https://images.unsplash.com/photo-1563379091339-03246963d29b",
    "rating": 4.6,
    "deliveryTime": "25 mins",
    "costForTwo": "₹500 for two",
    "cuisines": ["Biryani", "North Indian"]
  },
  {
    "id": "4",
    "name": "Tandoori Nights",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "rating": 4.3,
    "deliveryTime": "30 mins",
    "costForTwo": "₹700 for two",
    "cuisines": ["North Indian", "Mughlai"]
  },
  {
    "id": "5",
    "name": "South Spice",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    "rating": 4.5,
    "deliveryTime": "22 mins",
    "costForTwo": "₹350 for two",
    "cuisines": ["South Indian", "Dosa"]
  },
  {
    "id": "6",
    "name": "Chinese Wok",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    "rating": 4.1,
    "deliveryTime": "27 mins",
    "costForTwo": "₹450 for two",
    "cuisines": ["Chinese", "Asian"]
  },
  {
    "id": "7",
    "name": "Roll Express",
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    "rating": 4.0,
    "deliveryTime": "20 mins",
    "costForTwo": "₹300 for two",
    "cuisines": ["Rolls", "Snacks"]
  },
  {
    "id": "8",
    "name": "Pasta Paradise",
    "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    "rating": 4.4,
    "deliveryTime": "35 mins",
    "costForTwo": "₹800 for two",
    "cuisines": ["Italian", "Pasta"]
  },
  {
    "id": "9",
    "name": "Street Chaat Corner",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    "rating": 4.3,
    "deliveryTime": "18 mins",
    "costForTwo": "₹250 for two",
    "cuisines": ["Chaat", "Street Food"]
  },
  {
    "id": "10",
    "name": "Healthy Bowl",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "rating": 4.7,
    "deliveryTime": "24 mins",
    "costForTwo": "₹550 for two",
    "cuisines": ["Salads", "Healthy Food"]
  },
  {
    "id": "11",
    "name": "Kebab Junction",
    "image": "https://images.unsplash.com/photo-1529042410759-befb1204b468",
    "rating": 4.5,
    "deliveryTime": "29 mins",
    "costForTwo": "₹650 for two",
    "cuisines": ["Kebabs", "Mughlai"]
  },
  {
    "id": "12",
    "name": "Sushi World",
    "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    "rating": 4.6,
    "deliveryTime": "40 mins",
    "costForTwo": "₹1200 for two",
    "cuisines": ["Japanese", "Sushi"]
  },
  {
    "id": "13",
    "name": "Dessert Delight",
    "image": "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    "rating": 4.8,
    "deliveryTime": "15 mins",
    "costForTwo": "₹300 for two",
    "cuisines": ["Desserts", "Bakery"]
  },
  {
    "id": "14",
    "name": "Momo Factory",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "rating": 4.2,
    "deliveryTime": "21 mins",
    "costForTwo": "₹350 for two",
    "cuisines": ["Momos", "Tibetan"]
  },
  {
    "id": "15",
    "name": "Punjabi Dhaba",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947",
    "rating": 4.4,
    "deliveryTime": "33 mins",
    "costForTwo": "₹550 for two",
    "cuisines": ["Punjabi", "North Indian"]
  }
]
}

const Body = () => {
  return (
    <div className="body">
      <div className="serach">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="card-container">
        {restoResultData.restaurants.map((restaurant) => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );  
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);