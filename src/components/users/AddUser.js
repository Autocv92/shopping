import { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [quote, setQuote] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      title: title,
      quote: quote,
    };
    fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddUser;
