import { FC } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

// navigation
import { useNavigate } from "react-router-dom";

// validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NavigationBar from "../components/NavigationBar";

const signInValidation = Yup.object({
	username: Yup.string().min(3).max(255).required(),
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
						{({ setSubmitting }) => (
							<Form className="w-full space-y-5">
								<Input label="username" />
								<Input label="password" />
								<div className="space-y-3">
									<Button>Sign in</Button>
									<Button secondary onClick={() => navigate("/sign-up")}>
										Sign up
									</Button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
