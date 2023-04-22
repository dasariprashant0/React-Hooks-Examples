import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-links">
      <Link className="home-link" to="/useState">
        useState
      </Link>
      <Link className="home-link" to="/useEffect">
        useEffect
      </Link>
      <Link className="home-link" to="/useContext">
        useContext
      </Link>
      <Link className="home-link" to="/useRef">
        useRef
      </Link>
      <Link className="home-link" to="/useReducer">
        useReducer
      </Link>
      <Link className="home-link" to="/useMemo">
        useMemo
      </Link>
      <Link className="home-link" to="/useCallback">
        useCallback
      </Link>
      <Link className="home-link" to="/useLayoutEffect">
        useLayoutEffect
      </Link>
    </div>
  );
}
