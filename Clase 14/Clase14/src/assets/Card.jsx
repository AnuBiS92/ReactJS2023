import "./Card.css"

function Card({ apellido, nacimiento, clubes, mundial, late }) {
  return (
    <>
      <h2 style={{ backgroundColor: mundial ? "red" : "silver" }}>
        {apellido}
      </h2>
      <small>{nacimiento}</small>
      <p>{clubes}</p>
      <p>{mundial ? "Ganó un mundial 🏆🥇" : "No ganó un mundial 😢"}</p>
      <p>{late ? "Late ✅" : "Nola ❌"}</p>
    </>
  );
}

export default Card;
