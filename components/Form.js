import {useState} from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Form = () => {

  const [food, setFood] = useState("");
  const [selectedOption, setSelectedOption] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert("A food was submitted: " + food);
    setFood('');
  }

  function handleChange (selectedOption) {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
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

      <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
      />

      <style jsx>{`
            .input {
                margin-left: 1em;
            }
            `}</style>
    </div>


  );

};

export default Form;