// Provides the core encryption functions we need for turning out memory modifications into codes

function cleanHex(str) {
    let s = "";
    for (const c of str) {
        if (c === " " || c === ":") {
        } else if (c === "?") {
            s += "0";
        } else if (c === "0") {
            s += "0";
        } else if (c === "1") {
            s += "1";
        } else if (c === "2") {
            s += "2";
        } else if (c === "3") {
            s += "3";
        } else if (c === "4") {
            s += "4";
        } else if (c === "5") {
            s += "5";
        } else if (c === "6") {
            s += "6";
        } else if (c === "7") {
            s += "7";
        } else if (c === "8") {
            s += "8";
        } else if (c === "9") {
            s += "9";
        } else if (c === "a") {
            s += "A";
        } else if (c === "b") {
            s += "B";
        } else if (c === "c") {
            s += "C";
        } else if (c === "d") {
            s += "D";
        } else if (c === "e") {
            s += "E";
        } else if (c === "f") {
            s += "F";
        } else if (c === "A") {
            s += "A";
        } else if (c === "B") {
            s += "B";
        } else if (c === "C") {
            s += "C";
        } else if (c === "D") {
            s += "D";
        } else if (c === "E") {
            s += "E";
        } else if (c === "F") {
            s += "F";
        } else {
            s += "*"
        }
    }
    return s;
}

function invertHex(str) {
    let t = "";
    for (const c of str.toUpperCase()) {
        switch (c) {
            case "0":
                t += "F";
                break;
            case "1":
                t += "E";
                break;
            case "2":
                t += "D";
                break;
            case "3":
                t += "C";
                break;
            case "4":
                t += "B";
                break;
            case "5":
                t += "A";
                break;
            case "6":
                t += "9";
                break;
            case "7":
                t += "8";
                break;
            case "8":
                t += "7";
                break;
            case "9":
                t += "6";
                break;
            case "A":
                t += "5";
                break;
            case "B":
                t += "4";
                break;
            case "C":
                t += "3";
                break;
            case "D":
                t += "2";
                break;
            case "E":
                t += "1";
                break;
            case "F":
                t += "0";
                break;
        }
    }

}

function decToHex(dec, padding = null, twos = false) {
    let d;

    if (typeof dec === "string") {
        d = parseInt(dec, 10);
    } else {
        d = dec;
    }

    const s = Math.sign(d);
    if (s === -1) {
        if (twos) {
            d = -(d + 1);
        } else {
            d *= s;
        }
    }

    let t = d.toString(16);
    if (padding !== null) {
        t = d.padStart(padding, '0');
    }

    if (s === -1) {
        if (twos) {
            t = invertHex(t);
        } else {
            t = "-" + t;
        }
    }

    return t;
}

