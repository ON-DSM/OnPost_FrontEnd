import { Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage';
import LoginPage from './pages/auth/Login';
import SignupPage from './pages/auth/Signup';
import Notfound from './pages/404';
import CreatePost from './pages/CreatePostPage';
import RelatePage from './pages/RelatePage';
import ReadingPost from './pages/PostIn';
import SearchResult from './pages/SearchResult';
import Header from './components/header/main';
import StyleProvider from './styles';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <StyleProvider>
      <Header />
      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/404" element={<Notfound />} />
        <Route path="/post/CreatePostPage" element={<CreatePost />} />
        <Route path="/auth/Signup" element={<SignupPage />} />
        <Route path="/auth/Login" element={<LoginPage />} />
        <Route path="/ProfilePage" element={<RelatePage />} />
        <Route path="/PostName::id" element={<ReadingPost />} />
        <Route path="/SearchResult" element={<SearchResult />} />
        <Route path="/SearchResult/PostName::id" element={<ReadingPost />} />
        <Route path="/ProfilePage/PostName::id" element={<ReadingPost />} />

      </Routes>
      <ToastContainer />
    </StyleProvider>
  );
}

export default App;
