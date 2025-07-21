// Note: ensure that function only call after a certain delay has passed since the last time it was called
function debounce(func, delay = 300) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delay);
  };
}
const input = document.querySelector("#searchInput");
input.addEventListener(
  "input",
  debounce((e) => {
    input.focus();
    console.log("Search:", e.target.value);
  }, 500)
);

// Note: in react we have to apply
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

const debouncedTerm = useDebounce(stateVar, 1000);
useEffect(() => {
  console.log("Search:", debouncedTerm);
}, [debouncedTerm]);
