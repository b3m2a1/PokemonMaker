// All of the Encryption functions

function MakeHexC(JI) {
    // Version 3.00 07/26/2002 08:00 PM CST
    // Convert 1 JunkChar to HexChar "0" - "F"
    //
    var HO = " ";
    HO = "*";
    if (JI == "?") {
        HO = "0";
    }
    if (JI == "0") {
        HO = "0";
    }
    if (JI == "1") {
        HO = "1";
    }
    if (JI == "2") {
        HO = "2";
    }
    if (JI == "3") {
        HO = "3";
    }
    if (JI == "4") {
        HO = "4";
    }
    if (JI == "5") {
        HO = "5";
    }
    if (JI == "6") {
        HO = "6";
    }
    if (JI == "7") {
        HO = "7";
    }
    if (JI == "8") {
        HO = "8";
    }
    if (JI == "9") {
        HO = "9";
    }
    if (JI == "a") {
        HO = "A";
    }
    if (JI == "b") {
        HO = "B";
    }
    if (JI == "c") {
        HO = "C";
    }
    if (JI == "d") {
        HO = "D";
    }
    if (JI == "e") {
        HO = "E";
    }
    if (JI == "f") {
        HO = "F";
    }
    if (JI == "A") {
        HO = "A";
    }
    if (JI == "B") {
        HO = "B";
    }
    if (JI == "C") {
        HO = "C";
    }
    if (JI == "D") {
        HO = "D";
    }
    if (JI == "E") {
        HO = "E";
    }
    if (JI == "F") {
        HO = "F";
    }
    return HO;
}

function MakeHexW(JI) {
    // Version 3.00 07/26/2002 08:00 PM CST
    // Take Junk Code and Make it Hex
    // init vars
    // vars for input & output
    var mx = "0123456789abcdef";
    var HO = "ERROR           ";
    //  var for parsing HexInput
    var CHF = "F";
    var CHE = "E";
    var CHD = "D";
    var CHC = "C";
    var CHB = "B";
    var CHA = "A";
    var CH9 = "9";
    var CH8 = "8";
    var CH7 = "7";
    var CH6 = "6";
    var CH5 = "5";
    var CH4 = "4";
    var CH3 = "3";
    var CH2 = "2";
    var CH1 = "1";
    var CH0 = "0";
    var chkspace = " ";
    // Parse JunkIn and make valid hex
    mx = JI;
    CHF = MakeHexC(mx.substring(0, 1));
    CHE = MakeHexC(mx.substring(1, 2));
    CHD = MakeHexC(mx.substring(2, 3));
    CHC = MakeHexC(mx.substring(3, 4));
    CHB = MakeHexC(mx.substring(4, 5));
    CHA = MakeHexC(mx.substring(5, 6));
    CH9 = MakeHexC(mx.substring(6, 7));
    CH8 = MakeHexC(mx.substring(7, 8));
    chkspace = mx.substring(8, 9);
    if (chkspace == " " || chkspace == ":") {
        CH7 = MakeHexC(mx.substring(9, 10));
        CH6 = MakeHexC(mx.substring(10, 11));
        CH5 = MakeHexC(mx.substring(11, 12));
        CH4 = MakeHexC(mx.substring(12, 13));
        CH3 = MakeHexC(mx.substring(13, 14));
        CH2 = MakeHexC(mx.substring(14, 15));
        CH1 = MakeHexC(mx.substring(15, 16));
        CH0 = MakeHexC(mx.substring(16, 17));
    } else {
        CH7 = MakeHexC(mx.substring(8, 9));
        CH6 = MakeHexC(mx.substring(9, 10));
        CH5 = MakeHexC(mx.substring(10, 11));
        CH4 = MakeHexC(mx.substring(11, 12));
        CH3 = MakeHexC(mx.substring(12, 13));
        CH2 = MakeHexC(mx.substring(13, 14));
        CH1 = MakeHexC(mx.substring(14, 15));
        CH0 = MakeHexC(mx.substring(15, 16));
    }
    HO = CHF + CHE + CHD + CHC + CHB + CHA + CH9 + CH8;
    HO += CH7 + CH6 + CH5 + CH4 + CH3 + CH2 + CH1 + CH0;
    return HO;
}

