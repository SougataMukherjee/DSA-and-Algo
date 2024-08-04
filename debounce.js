const debounce = (cb, delay = 1000) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout); //clear previous timeout
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const logMessage = (message) => {
  console.log(message);
};

const debouncedLogMessage = debounce(logMessage, 1000);

debouncedLogMessage("Hello"); // Will log 'Hello' after 2 seconds
debouncedLogMessage("Hello again");
