import {Fragment} from "react";

export const combineFormControls = (formControls) => ({
    render: () =>
        formControls?.map((comp, i) => <Fragment key={i}>{comp.render()}</Fragment>),
    invalid: formControls.some((comp) => comp.invalid),
    json: () => {
        let data = {};
        for (const comp of formControls) {
                data = comp.addData(data);
        }
        return JSON.stringify(data);
    },
    showErrors: () => {
        const errorComponent = formControls.find((comp) => comp.invalid)?.showErrors();
        // Render hoặc sử dụng errorComponent ở đây
        return errorComponent;
    },

})
