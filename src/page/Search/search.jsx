import "./search.scss"
import {SearchForm} from "./search-form/search-form.jsx";
export function Search() {
    const searchForm = SearchForm();
    return (
        <div className="bg-1 text-light text-start px-4 py-4 ">
            {searchForm.render()}

        </div>
    )
}
