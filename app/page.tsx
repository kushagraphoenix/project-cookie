import Background from "./components/atmosphere/Background";
import Stars from "./components/atmosphere/Stars";
import Rain from "./components/atmosphere/Rain";
import Lightning from "./components/atmosphere/Lightning";
import Moon from "./components/atmosphere/Moon";
import Camera from "./components/atmosphere/Camera";
import Clouds from "./components/atmosphere/Clouds";
import Envelope from "./components/envelope/Envelope";
import PasswordModal from "./components/password/PasswordModal";
import Letter from "./components/letter/Letter";
import ReadingLetter from "./components/reading/ReadingLetter";
import BirthdayScene from "./components/birthday/BirthdayScene";
import Fireflies from "./components/atmosphere/Fireflies";
export default function Home() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Background />

      <Camera>
        <Moon />
        <Clouds />
        <Stars />
        <Rain />
        <Lightning />
        <Fireflies />
      </Camera>

      <Envelope />

      <Letter />
<ReadingLetter />
<BirthdayScene />

      <PasswordModal />
    </main>
  );
}