function DecToHex(DecNum, Group, Sign, Dollar) {
    // All Function by kpdavatar@programmer.net
    // Version 8.02s 09/25/2003 04:00 PM CST
    // DecNum = Decimal Number In
    // Group = Number of digit to show
    // Sign = 0 no sign / Sign = 1 show sign / Sign = 2 invert bits
    // Dollar = 0 no $ / Dollar = 1 show $
    // 0xFF javascript hex value
    // 4294967296 dec = 0x100000000 hex too big
    // 268435456 dec = 0x10000000 hex
    // 16777216 dec = 0x1000000 hex
    // 1048576 dec = 0x100000 hex
    // 65536 dec = 0x10000 hex
    // 4096 dec = 0x1000 hex
    // 256 dec = 0x100 hex
    // 16 dec = 0x10 hex
    // 1 dec = 0x01 hex
    var HexChars = "0123456789ABCDEF";
    var HexOut = "00000000";
    var tc = " ";
    var H7 = 0;
    var H6 = 0;
    var H5 = 0;
    var H4 = 0;
    var H3 = 0;
    var H2 = 0;
    var H1 = 0;
    var H0 = 0;
    var a = 0;
    var b = 0;
    var g = 1;
    var s = 0;
    var st = 0;
    var d = 0;
    s = 0;
    st = 0;
    if (Sign == 1) {
        s = 1;
    }
    if (Sign == 2) {
        s = 2;
    }
    d = 0;
    if (Dollar == 1) {
        d = 1;
    }
    g = 1;
    g = Group;
    if (g < 1 || g > 8) {
        g = 1;
    }
    a = DecNum;
    if (a < 0) {
        st = 1;
        if (s == 1) {
            a = a * -1;
        }
        if (s == 2) {
            a = a * -1;
            a -= 1;
        }
    }
    if (a > 0xFFFFFFFF) {
        a = 0;
    }
    b = a % 0x10000000;
    H7 = (a - b) / 0x10000000;
    a = b;
    b = a % 0x1000000;
    H6 = (a - b) / 0x1000000;
    a = b;
    b = a % 0x100000;
    H5 = (a - b) / 0x100000;
    a = b;
    b = a % 0x10000;
    H4 = (a - b) / 0x10000;
    a = b;
    b = a % 0x1000;
    H3 = (a - b) / 0x1000;
    a = b;
    b = a % 0x100;
    H2 = (a - b) / 0x100;
    a = b;
    b = a % 0x10;
    H1 = (a - b) / 0x10;
    H0 = b;
    HexOut = "";
    if (s == 1) {
        if (st == 1) {
            HexOut += "-";
        } else {
            HexOut += "+";
        }
    }
    if (d == 1) {
        HexOut += "$";
    }
    if (g > 7) {
        tc = HexChars.charAt(H7);
        if (s == 2 && st == 1) {
            tc = InvHex(tc);
        }
        HexOut += tc;
    }
    if (g > 6) {
        tc = HexChars.charAt(H6);
        if (s == 2 && st == 1) {
            tc = InvHex(tc);
        }
        HexOut += tc;
    }
    if (g > 5) {
        tc = HexChars.charAt(H5);
        if (s == 2 && st == 1) {
            tc = InvHex(tc);
        }
        HexOut += tc;
    }
    if (g > 4) {
        tc = HexChars.charAt(H4);
        if (s == 2 && st == 1) {
            tc = InvHex(tc);
        }
        HexOut += tc;
    }
    if (g > 3) {
        tc = HexChars.charAt(H3);
        if (s == 2 && st == 1) {
            tc = InvHex(tc);
        }
        HexOut += tc;
    }
    if (g > 2) {
        tc = HexChars.charAt(H2);
        if (s == 2 && st == 1) {
            tc = InvHex(tc);
        }
        HexOut += tc;
    }
    if (g > 1) {
        tc = HexChars.charAt(H1);
        if (s == 2 && st == 1) {
            tc = InvHex(tc);
        }
        HexOut += tc;
    }
    tc = HexChars.charAt(H0);
    if (s == 2 && st == 1) {
        tc = InvHex(tc);
    }
    HexOut += tc;
    // output HexOut
    return HexOut;
}

