import { FC } from "react";
// formik
import { useField, FieldAttributes } from "formik";

import Input, { InputProps } from "../Input";

const InputForm: FC<InputProps & FieldAttributes<{}>> = ({
	label,
	...props
}) => {
	const [field, meta] = useField<{}>(props);
	const showError = meta.touched && meta.error;
	return (
		<div>
			<Input
				label={label}
				lowerTitle={showError ? meta.error : ""}
				state={showError ? "danger" : "default"}
				{...field}
				{...props}
			/>
		</div>
	);
};

export default InputForm;
