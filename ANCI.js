/* ANCI v1.0.0 */

const ANCI = {
   // Style 
   reset: '\x1b[0m',
   bold: '\x1b[1m',
   dim: '\x1b[2m',
   italic: '\x1b[3m',
   underline: '\x1b[4m',
   blink: '\x1b[5m',
   inverse: '\x1b[7m',
   hidden: '\x1b[8m',
   strikethrough: '\x1b[9m',
   
   // Colors 
   black: '\x1b[30m',
   blackBg: '\x1b[40m',
   red: '\x1b[31m',
   redBg: '\x1b[41m',
   green: '\x1b[32m',
   greenBg: '\x1b[42m',
   yellow: '\x1b[33m',
   yellowBg: '\x1b[43m',
   blue: '\x1b[34m',
   blueBg: '\x1b[44m',
   magenta: '\x1b[35m',
   magentaBg: '\x1b[45m',
   cyan: '\x1b[36m',
   cyanBg: '\x1b[46m',
   white: '\x1b[37m',
   whiteBg: '\x1b[47m',
   
   // Bright Colors 
   brightBlack: '\x1b[90m',
   brightBlackBg: '\x1b[100m',
   brightRed: '\x1b[91m',
   brightRedBg: '\x1b[101m',
   brightGreen: '\x1b[92m',
   brightGreenBg: '\x1b[102m',
   brightYellow: '\x1b[93m',
   brightYellowBg: '\x1b[103m',
   brightBlue: '\x1b[94m',
   brightBlueBg: '\x1b[104m',
   brightMagenta: '\x1b[95m',
   brightMagentaBg: '\x1b[105m',
   brightCyan: '\x1b[96m',
   brightCyanBg: '\x1b[106m',
   brightWhite: '\x1b[97m',
   brightWhiteBg: '\x1b[107m',
   
   // RGB 
   rgb: (r, g, b) => `\x1b[38;2;${r};${g};${b}m`,
   rgbBG: (r, g, b) => `\x1b[48;2;${r};${g};${b}m`,
   
   // Cursor 
   home: '\x1b[H',
   saveCursorPosition: '\x1b[s',
   restoreCursorPosition: '\x1b[u',
   
   up: (n) => `\x1b[${n}A`,
   down: (n) => `\x1b[${n}B`,
   right: (n) => `\x1b[${n}C`,
   left: (n) => `\x1b[${n}D`,
   cursorTo: (x, y) => `\x1b[${x};${y}H`,
   
   // Clear
   clear: '\x1Bc',
   
}