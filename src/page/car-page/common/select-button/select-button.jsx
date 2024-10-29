import {cs, State} from "cs-react";
import "./select-button.scss"; // Import file CSS

export const SelectButton = ({value, next, rowId}) => cs(
    ["selectButton", (_, next) => State({initValue: value[0], next})],
    ({selectButton}) => {
        const handleSelect = (btn, index) => {
            selectButton.onChange(btn);
            const buttonElement = document.getElementById(`btn-${value[index]}`);
            const highlightElement = document.getElementById(`highlight-${rowId}`);
            if (buttonElement && highlightElement) {
                highlightElement.style.left = `${buttonElement.offsetLeft}px`;
                highlightElement.style.width = `${buttonElement.offsetWidth}px`;
            }
        };

        return next({
            render: () => (
                <div className="button-row">
                    <div
                        id={`highlight-${rowId}`}
                        className="highlight"
                    ></div>
                    {value?.map((btn, index) => (
                        <button
                            key={btn}
                            id={`btn-${value[index]}`}
                            className={`btn ${selectButton.value === btn && "btn-active"}`}
                            type="button"
                            onClick={() => handleSelect(btn, index)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            ),
            value: selectButton.value
        });
    }
);
