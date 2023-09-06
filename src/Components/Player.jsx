import CurrentSongInfo from "./CurrentSongInfo";

 
function Player() {
  return (
    <div className="player">
      {/* Your player controls and UI elements */}
      <audio controls>
        <source src="/song/NBHD.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <CurrentSongInfo />

    </div>
  );
}

export default Player;
