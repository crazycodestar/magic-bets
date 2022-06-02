import { FC } from "react";
import Button from "../components/Button";

// navigation
import { useNavigate } from "react-router-dom";

// validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NavigationBar from "../components/NavigationBar";
import InputForm from "../components/formFields/InputForm";
import { gql, useMutation } from "@apollo/client";

const signInValidation = Yup.object({
	username: Yup.string().min(2).max(50).required(),
	emailAddress: Yup.string().email().required(),
	password: Yup.string().min(8).max(16).required(),
});

const SIGN_UP = gql`
	mutation Mutation(
		$username: String!
		$password: String!
		$emailAddress: String!
	) {
		signUp(
			username: $username
			password: $password
			emailAddress: $emailAddress
		) {
			status
			message
			user {
				username
				emailAddress
				subscribed
			}
		}
	}
`;

const SignUp: FC = () => {
	const navigate = useNavigate();
	const [signUp, { loading, data, error }] = useMutation(SIGN_UP);
	return (
		<div className="w-screen h-screen flex flex-col items-center">
			<div className="w-full">
				<NavigationBar />
			</div>
			<div className="relative max-w-[400px] w-full mx-5 p-5 my-auto">
				<div className="w-[100px] h-[100px] mb-5 shadow-lg rounded-lg bg-violet-500 mx-auto" />
				<div>
					<div className="mb-5">
						<h2 className="mb-1">Sign Up</h2>
						<p>We are happy to have you with us.</p>
					</div>
					<Formik
						initialValues={{
							username: "username",
							password: "password",
							emailAddress: "ims24024@jeoce.com",
						}}
						validationSchema={signInValidation}
						onSubmit={(values, { setSubmitting }) => {
							setSubmitting(true);
							signUp({ variables: values });
							navigate("/confirmEmail");
						}}
					>
						{({ setSubmitting, values, errors, handleSubmit }) => (
							<Form className="w-full space-y-5">
								<InputForm label="username" name="username" />
								<InputForm
									label="email address"
									type="email"
									name="emailAddress"
								/>
								<InputForm label="password" type="password" name="password" />
								<div className="space-y-3 md:flex md:justify-end md:space-y-0 md:space-x-3">
									<Button type="submit" onClick={handleSubmit}>
										Sign Up
									</Button>
									<Button secondary onClick={() => navigate("/sign-in")}>
										Sign In
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

export default SignUp;
