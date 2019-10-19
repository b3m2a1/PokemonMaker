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

function decToHex(dec) {
    let d;
    if (typeof dec === "string") {
        d = parseInt(dec, 10);
    } else {
        d = dec;
    }
    return d.toString(16)
}

function poketize(str) {
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

    return t;
}

function depoketize(str) {
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
    tv = mx.slice(8, 16);

    // still don't know what 'what' is
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

function handleDecryptOverflow(tin) {
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

function GBAEncDec(ar, vl, what, dir) {
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

    r = 1 * "0xC6EF3720";
    rsa = 1 * "0x9E3779B9";
    if (what === "1") { // not sure what the 'what' means here...?
        s0 = 1 * "0x09F4FBBD";
        s1 = 1 * "0x9681884A";
        s2 = 1 * "0x352027E9";
        s3 = 1 * "0xF3DEE5A7";
    } else {
        s0 = 1 * "0x7AA9648F";
        s1 = 1 * "0x7FAE6994";
        s2 = 1 * "0xC0EFAAD5";
        s3 = 1 * "0x42712C57";
    }

    tval = 1 * ("0x" + vl);
    tadd = 1 * ("0x" + ar);

    for (l = 0; l < 32; l++) {

        // the two are just the opposite directions of one another but I didn't want to have to mess with thinking
        if (dir === "encrypt") {
            r = handleDecryptOverflow(r + rsa);
            t = handleDecryptOverflow(s0 + handleDecryptOverflow((tval << 4) & (maxHex)));
            t2 = handleDecryptOverflow(tval + r);
            t = handleDecryptOverflow(t ^ t2);
            t2 = handleDecryptOverflow(s1 + handleDecryptOverflow((tval >> 5) & (modHex)));
            t = handleDecryptOverflow(t ^ t2);
            tadd = handleDecryptOverflow(tadd + t);
            t = handleDecryptOverflow(s2 + handleDecryptOverflow((tadd << 4) & (maxHex)));
            t2 = handleDecryptOverflow(tadd + r);
            t = handleDecryptOverflow(t ^ t2);
            t2 = handleDecryptOverflow(s3 + handleDecryptOverflow((tadd >> 5) & (modHex)));
            t = handleDecryptOverflow(t ^ t2);
            tval = handleDecryptOverflow(tval + t);
        } else {
            t = handleDecryptOverflow(s2 + handleDecryptOverflow((tadd << 4) & (maxHex)));
            t2 = handleDecryptOverflow(tadd + r);
            t = handleDecryptOverflow(t ^ t2);
            t2 = handleDecryptOverflow(s3 + handleDecryptOverflow((tadd >> 5) & (modHex)));
            t = handleDecryptOverflow(t ^ t2);
            tval = handleDecryptOverflow(tval - t);
            t = handleDecryptOverflow(s0 + handleDecryptOverflow((tval << 4) & (maxHex)));
            t2 = handleDecryptOverflow(tval + r);
            t = handleDecryptOverflow(t ^ t2);
            t2 = handleDecryptOverflow(s1 + handleDecryptOverflow((tval >> 5) & (modHex)));
            t = handleDecryptOverflow(t ^ t2);
            tadd = handleDecryptOverflow(tadd - t);
            r = handleDecryptOverflow(r - rsa);
        }
    }

    return decToHex(tadd) + decToHex(tval);
}

function GADecrypt(ar, vl, what) {
    return GBAEncDec(ar, vl, what, 'decrypt');
}

function GAEncrypt(ar, vl, what) {
    return GBAEncDec(ar, vl, what, 'encrypt');
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
                a = (1 * ("0x" + addr)) + 2;
                addr0 = decToHex(a);
                al = addr0.slice(1, 8);
                addr1 = "8" + al;
                dh = dat.slice(0, 4);
                tt += addr1 + " " + dh;
                break;
            case 16:
                addr1 = "8" + al;
                break;
            case 8:
                addr1 = "3" + al;
                tt = addr1 + " 00" + dat;
                break;
        }

        tt = addr1 + padding + dh;
    }

    return tt;
}

