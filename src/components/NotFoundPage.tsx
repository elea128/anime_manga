import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component {
    render() {
        return <div style={{ textAlign: "center" }}>
            <h2>Page 404</h2>
            <p>
                <Link to="/">Retourner à la page d'accueil </Link>
            </p>
        </div>;
    }
}
export default NotFoundPage;