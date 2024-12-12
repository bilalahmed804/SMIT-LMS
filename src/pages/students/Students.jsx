import MenuBar from "../students/Components/MenuBar";
import DashboardHeader from "./Components/DashboardHeader";

export default function Students(){
    return(
        <div className="flex">
        <div>
        <MenuBar/>
        </div>
        <div>
        <h1>Student page</h1>
            <DashboardHeader/>

        </div>

    </div>
    )
}