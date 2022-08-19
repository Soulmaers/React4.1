
export default function Form({ onChange, value, rgb }) {

    const onChangeForm = (event) => {
        onChange(event.target.value)
    }
    return (
        <>
            <form className="form">
                <input
                    className="input"
                    type="text"
                    maxLength="7"
                    onChange={onChangeForm}
                    value={value}>
                </input>
            </form>
            <div className="rgbOut">{rgb}</div>
        </>
    )
}