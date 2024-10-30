import {cs, State} from "cs-react";

export const SelectOption = ({next, value, field}) => cs(
    ['option', (_, next) => State({initValue: value, next})],
    ({option}) => {

        const error = !Array.isArray(option.value)  ? null : "This field is required";
        return next({
            render: ({showErrors} = {}) => (
                <>
                    <select {...{
                        className: "form-select",
                        id: field,
                        option: option.value,
                        onChange: (e) => {
                            const selectedValue = e.target.value;
                            option.onChange(selectedValue);
                        }
                    }}>
                        {value?.map((v) => <option key={v} value={v}>{v}</option>)}
                    </select>
                    {showErrors && error && (
                        <p className="text-danger">
                            {error}
                        </p>
                    )}
                </>
            ),
            value: option.value
        })
    }
)