import { useState } from 'react';

function handleSubmit(event, food, setFoodFunc) {
    alert("A food was submitted: " + food);
    setFoodFunc(food);
    event.preventDefault();
}

const Form = () => {

    const [food, setFood] = useState("");


    const setFoodAux = setFood;

    return (
        <div>
            <form onSubmit={handleSubmit(food, setFoodAux)}>

                <label>
                    <input type="text" placeholder="Type a food..."
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