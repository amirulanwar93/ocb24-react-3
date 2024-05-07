// import PropTypes from "prop-types";

import { useState } from "react";

const Count = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      Count: {counter}
      <button onClick={() => setCounter((previousValue) => previousValue + 1)}>
        Increase
      </button>
    </div>
  );
};

// Count.propTypes = {};

export default Count;