function getCode(pokeForm) {
    let pokeman = pokeForm.pokemon;
    let game = pokeForm.game;
    let device = pokeForm.device;
    let trainer = pokeForm.trainer;

    let trainerID;
    let secretID;
    let playerID;
    let randomPID;
    let shiny;

    let dex = pokeman.national_dex;
    let unknownID;

    let playerGender = trainer.gender, nature = pokeman.nature;
    let As = f.RA, Bs = f.RB, Cs = f.RC, Ds = f.RD;

    let i;
    let foundPID = false;

    let addrShift = 1 * "0x100000000";
    let maxAddr = 1 * "0xFFFFFFFF";

    let BA0, BA1, BA2;
    let BB0, BB1, BB2;
    let BC0, BC1, BC2;
    let BD0, BD1, BD2;
    let tt = " ", ts = " ", tg = 0, gt = 0, tn = 0, tpid = 0, tid = 0, xk = 0;

    let r = 0, r1 = 0;
    let S = " ";

    let addr = 0;
    let cs = 0;

    
    // ensure secretID and trainerID are in the right ranges
    secretID = trainer.SecretID;
    if (secretID < 0 || secretID > 65565) {
        secretID = Math.round(Math.random() * 65535);
        trainer.SecretID = secretID;
    }
    trainerID = trainer.ID;
    if (trainerID < 0 || trainerID > 65565) {
        trainerID = Math.round(Math.random() * 65535);
        trainer.ID = trainerID;
    }
    // compute 'true' trainer ID used to determine ownership
    tid = (secretID * 65536) + (trainerID);
    
    xk = 0;
    randomPID = pokeForm.randomPID;
    shiny = pokeman.shiny;
    // calculate the PlayerID we'll use in the code
    if (randomPID) {
        if (shiny) {
            gt = fGtest(f); // Gender pctage something...?
            for (i = 0; i < 65536; i++) {
                // just try a bunch of times I guess?
                // Pick a random value less than the max player ID
                r = Math.round(Math.random() * 65535);
                // bit shift it by...something?
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
            gt = fGtest(f);
            for (i = 0; i < 65536; i++) {
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
        tpid = pokeForm.playerID;
        tn = Math.floor(tpid % 25);
        if (tn < 0) { tn += 25; }
        nature.reinit(tn);
        tg = Math.floor(tpid % 256);
        if (tg < 0) { tg += 256; }
        i = Math.floor(tpid % 65536);
        r = (trainerID) ^ i;
        i = Math.floor(tpid / 65536);
        r1 = (secretID) ^ i;
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
    gt = Gtest();
    if (tg >= gt) {
        tg = "F";
    } else {
        tg = "M";
    }
    playerGender = tg;
    trainer.gender = tg;
    pokeForm.playerID = tpid;
    pokeForm.XKey = decToHex(xk);
    ts = decToHex(tpid, 8);
    pokeForm.setResultFlag(0, ts);
    ts = decToHex(tid, 8);
    pokeForm.setResultFlag(1, ts);
    if (pokeman.egg) {
        pokeman.name = "EGG";
    }
    // ???????
    ts = poketize(pokeman.name, 10);
    tt = ts.slice(6, 8);
    tt += ts.slice(4, 6);
    tt += ts.slice(2, 4);
    tt += ts.slice(0, 2);
    pokeForm.setResultFlag(2, tt);
    tt = ts.slice(14, 16);
    tt += ts.slice(12, 14);
    tt += ts.slice(10, 12);
    tt += ts.slice(8, 10);
    pokeForm.setResultFlag(3, tt);
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
    D[4].value = tt;
    if (trainer.name === "") {
        trainer.name = "b3m2a1";
    }
    ts = StrToPoke(f.TName.value, 7);
    tt = ts.substring(6, 2);
    tt += ts.substring(4, 2);
    tt += ts.substring(2, 2);
    tt += ts.substring(0, 2);
    D[5].value = tt;
    r = 0;
    if (f.Circle.checked) {
        r += 1;
    }
    if (f.Square.checked) {
        r += 2;
    }
    if (f.Triangle.checked) {
        r += 4;
    }
    if (f.Heart.checked) {
        r += 8;
    }
    tt = DecToHex(r, 2);
    tt += ts.substring(12, 2);
    tt += ts.substring(10, 2);
    tt += ts.substring(8, 2);
    D[6].value = tt;
    BA0 = "0" + f.Held.options[f.Held.selectedIndex].value + DecToHex(dex, 4);
    As[0].value = BA0;
    cs = 1 * dex;
    r = 1 * ("0x0" + f.Held.options[f.Held.selectedIndex].value);
    cs += r;
    r = xk ^ (1 * ("0x" + BA0));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BA0 = DecToHex(r, 8);
    r1 = f.Exp.value;
    if (r1 < 0) {
        f.Exp.value = 0;
    }
    S = PokeDex(f.Species.options[f.Species.selectedIndex].value);
    r = FI(S, 21);
    if (r1 > r) {
        r1 = r;
    }
    BA1 = DecToHex(f.Exp.value, 8);
    As[1].value = BA1;
    cs += f.Exp.value % 65536;
    cs += Math.floor(f.Exp.value / 65536);
    r = xk ^ (1 * ("0x" + BA1));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BA1 = DecToHex(r, 8);
    r = f.M1UPP.selectedIndex * 1;
    if (f.Move2.selectedIndex != 0) {
        r += f.M2UPP.selectedIndex * 4;
    }
    if (f.Move3.selectedIndex != 0) {
        r += f.M3UPP.selectedIndex * 16;
    }
    if (f.Move4.selectedIndex != 0) {
        r += f.M4UPP.selectedIndex * 64;
    }
    r1 = f.Happy.value;
    if (r1 < 0) {
        f.Happy.value = 0;
    }
    if (r1 > 255) {
        f.Happy.value = 255;
    }
    r += f.Happy.value * 256;
    As[2].value = DecToHex(r, 8);
    cs += r % 65536;
    cs += Math.floor(r / 65536);
    BA2 = DecToHex(r, 8);
    r = xk ^ (1 * ("0x" + BA2));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BA2 = DecToHex(r, 8);
    BB0 = DecToHex(f.Move2.options[f.Move2.selectedIndex].value, 4) + DecToHex(f.Move1.options[f.Move1.selectedIndex].value, 4);
    Bs[0].value = BB0;
    cs += 1 * (f.Move1.options[f.Move1.selectedIndex].value);
    cs += 1 * (f.Move2.options[f.Move2.selectedIndex].value);
    r = xk ^ (1 * ("0x" + BB0));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BB0 = DecToHex(r, 8);
    BB1 = DecToHex(f.Move4.options[f.Move4.selectedIndex].value, 4) + DecToHex(f.Move3.options[f.Move3.selectedIndex].value, 4);
    Bs[1].value = BB1;
    cs += 1 * (f.Move3.options[f.Move3.selectedIndex].value);
    cs += 1 * (f.Move4.options[f.Move4.selectedIndex].value);
    r = xk ^ (1 * ("0x" + BB1));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BB1 = DecToHex(r, 8);
    r1 = f.M1PP.value;
    if (r1 < 0) {
        f.M1PP.value = 0;
    }
    if (r1 > 99) {
        f.M1PP.value = 99;
    }
    r1 = f.M2PP.value;
    if (r1 < 0) {
        f.M2PP.value = 0;
    }
    if (r1 > 99) {
        f.M2PP.value = 99;
    }
    r1 = f.M3PP.value;
    if (r1 < 0) {
        f.M3PP.value = 0;
    }
    if (r1 > 99) {
        f.M3PP.value = 99;
    }
    r1 = f.M4PP.value;
    if (r1 < 0) {
        f.M4PP.value = 0;
    }
    if (r1 > 99) {
        f.M4PP.value = 99;
    }
    if (f.Move4.selectedIndex != 0) {
        BB2 = DecToHex(f.M4PP.value, 2);
    } else {
        BB2 = "00";
    }
    if (f.Move3.selectedIndex != 0) {
        BB2 += DecToHex(f.M3PP.value, 2);
    } else {
        BB2 += "00";
    }
    if (f.Move2.selectedIndex != 0) {
        BB2 += DecToHex(f.M2PP.value, 2);
    } else {
        BB2 += "00";
    }
    BB2 += DecToHex(f.M1PP.value, 2);
    Bs[2].value = BB2;
    cs += (1 * ("0x" + BB2)) % 65536;
    cs += Math.floor((1 * ("0x" + BB2)) / 65536);
    r = xk ^ (1 * ("0x" + BB2));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BB2 = DecToHex(r, 8);
    BC0 = DecToHex(f.SpeEff.value, 2);
    BC0 += DecToHex(f.DefEff.value, 2);
    BC0 += DecToHex(f.AtkEff.value, 2);
    BC0 += DecToHex(f.HPEff.value, 2);
    Cs[0].value = BC0;
    cs += (1 * ("0x" + BC0)) % 65536;
    cs += Math.floor((1 * ("0x" + BC0)) / 65536);
    r = xk ^ (1 * ("0x" + BC0));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BC0 = DecToHex(r, 8);
    r = f.Beauty.value;
    if (r < 0) {
        r = 0;
    }
    if (r > 255) {
        r = 255;
    }
    f.Beauty.value = r;
    BC1 = DecToHex(f.Beauty.value, 2);
    r = f.Cool.value;
    if (r < 0) {
        r = 0;
    }
    if (r > 255) {
        r = 255;
    }
    f.Cool.value = r;
    BC1 += DecToHex(f.Cool.value, 2);
    BC1 += DecToHex(f.SpDEff.value, 2);
    BC1 += DecToHex(f.SpAEff.value, 2);
    Cs[1].value = BC1;
    cs += (1 * ("0x" + BC1)) % 65536;
    cs += Math.floor((1 * ("0x" + BC1)) / 65536);
    r = xk ^ (1 * ("0x" + BC1));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BC1 = DecToHex(r, 8);
    r = f.Luster.value;
    if (r < 0) {
        r = 0;
    }
    if (r > 255) {
        r = 255;
    }
    f.Luster.value = r;
    BC2 = DecToHex(f.Luster.value, 2);
    r = f.Tough.value;
    if (r < 0) {
        r = 0;
    }
    if (r > 255) {
        r = 255;
    }
    f.Tough.value = r;
    BC2 += DecToHex(f.Tough.value, 2);
    r = f.Smart.value;
    if (r < 0) {
        r = 0;
    }
    if (r > 255) {
        r = 255;
    }
    f.Smart.value = r;
    BC2 += DecToHex(f.Smart.value, 2);
    r = f.Cute.value;
    if (r < 0) {
        r = 0;
    }
    if (r > 255) {
        r = 255;
    }
    f.Cute.value = r;
    BC2 += DecToHex(f.Cute.value, 2);
    Cs[2].value = BC2;
    cs += (1 * ("0x" + BC2)) % 65536;
    cs += Math.floor((1 * ("0x" + BC2)) / 65536);
    r = xk ^ (1 * ("0x" + BC2));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BC2 = DecToHex(r, 8);
    r1 = f.Lvl.value;
    if (r1 < 0) {
        f.Lvl.value = 0;
    }
    if (r1 > 100) {
        f.Lvl.value = 100;
    }
    r1 = parseInt(1 * ("0x" + f.Loc[f.Loc.selectedIndex].value), 10)
    r = (f.Ball.selectedIndex + 1) * 134217728 + (f.Lvl.value) * 65536 + (r1) * 256;
    if (f.Pokerus.selectedIndex == 1) {
        r += 1;
    }
    if (f.Pokerus.selectedIndex == 2) {
        r += 16;
    }
    if (f.TGender.selectedIndex == 1) {
        r += 1 * "0x80000000";
    }
    r1 = f.OTFlag.selectedIndex;
    r += r1 * 8388608;
    BD0 = DecToHex(r, 8);
    Ds[0].value = BD0;
    cs += (1 * ("0x" + BD0)) % 65536;
    cs += Math.floor((1 * ("0x" + BD0)) / 65536);
    r = xk ^ (1 * ("0x" + BD0));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BD0 = DecToHex(r, 8);
    r = (f.SpDDV.selectedIndex) * 33554432;
    r += (f.SpADV.selectedIndex) * 1048576;
    r += (f.SpeDV.selectedIndex) * 32768;
    r += (f.DefDV.selectedIndex) * 1024;
    r += (f.AtkDV.selectedIndex) * 32;
    r += (f.HPDV.selectedIndex) * 1;
    if (f.EFlag.checked) {
        r += 1073741824;
    }
    if (f.Ability.selectedIndex == 1) {
        r += 2147483648;
    }
    BD1 = DecToHex(r, 8);
    Ds[1].value = BD1;
    cs += (1 * ("0x" + BD1)) % 65536;
    cs += Math.floor((1 * ("0x" + BD1)) / 65536);
    r = xk ^ (1 * ("0x" + BD1));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BD1 = DecToHex(r, 8);
    r = f.RCool.selectedIndex;
    r += (f.RBeauty.selectedIndex) * 8;
    r += (f.RCute.selectedIndex) * 64;
    r += (f.RSmart.selectedIndex) * 512;
    r += (f.RTough.selectedIndex) * 4096;
    if (f.RChampion.checked) {
        r += 32768;
    }
    if (f.RB50.checked) {
        r += 65536;
    }
    if (f.RB100.checked) {
        r += 131072;
    }
    if (f.RSketch.checked) {
        r += 262144;
    }
    if (f.RHardWorker.checked) {
        r += 524288;
    }
    if (f.RS0.checked) {
        r += 1048576;
    }
    if (f.RS1.checked) {
        r += 2097152;
    }
    if (f.RS2.checked) {
        r += 4194304;
    }
    if (f.RS3.checked) {
        r += 8388608;
    }
    if (f.RS4.checked) {
        r += 16777216;
    }
    if (f.RS5.checked) {
        r += 33554432;
    }
    if (f.RS6.checked) {
        r += 67108864;
    }
    if (f.AltP.checked) {
        r += 2147483648;
    }
    BD2 = DecToHex(r, 8);
    Ds[2].value = BD2;
    cs += (1 * ("0x" + BD2)) % 65536;
    cs += Math.floor((1 * ("0x" + BD2)) / 65536);
    r = xk ^ (1 * ("0x" + BD2));
    if (r < 0) {
        r += 1 * "0x100000000";
    }
    if (r > (1 * "0xFFFFFFFF")) {
        r -= 1 * "0x100000000";
    }
    BD2 = DecToHex(r, 8);
    cs = Math.floor(cs % 65536);
    f.CS.value = DecToHex(cs, 4);
    ts = "0000" + DecToHex(cs, 4);
    D[7].value = ts;
    S = SetABCD();
    for (let i = 0; i < 4; i++) {
        r = i * 3 + 8;
        if (S.substring(i, 1) == "A") {
            D[r].value = BA0;
            r += 1;
            D[r].value = BA1;
            r += 1;
            D[r].value = BA2;
        }
        if (S.substring(i, 1) == "B") {
            D[r].value = BB0;
            r += 1;
            D[r].value = BB1;
            r += 1;
            D[r].value = BB2;
        }
        if (S.substring(i, 1) == "C") {
            D[r].value = BC0;
            r += 1;
            D[r].value = BC1;
            r += 1;
            D[r].value = BC2;
        }
        if (S.substring(i, 1) == "D") {
            D[r].value = BD0;
            r += 1;
            D[r].value = BD1;
            r += 1;
            D[r].value = BD2;
        }
    }
    tt = fSetDNA(f);
}

export {
    getCode
};