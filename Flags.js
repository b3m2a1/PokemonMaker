//All the flags set by the editor

function fNewDex(f){
    var t=" ";
    var x=0;
    var i=0;
    var pgn=0;
    var pdex=" ";
    pgn=f.Species.options[f.Species.selectedIndex].value;
    if(pgn<1){pgn=1;}
    pdex=PokeDex(pgn);
    i=f.Dex.selectedIndex;
    if(i==0){t=fFI(f, fpdex,"~",1); x=parseInt(t,10);}
    if(i==1){t=fFI(f,pdex,"~",2); x=parseInt(t,10);}
    if(i==2){x=pgn;}
    f.PNum.value=x;
    return x;
}
function NewDex() {
    return fNewDex(getDefaultForm());
}

function fNewPoke(f){
    var t=" ";
    var u=" ";
    var v=" ";
    var x=0;
    var i=0;
    var pgn=0;
    var pdex=" ";
    pgn=f.Species.options[f.Species.selectedIndex].value;
    if(pgn<1){pgn=Math.floor(Math.random()*386)+1; f.Species.selectedIndex=pgn;}
    t="/tmp/dummy"
    u="";
    if(pgn==201){u=f.Unown.options[f.Unown.selectedIndex].value;}
    v=pgn;
    // document.PokePic.src=t+v+u+f.FilExt.value;
    pdex=PokeDex(pgn);
    i=f.Dex.selectedIndex;
    if(i==0){t=FI(pdex,"~",1); x=parseInt(t,10);}
    if(i==1){t=FI(pdex,"~",2); x=parseInt(t,10);}
    if(i==2){x=pgn;}
    f.PNum.value=x;
    t=fFI(f, pdex,"~",18);
    if(t.length>2){
     u=fFI(f, t,"/",1);
     f.Type2.selectedIndex=parseInt(u,10);
     t=t.substring(0,(t.length-u.length-1));
     f.Type1.selectedIndex=parseInt(t,10);
    }else{
     f.Type1.selectedIndex=parseInt(t,10);
     f.Type2.selectedIndex=17;
    }
    t=fSetGender(f);
    i=fHPower(f);
    i=fSetAb(f);
}
function NewPoke() {
    return fNewPoke(getDefaultForm());
}

function fSetAll(f, tlog){
    var G=f.PGender;
    var ga=0;
    var x=0;
    var t=" ";
    var dna=" ";
    var D=f.RDNA;
    t=SetDNA();
    dna=f.DNA.value;
    ga=parseInt(1*("0x"+D[0].value),10);
    f.PID.value=ga;
    ga=Math.floor((1*("0x"+ga))%256);
    gt=Gtest();
    if(ga>=gt){ga=1;}else{ga=0;}
    G.selectedIndex=ga;
    x=(1*("0x"+D[1].value))%65536;
    if(x<1){x=0;}
    f.TID.value=parseInt(x,10);
    x=(1*("0x"+D[1].value))/65536;
    if(x<1){x=0;}
    f.STID.value=parseInt(x,10);
    f.PName.value=PToS(dna.substring(16,36),10);
    t=D[4].value;
    f.PFont.value=t.substring(0,4);
    f.TName.value=PToS(dna.substring(40,54),7);
    t=Marks((1*("0x"+dna.substring(55,56))));
    t=fSetNature(f);
    t=fSetXKey(f);
    t=fSetShiny(f);
    t=fSetABCD(f);
    t=fSetUnown(f);
    t=fFindABCD(f, t);
    t="";
    t=fFindCS(f, t);
    tlog+=t;
    t=fSetStructure(f);
    t=fSetGender(f);
    return tlog;
}
function SetAll(tlog) {
    return fSetAll(getDefaultForm(), tlog);
}

