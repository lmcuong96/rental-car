import {bindInput, cs, State} from "cs-react";

export const Checkbox = ({ field,next,value}) => cs(
        ["checkbox", (_, next) => State({initValue: value, next})],
        ({checkbox}) => next({
            render: () => (
                <>
                    <input
                        {...{
                            type: "checkbox",
                            name: field,
                            id: field,
                            checked:checkbox.value,
                            onChange: (e)=> checkbox.onChange(e.currentTarget.checked),
                        }}/>
                </>
            ),
            value: checkbox.value
        })
    )
