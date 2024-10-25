import {bindInput, cs, State} from "cs-react";

export const Checkbox = ({ field,next}) => cs(
        ["checkbox", ({}, next) => State({initValue: field, next})],
        ({checkbox}) => next({
            render: () => (
                <>
                    <input
                        {...{
                            type: "checkbox",
                            // name: field,
                            // id: field,
                            checked:checkbox.value,
                            onChange: (e)=> checkbox.onChange(e.currentTarget.checked),
                        }}/>
                </>
            ),
            value: checkbox.value
        })
    )
