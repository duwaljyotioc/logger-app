import { useNavigate} from "react-router-dom";

function Login() {
    const useNavigateInstance = useNavigate();
    function handleSubmit() {
        fetch('https://63ef222ec59531ccf16982c8.mockapi.io/api/v1/users/')
            .then(responseData => responseData.json())
            .then(() => {
                NavigateToDashboard();
            });
    }

    function NavigateToDashboard () {
        useNavigateInstance('/dashboard');
    }

    return (
        <div>
            <div className='container mt-4'>
                <form className='w-50'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Login;
