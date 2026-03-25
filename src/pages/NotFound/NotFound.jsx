import Style from "./notfound.module.css";

export default function NotFound() {
  return (
    <div className={Style.notFoundSection}>
      <div className={Style.titleNotFound}>404</div>
      <p>Oops! Page not found</p>
    </div>
  );
}
