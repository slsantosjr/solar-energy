import Container from "../../components/templates/Container"
import { Line } from 'react-chartjs-2';

export default function Dashboard() {


    return (
        <Container title="Dashboard">
            <Line
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                        {
                            id: 1,
                            label: '',
                            data: [5, 6, 7],
                        },
                        {
                            id: 2,
                            label: '',
                            data: [3, 2, 1],
                        },
                    ],
                }}
            />

        </Container>
    );
}