function poketize(str, padding = null) {
    let t="";
    for (const c of str) {
        switch (c) {
            case " ":
                t += "00";
                break;
            case "~":
                t += "1B";
                break;
            case "0":
                t += "A1";
                break;
            case "1":
                t += "A2";
                break;
            case "2":
                t += "A3";
                break;
            case "3":
                t += "A4";
                break;
            case "4":
                t += "A5";
                break;
            case "5":
                t += "A6";
                break;
            case "6":
                t += "A7";
                break;
            case "7":
                t += "A8";
                break;
            case "8":
                t += "A9";
                break;
            case "9":
                t += "AA";
                break;
            case "!":
                t += "AB";
                break;
            case "?":
                t += "AC";
                break;
            case ".":
                t += "AD";
                break;
            case "-":
                t += "AE";
                break;
            case "_":
                t += "AF";
                break;
            case "=":
                t += "B0";
                break;
            case ";":
                t += "B3";
                break;
            case "'":
                t += "B4";
                break;
            case "<":
                t += "B5";
                break;
            case ">":
                t += "B6";
                break;
            case "$":
                t += "B7";
                break;
            case ",":
                t += "B8";
                break;
            case "*":
                t += "B9";
                break;
            case "/":
                t += "BA";
                break;
            case "A":
                t += "BB";
                break;
            case "B":
                t += "BC";
                break;
            case "C":
                t += "BD";
                break;
            case "D":
                t += "BE";
                break;
            case "E":
                t += "BF";
                break;
            case "F":
                t += "C0";
                break;
            case "G":
                t += "C1";
                break;
            case "H":
                t += "C2";
                break;
            case "I":
                t += "C3";
                break;
            case "J":
                t += "C4";
                break;
            case "K":
                t += "C5";
                break;
            case "L":
                t += "C6";
                break;
            case "M":
                t += "C7";
                break;
            case "N":
                t += "C8";
                break;
            case "O":
                t += "C9";
                break;
            case "P":
                t += "CA";
                break;
            case "Q":
                t += "CB";
                break;
            case "R":
                t += "CC";
                break;
            case "S":
                t += "CD";
                break;
            case "T":
                t += "CE";
                break;
            case "U":
                t += "CF";
                break;
            case "V":
                t += "D0";
                break;
            case "W":
                t += "D1";
                break;
            case "X":
                t += "D2";
                break;
            case "Y":
                t += "D3";
                break;
            case "Z":
                t += "D4";
                break;
            case "a":
                t += "D5";
                break;
            case "b":
                t += "D6";
                break;
            case "c":
                t += "D7";
                break;
            case "d":
                t += "D8";
                break;
            case "e":
                t += "D9";
                break;
            case "f":
                t += "DA";
                break;
            case "g":
                t += "DB";
                break;
            case "h":
                t += "DC";
                break;
            case "i":
                t += "DD";
                break;
            case "j":
                t += "DE";
                break;
            case "k":
                t += "DF";
                break;
            case "l":
                t += "E0";
                break;
            case "m":
                t += "E1";
                break;
            case "n":
                t += "E2";
                break;
            case "o":
                t += "E3";
                break;
            case "p":
                t += "E4";
                break;
            case "q":
                t += "E5";
                break;
            case "r":
                t += "E6";
                break;
            case "s":
                t += "E7";
                break;
            case "t":
                t += "E8";
                break;
            case "u":
                t += "E9";
                break;
            case "v":
                t += "EA";
                break;
            case "w":
                t += "EB";
                break;
            case "x":
                t += "EC";
                break;
            case "y":
                t += "ED";
                break;
            case "z":
                t += "EE";
                break;
        }
    }

    if (padding !== null) {
        for (let i = t.length; i < 2 * padding; i += 2) {
            t += "FF"
        }
    }

    return t;
}

function depoketize(str, padding = null) {
    let t="";
    for (const c of str.toUpperCase()) {
        switch (c) {
            case "00":
                t += " ";
                break;
            case "A1":
                t += "0";
                break;
            case "A2":
                t += "1";
                break;
            case "A3":
                t += "2";
                break;
            case "A4":
                t += "3";
                break;
            case "A5":
                t += "4";
                break;
            case "A6":
                t += "5";
                break;
            case "A7":
                t += "6";
                break;
            case "A8":
                t += "7";
                break;
            case "A9":
                t += "8";
                break;
            case "AA":
                t += "9";
                break;
            case "AB":
                t += "!";
                break;
            case "AC":
                t += "?";
                break;
            case "AD":
                t += ".";
                break;
            case "AE":
                t += "-";
                break;
            case "B3":
                t += ";";
                break;
            case "B7":
                t += "$";
                break;
            case "B8":
                t += ",";
                break;
            case "B9":
                t += "*";
                break;
            case "BA":
                t += "/";
                break;
            case "BB":
                t += "A";
                break;
            case "BC":
                t += "B";
                break;
            case "BD":
                t += "C";
                break;
            case "BE":
                t += "D";
                break;
            case "BF":
                t += "E";
                break;
            case "C0":
                t += "F";
                break;
            case "C1":
                t += "G";
                break;
            case "C2":
                t += "H";
                break;
            case "C3":
                t += "I";
                break;
            case "C4":
                t += "J";
                break;
            case "C5":
                t += "K";
                break;
            case "C6":
                t += "L";
                break;
            case "C7":
                t += "M";
                break;
            case "C8":
                t += "N";
                break;
            case "C9":
                t += "O";
                break;
            case "CA":
                t += "P";
                break;
            case "CB":
                t += "Q";
                break;
            case "CC":
                t += "R";
                break;
            case "CD":
                t += "S";
                break;
            case "CE":
                t += "T";
                break;
            case "CF":
                t += "U";
                break;
            case "D0":
                t += "V";
                break;
            case "D1":
                t += "W";
                break;
            case "D2":
                t += "X";
                break;
            case "D3":
                t += "Y";
                break;
            case "D4":
                t += "Z";
                break;
            case "D5":
                t += "a";
                break;
            case "D6":
                t += "b";
                break;
            case "D7":
                t += "c";
                break;
            case "D8":
                t += "d";
                break;
            case "D9":
                t += "e";
                break;
            case "DA":
                t += "f";
                break;
            case "DB":
                t += "g";
                break;
            case "DC":
                t += "h";
                break;
            case "DD":
                t += "i";
                break;
            case "DE":
                t += "j";
                break;
            case "DF":
                t += "k";
                break;
            case "E0":
                t += "l";
                break;
            case "E1":
                t += "m";
                break;
            case "E2":
                t += "n";
                break;
            case "E3":
                t += "o";
                break;
            case "E4":
                t += "p";
                break;
            case "E5":
                t += "q";
                break;
            case "E6":
                t += "r";
                break;
            case "E7":
                t += "s";
                break;
            case "E8":
                t += "t";
                break;
            case "E9":
                t += "u";
                break;
            case "EA":
                t += "v";
                break;
            case "EB":
                t += "w";
                break;
            case "EC":
                t += "x";
                break;
            case "ED":
                t += "y";
                break;
            case "EE":
                t += "z";
                break;

        }
    }

    if (padding !== null) {
        t += (" ".repeat(padding - t.length));
    }

    return t;
}

