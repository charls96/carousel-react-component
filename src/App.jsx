import EmblaCarousel from "./components/carousel/EmblaCarousel"
import tiger from "./assets/carousel/tiger.jpg"
import tigerLite from "./assets/carousel/tiger_lite.jpg"
import twist from "./assets/carousel/twist.webp"

function App() {
  const slides = [tiger, tigerLite, twist];

  return (
    <div className="App">
      <EmblaCarousel slides={slides}/>
    </div>
  )
}

export default App
