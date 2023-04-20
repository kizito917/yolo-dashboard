// Internal imports
import './appbar.css';
import Appbar from './Appbar';

export default function Layout({ children }) {
    return (
      <section className="page-content">
        <Appbar />
        <div className="main-container mt-20 text-left">
            {children}
        </div>
      </section>
    );
};
  