function fSetStructure(f){
    var As=f.RA;
    var Bs=f.RB;
    var Cs=f.RC;
    var Ds=f.RD;
    var t=" ";
    var i=0;
    var a0=" ";
    var a1=" ";
    var a2=" ";
    var b0=" ";
    var b1=" ";
    var b2=" ";
    var c0=" ";
    var c1=" ";
    var c2=" ";
    var d0=" ";
    var d1=" ";
    var d2=" ";
    a0=1*("0x"+As[0].value);
    a1=1*("0x"+As[1].value);
    a2=1*("0x"+As[2].value);
    b0=1*("0x"+Bs[0].value);
    b1=1*("0x"+Bs[1].value);
    b2=1*("0x"+Bs[2].value);
    c0=1*("0x"+Cs[0].value);
    c1=1*("0x"+Cs[1].value);
    c2=1*("0x"+Cs[2].value);
    d0=1*("0x"+Ds[0].value);
    d1=1*("0x"+Ds[1].value);
    d2=1*("0x"+Ds[2].value);
    if(f.P1O.selectedIndex!=0){
    f.P1O.selectedIndex=0;
    i=NPO();}
    i=Math.floor(a0%65536)-1;
    if(i>251){i-=25;}
    f.Species.selectedIndex=i;
    if(f.Isort.selectedIndex!=0){
    f.Isort.selectedIndex=0;
    i=NIO();}
    i=Math.floor(a0/65536);
    f.Held.selectedIndex=ItemDex(DecToHex(i,3),1);
    f.ItemDesc.value=ItemDex(DecToHex(i,3),2);
    f.Exp.value=a1;
    i=Math.floor(a2%4);
    f.M1UPP.selectedIndex=i;
    i=Math.floor((a2/4)%4);
    f.M2UPP.selectedIndex=i;
    i=Math.floor((a2/16)%4);
    f.M3UPP.selectedIndex=i;
    i=Math.floor((a2/64)%4);
    f.M4UPP.selectedIndex=i;
    i=Math.floor((a2/256)%256);
    f.Happy.value=i;
    if(f.M1O.selectedIndex!=0){
        f.M1O.selectedIndex=0;
        i=NMO('1')
    }
    i=Math.floor(b0%65536)-1;
    f.Move1.selectedIndex=i;
    if(f.M2O.selectedIndex!=0){
        f.M2O.selectedIndex=0;
        i=NMO('2')
    }
    i=Math.floor(b0/65536);
    f.Move2.selectedIndex=i;
    if(f.M3O.selectedIndex!=0){
        f.M3O.selectedIndex=0;
        i=NMO('3')
    }
    i=Math.floor(b1%65536);
    f.Move3.selectedIndex=i;
    if(f.M4O.selectedIndex!=0){
        f.M4O.selectedIndex=0;
        i=NMO('4')
    }
    i=Math.floor(b1/65536);
    f.Move4.selectedIndex=i;
    i=Math.floor(b2%256);
    f.M1PP.value=i;
    i=Math.floor((b2/256)%256);
    f.M2PP.value=i;
    i=Math.floor((b2/65536)%256);
    f.M3PP.value=i;
    i=Math.floor((b2/16777216)%256);
    f.M4PP.value=i;
    i=Math.floor(c0%256);
    f.HPEff.value=i;
    i=Math.floor((c0/256)%256);
    f.AtkEff.value=i;
    i=Math.floor((c0/65536)%256);
    f.DefEff.value=i;
    i=Math.floor((c0/16777216)%256);
    f.SpeEff.value=i;
    i=Math.floor(c1%256);
    f.SpAEff.value=i;
    i=Math.floor((c1/256)%256);
    f.SpDEff.value=i;
    i=Math.floor((c1/65536)%256);
    f.Cool.value=i;
    i=Math.floor((c1/16777216)%256);
    f.Beauty.value=i;
    i=Math.floor(c2%256);
    f.Cute.value=i;
    i=Math.floor((c2/256)%256);
    f.Smart.value=i;
    i=Math.floor((c2/65536)%256);
    f.Tough.value=i;
    i=Math.floor((c2/16777216)%256);
    f.Luster.value=i;
    i=Math.floor(d0%256);
    if(i==0){f.Pokerus.selectedIndex=0;}
    if(i>0&&i<16){f.Pokerus.selectedIndex=1;}
    if(i==16){f.Pokerus.selectedIndex=2;}
    i=Math.floor((d0/256)%256);
    f.Loc.selectedIndex=i;
    i=Math.floor((d0/65536)%256)&"0x7F";
    f.Lvl.value=i;
    i=Math.floor((d0/8388608))%16;
    f.OTFlag.selectedIndex=i;
    i=Math.floor((d0/134217728)%16)-1;
    if(i<0){i=3;}
    f.Ball.selectedIndex=i;
    i=Math.floor((d0/2147483648))%2;
    f.TGender.selectedIndex=i;
    i=Math.floor(d1%32);
    f.HPDV.selectedIndex=i;
    i=Math.floor((d1/32)%32);
    f.AtkDV.selectedIndex=i
    i=Math.floor((d1/1024)%32);
    f.DefDV.selectedIndex=i
    i=Math.floor((d1/32768)%32);
    f.SpeDV.selectedIndex=i
    i=Math.floor((d1/1048576)%32);
    f.SpADV.selectedIndex=i
    i=Math.floor((d1/33554432)%32);
    f.SpDDV.selectedIndex=i
    i=Math.floor((d1/1073741824)%2);
    if(i==0){f.EFlag.checked=false;}else{f.EFlag.checked=true;}
    i=Math.floor((d1/2147483648))%2;
    f.Ability.selectedIndex=i;
    i=Math.floor(d2%8);
    f.RCool.selectedIndex=i;
    i=Math.floor((d2/8)%8);
    f.RBeauty.selectedIndex=i;
    i=Math.floor((d2/64)%8);
    f.RCute.selectedIndex=i;
    i=Math.floor((d2/512)%8);
    f.RSmart.selectedIndex=i;
    i=Math.floor((d2/4096)%8);
    f.RTough.selectedIndex=i;
    i=Math.floor((d2/32768)%2);
    if(i!=0){f.RChampion.checked=true;}else{f.RChampion.checked=false;}
    i=Math.floor((d2/65536)%2);
    if(i!=0){f.RB50.checked=true;}else{f.RB50.checked=false;}
    i=Math.floor((d2/131072)%2);
    if(i!=0){f.RB100.checked=true;}else{f.RB100.checked=false;}
    i=Math.floor((d2/262144)%2);
    if(i!=0){f.RSketch.checked=true;}else{f.RSketch.checked=false;}
    i=Math.floor((d2/524288)%2);
    if(i!=0){f.RHardWorker.checked=true;}else{f.RHardWorker.checked=false;}
    i=Math.floor((d2/1048576)%2);
    if(i!=0){f.RS0.checked=true;}else{f.RS0.checked=false;}
    i=Math.floor((d2/2097152)%2);
    if(i!=0){f.RS1.checked=true;}else{f.RS1.checked=false;}
    i=Math.floor((d2/4194304)%2);
    if(i!=0){f.RS2.checked=true;}else{f.RS2.checked=false;}
    i=Math.floor((d2/8388608)%2);
    if(i!=0){f.RS3.checked=true;}else{f.RS3.checked=false;}
    i=Math.floor((d2/16777216)%2);
    if(i!=0){
     f.RS4.checked=true;
     if(f.OTFlag.selectedIndex==15){f.S4M.selectedIndex=44;}
    }else{f.RS4.checked=false;}
    i=Math.floor((d2/33554432)%2);
    if(i!=0){f.RS5.checked=true;}else{f.RS5.checked=false;}
    i=Math.floor((d2/67108864)%2);
    if(i!=0){f.RS6.checked=true;}else{f.RS6.checked=false;}
    i=Math.floor((d2/2147483648)%2);
    if(i!=0){f.AltP.checked=true;}else{f.AltP.checked=false;}
    t=fNewPoke(f);
    i=fNMove(f, '5');
    return "Hi";
}
function SetStructure() {
    return fSetStructure(getDefaultForm());
}

