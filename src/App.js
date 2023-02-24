import "./App.css";
import Body from "./Components/Body";
import "./tailwind.config";
import Header from "./Components/Header";
import Getstarted from "./Components/Getstarted";
import Signin from "./Components/Signin";
import SigninLogin from "./Components/signinLogin";
import { Route, Routes } from "react-router-dom";
import TeacherLogin from "./Components/TeacherLogin";
import Student_upload from "./Components/Student_upload";
import Teacher_mngmnt from "./Components/Teacher_mngmnt";
import Student_reg from "./Components/Student_reg";
import Teacher_reg from "./Components/Teacher_reg";
import View_All from "./Components/View_All";
import Viewed_reviewed from "./Components/Viewed_reviewed";
import View_tobe_review from "./Components/View_tobe_review";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/register" element={<Student_reg/>} />
        <Route path="/teacher-register" element={<Teacher_reg />} />
        <Route path="signin" element={<Signin />}></Route>
        <Route path="/signlogin" element={<SigninLogin />}></Route>
        <Route path="/teacherlogin" element={<TeacherLogin />}></Route>
        <Route path="/student-upload" element={<Student_upload />}></Route>
        <Route path="/teacher-management" element={<Teacher_mngmnt />}></Route>
        <Route path="/view-all" element={<View_All />}></Route>
        <Route path="/reviewed-list" element={<Viewed_reviewed />}/>
        <Route path="/to-be-reviewed-list" element={<View_tobe_review />}/>

      </Routes>
    </div>
  );
}
