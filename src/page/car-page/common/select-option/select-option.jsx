import {cs, State} from "cs-react";

export const SelectOption = ({next, value, field}) => cs(
    ['option', (_, next) => State({initValue: value, next})],
    ({option}) => {
        return next({
            render: () => (
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
            ),
            formControl: {
                invalid: Array.isArray(option.value) || option.value.includes("Select"),
                showErrors: `${field} is required`,
                [field]: option.value
            },
        })
    }
)