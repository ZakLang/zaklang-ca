import { useRouteError } from "react-router-dom";


interface IError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as IError).statusText || (error as IError).message}</i>
      </p>
    </div>
  );
}