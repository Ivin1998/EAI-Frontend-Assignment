import axios from 'axios'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {

	const [stockName, setStockName] = useState('');
	const [date, setDate] = useState('');
	const [stockData, setStockData] = useState(null);
	const [resultSet,setResultSet] = useState(0);

	const getStocks = async (e) => {
		e.preventDefault();
		const data = await getData(stockName, date);
		if (data?.results && data.results.length > 0) {
			setStockData(data.results[0]);
		}
		else {
			setStockData(null);
		}
		setResultSet(data.resultsCount);
	}
	return (
		<>
			<Card style={{ width: '100%', backgroundColor: '#069430', color: 'white' }}>

				<Card.Body>
					<Card.Title style={{ color: 'white' }}>Stock Analytics</Card.Title>
				</Card.Body>
			</Card>
			<div className='row container'>
				<div className='col col-md-8'>
					<form onSubmit={getStocks}>
						<label style={{ marginTop: '20px' }}>Stock Symbol : </label>
						<input type='text' name='stockName' className='form-control' value={stockName} required
							onChange={(e) => setStockName(e.target.value)} style={{ width: '60%', marginBottom: '20px', marginTop: '20px' }} />

						<input type='date' name='date' className='form-control' value={date} required
							style={{ width: '60%', marginBottom: '20px' }} onChange={(e) => setDate(e.target.value)} />
						<button type="submit" className='btn btn-primary'>Get Stock Insight</button>
					</form>
                 	{resultSet ? (
						<>
						{stockData && (
						<Row style={{ marginTop: '25px' }}>
							<Col xs={6} className="data-point">
								<strong>Opens:</strong> {stockData.o}
							</Col>
							<Col xs={6} className="data-point">
								<strong>Close:</strong> {stockData.c}
							</Col>
							<Col xs={6} className="data-point">
								<strong>High:</strong> {stockData.h}
							</Col>
							<Col xs={6} className="data-point">
								<strong>Low:</strong> {stockData.l}
							</Col>
							<Col xs={6} className="data-point">
								<strong>Volume:</strong> {stockData.v}
							</Col>
						</Row>
					)}
					</>
					):(<div><br/>No data found</div>)}
					
				</div>
				<div className='col col-md-4'>
					<Card className="points-card" >
						<Card.Body>
							<Card.Title className="card-title">Points to Remember</Card.Title>
							<Card.Text>
								5 API calls can be done in one minute.
							</Card.Text>
							<Card.Text>
								Use Stock Symbols for getting information.
							</Card.Text>
							<Card.Text>
							(Eg.)  AMZN, MSFT,  AAPL, NVDA, ABNB, SHOP etc..,
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</>
	)
}

async function getData(stockName, date) {
	try {
		let reqData = {
			stockName: stockName,
			date: date
		}
		const response = await axios.post('http://localhost:5000/api/fetchStockData', reqData);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export default App;