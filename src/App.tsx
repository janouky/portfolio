import Gallery from "./Galery";
import Header from "./Header";

const images = [
  "images/america-fuck-yeah.png",
  "images/au-bal-masque.png",
  "images/family.jpg",
  "images/fanzine-country.png",
  "images/flute.jpg",
  "images/hot-dog.jpg",
  "images/lets-win-catch.png",
  "images/love.jpg",
  "images/metal-punk.png",
  "images/mort-au-patriarcat.png",
  "images/ps1.png",
  "images/tablefor2.jpg",
  "images/trouble-fete.png",
  "images/vernissage.jpg",
  "images/villa-party.png"
]

export default function App() {
  return (
    <>
      <Header />
      <Gallery images={images} />
    </>
  )
}
