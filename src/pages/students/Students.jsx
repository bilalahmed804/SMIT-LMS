import { useParams } from "react-router-dom";
import SideBarMenu from "./Components/SideBarMenu";
import DashBoard from "./Components/Dashboard";
import Courses from "./Components/Courses";
import Assignments from "./Components/Assignments";

export default function Students() {
    const { select } = useParams()
    // alert(select)
    console.log(select);
    
    // alert(select)
    return (
        <div className="flex">
            <div>
                <SideBarMenu />
            </div>
            <div className="border-4">

                {select == undefined  && <DashBoard />}
                {select == 'courses' && <Courses />}
                {select == 'assignment' && <Assignments />}
            </div>

        </div>
    )
}