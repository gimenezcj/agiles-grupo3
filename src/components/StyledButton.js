import { Link } from "react-router-dom";

function StyledButton() {
  return (
    <Link to="/agregar">
      <button className="border-0 px-4 py-3 rounded-circle">+</button>
    </Link>
  )
}

export default StyledButton;