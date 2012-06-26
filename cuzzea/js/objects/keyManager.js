/*
 * Converts a keycode (from the DOM key event) to a string.
 * @param {Number} charCode the key code from the event.
 * @return {String} a eanglish string representation of the key code.
 */
var keyCodeToString = function(charCode){
	switch(charCode){
		case 8		: return "backspace"; //  backspace
		case 9		: return "tab"; //  tab
		case 13		: return "enter"; //  enter
		case 16		: return "shift"; //  shift
		case 17		: return "ctrl"; //  ctrl
		case 18		: return "alt"; //  alt
		case 19		: return "pause/break"; //  pause/break
		case 20		: return "caps lock"; //  caps lock
		case 27		: return "escape"; //  escape
		case 33		: return "page up"; // page up, to avoid displaying alternate character and confusing people	         
		case 34		: return "page down"; // page down
		case 35		: return "end"; // end
		case 36		: return "home"; // home
		case 37		: return "left"; // left arrow
		case 38		: return "up"; // up arrow
		case 39		: return "right"; // right arrow
		case 40		: return "down"; // down arrow
		case 45		: return "insert"; // insert
		case 46		: return "delete"; // delete
		case 91		: return "left window"; // left window
		case 92		: return "right window"; // right window
		case 93		: return "select key"; // select key
		case 96		: return "numpad 0"; // numpad 0
		case 97		: return "numpad 1"; // numpad 1
		case 98		: return "numpad 2"; // numpad 2
		case 99		: return "numpad 3"; // numpad 3
		case 100	: return "numpad 4"; // numpad 4
		case 101	: return "numpad 5"; // numpad 5
		case 102	: return "numpad 6"; // numpad 6
		case 103	: return "numpad 7"; // numpad 7
		case 104	: return "numpad 8"; // numpad 8
		case 105	: return "numpad 9"; // numpad 9
		case 106	: return "multiply"; // multiply
		case 107	: return "add"; // add
		case 109	: return "subtract"; // subtract
		case 110	: return "decimal point"; // decimal point
		case 111	: return "divide"; // divide
		case 112	: return "F1"; // F1
		case 113	: return "F2"; // F2
		case 114	: return "F3"; // F3
		case 115	: return "F4"; // F4
		case 116	: return "F5"; // F5
		case 117	: return "F6"; // F6
		case 118	: return "F7"; // F7
		case 119	: return "F8"; // F8
		case 120	: return "F9"; // F9
		case 121	: return "F10"; // F10
		case 122	: return "F11"; // F11
		case 123	: return "F12"; // F12
		case 144	: return "num lock"; // num lock
		case 145	: return "scroll lock"; // scroll lock
		case 186	: return ";"; // semi-colon
		case 187	: return "="; // equal-sign
		case 188	: return ","; // comma
		case 189	: return "-"; // dash
		case 190	: return "."; // period
		case 191	: return "/"; // forward slash
		case 192	: return "`"; // grave accent
		case 219	: return "["; // open bracket
		case 220	: return "\\"; // back slash
		case 221	: return "]"; // close bracket
		case 222	: return "'"; // single quote
		default		: return String.fromCharCode(charCode); 
	}
};
/*
 * Converts a string to the keycode (from the DOM key event)
 * @param	{String} value a eanglish string representation of the key code.
 * @return	{Number} the key code from the event.
 */
var stringToKeyCode = function(value){
	switch(value){
		case 8		: return "backspace"; //  backspace
		case 9		: return "tab"; //  tab
		case 13		: return "enter"; //  enter
		case 16		: return "shift"; //  shift
		case 17		: return "ctrl"; //  ctrl
		case 18		: return "alt"; //  alt
		case 19		: return "pause/break"; //  pause/break
		case 20		: return "caps lock"; //  caps lock
		case 27		: return "escape"; //  escape
		case 33		: return "page up"; // page up, to avoid displaying alternate character and confusing people	         
		case 34		: return "page down"; // page down
		case 35		: return "end"; // end
		case 36		: return "home"; // home
		case "left"		: return 37; // left arrow
		case "up"		: return 87; // up arrow
		case "right"	: return 39; // right arrow
		case "down"		: return 40; // down arrow
		case 45		: return "insert"; // insert
		case 46		: return "delete"; // delete
		case 91		: return "left window"; // left window
		case 92		: return "right window"; // right window
		case 93		: return "select key"; // select key
		case 96		: return "numpad 0"; // numpad 0
		case 97		: return "numpad 1"; // numpad 1
		case 98		: return "numpad 2"; // numpad 2
		case 99		: return "numpad 3"; // numpad 3
		case 100	: return "numpad 4"; // numpad 4
		case 101	: return "numpad 5"; // numpad 5
		case 102	: return "numpad 6"; // numpad 6
		case 103	: return "numpad 7"; // numpad 7
		case 104	: return "numpad 8"; // numpad 8
		case 105	: return "numpad 9"; // numpad 9
		case 106	: return "multiply"; // multiply
		case 107	: return "add"; // add
		case 109	: return "subtract"; // subtract
		case 110	: return "decimal point"; // decimal point
		case 111	: return "divide"; // divide
		case 112	: return "F1"; // F1
		case 113	: return "F2"; // F2
		case 114	: return "F3"; // F3
		case 115	: return "F4"; // F4
		case 116	: return "F5"; // F5
		case 117	: return "F6"; // F6
		case 118	: return "F7"; // F7
		case 119	: return "F8"; // F8
		case 120	: return "F9"; // F9
		case 121	: return "F10"; // F10
		case 122	: return "F11"; // F11
		case 123	: return "F12"; // F12
		case 144	: return "num lock"; // num lock
		case 145	: return "scroll lock"; // scroll lock
		case 186	: return ";"; // semi-colon
		case 187	: return "="; // equal-sign
		case 188	: return ","; // comma
		case 189	: return "-"; // dash
		case 190	: return "."; // period
		case 191	: return "/"; // forward slash
		case 192	: return "`"; // grave accent
		case 219	: return "["; // open bracket
		case 220	: return "\\"; // back slash
		case 221	: return "]"; // close bracket
		case 222	: return "'"; // single quote
		default		: return value.toUpperCase().charCodeAt(0); 
	}
}