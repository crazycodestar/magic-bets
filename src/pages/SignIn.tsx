import { FC, useEffect } from "react";

// components
import Button from "../components/Button";
import InputForm from "../components/formFields/InputForm";

// navigation
import { useNavigate } from "react-router-dom";

// validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NavigationBar from "../components/NavigationBar";

// backend communication
import { gql, useMutation } from "@apollo/client";
import { returnData } from "../interface/common"

import logo from "../assets/images/logo.svg"

const signInValidation = Yup.object({
	username: Yup.string().min(3).max(25).required(),
	password: Yup.string().min(8).max(16).required(),
});

const LOGIN = gql`
	mutation Mutation($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    status
    message
    user {
      id
    }
  }
}
`

interface ILoginInputData {
	username: string;
	password: string;
}

interface IReturnData extends returnData {
	user?: {
		id: string;
	}
}

const SignIn: FC = () => {
	const navigate = useNavigate();
	const [login, { loading, error, data }] = useMutation<{ login: IReturnData }, ILoginInputData>(LOGIN);

	useEffect(() => {
		if (!data) return;
		const { status, message, user } = data.login;
		if (status === "unactivated") {
			navigate(`/confirmEmail/${user?.id}`);
		}
		if (status === "success") {
			localStorage.setItem("token", message || "");
			navigate("/")
		};
	}, [data])

	const result = data?.login;

	return (
		<div className="w-screen h-screen flex flex-col items-center">
			<div className="w-full">
				<NavigationBar />
			</div>
			<div className="relative max-w-[400px] w-full mx-5 p-5 my-auto">
				<div className="w-[100px] h-[100px] mb-5 shadow-lg rounded-lg flex items-center justify-center bg-violet-500 mx-auto" >
					<img src={logo} alt="logo" className="w-[50px] h-[50px] bg-transparent" />
				</div>
				<div>
					<div className="mb-5">
						<h2 className="mb-1">Sign In</h2>
						<p>Enter you user details.</p>
						{result?.status === "failed" && <p className="text-red-500">{result?.message}</p>}
					</div>
					<Formik
						initialValues={{ username: "username", password: "password" }}
						validationSchema={signInValidation}
						onSubmit={(values, { setSubmitting }) => {
							setSubmitting(true);
							login({ variables: values })
							setSubmitting(false);
						}}
					>
						{({ setSubmitting, errors, values }) => (
							<Form className="w-full space-y-5">
								<InputForm label="username" name="username" />
								<InputForm label="password" type="password" name="password" />
								<div className="space-y-3 md:flex md:justify-end md:space-y-0 md:space-x-3">
									<Button type="submit">Sign in</Button>
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