function InvHex(Hex) {
    // All Function by kpdavatar@programmer.net
    // Version 8.02s 09/25/2003 04:00 PM CST
    var IHex = "0";
    if (Hex == "0") {
        IHex = "F";
    }
    if (Hex == "1") {
        IHex = "E";
    }
    if (Hex == "2") {
        IHex = "D";
    }
    if (Hex == "3") {
        IHex = "C";
    }
    if (Hex == "4") {
        IHex = "B";
    }
    if (Hex == "5") {
        IHex = "A";
    }
    if (Hex == "6") {
        IHex = "9";
    }
    if (Hex == "7") {
        IHex = "8";
    }
    if (Hex == "8") {
        IHex = "7";
    }
    if (Hex == "9") {
        IHex = "6";
    }
    if (Hex == "A") {
        IHex = "5";
    }
    if (Hex == "B") {
        IHex = "4";
    }
    if (Hex == "C") {
        IHex = "3";
    }
    if (Hex == "D") {
        IHex = "2";
    }
    if (Hex == "E") {
        IHex = "1";
    }
    if (Hex == "F") {
        IHex = "0";
    }
    if (Hex == "a") {
        IHex = "5";
    }
    if (Hex == "b") {
        IHex = "4";
    }
    if (Hex == "c") {
        IHex = "3";
    }
    if (Hex == "d") {
        IHex = "2";
    }
    if (Hex == "e") {
        IHex = "1";
    }
    if (Hex == "f") {
        IHex = "0";
    }
    return IHex;
}

function GAD(Code, what) {
    // Version 9.00 07/30/2003 09:22 PM CST
    // Gamboy Advance Decrypt
    var x = " ";
    var y = " ";
    var ta = " ";
    var tv = " ";
    var z = " ";
    var mx = " ";
    // Get Code
    x = Code;
    mx = x + "00000000000000000";
    mx = mx.substr(0, 17);
    // make sure input is hex
    mx = MakeHexW(mx);
    ta = mx.substr(0, 8);
    tv = mx.substr(8, 16);
    y = GADecrypt(ta, tv, what);
    // put Hex code out
    x = y.substring(0, 8);
    z = y.substring(8, 16);
    y = x + z;
    // y+=" "+what;
    return y;
}

function GADecrypt(ar, vl, what) {
    // Version 9.00 07/30/2003 09:22 PM CST
    // Use Parasyte Info.
    var rs = "0xC6EF3720";
    var ra = "0x9E3779B9";
    var v1s0 = "0x09F4FBBD";
    var v1s1 = "0x9681884A";
    var v1s2 = "0x352027E9";
    var v1s3 = "0xF3DEE5A7";
    var v3s0 = "0x7AA9648F";
    var v3s1 = "0x7FAE6994";
    var v3s2 = "0xC0EFAAD5";
    var v3s3 = "0x42712C57";
    var loop = 0;
    var tval = 0;
    var tadd = 0;
    var shif = 0;
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    var r = 0;
    var rsa = 0;
    var t = 0;
    var t2 = 0;
    var hout = "0123456789ancdef";

    r = 1 * rs;
    rsa = 1 * ra;
    if (what == "1") {
        s0 = 1 * v1s0;
        s1 = 1 * v1s1;
        s2 = 1 * v1s2;
        s3 = 1 * v1s3;
    } else {
        s0 = 1 * v3s0;
        s1 = 1 * v3s1;
        s2 = 1 * v3s2;
        s3 = 1 * v3s3;
    }
    tval = 1 * ("0x" + vl);
    tadd = 1 * ("0x" + ar);
    l = 32;
    while (l > 0) {
        t = (tadd << 4) & (1 * "0xFFFFFFFF");
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t += s2;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t2 = tadd + r;
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t ^= t2;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t2 = (tadd >> 5) & (1 * "0x07FFFFFF");
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t2 += s3;
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t ^= t2;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        tval -= t;
        if (tval < 0) {
            tval += (1 * "0x100000000");
        }
        if (tval > (1 * "0xFFFFFFFF")) {
            tval -= (1 * "0x100000000");
        }
        t = (tval << 4) & (1 * "0xFFFFFFFF");
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t += s0;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t2 = tval + r;
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t ^= t2;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t2 = (tval >> 5) & (1 * "0x07FFFFFF");
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t2 += s1;
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t ^= t2;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        tadd -= t;
        if (tadd < 0) {
            tadd += (1 * "0x100000000");
        }
        if (tadd > (1 * "0xFFFFFFFF")) {
            tadd -= (1 * "0x100000000");
        }
        r -= rsa;
        if (r < 0) {
            r += (1 * "0x100000000");
        }
        if (r > (1 * "0xFFFFFFFF")) {
            r -= (1 * "0x100000000");
        }
        l--;
    }
    hout = DecToHex(tadd, 8, 2) + DecToHex(tval, 8, 2);
    return hout;
}

