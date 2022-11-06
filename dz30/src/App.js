import Contacts from "./components/contacts/Contacts";
import ThemeProvider from "./context/ThemeProvider";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EditContact from "./components/editContact/EditContact";
import Users from "./components/users/Users";
import PostList from "./components/postList/PostList";
import ThemeToggle from "./components/themeToggle/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <Link to={"/contacts"}>Contacts</Link> |{" "}
          <Link to={"/users"}>Users</Link> |<Link to={"/posts"}>Posts</Link> |{" "}
        </div>
        <ThemeToggle />
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/:id" element={<EditContact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
