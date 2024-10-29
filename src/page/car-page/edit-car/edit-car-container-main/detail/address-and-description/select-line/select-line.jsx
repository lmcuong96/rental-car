import {cs, State} from "cs-react";

export const SelectLine = ({next, field, value}) => cs(
    ['select', ({}, next) => State({initValue: field, next})],
    ({select}) => next({
        render: () => <select {...{
            className: "w-100",
            name: field,
            id: field
        }}>
            <option value="null">Select {field}</option>
            {value.map(v => <option key={v} value={v}>{v}</option>)}
        </select>,
        formControl: {
            invalid: select.value ?? "",
            showErrors: () => <p className="text-danger">{field} is required</p>,
            addData: (ret) => ({...ret, [field]: select.value}),
        },
        value: select.value
    })
)