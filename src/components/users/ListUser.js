import React, { useEffect, useState } from "react";
import "../../App.css";

function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((response) => {
        return response.json();
      })
      .then((datass) => {
        setUsers(datass);
      });
  }, []);

  return (
    <section className="section">
      <div className="section-center">
        {users.map((user) => {
          const { id, image, name, title, quote } = user;
          return (
            <article className="article" key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <div className="btn"></div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ListUser;
