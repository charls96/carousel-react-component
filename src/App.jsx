import EmblaCarousel from "./components/carousel/EmblaCarousel"
import tiger from "./assets/carousel/tiger.webp"
import d60Lite from "./assets/carousel/d60_lite.webp"
import maja from "./assets/carousel/maja.webp"

function App() {
  const slides = [tiger, d60Lite, maja];

  return (
    <div className="App">
      <h1>Full size carousel</h1>
      <EmblaCarousel slides={slides}/>
    </div>
  )
}

export default App