// Decryption & encryption for GSA and AR and those kinds of cheat devices
function GADE(code, what, dir) {
    let x;
    let y;
    let ta;
    let tv;
    let mx;

    // pad string and take first 16 chars
    x = code;
    mx = x + "00000000000000000";
    mx = mx.slice(0, 17);

    // make sure input is clean hex
    mx = cleanHex(mx);
    ta = mx.slice(0, 8);
    tv = mx.slice(8, 8 + 16);

    // still don't know what 'what' is --> looks like it's version of AR
    if (dir === 'encrypt') {
        y = GAEncrypt(ta, tv, what);
    } else {
        y = GADecrypt(ta, tv, what);
    }

    return y.slice(0, 8) + y.slice(8, 16);
}

function GAD(Code, what) {
    return GADE(Code, what, 'decrypt');
}

function GAE(Code, what) {
    return GADE(Code, what, 'encrypt');
}

function handleHexSign(tin) {
    let maxHex = 1 * "0xFFFFFFFF";
    let overflowHex = 1 * "0x100000000";
    let modHex = 1 * "0x07FFFFFF";

    let t = tin;
    if (t < 0) {
        t += (overflowHex);
    } else if (t > (maxHex)) {
        t -= (overflowHex);
    }

    return t
}

function encAddress(address, xkey) {
    // BA2 = decToHex(r, 8);
    // r = handleHexSign( xk ^ parseInt(BA2, 16) );
    // BA2 = decToHex(r, 8);

    return decToHex( xkey ^ address, 8 );
}

function signedHexInt(r, place = 5) {
    const mod = 4**place;
    return (r % mod) + Math.floor( r / mod );
}

