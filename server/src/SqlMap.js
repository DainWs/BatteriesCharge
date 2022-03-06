// declaración sql
var sqlMap = {
    batteries: {
        // Agregar batteries
        add: 'INSERT INTO batteries(id, name) VALUES (?, ?)',
        // consulta al batteries
        selectAll: 'SELECT * FROM batteries',
		select: 'SELECT * FROM batteries WHERE id == "%"?"%"'
    },
	batteriesEntries: {
		// Agregar batteriesEntry
		add: 'INSERT INTO batteriesEntries(batteryId, id, voltage) VALUES (?, ?, ?)',
		// consulta al batteriesEntry
        selectAll: 'SELECT * FROM batteriesEntries',
		select: 'SELECT * FROM batteriesEntries WHERE batteryId == "%"?"%"'
	}
};

module.exports = sqlMap;
