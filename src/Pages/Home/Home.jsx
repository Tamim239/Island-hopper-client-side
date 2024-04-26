import { Helmet } from "react-helmet"
import { Banner } from "../../Components/Banner/Banner"
import { TouristsSpots } from "../../Components/TouristsSpots/TouristsSpots"
import { AboutUs } from "../../Components/AboutUs/AboutUs"

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Island Hopper || Home</title>
      </Helmet>
      <Banner></Banner>
      <TouristsSpots></TouristsSpots>
      <AboutUs></AboutUs>
    </div>
  )
}
