import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
// import Img from "/IMG_7982";
function App() {
    const students = [
        { name: "Roumaissa", age: 23 },
        { name: "Raouf", age: 18 },
        { name: "Amine", age: 32 },
        { name: "Aimene", age: 27 },
        { name: "Idir", age: 26 },
        { name: "Nawfel", age: 25 },
    ];

    console.log("Hello from the console ");
    return (
        <div className="container">
            <Header />
            <p>Welcome to my React app.</p>
            <div className="userList">
                {students.map((student, i) => (
                    <Card key={"studentCard" + i} name={student.name} age={student.age} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