function GAE(Code, what) {
    // Version 9.00 07/30/2003 09:22 PM CST
    // Gamboy Advance Decrypt
    var x = " ";
    var y = " ";
    var ta = " ";
    var tv = " ";
    var z = " ";
    var mx = " ";
    // Get Code
    x = Code;
    mx = x + "00000000000000000";
    mx = mx.substr(0, 17);
    // make sure input is hex
    mx = MakeHexW(mx);
    ta = mx.substr(0, 8);
    if (what == "1") {
        ta = "2" + ta.substr(1, 8);
    }
    if (what == "3") {
        ta = "04" + mx.substr(1, 1) + mx.substr(3, 5);
    }
    // if(what=="3") { ta="04"+mx.substr(1,2)+ mx.substr(3,8); )
    tv = mx.substr(8, 16);
    y = GAEncrypt(ta, tv, what);
    // put Hex code out
    x = y.substring(0, 8);
    z = y.substring(8, 16);
    y = x + " " + z;
    // y+=" "+what;
    return y;
}

function GAEncrypt(ar, vl, what) {
    // Version 9.00 07/30/2003 09:22 PM CST
    // Use Parasyte Info.
    var rs = "0x00000000";
    var ra = "0x9E3779B9";
    var v1s0 = "0x09F4FBBD";
    var v1s1 = "0x9681884A";
    var v1s2 = "0x352027E9";
    var v1s3 = "0xF3DEE5A7";
    var v3s0 = "0x7AA9648F";
    var v3s1 = "0x7FAE6994";
    var v3s2 = "0xC0EFAAD5";
    var v3s3 = "0x42712C57";
    var loop = 0;
    var tval = 0;
    var tadd = 0;
    var shif = 0;
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    var r = 0;
    var rsa = 0;
    var t = 0;
    var t2 = 0;
    var hout = "0123456789ancdef";

    r = 1 * rs;
    rsa = 1 * ra;
    if (what == "1") {
        s0 = 1 * v1s0;
        s1 = 1 * v1s1;
        s2 = 1 * v1s2;
        s3 = 1 * v1s3;
    } else {
        s0 = 1 * v3s0;
        s1 = 1 * v3s1;
        s2 = 1 * v3s2;
        s3 = 1 * v3s3;
    }
    tval = 1 * ("0x" + vl);
    tadd = 1 * ("0x" + ar);
    l = 32;
    while (l > 0) {
        r += rsa;
        if (r < 0) {
            r += (1 * "0x100000000");
        }
        if (r > (1 * "0xFFFFFFFF")) {
            r -= (1 * "0x100000000");
        }
        t = (tval << 4) & (1 * "0xFFFFFFFF");
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t += s0;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t2 = tval + r;
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t ^= t2;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t2 = (tval >> 5) & (1 * "0x07FFFFFF");
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t2 += s1;
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t ^= t2;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        tadd += t;
        if (tadd < 0) {
            tadd += (1 * "0x100000000");
        }
        if (tadd > (1 * "0xFFFFFFFF")) {
            tadd -= (1 * "0x100000000");
        }
        t = (tadd << 4) & (1 * "0xFFFFFFFF");
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t += s2;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t2 = tadd + r;
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t ^= t2;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        t2 = (tadd >> 5) & (1 * "0x07FFFFFF");
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t2 += s3;
        if (t2 < 0) {
            t2 += (1 * "0x100000000");
        }
        if (t2 > (1 * "0xFFFFFFFF")) {
            t2 -= (1 * "0x100000000");
        }
        t ^= t2;
        if (t < 0) {
            t += (1 * "0x100000000");
        }
        if (t > (1 * "0xFFFFFFFF")) {
            t -= (1 * "0x100000000");
        }
        tval += t;
        if (tval < 0) {
            tval += (1 * "0x100000000");
        }
        if (tval > (1 * "0xFFFFFFFF")) {
            tval -= (1 * "0x100000000");
        }
        l--;
    }
    hout = DecToHex(tadd, 8, 2) + DecToHex(tval, 8, 2);
    return hout;
}

