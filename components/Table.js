import React, { useState } from 'react';

/*

TODO: Convert above code to a functional component like the one below:

import React, { useState } from 'react';  
   
function Example() { 
  const [change, setChange] = useState(true);       
      return ( 
        <div> 
        <button onClick = {() => setChange(!change)}> 
          Click Here! 
        </button> 
        {change?<h1>Welcome to GeeksforGeeks</h1>: 
                <h1>A Computer Science Portal for Geeks</h1>} 
        </div> 
        ); 
  } 
  
export default Example; 

*/



const renderTableHeader = (students) => {
    let header = Object.keys(students[0])
    return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
    })
}

const renderTableData = () => {
    return {students}.map((student, index) => {
    const { id, name, age, email } = student //destructuring
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
        </tr>
    )
    })
}

const Table = () => {

    const [students, setStudents] = useState([]);

    //TODO: understamd better how and where to use the setState call: https://css-tricks.com/understanding-react-setstate/
    setStudents( 
        [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' }
        ] 
    )


    // setStudents( 
    //     [
    //         { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
    //         { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
    //         { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
    //         { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
    //     ] 
    // )

    return (
    <div>
        <h1 id='title'>React Dynamic Table</h1>
        <table id='students'>
            <tbody>
                <tr>{renderTableHeader({students})}</tr>
                {renderTableData({students})}
            </tbody>
        </table>

        <style jsx>{`

            #title {
                text-align: center;
                font-family: arial, sans-serif;
            }

            #students {
                text-align: center;
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                border: 3px solid #ddd;
                width: 100%;
            }

            #students td {
                border: 1px solid #ddd;
                padding: 8px;
            }

            #students tr:nth-child(even){
                background-color: #f2f2f2;
            }

            #students tr:hover {
                background-color: #ddd;
            }

            #students tr {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: center;
                background-color: #4CAF50;
                color: white;
            }

            `}

        </style>

    </div>
    )

}

export default Table;

// class Table extends Component {
//    constructor(props) {
//       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
//       this.state = { //state is by default an object
//          students: [
//             { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
//             { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
//             { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
//             { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
//          ]
//       }
//    }

//     renderTableHeader() {
//         let header = Object.keys(this.state.students[0])
//         return header.map((key, index) => {
//         return <th key={index}>{key.toUpperCase()}</th>
//         })
//     }

//     renderTableData() {
//         return this.state.students.map((student, index) => {
//         const { id, name, age, email } = student //destructuring
//         return (
//             <tr key={id}>
//                 <td>{id}</td>
//                 <td>{name}</td>
//                 <td>{age}</td>
//                 <td>{email}</td>
//             </tr>
//         )
//         })
//     }

//     render() {
//         return (
//         <div>
//             <h1 id='title'>React Dynamic Table</h1>
//             <table id='students'>
//                 <tbody>
//                     <tr>{this.renderTableHeader()}</tr>
//                     {this.renderTableData()}
//                 </tbody>
//             </table>

//             <style jsx>{`

//                 #title {
//                     text-align: center;
//                     font-family: arial, sans-serif;
//                 }

//                 #students {
//                     text-align: center;
//                     font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
//                     border-collapse: collapse;
//                     border: 3px solid #ddd;
//                     width: 100%;
//                 }

//                 #students td {
//                     border: 1px solid #ddd;
//                     padding: 8px;
//                 }

//                 #students tr:nth-child(even){
//                     background-color: #f2f2f2;
//                 }

//                 #students tr:hover {
//                     background-color: #ddd;
//                 }

//                 #students tr {
//                     padding-top: 12px;
//                     padding-bottom: 12px;
//                     text-align: center;
//                     background-color: #4CAF50;
//                     color: white;
//                 }

//                 `}

//             </style>

//         </div>
//         )
//     }

// }