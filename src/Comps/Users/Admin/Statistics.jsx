
import { PieChart } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';

const item = {
    margin: "5px",
    color: "#363636",
    backgroundColor: "#efefef",
    borderRadius: "05px"
  }
  const text = {
    margin: "5px",
  }

const Statistics =()=>
    {
        return (
            <>
            <h3 style={{display: "flex", marginBottom: "5px"}}>Total Sold Products</h3>
            <PieChart
                series={[
                    {
                    data: [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                    ],
                    },
                ]}
                width={400}
                height={200}
                />
                <br/>
            <h3 style={{display: "flex", marginBottom: "5px"}}>Product Quantity Par Customer</h3>
            <dir style={{display: "flex", justifyContent: "flex-start", padding: "0px" ,marginTop: "5px"}}>
                <p style={text}>Selected User:</p>
                <select style={item}>
                    <option>None</option>
                </select>
            </dir>
            <BarChart
                xAxis={[
                    {
                    id: 'barCategories',
                    data: ['bar A', 'bar B', 'bar C'],
                    scaleType: 'band',
                    },
                ]}
                series={[
                    {
                    data: [2, 5, 3],
                    },
                ]}
                width={500}
                height={300}
                />
            </>
        )
    }
    export default Statistics;