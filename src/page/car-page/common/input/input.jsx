import {bindInput, cs, State} from "cs-react";

export const Input = ({next, value, field, type}) => cs(
    ['input', (_, next) => State({initValue: value, next})],
    ({input}) => {
        const error = input.value?.length ? null : "This field is required";
        return next({
            render: ({showErrors} = {}) => (<>
                <input {...{
                    className: "w-100",
                    id: field,
                    name: field,
                    type: type,
                    ...bindInput(input)
                }} />
                {showErrors && error && (
                    <p className="fs-6 text-danger">
                        {error}
                    </p>
                )}
            </>),
            value: input.value,
            invalid: error
        })
    }
)