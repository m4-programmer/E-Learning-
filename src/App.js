import './App.css';
import Nav from './components/Nav';
import Homepage from './layout/Homepage';
import Footer from './components/Footer';
import { BrowserRouter,Routes, Route, Switch } from 'react-router-dom';




import Track_Details from './layout/Track_Details';
import Contact from './layout/Contact';
import Course from './layout/Course';
import CourseDetails from './layout/CourseDetails';
import NotFound from './layout/NotFound';
import About from './layout/About';
import FAQ from './layout/FAQ';
import Blogs from './layout/Blogs';
import BlogDetails from './layout/BlogDetails';
import Login from './Auth/Login';
import Register from './Auth/Register';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav/>
      <Routes>
        
          <Route path="/" element={<Homepage />} />
          
          <Route path="/track_details" element={<Track_Details />} />

          <Route path="/courses" element={<Course />} />
          <Route path="/course_details" element={<CourseDetails />} />

          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />


          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog_details" element={<BlogDetails />} />
          

          <Route path="/contact" element={<Contact />} />
          {/* Begining of Authentication Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* End of Authentication Route */}

          <Route path="*" element={<NotFound/>} />
      
      </Routes>
    </BrowserRouter>
       <Footer />
    </div>
  );
}

export default App;
