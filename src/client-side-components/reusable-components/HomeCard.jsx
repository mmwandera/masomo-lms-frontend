// import { useNavigate } from 'react-router-dom';
// import './homeCard.css';

// export default function HomeCard({ id, thumbnail, title, modules, price, description }) {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/checkout/${id}`);
//   };

//   return (
//     <div className="home-card" onClick={handleCardClick}>
//       <img src={thumbnail} alt={title} className="home-card-thumbnail" />
//       <div className="home-card-details">
//         <h3 className="home-card-title">{title}</h3>
//         <p className='home-card-description'>{description}</p>
//         <p className="home-card-info">
//           <span className="home-card-modules">{modules} Modules</span>
//           <span className="home-card-price">${price}</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// const stripePromise = loadStripe(
//   "pk_test_51PEpckRx876YYvel496IFG73EwdnNKDG0BKhbD0zmzJFcfozbyr8Ji8F6j3CJOcWqTQCmcFFSvGFu4oSgKCp2skd00Hc7npqvZ"
// )

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { loadStripe } from "@stripe/stripe-js"
import "./homeCard.css"

const stripePromise = loadStripe(
  "pk_test_51PEpckRx876YYvel496IFG73EwdnNKDG0BKhbD0zmzJFcfozbyr8Ji8F6j3CJOcWqTQCmcFFSvGFu4oSgKCp2skd00Hc7npqvZ"
)

export default function HomeCard({
  id,
  thumbnail,
  title,
  modules,
  price,
  description,
}) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [token, setToken] = useState(null)

  // Fetch token from localStorage when component mounts
  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const handleCardClick = async () => {
    setLoading(true)
    try {
      if (!token) {
        throw new Error("No token found")
      }
      const response = await fetch(`http://127.0.0.1:5000/checkout/${id}`, {
        method: "GET",
        headers: {
          jwttoken: token, // Send token in the request headers
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        const errorMessage = await response.text()
        throw new Error(errorMessage || "Failed to initiate checkout")
      }
      const data = await response.json()
      const stripe = await stripePromise
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      })
      if (error) {
        throw new Error(error.message)
      }
      // Redirect to another page after successful checkout initiation
      navigate("/success")
    } catch (error) {
      console.error("Error initiating checkout:", error)
      setError(error.message)
    }
    setLoading(false)
  }

  return (
    <div
      className={`home-card ${loading ? "loading" : ""}`}
      onClick={handleCardClick}
    >
      <img src={thumbnail} alt={title} className="home-card-thumbnail" />
      <div className="home-card-details">
        <h3 className="home-card-title">{title}</h3>
        <p className="home-card-description">{description}</p>
        <p className="home-card-info">
          <span className="home-card-modules">{modules} Modules</span>
          <span className="home-card-price">${price}</span>
        </p>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  )
}