function ec(addr, dat, s, r) {
    var dh = " ";
    var dl = " ";
    var ah = " ";
    var al = " ";
    var a = 0;
    var A0 = " ";
    var A1 = " ";
    var A2 = " ";
    var tt = " ";
    tt = "";
    if (s == 32) {
        if (r == 0) {
            tt = addr + ":" + dat;
        }
        if (r == 1) {
            al = addr.substring(1, 8);
            A1 = "2" + al;
            tt = GAEncrypt(A1, dat, "1");
        }
        if (r == 2) {
            ah = addr.substring(1, 2);
            al = addr.substring(3, 8);
            A1 = "04" + ah + al;
            tt = GAEncrypt(A1, dat, "3");
            tt = tt.substring(0, 8) + " " + tt.substring(8, 16);
        }
        if (r == 3 || r == 5) {
            al = addr.substring(1, 8);
            A1 = "8" + al;
            dl = dat.substring(4, 8);
            tt = A1 + " " + dl + "\r\n";
            a = (1 * ("0x" + addr)) + 2;
            A0 = DecToHex(a, 8);
            al = A0.substring(1, 8);
            A1 = "8" + al;
            dh = dat.substring(0, 4);
            tt += A1 + " " + dh;
        }
    }
    if (s == 16) {
        if (r == 0) {
            tt = addr + ":" + dat;
        }
        if (r == 1) {
            al = addr.substring(1, 8);
            A1 = "1" + al;
            A2 = "0000" + dat;
            tt = GAEncrypt(A1, A2, "1");
        }
        if (r == 2) {
            ah = addr.substring(1, 2);
            al = addr.substring(3, 8);
            A1 = "02" + ah + al;
            A2 = "0000" + dat;
            tt = GAEncrypt(A1, A2, "3");
            tt = tt.substring(0, 8) + " " + tt.substring(8, 16);
        }
        if (r == 3 || r == 5) {
            al = addr.substring(1, 8);
            A1 = "8" + al;
            tt = A1 + " " + dat;
        }
    }
    if (s == 8) {
        if (r == 0) {
            tt = addr + ":" + dat;
        }
        if (r == 1) {
            al = addr.substring(1, 8);
            A1 = "0" + al;
            A2 = "000000" + dat;
            tt = GAEncrypt(A1, A2, "1");
        }
        if (r == 2) {
            ah = addr.substring(1, 2);
            al = addr.substring(3, 8);
            A1 = "00" + ah + al;
            A2 = "000000" + dat;
            tt = GAEncrypt(A1, A2, "3");
            tt = tt.substring(0, 8) + " " + tt.substring(8, 16);
        }
        if (r == 3 || r == 5) {
            al = addr.substring(1, 8);
            A1 = "3" + al;
            tt = A1 + " 00" + dat;
        }
    }
    return tt;
}

function IsCode(C) {
    var e = 0;
    e = 0;
    if (C == "0") {
        e = 1;
    }
    if (C == "1") {
        e = 1;
    }
    if (C == "2") {
        e = 1;
    }
    if (C == "3") {
        e = 1;
    }
    if (C == "4") {
        e = 1;
    }
    if (C == "5") {
        e = 1;
    }
    if (C == "6") {
        e = 1;
    }
    if (C == "7") {
        e = 1;
    }
    if (C == "8") {
        e = 1;
    }
    if (C == "9") {
        e = 1;
    }
    if (C == "a") {
        e = 1;
    }
    if (C == "b") {
        e = 1;
    }
    if (C == "c") {
        e = 1;
    }
    if (C == "d") {
        e = 1;
    }
    if (C == "e") {
        e = 1;
    }
    if (C == "f") {
        e = 1;
    }
    if (C == "A") {
        e = 1;
    }
    if (C == "B") {
        e = 1;
    }
    if (C == "C") {
        e = 1;
    }
    if (C == "D") {
        e = 1;
    }
    if (C == "E") {
        e = 1;
    }
    if (C == "F") {
        e = 1;
    }
    if (C.charCodeAt(0) == 13) {
        e = 2;
    }
    if (C.charCodeAt(0) == 10) {
        e = 2;
    }
    if (C == " ") {
        e = 2;
    }
    if (C == ":") {
        e = 2;
    }
    return e;
}