function gbaEncDec(ar, vl, what, dir) {
    let tval;
    let tadd;
    let s0;
    let s1;
    let s2;
    let s3;
    let r;
    let rsa;
    let t;
    let t2;
    let l;

    r = parseInt("0xC6EF3720");
    rsa = parseInt("0x9E3779B9");
    if (what === "1") { // what is the cheat device version -- only applies to AR
        s0 = parseInt("0x09F4FBBD");
        s1 = parseInt("0x9681884A");
        s2 = parseInt("0x352027E9");
        s3 = parseInt("0xF3DEE5A7");
    } else {
        s0 = parseInt("0x7AA9648F");
        s1 = parseInt("0x7FAE6994");
        s2 = parseInt("0xC0EFAAD5");
        s3 = parseInt("0x42712C57");
    }

    tval = 1 * ("0x" + vl);
    tadd = 1 * ("0x" + ar);

    for (l = 0; l < 32; l++) {

        // the two are just the opposite directions of one another but I didn't want to have to mess with thinking
        if (dir === "encrypt") {
            r = handleHexSign(r + rsa);
            t = handleHexSign(s0 + handleHexSign((tval << 4) & (maxHex)));
            t2 = handleHexSign(tval + r);
            t = handleHexSign(t ^ t2);
            t2 = handleHexSign(s1 + handleHexSign((tval >> 5) & (modHex)));
            t = handleHexSign(t ^ t2);
            tadd = handleHexSign(tadd + t);
            t = handleHexSign(s2 + handleHexSign((tadd << 4) & (maxHex)));
            t2 = handleHexSign(tadd + r);
            t = handleHexSign(t ^ t2);
            t2 = handleHexSign(s3 + handleHexSign((tadd >> 5) & (modHex)));
            t = handleHexSign(t ^ t2);
            tval = handleHexSign(tval + t);
        } else {
            t = handleHexSign(s2 + handleHexSign((tadd << 4) & (maxHex)));
            t2 = handleHexSign(tadd + r);
            t = handleHexSign(t ^ t2);
            t2 = handleHexSign(s3 + handleHexSign((tadd >> 5) & (modHex)));
            t = handleHexSign(t ^ t2);
            tval = handleHexSign(tval - t);
            t = handleHexSign(s0 + handleHexSign((tval << 4) & (maxHex)));
            t2 = handleHexSign(tval + r);
            t = handleHexSign(t ^ t2);
            t2 = handleHexSign(s1 + handleHexSign((tval >> 5) & (modHex)));
            t = handleHexSign(t ^ t2);
            tadd = handleHexSign(tadd - t);
            r = handleHexSign(r - rsa);
        }
    }

    return (
        decToHex(tadd, 8, true) +
        decToHex(tval, 8, true)
    );
}

function GADecrypt(ar, vl, what) {
    return gbaEncDec(ar, vl, what, 'decrypt');
}

function GAEncrypt(ar, vl, what) {
    return gbaEncDec(ar, vl, what, 'encrypt');
}

function ec(addr, dat, size, device) {

    // most of this is used for padding CB codes into 32 bits because they aren't naturally that long
    let dh;
    let dl;

    let ah;
    let al;

    let a = 0;
    let addr0;
    let addr1;
    let addr2;

    let padding;
    let tt;

    let dev = device.key; // should be a DeviceData object

    tt = "";

    if (dev === "VBA") {
        tt = addr + ":" + dat;
    } else if (dev === "ARv1") {
        al = addr.slice(1, 8);
        switch (size) {
            case 32:
                addr1 = "2" + al;
                addr2 = dat;
                break;
            case 16:
                addr1 = "1" + al;
                addr2 = "0000" + dat;
                break;
            case 8:
                addr1 = "0" + al;
                addr2 = "000000" + dat;
                break;
        }
        tt = GAEncrypt(addr1, addr2, "1");
    } else if (dev === "ARv3") {
        ah = addr.substringing(1, 2);
        al = addr.substringing(3, 8);

        switch (size) {
            case 32:
                addr1 = addr1 = "04" + ah + al;
                addr2 = dat;
                break;
            case 16:
                addr1 = "02" + ah + al;
                addr2 = "0000" + dat;
                break;
            case 8:
                addr1 = "00" + ah + al;
                addr2 = "000000" + dat;
                break;
        }

        tt = GAEncrypt(addr1, addr2, "3");
        tt = tt.slice(0, 8) + " " + tt.slice(8, 16);
    } else if (dev === "CB" || dev === "CB5") {
        al = addr.slice(1, 8);

        switch (size) {
            case 32:

                addr1 = "8" + al;
                dl = dat.slice(4, 8);
                tt = addr1 + " " + dl + "\r\n";
                a = parseInt(addr, 16) + 2;
                addr0 = decToHex(a, 8);
                al = addr0.slice(1, 8);

                addr1 = tt + "8" + al;
                padding = " ";
                dh = dat.slice(0, 4);
                break;
            case 16:

                addr1 = "8" + al;
                padding = " ";
                dh = dat;
                break;
            case 8:

                addr1 = "3" + al;
                padding = " 00";
                dh = dat;
                break;
        }

        tt = addr1 + padding + dh;
    }

    return tt;
}

