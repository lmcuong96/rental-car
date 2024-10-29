import {bindInput, cs, State} from "cs-react";

export const Input = ({next, value, field, type}) => cs(
    ['input', (_, next) => State({initValue: value, next})],
    ({input}) => {
        return next({
                render: () => (
                    <>
                        <input {...{
                            className: "w-100",
                            id: field,
                            name: field,
                            type: type,
                            ...bindInput(input)
                        }} />
                    </>

                ),
            formControl: {
                invalid: !input.value,
                showErrors: <p className="text-danger">This field is required</p>,
                [field]: input.value
                }
            }
        )
    }
)