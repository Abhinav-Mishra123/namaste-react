import { useRouteError } from "react-router-dom"

const ErrorPage = () =>{
    const err = useRouteError();
    return (
        <>
            <section className="Error page">
                <div className="err-container">
                    <h1>This is error page</h1>
                    <h2>{err.status} {err.statusText}</h2>
                </div>
            </section>
        </>
    )
}

export default ErrorPage;