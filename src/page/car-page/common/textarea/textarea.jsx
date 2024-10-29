import {bindInput, cs, State} from "cs-react";

export const Textarea = ({next, field,row,value}) => cs(
    ['textarea', (_, next) => State({initValue: value, next})],
    ({textarea}) => next({
        render: () => <textarea {...{
            className: "w-100",
            name: field,
            id: field,
            rows: row,
            ...bindInput(textarea),
        }} />,
        value : textarea.value
    })
)