import { useLocation } from "react-router-dom";

export default function CharacterDetails() {
  // const { characterId } = useParams();
  const character = useLocation();

  return (
    <div className="container">
      <img src={character.state.image} alt={character.state.name} style={{borderRadius:"100%"}}/>
      {character.state.name}
    </div>
  );
}