function pidBlockOrdering(pid) {
    let t;
    switch (Math.floor(pid % 24)) {
        case 0:
            t = "ABCD";
            break;
        case 1:
            t = "ABDC";
            break;
        case 2:
            t = "ACBD";
            break;
        case 3:
            t = "ACDB";
            break;
        case 4:
            t = "ADBC";
            break;
        case 5:
            t = "ADCB";
            break;
        case 6:
            t = "BACD";
            break;
        case 7:
            t = "BADC";
            break;
        case 8:
            t = "BCAD";
            break;
        case 9:
            t = "BCDA";
            break;
        case 10:
            t = "BDAC";
            break;
        case 11:
            t = "BDCA";
            break;
        case 12:
            t = "CABD";
            break;
        case 13:
            t = "CADB";
            break;
        case 14:
            t = "CBAD";
            break;
        case 15:
            t = "CBDA";
            break;
        case 16:
            t = "CDAB";
            break;
        case 17:
            t = "CDBA";
            break;
        case 18:
            t = "DABC";
            break;
        case 19:
            t = "DACB";
            break;
        case 20:
            t = "DBAC";
            break;
        case 21:
            t = "DBCA";
            break;
        case 22:
            t = "DCAB";
            break;
        case 23:
            t = "DCBA";
            break;
    }
    return t;
}


