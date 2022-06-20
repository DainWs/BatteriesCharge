// declaración sql
var sqlMap = {
    completeQuery: 'SELECT * FROM BATTERIES B LEFT OUTER JOIN BATTERIES_ENTRY E ON B.ID = E.BATTERIES_ID',
    batteries: {
        // Agregar batteries
        add: 'INSERT INTO batteries(id, name) VALUES (?, ?)',
        update: 'UPDATE BATTERIES SET nombre=?, inputPin=?, outputPin=? WHERE id=?',
        // consulta al batteries
        selectAll: 'SELECT ID AS id, NOMBRE AS nombre, INPUTPIN AS inputPin, OUTPUTPIN AS outputPin FROM batteries',
		select: 'SELECT ID AS id, NOMBRE AS nombre, INPUTPIN AS inputPin, OUTPUTPIN AS outputPin FROM batteries WHERE id == ?'
    }
};

module.exports = sqlMap;
