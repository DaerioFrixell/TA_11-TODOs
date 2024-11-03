import { Link } from "react-router-dom";
import "./errorPage.scss";

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page__text">такой страницы нет</div>

      <Link
        className="error-page__link"
        to='/'>
        на главную
      </Link>
    </div>
  )
}