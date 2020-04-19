import { useState } from 'react';

function handleSubmit(event) {
    alert("A food was submitted: " + food);
    event.preventDefault();
}

const Form = () => {

    const [food, setFood] = useState("");

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>
                    <input type="text" placeholder="Type a food..." value={food}
                        />
                </label>

                <input type="submit" value="Add" className="input"/>

            </form>

            <style jsx>{`
            .input {
                margin-left: 1em;
            }
            `}</style>
        </div>


    );

};

export default Form;