function fSetShiny(f){
var f=document.PokemonForm;
var X=f.XKey;
var wh=0;
var wl=0;
var dw=0;
var t=" ";
var i=0;
dw=1*("0x"+X.value);
wh=Math.floor(dw/65536);
wl=Math.floor(dw%65536);
i=wl^wh;
if(i<0){i+=1*("0x100000000")};
if(i<8){
 f.Shiny.checked=true;
 t="Shiny";
}else{
 f.Shiny.checked=false;
 t="Normal";
}
return t;
}
function SetShiny() {
    return fSetShiny(getDefaultForm());
}

function fFindCS(f, tl){
    var As=f.RA;
    var Bs=f.RB;
    var Cs=f.RC;
    var Ds=f.RD;
    var cs=0;
    var dw=0;
    var i=0;
    var tlog=" ";
    tlog=f.RDNA[7].value;
    f.CS.value=tlog.substring(4,8);
    tlog=tl;
    cs=0;
    for(i=0;i<3;i++){
        dw=1*("0x"+As[i].value);
        cs+=Math.floor(dw/65536);
        cs+=Math.floor(dw%65536);
    }
    for(i=0;i<3;i++){
        dw=1*("0x"+Bs[i].value);
        cs+=Math.floor(dw/65536);
        cs+=Math.floor(dw%65536);
    }
    for(i=0;i<3;i++){
        dw=1*("0x"+Cs[i].value);
        cs+=Math.floor(dw/65536);
        cs+=Math.floor(dw%65536);
    }
    for(i=0;i<3;i++){
        dw=1*("0x"+Ds[i].value);
        cs+=Math.floor(dw/65536);
        cs+=Math.floor(dw%65536);
    }
    cs=cs&(1*"0xFFFF");
    i=1*("0x"+f.CS.value);
    if(i!=cs){
        tlog+="Bad EGG CheckSum Error:"+DecToHex(cs,4)+"\r\n";
    }else{
        tlog+="CheckSum:"+DecToHex(cs,4)+"\r\n";
    }
    return tlog;
}
function FindCS(tl) {
    return fFindCS(getDefaultForm(), tl);
}

