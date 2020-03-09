module.exports = function check(str, bracketsConfig) {
    let arrstr = str.split( '' );

    for (let i = 0; i < arrstr.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (arrstr[i] === bracketsConfig[j][0] && arrstr[i + 1] === bracketsConfig[j][1]) {
                arrstr.splice(i, 2);
                i = -1;
            }
		}
		if (arrstr.length === 0){
            return true;
        }
	}

	return false;
}