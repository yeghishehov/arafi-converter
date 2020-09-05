const input = document.getElementById("input");
const text = document.getElementById("text");

document.getElementById("button").addEventListener('click', convetr);

function convetr () {
  text.innerHTML  = input.value
  	.split("")
	.map((char) => {
		switch (char) {
			case 'A': return 1355;
			case 'B': return 1334;
			case 'C': return 1353;
			case 'D': return 1331;
			case 'E': return 1330;
			case 'F': return 1333;
			case 'G': return 1329;
			case 'H': return 1350;
			case 'I': return 1343;
			case 'J': return 1339;
			case 'K': return 1359;
			case 'L': return 1344;
			case 'M': return 34;
			case 'N': return 1340;
			case 'O': return 1336;
			case 'P': return 1337;
			case 'Q': return 1347;
			case 'R': return 1357;
			case 'S': return 1358;
			case 'T': return 1348;
			case 'U': return 1362;
			case 'V': return 1361;
			case 'W': return 1363;
			case 'X': return 1332;
			case 'Y': return 1352;
			case 'Z': return 1338;

			case 'a': return 1403;
			case 'b': return 1382;
			case 'c': return 1401;
			case 'd': return 1379;
			case 'e': return 1378;
			case 'f': return 1381;
			case 'g': return 1377;
			case 'h': return 1398;
			case 'i': return 1391;
			case 'j': return 1387;
			case 'k': return 1407;
			case 'l': return 1392;
			case 'm': return 1373;
			case 'n': return 1388;
			case 'o': return 1384;
			case 'p': return 1385;
			case 'q': return 1395;
			case 'r': return 1405;
			case 's': return 1406;
			case 't': return 1396;
			case 'u': return 1410;
			case 'v': return 1409;
			case 'w': return 1411;
			case 'x': return 1380;
			case 'y': return 1400;
			case 'z': return 1386;

			case '0': return 1390;
			case '1': return 1413;
			case '2': return 1412;
			case '3': return 1389;
			case '4': return 1399;
			case '5': return 1404;
			case '6': return 1393;
			case '7': return 1397;
			case '8': return 1394;
			case '9': return 1408;

			case '!': return 1365;
			case '"': return 40;
			case '#': return 1341;
			case '$': return 1351;
			case '%': return 1356;
			case '&': return 1349;
			case "'": return 39;
			case '(': return 1360;
			case ')': return 1342;
			case '*': return 1346;
			case '+': return 1335;
			case ',': return 44;
			case '-': return 45;
			case '.': return 1374;
			case '/': return 1417;
			case ':': return 1354;
			case ';': return 1402;
			case '<': return 8212;
			case '=': return 1383;
			case '>': return 8228;
			case '?': return 1372;
			case '@': return 1364;
			case '[': return 1415;
			case '\\': return 187;
			case ']': return 1371;
			case '^': return 1345;
			case '_': return 95;
			case '`': return 1414;
			case '{': return 42;
			case '|': return 171;
			case '}': return 41;
			case '~': return 1366;
			case ' ': return 32;
			case '\n': return 13;

			case '≥': return 171;
			case '÷': return 187;

			case 'º': return 48;
			case '¡': return 49;
			case '™': return 50;
			case '£': return 51;
			case '¢': return 52;
			case '∞': return 53;
			case '§': return 54;
			case '¶': return 55;
			case '•': return 56;
			case 'ª': return 57;

			case '¬': return 37;
			case 'µ': return 8230;

			case 'œ': return 34;
			case 'Σ': return 34;
			case '': return 34;
			case '': return 34;

							
		}
	})
	.map(code => String.fromCharCode(code))
	.join("")  

	
}
