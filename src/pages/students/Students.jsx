import MenuBar from "../students/Components/MenuBar";
import DashboardHeader from "./Components/DashboardHeader";
import { useParams } from "react-router-dom";
import SideBarMenu from "./Components/SideBarMenu";
import DashBoard from "./Components/Dashboard";
import Courses from "./Components/Courses";
import Assignments from "./Components/Assignments";

export default function Students() {
    const { select } = useParams()
  
    return (
        <div className="flex">
        <div>
        <MenuBar/>
        </div>
        <div>
        <h1>Student page</h1>
            <DashboardHeader/>
            <div>
                <SideBarMenu />
            </div>
            <div className="border-4">

                {select == undefined  && <DashBoard />}
                {select == 'courses' && <Courses />}
                {select == 'assignment' && <Assignments />}
            </div>

        </div>
        </div>
    )
}