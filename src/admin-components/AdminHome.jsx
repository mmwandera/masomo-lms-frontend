import Card from './reusable-components/Card';
import Footer from './reusable-components/Footer';
import Header from './reusable-components/Header';
import SearchBar from './reusable-components/SearchBar';

export default function AdminHome() {
  return (
    <div className="admin-home">
      <Header />
      <main className="admin-main">
        <h1 className="welcome-message">Welcome, User</h1>
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <h2 className="courses-heading">My Courses</h2>
        <div className="card-container">
          <Card />
        </div>
      </main>
      <Footer />
    </div>
  );
}
