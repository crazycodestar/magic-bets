import { FC } from "react";

// components
import Button from "../components/Button";
import InputForm from "../components/formFields/InputForm";

// navigation
import { useNavigate } from "react-router-dom";

// validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NavigationBar from "../components/NavigationBar";

const signInValidation = Yup.object({
	username: Yup.string().min(3).max(25).required(),
	password: Yup.string().min(8).max(16).required(),
});

const SignIn: FC = () => {
	const navigate = useNavigate();
	return (
		<div className="w-screen h-screen flex flex-col items-center">
			<div className="w-full">
				<NavigationBar />
			</div>
			<div className="relative max-w-[400px] w-full mx-5 p-5 my-auto">
				<div className="w-[100px] h-[100px] mb-5 shadow-lg rounded-lg bg-violet-500 mx-auto" />
				<div>
					<div className="mb-5">
						<h2 className="mb-1">Sign In</h2>
						<p>Enter you user details.</p>
					</div>
					<Formik
						initialValues={{ username: "", password: "" }}
						validationSchema={signInValidation}
						onSubmit={(values, { setSubmitting }) => {
							alert(values);
						}}
					>
						{({ setSubmitting, errors, values }) => (
							<Form className="w-full space-y-5">
								<InputForm label="username" name="username" />
								<InputForm label="password" type="password" name="password" />
								<div className="space-y-3">
									<Button>Sign in</Button>
									<Button secondary onClick={() => navigate("/sign-up")}>
										Sign up
									</Button>
								</div>
								{/* <pre>{JSON.stringify(values, null, 2)}</pre>
								<pre>{JSON.stringify(errors, null, 2)}</pre> */}
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
