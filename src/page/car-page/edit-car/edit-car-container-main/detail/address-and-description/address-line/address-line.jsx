import {bindInput, cs, State} from "cs-react";

export const addressLine = ({location, next}) => cs(
    ['address', ({}, next) => State({initValue: location, next})],
    ({address}) => next({
        render: () => (
            <>
                <label htmlFor="search-adress"></label>
                <input {...{
                    className: "w-100",
                    type: "text",
                    name: "search-address",
                    id: "search-address",
                    placeholder: "Search for an address",
                    ...bindInput(address)
                }}/>
            </>
        ),
        formControls: {
            invalid: address.value ?? "",
            showErrors: () => <p className="text-danger">Address is required</p>,
            addData: (ret) => ({...ret, address: address.value}),
        },
        value: address.value
    })
)