import React, { useEffect, useState } from "react";

const Github = () => {
  const [count, setCount] = useState();
  useEffect(() => {
    fetch("https://api.github.com/users/sehan001")
      .then((response) => response.json())
      .then((data) => {
        setCount(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {count && <span>Github followers: {count.followers}</span>}
    </div>
  );
};

export default Github;
