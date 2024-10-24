export const AddressAndDescription = () => <>
    <div className={"fw-bold col"}>
        <p className={"fs-5"}>Adress: </p>
        <div>
            <label htmlFor="search-adress"></label>
            <input  className={"w-100"} type="text" name="search-adress" id="search-adress" placeholder={"Search for an address"}/>
        </div>
        <div>
            <select className={"w-100"} name="city" id="city">
                <option value="Hanoi">Hanoi</option>
                <option value="HoChiMinh">HoChiMinh</option>
                <option value="Danang">Danang</option>
            </select>
        </div>
        <div>
            <select className={"w-100"} name="district" id="district">
                <option value="Caugiay">Cau Giay</option>
                <option value="Quan1">Quan 1</option>
                <option value="Danang">Danang</option>
            </select>
        </div>
        <div>
            <select className={"w-100"} name="ward" id="ward">
                <option value="Maidich">Maidich</option>
                <option value="Quan1">Quan 1</option>
                <option value="Danang">Danang</option>
            </select>
        </div>
    </div>
    <div className={"fw-bold col"}>
        <div>
            <p className={"fs-5"}>Description</p>
            <textarea name="description" id="description" className={'w-100'} rows="10"></textarea>
        </div>
    </div>
</>