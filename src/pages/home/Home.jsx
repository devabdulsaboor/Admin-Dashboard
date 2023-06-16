import "./home.css";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../DummyData";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";


const Home = () => {
 return ( 
  <div className="home">
   <FeaturedInfo />
   <Chart data={userData} title="User Analytics" grid  dataKey="Active User"/>
   <div className="homeWidgets">
   <WidgetSm />
   <WidgetLg />
   </div>
  </div>
  );
}
 
export default Home;