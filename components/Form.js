import {useState} from 'react';
import AsyncSelect from 'react-select/async';
import fetch from 'isomorphic-unfetch';


/*const options = [
  { value: 'chocolate', label: 'Chocolate' }
];*/

const Form = () => {

  const [food, setFood] = useState("");
  const [selectedOption, setSelectedOption] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
  }

  function handleChange (selectedOption) {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  }

  async function getIngredients(ingredient){
    
    const res = await fetch('https://api.spoonacular.com/food/ingredients/search?apiKey=' + process.env.SPOONACULAR_API_KEY + '&query=' + ingredient + '&number=20');
    const ingredientList = await res.json();

    const options = [];
    ingredientList.results.forEach((i) => {

      options.push({value: i.name, label: i.name.toUpperCase()});

    });
    
    return options;

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>

          <div id="select">
            <AsyncSelect
                value={selectedOption}
                onChange={handleChange}
                loadOptions={getIngredients}
                defaultOptions
            />
          </div>

          <input type="submit" value="Add" id="search"/>

        </div>

      </form>

      <style jsx>{`

              #select{
                display: inline-block;
                width: 153em;
                margin-right: 10px;
              }

              #search{
                display: inline-block;
              }
                
            `}

      </style>

    </div>


  );

};

export default Form;