function fFindABCD(f, tl){
    var As=f.RA;
    var Bs=f.RB;
    var Cs=f.RC;
    var Ds=f.RD;
    var D=f.RDNA;
    var xk=0;
    var t0=" ";
    var t1=" ";
    var t2=" ";
    var t=" ";
    var i=0;
    var abcd=" ";
    var a0=" ";
    var a1=" ";
    var a2=" ";
    var b0=" ";
    var b1=" ";
    var b2=" ";
    var c0=" ";
    var c1=" ";
    var c2=" ";
    var d0=" ";
    var d1=" ";
    var d2=" ";
    var tlog=" ";
    tlog=tl;
    abcd=f.ABCD.value;
    tlog+=abcd+"\r\n";
    xk=parseInt(1*("0x"+f.XKey.value),10);
    for(i=0;i<4;i++){
     if(i==0){
      t0=D[8].value;
      t1=D[9].value;
      t2=D[10].value;
     }
     if(i==1){
      t0=D[11].value;
      t1=D[12].value;
      t2=D[13].value;
     }
     if(i==2){
      t0=D[14].value;
      t1=D[15].value;
      t2=D[16].value;
     }
     if(i==3){
      t0=D[17].value;
      t1=D[18].value;
      t2=D[19].value;
     }
     t=abcd.substring(i,i+1);
     if(t=="A"){
     a0=t0;
     a1=t1;
     a2=t2;
     }
     if(t=="B"){
     b0=t0;
     b1=t1;
     b2=t2;
     }
     if(t=="C"){
     c0=t0;
     c1=t1;
     c2=t2;
     }
     if(t=="D"){
     d0=t0;
     d1=t1;
     d2=t2;
     }
    }
    i=Math.floor(xk^(1*("0x"+a0)));
    if(i<0){i+=1*"0x100000000";}
    As[0].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+a1)));
    if(i<0){i+=1*"0x100000000";}
    As[1].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+a2)));
    if(i<0){i+=1*"0x100000000";}
    As[2].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+b0)));
    if(i<0){i+=1*"0x100000000";}
    Bs[0].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+b1)));
    if(i<0){i+=1*"0x100000000";}
    Bs[1].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+b2)));
    if(i<0){i+=1*"0x100000000";}
    Bs[2].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+c0)));
    if(i<0){i+=1*"0x100000000";}
    Cs[0].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+c1)));
    if(i<0){i+=1*"0x100000000";}
    Cs[1].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+c2)));
    if(i<0){i+=1*"0x100000000";}
    Cs[2].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+d0)));
    if(i<0){i+=1*"0x100000000";}
    Ds[0].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+d1)));
    if(i<0){i+=1*"0x100000000";}
    Ds[1].value=DecToHex(i,8);
    i=Math.floor(xk^(1*("0x"+d2)));
    if(i<0){i+=1*"0x100000000";}
    Ds[2].value=DecToHex(i,8);
    return tlog;
}
function FindABCD(tl) {
    return fFindABCD(getDefaultForm(), tl);
}

function fSetXKey(f){
    var D=f.RDNA;
    var X=f.XKey;
    var tid=0;
    var pid=0;
    var xk=0;
    var t=" ";
    pid=parseInt(1*("0x"+D[0].value),10);
    tid=parseInt(1*("0x"+D[1].value),10);
    xk=Math.floor(pid^tid);
    if(xk<0){xk+=1*"0x100000000";}
    t=DecToHex(xk,8);
    X.value=t;
    return t;
}
function SetXKey() {
    return fSetXKey(getDefaultForm());
}

function fSetUnown(f){
    var D=f.RDNA;
    var U=f.Unown;
    var pid=0;
    var s=0;
    var t=" ";
    var US=" ";
    pid=parseInt(1*("0x"+D[0].value),10);
    s=Math.floor(pid%4);
    s+=(Math.floor(pid/256)%4)*4;
    s+=(Math.floor(pid/65536)%4)*16;
    s+=(Math.floor(pid/16777216)%4)*64;
    t = Math.floor(s % 28);
    if(t==0){US="A";}
    if(t==1){US="B";}
    if(t==2){US="C";}
    if(t==3){US="D";}
    if(t==4){US="E";}
    if(t==5){US="F";}
    if(t==6){US="G";}
    if(t==7){US="H";}
    if(t==8){US="I";}
    if(t==9){US="J";}
    if(t==10){US="K";}
    if(t==11){US="L";}
    if(t==12){US="M";}
    if(t==13){US="N";}
    if(t==14){US="O";}
    if(t==15){US="P";}
    if(t==16){US="Q";}
    if(t==17){US="R";}
    if(t==18){US="S";}
    if(t==19){US="T";}
    if(t==20){US="U";}
    if(t==21){US="V";}
    if(t==22){US="W";}
    if(t==23){US="X";}
    if(t==24){US="Y";}
    if(t==25){US="Z";}
    if(t==26){US="!";}
    if(t==27){US="?";}
    U.selectedIndex=t;
    return US;
}
function SetUnown() {
    return fSetUnown(getDefaultForm());
}