function encodeFormData(pokeForm) {
    let pokeman = pokeForm.pokemon;
    let trainer = pokeForm.trainer;

    let trainerID;
    let secretID;
    let randomPID;
    let shiny;

    let dex = pokeman.national_dex;
    let unknownID;

    let playerGender = trainer.gender, nature = pokeman.nature;

    let foundPID = false;

    let addrShift = parseInt("0x100000000");
    let maxAddr = parseInt("0xFFFFFFFF");

    let blocks = {
        "A": ["", "", ""],
        "B": ["", "", ""],
        "C": ["", "", ""],
        "D": ["", "", ""]
    };

    let tt, ts = " ";
    let tg = 0, gt = 0, tn = 0, tpid = 0, tid;
    let xk;

    let r = 0, r1 = 0;
    let cs = 0;

    // ensure secretID and trainerID are in the right ranges
    secretID = trainer.SecretID;
    if (secretID < 0 || secretID > 65565) { // over- or under-flowing?
        secretID = Math.round(Math.random() * 65535);
        trainer.SecretID = secretID;
    }
    trainerID = trainer.ID;
    if (trainerID < 0 || trainerID > 65565) { // over- or under-flowing?
        trainerID = Math.round(Math.random() * 65535);
        trainer.ID = trainerID;
    }
    // compute 'true' trainer ID used to determine ownership
    tid = (secretID * 65536) + (trainerID);
    // basically decToHex(secretID, 8) + decToHex(trainerID, 8) ? --> no not exactly...
    // it'll actually be decToHex(secretID, 5) + decToHex(secretID, 8)

    xk = 0;
    randomPID = pokeForm.randomPID;

    if (randomPID) {
        // we gotta find an appropriate playerID that'll work with what we have
        shiny = pokeman.shiny;
        if (shiny) {
            gt = pokeman.gender_test(); // Gender pctage something...?
            for (let i = 0; i < 65536; i++) {
                // just try a bunch of times I guess?
                // Pick a random value less than the max player ID
                r = Math.round(Math.random() * 65535);
                // use this to generate an appropriate 'XKey' which can bit XOR with the trainer to give the player ID
                xk = (r * 65536) + ( r ^ (Math.round(Math.random() * 7)));
                // reup if necessary
                if (xk < 0) { xk += addrShift; }
                // bit negate this?
                tpid = xk ^ tid;
                // reup again?
                if (tpid < 0) { tpid += addrShift; }

                // mod this thing two ways?
                tg = Math.floor(tpid % 256);
                if (tg < 0) { tg += 256; }
                tn = Math.floor(tpid % 25);
                if (tn < 0) { tn += 25; }

                // I guess there's a specialness to the Unknown / gender that we gotta satisfy too?
                if (nature.index === tn) {
                    if (tg >= gt && playerGender === 'F') {
                        if (pokeman.name === 'Unknown') {
                            if (UnownID(tpid, 1) === Utext) {
                                foundPID = true;
                                break;
                            }
                        } else {
                            foundPID = true;
                            break;
                        }
                    } else if (tg < gt && playerGender === 'M') {
                        if (pokeman.name === 'Unknown') {
                            if (UnownID(tpid, 1) === Utext) {
                                foundPID = true;
                                break;
                            }
                        } else {
                            foundPID = true;
                            break;
                        }
                    }
                }
            }
        } else {
            gt = pokeman.gender_test;
            for (let i = 0; i < 65536; i++) {
                tpid = (
                    Math.round(Math.random() * 65536) * Math.round(Math.random() * 65536)
                ) + Math.round(Math.random() * 65512);
                if (tpid < 0) { tpid += addrShift; }
                tn = Math.floor(tpid % 25);
                if (tpid < 0) { tpid += addrShift; }
                tpid += nature.index;
                if (tpid < 0) { tpid += addrShift; }
                tg = Math.floor(tpid % 256);
                if (tg < 0) { tg += 256; }
                tn = Math.floor(tpid % 25);
                if (tn < 0) { tn += 25; }
                if (nature.index === tn) {
                    if (tg >= gt && playerGender === 'F') {
                        if (pokeman.name === 'Unknown') {
                            if (UnownID(tpid, 1) === Utext) {
                                foundPID = true;
                                break;
                            }
                        } else {
                            foundPID = true;
                            break;
                        }
                    } else if (tg < gt && playerGender === 'M') {
                        if (pokeman.name === 'Unknown') {
                            if (UnownID(tpid, 1) === Utext) {
                                break;
                            }
                        } else {
                            break;
                        }
                    }
                }
            }
            xk = tid ^ tpid;
        }

        if (foundPID) {
            pokeForm.playerID = tpid;
        } else {
            pokeForm.playerID = "try again";
            pokeForm.clearCode();
            return;
        }

    } else {
        // we know the player ID so we don't need to calculate it
        tpid = pokeForm.playerID;
        tn = Math.floor(tpid % 25); // there are 25 natures
        if (tn < 0) { tn += 25; }
        nature.reinit(tn);
        tg = Math.floor(tpid % 256);
        if (tg < 0) { tg += 256; }
        r = (trainerID) ^ (Math.floor(tpid % 65536)); // lower half of the digit
        r1 = (secretID) ^ Math.floor(tpid / 65536); // upper half of the digit
        xk = r ^ r1;
        shiny = (xk < 8);
        pokeman.shiny = shiny;
        xk = tid ^ tpid;
        ts = dex;
        if (ts === "201") {
            r1 = fUnownID(f, tpid, 0);
            U.options[r1].selected = true;
        }
    }

    r1 = xk;
    if (r1 < 0) { r1 += addrShift; }
    if (r1 > (maxAddr)) { r1 -= addrShift; }

    xk = r1;
    tg = Math.floor(tpid % 256);
    gt = pokeman.gender_test;
    if (tg >= gt) {
        tg = "F";
    } else {
        tg = "M";
    }

    trainer.gender = tg;
    pokeForm.playerID = tpid;
    pokeForm.XKey = decToHex(xk, 8);
    ts = decToHex(tpid, 8);
    pokeForm.result_blocks[0] = ts;
    ts = decToHex(tid, 8);
    pokeForm.result_blocks[1] = ts;
    if (pokeman.egg) {
        pokeman.name = "EGG";
    }

    // So we encode the pokemon name first
    ts = poketize(pokeman.name, 10);
    // but now we like implicitly reverse by taking slices???
    tt = ts.slice(6, 8);
    tt += ts.slice(4, 6);
    tt += ts.slice(2, 4);
    tt += ts.slice(0, 2);
    pokeForm.result_blocks[2] = tt;

    // No idea what this is for
    tt = ts.slice(14, 16);
    tt += ts.slice(12, 14);
    tt += ts.slice(10, 12);
    tt += ts.slice(8, 10);
    pokeForm.result_blocks[3] = tt;

    //And the font into is somehow concatenated on...?
    tt = pokeForm.font;
    // 0201 Japanese
    // 0202 USA
    // 0203 French
    // 0204 Italian
    // 0205 German
    // 0206
    // 0207 Spanish
    tt += ts.slice(18, 20);
    tt += ts.slice(16, 18);
    pokeForm.result_blocks[4] = tt;

    // Then we do the same odd process for the trainer name
    if (trainer.name === "") {
        trainer.name = "b3m2a1";
    }
    ts = poketize(trainer.name, 7);
    tt = ts.slice(6, 6+2);
    tt += ts.slice(4, 4+2);
    tt += ts.slice(2, 2+2);
    tt += ts.slice(0, 2);
    pokeForm.result_blocks[5] = tt;

    // Set the 'Marks'
    r = (
        (pokeForm.marks.Heart    ? 1 : 0 ) * (2**3) +
        (pokeForm.marks.Triangle ? 1 : 0 ) * (2**2) +
        (pokeForm.marks.Square   ? 1 : 0 ) * (2**1) +
        (pokeForm.marks.Circle   ? 1 : 0 ) * (2**0)
    );
    tt = decToHex(r, 2);
    tt += ts.slice(12, 12+2);
    tt += ts.slice(10, 10+2);
    tt += ts.slice(8,  8+2);
    pokeForm.result_blocks[6]= tt;

    //region Block A
    // Encode pokemon ID and Held Item
    blocks["A"][0] = (
        decToHex(pokeman.item.index, 4) +
        decToHex(dex, 4)
    );
    pokeForm.setSubResultFlag("As", 0, blocks["A"][0]);
    blocks["A"][0] = encAddress(parseInt(blocks["A"][0], 16), xk);

    // Encode current experience
    r = pokeman.experience;
    blocks["A"][1] = decToHex(r, 8);
    pokeForm.setSubResultFlag('As', 1, blocks["A"][1]);
    blocks["A"][1] = encAddress(r, xk);
    cs += signedHexInt(r);

    // Encode used pp and happiness?
    r = (
        pokeman.moves[0].pp_ups * (4 ** 0) +
        pokeman.moves[1].pp_ups * (4 ** 1) +
        pokeman.moves[2].pp_ups * (4 ** 2) +
        pokeman.moves[3].pp_ups * (4 ** 3) +
        pokeman.happiness       * (4 ** 4)
    );
    blocks["A"][2] = decToHex(r, 8);
    pokeForm.setSubResultFlag('As', 2, blocks["A"][2]);
    blocks["A"][2] = encAddress(r, xk);
    cs += signedHexInt(r);
    //endregion

    //region Block B
    // Encode moves
    // Moves 1 and 2
    blocks["B"][0] = (
        decToHex(pokeman.moves[1].index, 4) +
        decToHex(pokeman.moves[0].index, 4)
    );
    pokeForm.setSubResultFlag('Bs', 0, blocks["B"][0]);
    blocks["B"][0] = encAddress(parseInt(blocks["B"][0], 16), xk);
    // Moves 3 and 4
    blocks["B"][1] = (
        decToHex(pokeman.moves[3].index, 4) +
        decToHex(pokeman.moves[2].index, 4)
    );
    pokeForm.setSubResultFlag('Bs', 1, blocks["B"][1]);
    blocks["B"][1] = encAddress(parseInt(blocks["B"][1], 16), xk);
    cs += (
        pokeman.moves[0].index +
        pokeman.moves[1].index +
        pokeman.moves[2].index +
        pokeman.moves[3].index
    );

    // Encode PP
    blocks["B"][2] = (
        decToHex(pokeman.moves[3].pp, 2) +
        decToHex(pokeman.moves[2].pp, 2) +
        decToHex(pokeman.moves[1].pp, 2) +
        decToHex(pokeman.moves[0].pp, 2)
    );
    pokeForm.setSubResultFlag('Bs', 2, blocks["B"][2]);
    r = parseInt(blocks["B"][2], 16);
    blocks["B"][2] = decToHex(r, 8);
    cs += signedHexInt(r);
    //endregion

    //region Block C
    // Encode stats
    blocks["C"][0] = (
        decToHex(pokeman.EVs.speed, 2) +
        decToHex(pokeman.EVs.defense, 2) +
        decToHex(pokeman.EVs.attack, 2) +
        decToHex(pokeman.EVs.hp, 2)
    );
    pokeForm.setSubResultFlag('Cs', 0, blocks["C"][0]);
    r = parseInt(blocks["C"][0], 16);
    blocks["C"][0] = encAddress(r, xk);
    cs += signedHexInt(r);

    // Encode some traits & EVs
    blocks["C"][1] = (
        decToHex(pokeman.traits.beauty, 2) +
        decToHex(pokeman.traits.cool, 2) +
        decToHex(pokeman.EVs.special_defense, 2) +
        decToHex(pokeman.EVs.special_attack, 2)
    );
    pokeForm.setSubResultFlag('Cs', 1, blocks["C"][1]);
    r = parseInt(blocks["C"][1], 16);
    blocks["C"][1] = encAddress(r, xk);
    cs += signedHexInt(r);

    // Encode rest of traits
    blocks["C"][2] = (
        decToHex(pokeman.traits.luster, 2) +
        decToHex(pokeman.traits.tough, 2) +
        decToHex(pokeman.traits.smart, 2) +
        decToHex(pokeman.traits.cute, 2)
    );
    pokeForm.setSubResultFlag('Cs', 2, blocks["C"][2]);
    r = parseInt(blocks["C"][2], 16);
    blocks["C"][2] = encAddress(r, xk);
    cs += signedHexInt(r);
    //endregion

    //region Block D
    // Encode meet loc, ball, etc.
    let ot_game = pokeman.original_.game;
    r = (
        trainer.gender.flag          * 8  * (16 ** 7) +
        (pokeman.ball.index + 1)     * 8  * (16 ** 6) +
        ot_game.flag                 * 8  * (16 ** 5) +
        pokeman.level                     * (16 ** 4) +
        pokeman.meet_location.index       * (16 ** 2) +
        pokeman.pokerus.flag         * 8  * (16 ** 0)
    );
    blocks["D"][0] = decToHex(r, 8);
    pokeForm.setSubResultFlag('Ds', 0, blocks["D"][0]);
    blocks["D"][0] = encAddress(r, xk);
    cs += signedHexInt(r);

    // Encode IVs and egg status and stuff
    r = (
        pokeman.ability.flag        * 2 * (32 ** 6) +
        pokeman.egg.flag                * (32 ** 6) +
        pokeman.IVs.special_defense     * (32 ** 5) +
        pokeman.IVs.special_attack      * (32 ** 4) +
        pokeman.IVs.speed               * (32 ** 3) +
        pokeman.IVs.defense             * (32 ** 2) +
        pokeman.IVs.attack              * (32 ** 1) +
        pokeman.IVs.hp                  * (32 ** 0)
    );
    blocks["D"][1] = decToHex(r, 8);
    pokeForm.setSubResultFlag('Ds', 1, blocks["D"][1]);
    blocks["D"][1] = encAddress(r, xk);
    cs += signedHexInt(r);

    // Encode ribbons
    r = (
        pokeForm.ribbons.alt_p.flag        * (2 ** 31) +
        pokeForm.ribbons.ribbon6.flag      * (2 ** 26) +
        pokeForm.ribbons.ribbon5.flag      * (2 ** 25) +
        pokeForm.ribbons.ribbon4.flag      * (2 ** 24) +
        pokeForm.ribbons.ribbon3.flag      * (2 ** 23) +
        pokeForm.ribbons.ribbon2.flag      * (2 ** 22) +
        pokeForm.ribbons.ribbon1.flag      * (2 ** 21) +
        pokeForm.ribbons.ribbon0.flag      * (2 ** 20) +
        pokeForm.ribbons.hard_worker.flag  * (2 ** 19) +
        pokeForm.ribbons.sketch.flag       * (2 ** 18) +
        pokeForm.ribbons.b100.flag         * (2 ** 17) +
        pokeForm.ribbons.b50.flag          * (2 ** 16) +
        pokeForm.ribbons.champion.flag     * (2 ** 15) +
        pokeForm.ribbons.tough.rank        * (2 ** 12) +
        pokeForm.ribbons.smart.rank        * (2 **  9) +
        pokeForm.ribbons.cute.rank         * (2 **  6) +
        pokeForm.ribbons.beauty.rank       * (2 **  3) +
        pokeForm.ribbons.cool.rank         * (2 **  0)
    );
    blocks["D"][2] = decToHex(r, 8);
    pokeForm.setSubResultFlag('Ds', 2, blocks["D"][2]);
    blocks["D"][2] = encAddress(r, xk);
    cs += signedHexInt(r);
    //endregion

    // Export results
    cs = decToHex(Math.floor(cs % 65536), 4);
    pokeForm.some_handle = cs;

    ts = "0000" + DecToHex(cs, 4);
    pokeForm.result_blocks[7] = ts;

    pidBlockOrdering(tpid).forEach(
        function(char, i) {
            r = i * 3 + 8;
            pokeForm.result_blocks[r] = blocks[char][0];
            pokeForm.result_blocks[r + 1] = blocks[char][1];
            pokeForm.result_blocks[r + 2] = blocks[char][2];
        }
    );

}

export {
    encodeFormData
};