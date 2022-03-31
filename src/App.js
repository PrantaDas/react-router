import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';
import Post from './Components/Posts/Post ';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends/>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail/>}></Route>
        <Route path='/posts' element={<Post></Post>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
