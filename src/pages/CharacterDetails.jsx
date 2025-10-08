import { useLocation, useParams } from "react-router-dom";

export default function CharacterDetails() {
  const { characterId } = useParams();
  const characters = useLocation();

  const currentCharacter = characters.state.results.find(
    (character) => Number(character.id) == Number(characterId)
  );

  return (
    <div className="container">
      <img src={currentCharacter.image} alt="" style={{borderRadius:"100%"}}/>
      {currentCharacter.name}
    </div>
  );
}
