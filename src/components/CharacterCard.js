import React from "react";

export default function CharacterCard({ image, name, species }) {
  return (
    <div className="character-card">
      <img src={image} alt="profile picture" />
      <p>
        This is <strong>{name}</strong>, a(n) <b>{species}</b>
      </p>
    </div>
  );
  // <span>todo: character</span>;
}
