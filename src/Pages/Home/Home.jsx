import { Helmet } from "react-helmet"
import { Banner } from "../../Components/Banner/Banner"
import { TouristsSpots } from "../../Components/TouristsSpots/TouristsSpots"
import { AboutUs } from "../../Components/AboutUs/AboutUs"
import { Country } from "../../Components/Country/Country"
import { ContactUs } from "../../Components/ContactUs/ContactUs"

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Island Hopper || Home</title>
      </Helmet>
      <Banner></Banner>
      <TouristsSpots></TouristsSpots>
      <Country></Country>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  )
}
