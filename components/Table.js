let foodArray = [
    "Avocado",
    "Lean Beef",
    "Brown Rice",
    "Grilled Vegetables"
];

let foods = foodArray.map((food) =>

    function(food) {
        return (
            <tr>
                <td>{food}</td>
            </tr>
        )
    }
);

class Table extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: foodArray};
    }

    render() {

        return (
            <div>
                <table>
                    <tbody>
                        {foods}
                    </tbody>
                </table>
            </div>
        )

    }

}

export default Table;
