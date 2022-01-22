import express from 'express';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const app = express();

app.use('/api/users', (req, res) => {
	res.json([
		{
			id: 1,
			taskDetail: 'Wake up 6 AM',
			isChecked: false
		},
		{
			id: 2,
			taskDetail: 'Take Shower',
			isChecked: true
		},
		{
			id: 3,
			taskDetail: 'Eat Breakfast at 9 AM',
			isChecked: true
		},
		{
			id: 4,
			taskDetail: 'Go to work ',
			isChecked: true
		},
		{
			id: 5,
			taskDetail: 'Back to home',
			isChecked: false
		},
		{
			id: 6,
			taskDetail: "go to gim and workout for two hour's",
			isChecked: true
		}
	]);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server run at http://localhost:${port}`));
