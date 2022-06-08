import { FC, useCallback, useEffect, useState } from "react";
import Button from "../components/Button";

// navigation
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputForm from "../components/formFields/InputForm";
import { options } from "../interface/common";
import useQuery from "../hooks/useQuery";

const REGISTER = gql`
mutation Register($email: String!, $registerId: String!) {
  register(email: $email, id: $registerId) {
    status
	message
  }
}`

const EmailConfirmationValidation = Yup.object({
	emailAddress: Yup.string().email().required(),
})


interface IMutationEmailResults {
	status: options;
	message: string;
}

interface IConfirmEmail {
	email?: string;
	registerId?: string;
}

const ConfirmEmail: FC = () => {
	const navigate = useNavigate();
	const { token } = useParams();
	const query = useQuery();
	const [register, { loading, data, error }] = useMutation<{ register: IMutationEmailResults }, IConfirmEmail>(REGISTER, {
		variables: {
			registerId: token || "",
		}
	});
	const [buttonActive, setButtonActive] = useState<boolean>(false);

	let interval: ReturnType<typeof setTimeout>;

	useEffect(() => {
		const email = query.get("email");
		if (!email) return;
		register({ variables: { email: email } })
		return () => {
			clearTimeout(interval)
		}
	}, [])

	useEffect(() => {
		if (!data) return;
		console.log(data);
	}, [data])


	const handleDelay = useCallback(
		() => {
			register({ variables: { email: "" } })
			setButtonActive(true);
			interval = setTimeout(() => {
				setButtonActive(false);
			}, 5000);
		}
		, [buttonActive])

	return (
		<div className="h-screen text-white">
			<div className="bg-primary h-[60px] flex text-white px-3 items-center w-full">
				<h2 className="cursor-pointer" onClick={() => navigate("/")}>
					betslayer clone
				</h2>
			</div>
			<div className="h-full bg-primary pt-[200px] flex justify-center">
				<div className="px-3 max-w-[450px]">
					<h1>Email sent</h1>
					<div className="space-y-3">

						<p className="text-lg text-slate-300">
							Activation email has been sent to you email. If you do not see an email or the email provided is incorrect please enter the correct email and resend
						</p>
						<p className="text-lg text-slate-300">
							please note that the mail would likely have been sent to your spam
							mail
						</p>
					</div>
					<Formik
						initialValues={{ emailAddress: query.get("email") || "" }}
						validationSchema={EmailConfirmationValidation}
						onSubmit={(values, { setSubmitting }) => {
							setSubmitting(true);
							register({ variables: { email: values.emailAddress } });
							setTimeout(() => { setSubmitting(false) }, 5000)
						}}
					>
						{({ values, isSubmitting }) => (
							<Form>
								<div className="space-y-3 mt-5 md:flex md:w-full md:space-y-0 md:space-x-3 md:items-center">
									<InputForm name="emailAddress" type="email" className="text-black" label="Email Address" />
									<Button type="submit" disabled={isSubmitting} >Resend email</Button>
								</div>
							</Form>
						)}
					</Formik>

				</div>
			</div>
		</div>
	);
};

export default ConfirmEmail;
