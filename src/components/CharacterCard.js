import React from "react";
import styled from "styled-components";

const CharCard = styled.div`
  width: 200px;
  margin: 0;
`;

export default function CharacterCard({ image, name, species }) {
  return (
    <CharCard className="character-card">
      <img src={image} alt="profile picture" />
      <p>
        This is <strong>{name}</strong>, a(n) <b>{species}</b>
      </p>
    </CharCard>
  );
  // <span>todo: character</span>;
}
