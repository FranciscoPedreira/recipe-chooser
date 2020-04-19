import {useState} from 'react';

const Form = () => {

  const [food, setFood] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("A food was submitted: " + food);
    setFood('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>
          <input
            type="text"
            placeholder="Type a food..."
            value={food}
            onChange={event => setFood(event.target.value)}
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