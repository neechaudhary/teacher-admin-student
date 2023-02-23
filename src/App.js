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

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="signin" element={<Signin />}></Route>
        <Route path="/signlogin" element={<SigninLogin />}></Route>
        <Route path="/teacherlogin" element={<TeacherLogin />}></Route>
        <Route path="/student-upload" element={<Student_upload />}></Route>
        <Route path="/teacher-management" element={<Teacher_mngmnt />}></Route>
      </Routes>
    </div>
  );
}
