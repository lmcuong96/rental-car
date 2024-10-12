export function ResetPassword() {
    return (
        <div className=" m-5 text-center ">
            <h1>Reset Password</h1>
            <p className="fs-5">
                Enter the email address associated with your account, and we'll
                email you with the link to reset your password
            </p>

            <div>
                <label htmlFor="email" typeof="hidden"></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-25 p-1 my-3 border border-black"
                />
            </div>

            <button
                type="button"
                className="btn btn-primary py-2 px-5 border border-black "
            >
                <i className="fa-solid fa-unlock me-2"></i>
                <span>Submit</span>
            </button>
        </div>
    );
}
