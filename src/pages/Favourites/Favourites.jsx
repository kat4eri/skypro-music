import Navigation from "../../components/navFolder/Navigation";
import Player from "../../components/Player/Player";
import * as S from "../mainFolder/main.styled";

export function Favourites({ currentTrack }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation />
          <div>
            <h2>Favourites</h2>
          </div>
        </S.Main>
        {currentTrack && <Player currentTrack={currentTrack} />}
      </S.Container>
    </S.Wrapper>
  );
}