
async function getPeople() {
	try {
		const response = await fetch("https://randomuser.me/api/?results=25&nat=us");
		if (!response.ok) {
			throw new Error(`HTTP Error: ${response.status}`);
        }
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(`Could not get names: ${error}`);
	}
}

async function buildTable() {
	const peopleData = {};

	try {
		const data = await getPeople();
		const objectData = JSON.parse(data);
		for (){
			peopleData.person =
		}

		const lastName = objectData.name.last
	} catch (e) {
		console.log("Error " + e);
	}
}

buildTable();

