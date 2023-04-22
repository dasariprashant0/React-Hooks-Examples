import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <nav>
      <h1>React Hooks Examples</h1>
      <select value={pathname} onChange={(e) => navigate(e.target.value)}>
        <option value="/">Home</option>
        <option value="/useState">useState</option>
        <option value="/useEffect">useEffect</option>
        <option value="/useContext">useContext</option>
        <option value="/useRef">useRef</option>
        <option value="/useReducer">useReducer</option>
        <option value="/useMemo">useMemo</option>
        <option value="/useCallback">useCallback</option>
        <option value="/useLayoutEffect">useLayoutEffect</option>
      </select>
    </nav>
  );
}
