import { Helmet } from "react-helmet"
import { Banner } from "../../Components/Banner/Banner"

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Island Hopper || Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  )
}