function fSetABCD(f){
    var A=f.ABCD;
    var n=0;
    var t=" ";
    n=Math.floor(f.PID.value%24);
    if(n==0){t="ABCD";}
    if(n==1){t="ABDC";}
    if(n==2){t="ACBD";}
    if(n==3){t="ACDB";}
    if(n==4){t="ADBC";}
    if(n==5){t="ADCB";}
    if(n==6){t="BACD";}
    if(n==7){t="BADC";}
    if(n==8){t="BCAD";}
    if(n==9){t="BCDA";}
    if(n==10){t="BDAC";}
    if(n==11){t="BDCA";}
    if(n==12){t="CABD";}
    if(n==13){t="CADB";}
    if(n==14){t="CBAD";}
    if(n==15){t="CBDA";}
    if(n==16){t="CDAB";}
    if(n==17){t="CDBA";}
    if(n==18){t="DABC";}
    if(n==19){t="DACB";}
    if(n==20){t="DBAC";}
    if(n==21){t="DBCA";}
    if(n==22){t="DCAB";}
    if(n==23){t="DCBA";}
    A.value=t;
    return t;
}
function SetABCD() {
    return fSetABCD(getDefaultForm());
}

function fSetNature(f){
    var pid=0;
    var D=f.RDNA;
    var N=f.Nature;
    var n=0;
    pid=parseInt(1*("0x"+D[0].value),10);
    n=Math.floor(pid%25);
    N.selectedIndex=n;
    return n;
}
function SetNature() {
    return fSetNature(getDefaultForm());
}

function fSetDNA(f){
    var t=" ";
    var tt=" ";
    var i=0;
    var D=f.RDNA;
    tt="";
    for(i=0;20>i;i++){
     t=D[i].value;
     tt+=t.substring(6,8);
     tt+=t.substring(4,6);
     tt+=t.substring(2,4);
     tt+=t.substring(0,2);
    }
    f.DNA.value=tt;
    return tt;
}
function SetDNA() {
    return fSetDNA(getDefaultForm());
}

function fSetGender(f){
    var G=f.PGender;
    var pdex=" ";
    var pgn=0;
    var t=" ";
    var g=0;
    var x=0;
    var o=0;
    // g=Math.floor(f.PID.value%256);
    pgn=f.Species.options[f.Species.selectedIndex].value;
    pdex=PokeDex(pgn);
    x=FI(pdex,"~",20);
    o=G.selectedIndex;
    G.options.length=0;
    if(x==-1){
     G.options[0] = new Option("None","0",true);
     G.options[1] = new Option("None","1");
     t="None";
    }
    if(x==100){
     G.options[0] = new Option("Girl","0",true);
     G.options[1] = new Option("Girl","1");
    }
    if(x==0){
     G.options[0] = new Option("Boy","0",true);
     G.options[1] = new Option("Boy","1");
    }
    if(x!=-1&&x!=100&&x!=0){
     G.options[0] = new Option("Girl","0",true);
     G.options[1] = new Option("Boy","1");
     if(g==0){t="Girl";}
     if(g==1){t="Boy";}
    }
    G.options.length=2;
    G.selectedIndex=o;
    return t;
}
function SetGender() {
    return fSetGender(getDefaultForm());
}

function fMarks(f, m){
    var c=" ";
    var t=0;
    t=0;
    if((m&1)==1){
        f.Circle.checked=true;
    }else{
        f.Circle.checked=false;
    }
    if((m&2)==2){
        f.Square.checked=true;
    }else{
        f.Square.checked=false;
    }
    if((m&4)==4){
    f.Triangle.checked=true;
    }else{
        f.Triangle.checked=false;
    }
    if((m&8)==8){
        f.Heart.checked=true;
    }else{
        f.Heart.checked=false;
    }
    t=m;
    c=DecToHex(t,1);
    return c;
}
function Marks(m) {
    return fMarks(getDefaultForm(), m);
}