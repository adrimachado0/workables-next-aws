import HomeTitle from "../../components/home/hometitle"
import HomeMain from "../../components/home/homemain"
import HomeMainSecondary from "../../components/home/HomeMainSecondary/homemainsecondary"
import HomeSpark from "../../components/home/HomeSpark/homespark"
import HomeFaqs from "../../components/home/HomeFaqs/homefaqs"
import HomeMusic from "../../components/home/HomeMusic/homemusic"


export default function Home() {
  return (
    <div className="xl:mx-auto max-w-7xl mx-5">
        <HomeTitle />      
        <HomeMain />      
        <HomeMainSecondary />      
        <HomeSpark />      
        <HomeFaqs />      
        <HomeMusic />      
    </div>
  )
}
