import Head from 'next/head'
import Form from '../components/Form';
import FoodTable from '../components/Table';

export default function Home() {
  return (
    <div className="container">

      <main>
        <div>
          <h1>List of foods</h1>
        </div>
        <div>
            <Form />
            <FoodTable />
        </div>
      </main>

    </div>
  )
}
