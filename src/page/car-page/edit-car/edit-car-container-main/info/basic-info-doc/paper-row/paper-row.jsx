import {cs, State} from "cs-react";

export const PaperRow = ({next, field}) => cs(
    ['paperRow', ({}, next) => State({initValue: field, next})],
    ({paperRow}) => {
        const getDisplayFileName = (name, maxNameLength = 10) => {
            const nameParts = name.split('.');
            const extension = nameParts.length > 1 ? `.${nameParts.pop()}` : '';
            const baseName = nameParts.join('.');

            return baseName.length > maxNameLength
                ? `...${baseName.slice(-maxNameLength)}${extension}`
                : `${baseName}${extension}`;
        };

        return next({
                render: () => (<>
                    <td>{paperRow.value ? "Verified" : "Not available"}</td>
                    <td>
                        {paperRow.value ?
                            <a href="">{paperRow.value.name ? getDisplayFileName(paperRow.value.name) : paperRow.value}</a> :
                            <div>
                                <p className="mb-0">Not available</p>
                                <span>
                                <input type="file" name="file" id="file"
                                       onChange={e => paperRow.onChange(e.target.files[0])}/>
                            </span>
                            </div>}
                    </td>
                </>),
                value: paperRow.value?.name ? paperRow.value.name : paperRow.value
            }
        )
    }
)