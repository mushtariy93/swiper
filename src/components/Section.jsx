import React from 'react'
import { toast } from 'react-toastify'

const Section = () => {
  return (
    <div>
      <button
        className="bg-cyan-500 hover:bg-cyan-600 "
        onClick={() => toast("wow juda osonku")}
      >
        Show button{" "}
      </button>
    </div>
  );
}

export default Section
