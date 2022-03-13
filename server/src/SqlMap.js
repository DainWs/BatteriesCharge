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
		add: 'INSERT INTO BATTERIES_ENTRY VALUES (?, ?, ?, ?)',
		// consulta al batteriesEntry
        selectAll: 'SELECT * FROM BATTERIES_ENTRY',
		select: 'SELECT * FROM BATTERIES_ENTRY WHERE batteryId == "%"?"%"'
	}
};

module.exports = sqlMap;
