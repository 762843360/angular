'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
exports.$EOF = lang_1.CONST_EXPR(0);
exports.$TAB = lang_1.CONST_EXPR(9);
exports.$LF = lang_1.CONST_EXPR(10);
exports.$VTAB = lang_1.CONST_EXPR(11);
exports.$FF = lang_1.CONST_EXPR(12);
exports.$CR = lang_1.CONST_EXPR(13);
exports.$SPACE = lang_1.CONST_EXPR(32);
exports.$BANG = lang_1.CONST_EXPR(33);
exports.$DQ = lang_1.CONST_EXPR(34);
exports.$HASH = lang_1.CONST_EXPR(35);
exports.$$ = lang_1.CONST_EXPR(36);
exports.$PERCENT = lang_1.CONST_EXPR(37);
exports.$AMPERSAND = lang_1.CONST_EXPR(38);
exports.$SQ = lang_1.CONST_EXPR(39);
exports.$LPAREN = lang_1.CONST_EXPR(40);
exports.$RPAREN = lang_1.CONST_EXPR(41);
exports.$STAR = lang_1.CONST_EXPR(42);
exports.$PLUS = lang_1.CONST_EXPR(43);
exports.$COMMA = lang_1.CONST_EXPR(44);
exports.$MINUS = lang_1.CONST_EXPR(45);
exports.$PERIOD = lang_1.CONST_EXPR(46);
exports.$SLASH = lang_1.CONST_EXPR(47);
exports.$COLON = lang_1.CONST_EXPR(58);
exports.$SEMICOLON = lang_1.CONST_EXPR(59);
exports.$LT = lang_1.CONST_EXPR(60);
exports.$EQ = lang_1.CONST_EXPR(61);
exports.$GT = lang_1.CONST_EXPR(62);
exports.$QUESTION = lang_1.CONST_EXPR(63);
exports.$0 = lang_1.CONST_EXPR(48);
exports.$9 = lang_1.CONST_EXPR(57);
exports.$A = lang_1.CONST_EXPR(65);
exports.$E = lang_1.CONST_EXPR(69);
exports.$Z = lang_1.CONST_EXPR(90);
exports.$LBRACKET = lang_1.CONST_EXPR(91);
exports.$BACKSLASH = lang_1.CONST_EXPR(92);
exports.$RBRACKET = lang_1.CONST_EXPR(93);
exports.$CARET = lang_1.CONST_EXPR(94);
exports.$_ = lang_1.CONST_EXPR(95);
exports.$a = lang_1.CONST_EXPR(97);
exports.$e = lang_1.CONST_EXPR(101);
exports.$f = lang_1.CONST_EXPR(102);
exports.$n = lang_1.CONST_EXPR(110);
exports.$r = lang_1.CONST_EXPR(114);
exports.$t = lang_1.CONST_EXPR(116);
exports.$u = lang_1.CONST_EXPR(117);
exports.$v = lang_1.CONST_EXPR(118);
exports.$z = lang_1.CONST_EXPR(122);
exports.$LBRACE = lang_1.CONST_EXPR(123);
exports.$BAR = lang_1.CONST_EXPR(124);
exports.$RBRACE = lang_1.CONST_EXPR(125);
exports.$NBSP = lang_1.CONST_EXPR(160);
exports.$PIPE = lang_1.CONST_EXPR(124);
exports.$TILDA = lang_1.CONST_EXPR(126);
exports.$AT = lang_1.CONST_EXPR(64);
function isWhitespace(code) {
    return (code >= exports.$TAB && code <= exports.$SPACE) || (code == exports.$NBSP);
}
exports.isWhitespace = isWhitespace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLThERFlwejRqLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvY2hhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5QiwwQkFBMEIsQ0FBQyxDQUFBO0FBRXZDLFlBQUksR0FBRyxpQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLFlBQUksR0FBRyxpQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLFdBQUcsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JCLGFBQUssR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLFdBQUcsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JCLFdBQUcsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JCLGNBQU0sR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLGFBQUssR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLFdBQUcsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JCLGFBQUssR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLFVBQUUsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3BCLGdCQUFRLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixrQkFBVSxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUIsV0FBRyxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckIsZUFBTyxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekIsZUFBTyxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekIsYUFBSyxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkIsYUFBSyxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkIsY0FBTSxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEIsY0FBTSxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEIsZUFBTyxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekIsY0FBTSxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEIsY0FBTSxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEIsa0JBQVUsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLFdBQUcsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JCLFdBQUcsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JCLFdBQUcsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JCLGlCQUFTLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUUzQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVwQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVwQixpQkFBUyxHQUFHLGlCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0Isa0JBQVUsR0FBRyxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLGlCQUFTLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzQixjQUFNLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4QixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVwQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixVQUFFLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVyQixlQUFPLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixZQUFJLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixlQUFPLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixhQUFLLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUV4QixhQUFLLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QixjQUFNLEdBQUcsaUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixXQUFHLEdBQUcsaUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVsQyxzQkFBNkIsSUFBWTtJQUN2QyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksWUFBSSxJQUFJLElBQUksSUFBSSxjQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxhQUFLLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRmUsb0JBQVksZUFFM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuZXhwb3J0IGNvbnN0ICRFT0YgPSBDT05TVF9FWFBSKDApO1xuZXhwb3J0IGNvbnN0ICRUQUIgPSBDT05TVF9FWFBSKDkpO1xuZXhwb3J0IGNvbnN0ICRMRiA9IENPTlNUX0VYUFIoMTApO1xuZXhwb3J0IGNvbnN0ICRWVEFCID0gQ09OU1RfRVhQUigxMSk7XG5leHBvcnQgY29uc3QgJEZGID0gQ09OU1RfRVhQUigxMik7XG5leHBvcnQgY29uc3QgJENSID0gQ09OU1RfRVhQUigxMyk7XG5leHBvcnQgY29uc3QgJFNQQUNFID0gQ09OU1RfRVhQUigzMik7XG5leHBvcnQgY29uc3QgJEJBTkcgPSBDT05TVF9FWFBSKDMzKTtcbmV4cG9ydCBjb25zdCAkRFEgPSBDT05TVF9FWFBSKDM0KTtcbmV4cG9ydCBjb25zdCAkSEFTSCA9IENPTlNUX0VYUFIoMzUpO1xuZXhwb3J0IGNvbnN0ICQkID0gQ09OU1RfRVhQUigzNik7XG5leHBvcnQgY29uc3QgJFBFUkNFTlQgPSBDT05TVF9FWFBSKDM3KTtcbmV4cG9ydCBjb25zdCAkQU1QRVJTQU5EID0gQ09OU1RfRVhQUigzOCk7XG5leHBvcnQgY29uc3QgJFNRID0gQ09OU1RfRVhQUigzOSk7XG5leHBvcnQgY29uc3QgJExQQVJFTiA9IENPTlNUX0VYUFIoNDApO1xuZXhwb3J0IGNvbnN0ICRSUEFSRU4gPSBDT05TVF9FWFBSKDQxKTtcbmV4cG9ydCBjb25zdCAkU1RBUiA9IENPTlNUX0VYUFIoNDIpO1xuZXhwb3J0IGNvbnN0ICRQTFVTID0gQ09OU1RfRVhQUig0Myk7XG5leHBvcnQgY29uc3QgJENPTU1BID0gQ09OU1RfRVhQUig0NCk7XG5leHBvcnQgY29uc3QgJE1JTlVTID0gQ09OU1RfRVhQUig0NSk7XG5leHBvcnQgY29uc3QgJFBFUklPRCA9IENPTlNUX0VYUFIoNDYpO1xuZXhwb3J0IGNvbnN0ICRTTEFTSCA9IENPTlNUX0VYUFIoNDcpO1xuZXhwb3J0IGNvbnN0ICRDT0xPTiA9IENPTlNUX0VYUFIoNTgpO1xuZXhwb3J0IGNvbnN0ICRTRU1JQ09MT04gPSBDT05TVF9FWFBSKDU5KTtcbmV4cG9ydCBjb25zdCAkTFQgPSBDT05TVF9FWFBSKDYwKTtcbmV4cG9ydCBjb25zdCAkRVEgPSBDT05TVF9FWFBSKDYxKTtcbmV4cG9ydCBjb25zdCAkR1QgPSBDT05TVF9FWFBSKDYyKTtcbmV4cG9ydCBjb25zdCAkUVVFU1RJT04gPSBDT05TVF9FWFBSKDYzKTtcblxuZXhwb3J0IGNvbnN0ICQwID0gQ09OU1RfRVhQUig0OCk7XG5leHBvcnQgY29uc3QgJDkgPSBDT05TVF9FWFBSKDU3KTtcblxuZXhwb3J0IGNvbnN0ICRBID0gQ09OU1RfRVhQUig2NSk7XG5leHBvcnQgY29uc3QgJEUgPSBDT05TVF9FWFBSKDY5KTtcbmV4cG9ydCBjb25zdCAkWiA9IENPTlNUX0VYUFIoOTApO1xuXG5leHBvcnQgY29uc3QgJExCUkFDS0VUID0gQ09OU1RfRVhQUig5MSk7XG5leHBvcnQgY29uc3QgJEJBQ0tTTEFTSCA9IENPTlNUX0VYUFIoOTIpO1xuZXhwb3J0IGNvbnN0ICRSQlJBQ0tFVCA9IENPTlNUX0VYUFIoOTMpO1xuZXhwb3J0IGNvbnN0ICRDQVJFVCA9IENPTlNUX0VYUFIoOTQpO1xuZXhwb3J0IGNvbnN0ICRfID0gQ09OU1RfRVhQUig5NSk7XG5cbmV4cG9ydCBjb25zdCAkYSA9IENPTlNUX0VYUFIoOTcpO1xuZXhwb3J0IGNvbnN0ICRlID0gQ09OU1RfRVhQUigxMDEpO1xuZXhwb3J0IGNvbnN0ICRmID0gQ09OU1RfRVhQUigxMDIpO1xuZXhwb3J0IGNvbnN0ICRuID0gQ09OU1RfRVhQUigxMTApO1xuZXhwb3J0IGNvbnN0ICRyID0gQ09OU1RfRVhQUigxMTQpO1xuZXhwb3J0IGNvbnN0ICR0ID0gQ09OU1RfRVhQUigxMTYpO1xuZXhwb3J0IGNvbnN0ICR1ID0gQ09OU1RfRVhQUigxMTcpO1xuZXhwb3J0IGNvbnN0ICR2ID0gQ09OU1RfRVhQUigxMTgpO1xuZXhwb3J0IGNvbnN0ICR6ID0gQ09OU1RfRVhQUigxMjIpO1xuXG5leHBvcnQgY29uc3QgJExCUkFDRSA9IENPTlNUX0VYUFIoMTIzKTtcbmV4cG9ydCBjb25zdCAkQkFSID0gQ09OU1RfRVhQUigxMjQpO1xuZXhwb3J0IGNvbnN0ICRSQlJBQ0UgPSBDT05TVF9FWFBSKDEyNSk7XG5leHBvcnQgY29uc3QgJE5CU1AgPSBDT05TVF9FWFBSKDE2MCk7XG5cbmV4cG9ydCBjb25zdCAkUElQRSA9IENPTlNUX0VYUFIoMTI0KTtcbmV4cG9ydCBjb25zdCAkVElMREEgPSBDT05TVF9FWFBSKDEyNik7XG5leHBvcnQgY29uc3QgJEFUID0gQ09OU1RfRVhQUig2NCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1doaXRlc3BhY2UoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoY29kZSA+PSAkVEFCICYmIGNvZGUgPD0gJFNQQUNFKSB8fCAoY29kZSA9PSAkTkJTUCk7XG59XG4iXX0=