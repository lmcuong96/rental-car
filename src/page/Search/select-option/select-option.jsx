export const SelectOption = () => {
    return {
        render: () => (
            <div className="d-flex gap-3">
                <div className={"icon"}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grid-2" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         className="svg-inline--fa fa-grid-2 fa-sm">
                        <path fill="currentColor"
                              d="M224 80c0-26.5-21.5-48-48-48L80 32C53.5 32 32 53.5 32 80l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96zm0 256c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96zM288 80l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48zM480 336c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96z"
                              className=""></path>
                    </svg>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list-ul" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         className="svg-inline--fa fa-list-ul fa-lg">
                        <path fill="currentColor"
                              d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
                              className=""></path>
                    </svg>
                </div>
                <div >
                    <select name="sort" id="sort" className={"p-1"}>
                        <option value="Newest">Newest to Lastest</option>
                        <option value="Oldest">Lastest to Newest</option>
                    </select>
                </div>
            </div>)
    }
}