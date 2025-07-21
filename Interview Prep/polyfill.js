//polyfill for useState
let state = [];
let index = 0;

function useState(initialValue) {
  const currentIndex = index++;
  if (state[currentIndex] === undefined) {
    state[currentIndex] = initialValue;
  }

  const setState = (newValue) => {
    state[currentIndex] = newValue;
    render();
  };

  return [state[currentIndex], setState];
}

//polyfill for useEffect
let effectDeps = [];
let effectIndex = 0;

function useEffect(callback, deps) {
  const currentIndex = effectIndex++;

  const prevDeps = effectDeps[currentIndex];
  const hasChanged =
    !prevDeps || !deps || deps.some((dep, i) => dep !== prevDeps[i]);

  if (hasChanged) {
    callback();
    effectDeps[currentIndex] = deps;
  }
}
