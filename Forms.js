// Functions for working with the raw form itself

function fCopy(f, c){
    // Version 0.00 02/05/2004 05:00 PM CST
    var C=f.Code;
    if(c=="C"){C=f.Code;}
    if(c=="L"){C=f.LogC;}
    if(c=="D"){C=f.DNA;}
    if(navigator.appName=="Microsoft Internet Explorer"){
     if(parseInt(navigator.appVersion) > 3){
     C.focus();
     C.select();
     var crange=C.createTextRange();
      copyRange=crange.execCommand("Copy");
     f.LogC.value=navigator.appName + " Copy Code Complete";
    } else {
     f.LogC.value=navigator.appName + " Need Version4+";
    }
    } else {
     f.LogC.value=navigator.appName + " Can't Copy Code";
    }
}
function Copy(c) {
    fCopy(getDefaultForm(), c);
}

function fPaste(f, c){
    // Version 0.00 02/05/2004 05:00 PM CST
    var C=f.Code;
    if(c=="C"){C=f.Code;}
    if(c=="L"){C=f.LogC;}
    if(c=="D"){C=f.DNA;}
    if(navigator.appName=="Microsoft Internet Explorer"){
     if(parseInt(navigator.appVersion) > 3){
      C.value="";
      C.focus();
      document.execCommand('Paste');
     f.LogC.value=navigator.appName + " Paste Code Complete";
    } else {
     f.LogC.value=navigator.appName + " Need Version4+";
    }
    } else {
     f.LogC.value=navigator.appName + " Can't Paste";
    }
}
function Paste(c) {
    fPaste(getDefaultForm(), c);
}

function fSample(f, n){
    var i=0;
    var j=0;
    var D=f.RDNA;
    var As=f.RA;
    var Bs=f.RB;
    var Cs=f.RC;
    var Ds=f.RD;
    var abcd=" ";
    var tlog=" ";
    tlog="";
    if(-2<n && n<20){
    if(n==-1){tlog="All Samples\r\n";}
    for(i=0; i<20; i++){
     if(n==-1 || i==n){tlog+="Code Sample "+i+":"+D[i].value+"\r\n";}
    }
    }
    if(n>19){
    if(n==32){tlog="ABCD Structure\r\n";}
    abcd=f.ABCD.value;
    if(n==32){tlog+="Structure Order:"+abcd+"\r\n";}
    for(j=0;j<4;j++){
     t=abcd.substring(j,j+1);
     if(t=="A"){
    if(n==32){tlog+="\r\n";}
    if((19<n && n<23)||n==32){
    for(i=0; i<3; i++){
     if(n==32 || i==n-20){tlog+="A Structure "+i+":"+As[i].value+"\r\n";}
    }
    }
     }
     if(t=="B"){
    if(n==32){tlog+="\r\n";}
    if(n==32 || (22<n && n<26)){
    for(i=0; i<3; i++){
     if(n==32 || i==n-23){tlog+="B Structure "+i+":"+Bs[i].value+"\r\n";}
    }
    }
     }
     if(t=="C"){
    if(n==32){tlog+="\r\n";}
    if(n==32 || (25<n && n<29)){
    for(i=0; i<3; i++){
     if(n==32 || i==n-26){tlog+="C Structure "+i+":"+Cs[i].value+"\r\n";}
    }
    }
     }
     if(t=="D"){
    if(n==32){tlog+="\r\n";}
    if(n==32 || (28<n && n<32)){
    for(i=0; i<3; i++){
     if(n==32 || i==n-29){tlog+="D Structure "+i+":"+Ds[i].value+"\r\n";}
    }
    }
     }
    }
    if(n==32){tlog+="\r\nCheckSum:"+f.CS.value+"\r\n";}
    }
    f.LogC.value=tlog;
}
function Sample(n){
    fSample(getDefaultForm(), n);
}

function fUnownID(f, P,W){
    // Function by kpdavatar@netbroadcaster.com
    // Version 0.00 02/03/2004 05:15 PM CST
    var S = 0;
    var U = 0;
    var UC = "A";
    S=Math.floor(P%4);
    S+=(Math.floor(P/256)%4)*4;
    S+=(Math.floor(P/65536)%4)*16;
    S+=(Math.floor(P/16777216)%4)*64;
    U = Math.floor(S % 28);
    if(W==0){ return U; }
    if(W==1){
     if(U==0){UC="A";}
     if(U==1){UC="B";}
     if(U==2){UC="C";}
     if(U==3){UC="D";}
     if(U==4){UC="E";}
     if(U==5){UC="F";}
     if(U==6){UC="G";}
     if(U==7){UC="H";}
     if(U==8){UC="I";}
     if(U==9){UC="J";}
     if(U==10){UC="K";}
     if(U==11){UC="L";}
     if(U==12){UC="M";}
     if(U==13){UC="N";}
     if(U==14){UC="O";}
     if(U==15){UC="P";}
     if(U==16){UC="Q";}
     if(U==17){UC="R";}
     if(U==18){UC="S";}
     if(U==19){UC="T";}
     if(U==20){UC="U";}
     if(U==21){UC="V";}
     if(U==22){UC="W";}
     if(U==23){UC="X";}
     if(U==24){UC="Y";}
     if(U==25){UC="Z";}
     if(U==26){UC="!";}
     if(U==27){UC="?";}
     return UC;
    }
    if(W==3){return S;}
}
function UnownID(P,W){
    fUnownID(getDefaultForm(), P,W);
}

function fFillAll(f){
    var P=f.Species;
    var Pvalue=P.options[P.selectedIndex].value;
    var U=f.Unown;
    var Utext=U.options[U.selectedIndex].text;
    var G=f.PGender;
    var N=f.Nature;
    var D=f.RDNA;
    var As=f.RA;
    var Bs=f.RB;
    var Cs=f.RC;
    var Ds=f.RD;
    var BA0=" ";
    var BA1=" ";
    var BA2=" ";
    var BB0=" ";
    var BB1=" ";
    var BB2=" ";
    var BC0=" ";
    var BC1=" ";
    var BC2=" ";
    var BD0=" ";
    var BD1=" ";
    var BD2=" ";
    var tt=" ";
    var ts=" ";
    var tg=0;
    var gt=0;
    var tn=0;
    var tpid=0;
    var tid=0;
    var xk=0;
    var r=0;
    var r1=0;
    var S=" ";
    var addr=0;
    var cs=0;
    var i=0;
    xk = 0;
    r=1*f.STID.value;
    if(r<0||r>65565){r=Math.round(Math.random()*65535);}
    f.STID.value=r;
    r=1*f.TID.value
    if(r<0||r>65565){r=Math.round(Math.random()*65535);}
    f.TID.value=r;
    tid=(f.STID.value*65536)+(1*f.TID.value);
    if(f.RPID.checked){
    if(f.Shiny.checked){
     i=0;
     gt=fGtest(f);
     for(i=0;i<65536;i++){
         r=Math.round(Math.random()*65535);
         xk=(r*65536)+(r^(Math.round(Math.random()*7)));
         if(xk<0){xk+=(1*"0x100000000");}
         tpid=xk^tid;
         if(tpid<0){tpid+=(1*"0x100000000");}
         tg=Math.floor(tpid%256);
         if(tg<0){tg+=256;}
         tn=Math.floor(tpid%25);
         if(tn<0){tn+=25;}
         if(tg>=gt && G.selectedIndex==1 && N.selectedIndex==tn){
          if(Pvalue==201){
           if(UnownID(tpid,1)==Utext){i=65537;}
          }else{
           i=65537;
          }
         }
         if(tg<gt && G.selectedIndex==0 && N.selectedIndex==tn){
          if(Pvalue==201){
           if(UnownID(tpid,1)==Utext){i=65537;}
          }else{
           i=65537;
          }
         }
     }
    }else{
     i=0;
     gt=fGtest(f);
     for(i=0;i<65536;i++){
         tpid=(Math.round(Math.random()*65536)*Math.round(Math.random()*65536))+Math.round(Math.random()*65512);
         if(tpid<0){tpid+=(1*"0x100000000");}
         tn=Math.floor(tpid%25);
         if(tpid<0){tpid+=(1*"0x100000000");}
         tpid+=f.Nature.selectedIndex;
         if(tpid<0){tpid+=(1*"0x100000000");}
         tg=Math.floor(tpid%256);
         if(tg<0){tg+=256;}
         tn=Math.floor(tpid%25);
         if(tn<0){tn+=25;}
         if(tg>=gt && G.selectedIndex==1 && N.selectedIndex==tn){
          if(Pvalue==201){
           if(UnownID(tpid,1)==Utext){i=65537;}
          }else{
           i=65537;
          }
         }
         if(tg<gt && G.selectedIndex==0 && N.selectedIndex==tn){
          if(Pvalue==201){
           if(UnownID(tpid,1)==Utext){i=65537;}
          }else{
           i=65537;
          }
         }
     }
     xk=tid^tpid;
    }
    if(i<65538){f.PID.value="try again"; f.Code.value="try again"; return;}else{f.PID.value=tpid;}
    }else{
     tpid=f.PID.value*1;
     tn=Math.floor(tpid%25);
     if(tn<0){tn+=25;}
     N.selectedIndex=tn;
     tg=Math.floor(tpid%256);
     if(tg<0){tg+=256;}
     gt=Gtest();
     if(tg>=gt){tg=1;}else{tg=0;}
     G.selectedIndex==tg;
     i=Math.floor(tpid%65536);
     r=(1*f.TID.value)^i;
     i=Math.floor(tpid/65536);
     r1=(1*f.STID.value)^i;
     xk=r^r1;
     if(xk<8){f.Shiny.checked=true;}else{f.Shiny.checked=false;}
     xk=tid^tpid;
     ts=Pvalue;
     if(ts=="201"){
     r1=fUnownID(f, tpid,0);
     U.options[r1].selected=true;
     }
    }
    r1=xk;
    if(r1<0){r1+=1*"0x100000000";}
    if(r1>(1*"0xFFFFFFFF")){r1-=1*"0x100000000";}
    xk=r1;
    tg=Math.floor(tpid%256);
    gt=Gtest();
    if(tg>=gt){tg=1;}else{tg=0;}
    G.selectedIndex=tg;
    f.PID.value=tpid;
    f.XKey.value=DecToHex(xk,8);
    ts=DecToHex(tpid,8);
    D[0].value=ts;
    ts=DecToHex(tid,8);
    D[1].value=ts;
    if(f.EFlag.checked){f.PName.value="EGG";}
    if(f.PName.value==""){f.PName.value="NameMe";}
    ts=StrToPoke(f.PName.value,10);
    tt=ts.substr(6,2);
    tt+=ts.substr(4,2);
    tt+=ts.substr(2,2);
    tt+=ts.substr(0,2);
    D[2].value=tt;
    tt=ts.substr(14,2);
    tt+=ts.substr(12,2);
    tt+=ts.substr(10,2);
    tt+=ts.substr(8,2);
    D[3].value=tt;
    tt=f.PFont.value;
    // 0201 Japanese
    // 0202 USA
    // 0203 French
    // 0204 Italian
    // 0205 German
    // 0206
    // 0207 Spanish
    tt+=ts.substr(18,2);
    tt+=ts.substr(16,2);
    D[4].value=tt;
    if(f.TName.value==""){f.TName.value="Noone";}
    ts=StrToPoke(f.TName.value,7);
    tt=ts.substr(6,2);
    tt+=ts.substr(4,2);
    tt+=ts.substr(2,2);
    tt+=ts.substr(0,2);
    D[5].value=tt;
    r=0;
    if(f.Circle.checked){r+=1;}
    if(f.Square.checked){r+=2;}
    if(f.Triangle.checked){r+=4;}
    if(f.Heart.checked){r+=8;}
    tt=DecToHex(r,2);
    tt+=ts.substr(12,2);
    tt+=ts.substr(10,2);
    tt+=ts.substr(8,2);
    D[6].value=tt;
    BA0="0"+f.Held.options[f.Held.selectedIndex].value+DecToHex(Pvalue,4);
    As[0].value=BA0;
    cs=1*Pvalue;
    r=1*("0x0"+f.Held.options[f.Held.selectedIndex].value);
    cs+=r;
    r=xk^(1*("0x"+BA0));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BA0=DecToHex(r,8);
    r1=f.Exp.value;
    if(r1<0){f.Exp.value=0;}
    S=PokeDex(f.Species.options[f.Species.selectedIndex].value);
    r=FI(S,21);
    if(r1>r){r1=r;}
    BA1=DecToHex(f.Exp.value,8);
    As[1].value=BA1;
    cs+=f.Exp.value%65536;
    cs+=Math.floor(f.Exp.value/65536);
    r=xk^(1*("0x"+BA1));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BA1=DecToHex(r,8);
    r=f.M1UPP.selectedIndex*1;
    if(f.Move2.selectedIndex!=0){r+=f.M2UPP.selectedIndex*4;}
    if(f.Move3.selectedIndex!=0){r+=f.M3UPP.selectedIndex*16;}
    if(f.Move4.selectedIndex!=0){r+=f.M4UPP.selectedIndex*64;}
    r1=f.Happy.value;
    if(r1<0){f.Happy.value=0;}
    if(r1>255){f.Happy.value=255;}
    r+=f.Happy.value*256;
    As[2].value=DecToHex(r,8);
    cs+=r%65536;
    cs+=Math.floor(r/65536);
    BA2=DecToHex(r,8);
    r=xk^(1*("0x"+BA2));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BA2=DecToHex(r,8);
    BB0=DecToHex(f.Move2.options[f.Move2.selectedIndex].value,4)+DecToHex(f.Move1.options[f.Move1.selectedIndex].value,4);
    Bs[0].value=BB0;
    cs+=1*(f.Move1.options[f.Move1.selectedIndex].value);
    cs+=1*(f.Move2.options[f.Move2.selectedIndex].value);
    r=xk^(1*("0x"+BB0));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BB0=DecToHex(r,8);
    BB1=DecToHex(f.Move4.options[f.Move4.selectedIndex].value,4)+DecToHex(f.Move3.options[f.Move3.selectedIndex].value,4);
    Bs[1].value=BB1;
    cs+=1*(f.Move3.options[f.Move3.selectedIndex].value);
    cs+=1*(f.Move4.options[f.Move4.selectedIndex].value);
    r=xk^(1*("0x"+BB1));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BB1=DecToHex(r,8);
    r1=f.M1PP.value;
    if(r1<0){f.M1PP.value=0;}
    if(r1>99){f.M1PP.value=99;}
    r1=f.M2PP.value;
    if(r1<0){f.M2PP.value=0;}
    if(r1>99){f.M2PP.value=99;}
    r1=f.M3PP.value;
    if(r1<0){f.M3PP.value=0;}
    if(r1>99){f.M3PP.value=99;}
    r1=f.M4PP.value;
    if(r1<0){f.M4PP.value=0;}
    if(r1>99){f.M4PP.value=99;}
    if(f.Move4.selectedIndex!=0){BB2=DecToHex(f.M4PP.value,2);}else{BB2="00";}
    if(f.Move3.selectedIndex!=0){BB2+=DecToHex(f.M3PP.value,2);}else{BB2+="00";}
    if(f.Move2.selectedIndex!=0){BB2+=DecToHex(f.M2PP.value,2);}else{BB2+="00";}
    BB2+=DecToHex(f.M1PP.value,2);
    Bs[2].value=BB2;
    cs+=(1*("0x"+BB2))%65536;
    cs+=Math.floor((1*("0x"+BB2))/65536);
    r=xk^(1*("0x"+BB2));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BB2=DecToHex(r,8);
    BC0=DecToHex(f.SpeEff.value,2);
    BC0+=DecToHex(f.DefEff.value,2);
    BC0+=DecToHex(f.AtkEff.value,2);
    BC0+=DecToHex(f.HPEff.value,2);
    Cs[0].value=BC0;
    cs+=(1*("0x"+BC0))%65536;
    cs+=Math.floor((1*("0x"+BC0))/65536);
    r=xk^(1*("0x"+BC0));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BC0=DecToHex(r,8);
    r=f.Beauty.value;
    if(r<0){r=0;}
    if(r>255){r=255;}
    f.Beauty.value=r;
    BC1=DecToHex(f.Beauty.value,2);
    r=f.Cool.value;
    if(r<0){r=0;}
    if(r>255){r=255;}
    f.Cool.value=r;
    BC1+=DecToHex(f.Cool.value,2);
    BC1+=DecToHex(f.SpDEff.value,2);
    BC1+=DecToHex(f.SpAEff.value,2);
    Cs[1].value=BC1;
    cs+=(1*("0x"+BC1))%65536;
    cs+=Math.floor((1*("0x"+BC1))/65536);
    r=xk^(1*("0x"+BC1));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BC1=DecToHex(r,8);
    r=f.Luster.value;
    if(r<0){r=0;}
    if(r>255){r=255;}
    f.Luster.value=r;
    BC2=DecToHex(f.Luster.value,2);
    r=f.Tough.value;
    if(r<0){r=0;}
    if(r>255){r=255;}
    f.Tough.value=r;
    BC2+=DecToHex(f.Tough.value,2);
    r=f.Smart.value;
    if(r<0){r=0;}
    if(r>255){r=255;}
    f.Smart.value=r;
    BC2+=DecToHex(f.Smart.value,2);
    r=f.Cute.value;
    if(r<0){r=0;}
    if(r>255){r=255;}
    f.Cute.value=r;
    BC2+=DecToHex(f.Cute.value,2);
    Cs[2].value=BC2;
    cs+=(1*("0x"+BC2))%65536;
    cs+=Math.floor((1*("0x"+BC2))/65536);
    r=xk^(1*("0x"+BC2));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BC2=DecToHex(r,8);
    r1=f.Lvl.value;
    if(r1<0){f.Lvl.value=0;}
    if(r1>100){f.Lvl.value=100;}
    r1=parseInt(1*("0x"+f.Loc[f.Loc.selectedIndex].value),10)
    r=(f.Ball.selectedIndex+1)*134217728+(f.Lvl.value)*65536+(r1)*256;
    if(f.Pokerus.selectedIndex==1){r+=1;}
    if(f.Pokerus.selectedIndex==2){r+=16;}
    if(f.TGender.selectedIndex==1){r+=1*"0x80000000";}
    r1=f.OTFlag.selectedIndex;
    r+=r1*8388608;
    BD0=DecToHex(r,8);
    Ds[0].value=BD0;
    cs+=(1*("0x"+BD0))%65536;
    cs+=Math.floor((1*("0x"+BD0))/65536);
    r=xk^(1*("0x"+BD0));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BD0=DecToHex(r,8);
    r=(f.SpDDV.selectedIndex)*33554432;
    r+=(f.SpADV.selectedIndex)*1048576;
    r+=(f.SpeDV.selectedIndex)*32768;
    r+=(f.DefDV.selectedIndex)*1024;
    r+=(f.AtkDV.selectedIndex)*32;
    r+=(f.HPDV.selectedIndex)*1;
    if(f.EFlag.checked){r+=1073741824;}
    if(f.Ability.selectedIndex==1){r+=2147483648;}
    BD1=DecToHex(r,8);
    Ds[1].value=BD1;
    cs+=(1*("0x"+BD1))%65536;
    cs+=Math.floor((1*("0x"+BD1))/65536);
    r=xk^(1*("0x"+BD1));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BD1=DecToHex(r,8);
    r=f.RCool.selectedIndex;
    r+=(f.RBeauty.selectedIndex)*8;
    r+=(f.RCute.selectedIndex)*64;
    r+=(f.RSmart.selectedIndex)*512;
    r+=(f.RTough.selectedIndex)*4096;
    if(f.RChampion.checked){r+=32768;}
    if(f.RB50.checked){r+=65536;}
    if(f.RB100.checked){r+=131072;}
    if(f.RSketch.checked){r+=262144;}
    if(f.RHardWorker.checked){r+=524288;}
    if(f.RS0.checked){r+=1048576;}
    if(f.RS1.checked){r+=2097152;}
    if(f.RS2.checked){r+=4194304;}
    if(f.RS3.checked){r+=8388608;}
    if(f.RS4.checked){r+=16777216;}
    if(f.RS5.checked){r+=33554432;}
    if(f.RS6.checked){r+=67108864;}
    if(f.AltP.checked){r+=2147483648;}
    BD2=DecToHex(r,8);
    Ds[2].value=BD2;
    cs+=(1*("0x"+BD2))%65536;
    cs+=Math.floor((1*("0x"+BD2))/65536);
    r=xk^(1*("0x"+BD2));
    if(r<0){r+=1*"0x100000000";}
    if(r>(1*"0xFFFFFFFF")){r-=1*"0x100000000";}
    BD2=DecToHex(r,8);
    cs=Math.floor(cs%65536);
    f.CS.value=DecToHex(cs,4);
    ts="0000"+DecToHex(cs,4);
    D[7].value=ts;
    S=SetABCD();
    for (var i=0; i<4;i++){
        r=i*3+8;
        if(S.substr(i,1)=="A"){
            D[r].value=BA0;
            r+=1;
            D[r].value=BA1;
            r+=1;
            D[r].value=BA2;
        }
        if(S.substr(i,1)=="B"){
            D[r].value=BB0;
            r+=1;
            D[r].value=BB1;
            r+=1;
            D[r].value=BB2;
        }
        if(S.substr(i,1)=="C"){
            D[r].value=BC0;
            r+=1;
            D[r].value=BC1;
            r+=1;
            D[r].value=BC2;
        }
        if(S.substr(i,1)=="D"){
            D[r].value=BD0;
            r+=1;
            D[r].value=BD1;
            r+=1;
            D[r].value=BD2;
        }
    }
    tt=fSetDNA(f);
}
function FillAll() {
    fFillAll(getDefaultForm());
}

function getBoxAddress(i, box, slot) {
    // Gets the raw box address for the specified GameID, box, and slot in the box
    var addr;
    if(i<12){
        addr=(1*"0x020300A4");
    } else  if(i>11&&i<14){
        addr=(1*"0x0202FDC0");
    } else  if(i>13&&i<16){
        addr=(1*"0x02029250");
    } else if(i>15&&i<18){
        addr=(1*"0x02029318");
    } else if(i==29){
        addr=(1*"0x02FE9828");
    } else if(i==18){
        addr=(1*"0x020294B0");
    } else if(i>18){
        addr=(1*"0x02029318");
    }
    addr=addr+box*2400+slot*80;
    return addr;
}

function getGameName(i) {

    var t;
    var L="\r\n";

    if(i==0){t="(U/UK) Ruby"+L;}
    else if(i==1){t="(U/UK) Sapphire"+L;}
    else if(i==29){t="(U) Emerald"+L;}
    else if(i==2){t="(F) Rubis"+L;}
    else if(i==3){t="(F) Saphir"+L;}
    else if(i==4){t="(G) Rubin"+L;}
    else if(i==5){t="(G) Saphir"+L;}
    else if(i==6){t="(S) Rubi"+L;}
    else if(i==7){t="(S) Zafiro"+L;}
    else if(i==8){t="(I) Rubino"+L;}
    else if(i==9){t="(I) Zaffiro"+L;}
    else if(i==10){t="(E) Ruby"+L;}
    else if(i==11){t="(E) Sapphire"+L;}
    else if(i==12){t="(J) Ruby"+L;}
    else if(i==13){t="(J) Sapphire"+L;}
    else if(i==14){t="(J) Fire Red"+L;}
    else if(i==15){t="(J) Leaf Green"+L;}
    else if(i==16){t="(U) Red Fire v1.0"+L;}
    else if(i==17){t="(U) Green Leaf v1.0"+L;}
    else if(i==18){t="(J) Emerald"+L;}
    else if(i==19){t="(U) Red Fire v1.1"+L;}
    else if(i==20){t="(U) Green Leaf v1.1"+L;}
    else if(i==21){t="(S) Rojo Fuego"+L;}
    else if(i==22){t="(S) Verde Hoja"+L;}
    else if(i==23){t="(G) Blattgrune Edition"+L;}
    else if(i==24){t="(G) Feuerrote Edition"+L;}
    else if(i==25){t="(F) Rouge Feu"+L;}
    else if(i==26){t="(F) Vert Feuille"+L;}
    else if(i==27){t="(I) Versione Rosso Fuoco"+L;}
    else if(i==28){t="(I) Versione Verde Foglia"+L;}

    return t;
}

function getAntiDMACode(i, r){
    var t="";
    var L="\r\n";

    if (r == 0) {
        if(i>13 && i<16){t+="Anti DMA(must be on) GameShark v1"+L+"0D6333465BE368CB"+L;}
        else if(i>15 && i<18){t+="Anti DMA(must be on) GameShark v1"+L+"20AAA133853F98EB"+L;}
        else if(i==18){t+="Anti DMA(must be on) GameShark v1"+L+"8182D513D9CC1064"+L;}
        else if(i>18 && i<21){t+="Anti DMA(must be on) GameShark v1"+L+"08CEC818DE923E83"+L;}
        else if(i>20 && i<23){t+="Anti DMA(must be on) GameShark v1"+L+"C16A4EA4CA210A5C"+L;}
        else if(i>22 && i<25){t+="Anti DMA(must be on) GameShark v1"+L+"5A8E401F123286BB"+L;}
        else if(i>24 && i<27){t+="Anti DMA(must be on) GameShark v1"+L+"7744C4A7176BB522"+L;}
        else if(i>26 && i<29){t+="Anti DMA(must be on) GameShark v1"+L+"B2C57874904ABEBE"+L;}
    } else {
        t+="(m)"+L;
        if (r == 1) {
            if(i==0){t+="9E6AC862823AB7A8"+L+"46B7D9E4A709E9E1"+L+L;}
            else if(i==1){t+="9E6AC862823AB7A8"+L+"8365F8FA817CF3E9"+L+L;}
            else if(i==2){t+="683C7E7A0102EC9F"+L+"DF9D42B90AAFD621"+L+L;}
            else if(i==3){t+="683C7E7A0102EC9F"+L+"1CA30DA43F2C9EED"+L+L;}
            else if(i==4){t+="9CC58A9036224243"+L+"9ECADB3BFBDD4712"+L+L;}
            else if(i==5){t+="9CC58A9036224243"+L+"67DCACBE05C3BA0E"+L+L;}
            else if(i==6){t+="E63DA7BD161720E3"+L+"9EE2F297F924AEF6"+L+L;}
            else if(i==7){t+="E63DA7BD161720E3"+L+"2A0954429AF614DC"+L+L;}
            else if(i==8){t+="E63DA7BD161720E3"+L+"B571CB0DFF0D0CA4"+L+L;}
            else if(i==9){t+="E63DA7BD161720E3"+L+"2DB32A9BB94B6340"+L+L;}
            else if(i==10){t+="FBC85C6B793937A1"+L+"46B7D9E4A709E9E1"+L+L;}
            else if(i==11){t+="FBC85C6B793937A1"+L+"8365F8FA817CF3E9"+L+L;}
            else if(i==12){t+="6E93895CC2679628"+L+"02BD3075C9E2B4CE"+L+L;}
            else if(i==13){t+="6E93895CC2679628"+L+"03514D3E7157DA35"+L+L;}
            else if(i==14){
                t+="78A0B2AE45CB4E65"+L+"423E91A1A46AEFBA"+L;
                t+="Anti DMA (Must Be On)"+L+"0D6333465BE368CB"+L+L;
            }
            else if(i==15){t+="78A0B2AE45CB4E65"+L+"DA3DFA98CB6A3E6E"+L;
            t+="Anti DMA (Must Be On)"+L+"0D6333465BE368CB"+L+L;}
            else if(i==16){t+="78A0B2AE45CB4E65"+L+"3C1BD432E365EC14"+L;
            t+="Anti DMA (Must Be On)"+L+"20AAA133853F98EB"+L+L;}
            else if(i==17){t+="78A0B2AE45CB4E65"+L+"4D2BB04F34651E54"+L;
            t+="Anti DMA (Must Be On)"+L+"20AAA133853F98EB"+L+L;}
            else if(i==18){t+="CADD22F0ADF77526"+L+"6626FE4B34EB0C5C"+L;
            t+="Anti DMA (Must Be On)"+L+"8182D513D9CC1064"+L+L;}
            else if(i==19){t+="388E455EF1D8A012"+L+"3C1BD432E365EC14"+L;
            t+="Anti DMA (Must Be On)"+L+"08CEC818DE923E83"+L+L;}
            else if(i==20){t+="388E455EF1D8A012"+L+"4D2BB04F34651E54"+L;
            t+="Anti DMA (Must Be On)"+L+"08CEC818DE923E83"+L+L;}
            else if(i==21){t+="CADD22F0ADF77526"+L+"DB1CCA88E093B834"+L;
            t+="Anti DMA (Must Be On)"+L+"C16A4EA4CA210A5C"+L+L;}
            else if(i==22){t+="CADD22F0ADF77526"+L+"D6BB988DE3709329"+L;
            t+="Anti DMA (Must Be On)"+L+"C16A4EA4CA210A5C"+L+L;}
            else if(i==23){t+="A6E15278DFA09AB7"+L+"21631F6FD70B7220"+L;
            t+="Anti DMA (Must Be On)"+L+"5A8E401F123286BB"+L+L;}
            else if(i==24){t+="A6E15278DFA09AB7"+L+"EC29BAC6E7EB2C8B"+L;
            t+="Anti DMA (Must Be On)"+L+"5A8E401F123286BB"+L+L;}
            else if(i==25){t+="CADD22F0ADF77526"+L+"B0B22CF03865C3DE"+L;
            t+="Anti DMA (Must Be On)"+L+"7744C4A7176BB522"+L+L;}
            else if(i==26){t+="CADD22F0ADF77526"+L+"A3BA42C2EB1050DF"+L;
            t+="Anti DMA (Must Be On)"+L+"7744C4A7176BB522"+L+L;}
            else if(i==27){t+="A6E15278DFA09AB7"+L+"96A8EC170D4714B6"+L;
            t+="Anti DMA (Must Be On)"+L+"B2C57874904ABEBE"+L+L;}
            else if(i==28){
                t+="A6E15278DFA09AB7"+L+"DA661FCD9D61C27D"+L;
                t+="Anti DMA (Must Be On)"+L+"B2C57874904ABEBE"+L+L;
            }
            else if (i==29) {
                t+="C5CA4EB51863042B"+L+"29701B956B4653C6"+L;

            }
        } else if (r == 2) {
            if(i==0){t+="DE00AAFD 2EBD05D0"+L+"530823D9 16558191"+L+L;}
            else if(i==1){t+="DE00AAFD 2EBD05D0"+L+"B4564EFE 23F44BF2"+L+L;}
            else if(i==2){t+="F57C7BCB ADC632B9"+L+"90A6E9C3 2D8D03E3"+L+L;}
            else if(i==3){t+="F57C7BCB ADC632B9"+L+"A43FB15C 1E8ECF5D"+L+L;}
            else if(i==4){t+="5E263E14 AD8EF97D"+L+"851B05E0 594B5D88"+L+L;}
            else if(i==5){t+="5E263E14 AD8EF97D"+L+"41C1BF4B 17EE5233"+L+L;}
            else if(i==6){t+="33E6A427 056936FC"+L+"E87BA897 4FFD3634"+L+L;}
            else if(i==7){t+="33E6A427 056936FC"+L+"B02EF1DB D06782F2"+L+L;}
            else if(i==8){t+="33E6A427 056936FC"+L+"93A1C658 8DD5F1D0"+L+L;}
            else if(i==9){t+="33E6A427 056936FC"+L+"F5288E7B 33220035"+L+L;}
            else if(i==10){t+="8CF9C3C8 FD548197"+L+"530823D9 16558191"+L+L;}
            else if(i==11){t+="8CF9C3C8 FD548197"+L+"B4564EFE 23F44BF2"+L+L;}
            else if(i==12){t+="CD361343 4CF2A2BF"+L+"1660CD84 4D5251F4"+L+L;}
            else if(i==13){t+="CD361343 4CF2A2BF"+L+"65C7640E 2099B840"+L+L;}
            else if(i==14){t+="72BC6DFB E9CA5465"+L+"F0826040 FE465C57"+L;
            t+="Anti DMA (Must Be On)"+L+"80C2CE72 6E8398D4"+L;
            t+="78DA95DF 44018CB4"+L+L;}
            else if(i==15){t+="72BC6DFB E9CA5465"+L+"2FD2DBC6 552BC912"+L;
            t+="Anti DMA (Must Be On)"+L+"80C2CE72 6E8398D4"+L;
            t+="78DA95DF 44018CB4"+L+L;}
            else if(i==16){t+="72BC6DFB E9CA5465"+L+"A47FB2DC 1AF3CA86"+L;
            t+="Anti DMA (Must Be On)"+L+"8D671FD9 6F6BEFF2"+L;
            t+="78DA95DF 44018CB4"+L+L;}
            else if(i==17){t+="72BC6DFB E9CA5465"+L+"56671F3A 6F4F4D6B"+L;
            t+="Anti DMA (Must Be On)"+L+"8D671FD9 6F6BEFF2"+L;
            t+="78DA95DF 44018CB4"+L+L;}
            else if(i==18){t+="D8BAE4D9 4864DCE5"+L+"0CD39E3A BD6E41B1"+L;
            t+="Anti DMA (Must Be On)"+L+"6ED6DA14 686DF10E"+L;
            t+="1C7B3231 B494738C"+L+L;}
            else if(i==19){t+="E6A003D6 8110DDD5"+L+"A47FB2DC 1AF3CA86"+L;
            t+="Anti DMA (Must Be On)"+L+"24C35E88 037C3033"+L;
            t+="78DA95DF 44018CB4"+L+L;}
            else if(i==20){t+="E6A003D6 8110DDD5"+L+"56671F3A 6F4F4D6B"+L;
            t+="Anti DMA (Must Be On)"+L+"24C35E88 037C3033"+L;
            t+="78DA95DF 44018CB4"+L+L;}
            else if(i==21){
                t+="D8BAE4D9 4864DCE5"+L+"4879A617 AE7683D9"+L;
                t+="Anti DMA (Must Be On)"+L+"61181D0E ABC43CBE"+L;
                t+="78DA95DF 44018CB4"+L+L;
            }
            else if(i==22){
                t+="D8BAE4D9 4864DCE5"+L+"CB89E5ED 0ADBAF91"+L;
                t+="Anti DMA (Must Be On)"+L+"61181D0E ABC43CBE"+L;
                t+="78DA95DF 44018CB4"+L+L;
            }
            else if(i==23){
                t+="DFC87987 BBA21C13"+L+"66A64C7D C1365507"+L;
                t+="Anti DMA (Must Be On)"+L+"A269812A 7C8BB4D9"+L;
                t+="78DA95DF 44018CB4"+L+L;
            }
            else if(i==24){
                t+="DFC87987 BBA21C13"+L+"CEBF8DCD FD0A2E01"+L;
                t+="Anti DMA (Must Be On)"+L+"A269812A 7C8BB4D9"+L;
                t+="78DA95DF 44018CB4"+L+L;
            }
            else if(i==25){
                t+="D8BAE4D9 4864DCE5"+L+"0B40BD4C 6F70EA2C"+L;
                t+="Anti DMA (Must Be On)"+L+"115D14A2 58B9B5BF"+L;
                t+="78DA95DF 44018CB4"+L+L;
            }
            else if(i==26){
                t+="D8BAE4D9 4864DCE5"+L+"FB41D9B3 3A1BF27D"+L;
                t+="Anti DMA (Must Be On)"+L+"115D14A2 58B9B5BF"+L;
                t+="78DA95DF 44018CB4"+L+L;
            }
            else if(i==27){
                t+="DFC87987 BBA21C13"+L+"8378FDD4 5ABC5853"+L;
                t+="Anti DMA (Must Be On)"+L+"1C83801E D2A043BF"+L;
                t+="78DA95DF 44018CB4"+L+L;
            }
            else if(i==28){
                t+="DFC87987 BBA21C13"+L+"518E0AB2 E182C852"+L;
                t+="Anti DMA (Must Be On)"+L+"1C83801E D2A043BF"+L;
                t+="78DA95DF 44018CB4"+L+L;
            }
            else if(i==29){
                t+="D8BAE4D9 4864DCE5"+L+"A86CDBA5 19BA49B3"+L;
                t+="Anti DMA (Must Be On)"+L+"B2809E31 3CEF5320"+L;
                t+="1C7B3231 B494738C"+L+L;
            }
        } else if (r == 3 || r == 5) {
            if(i==0){t+="0000B138 000A"+L+"1000042C 0007"+L+L;}
            else if(i==1){t+="000056D0 000A"+L+"1000042C 0007"+L+L;}
            else if(i==2){t+="0000ABFA 000A"+L+"10000564 0007"+L+L;}
            else if(i==3){t+="0000F97B 000A"+L+"10000564 0007"+L+L;}
            else if(i==4){t+="00000A78 000A"+L+"10000564 0007"+L+L;}
            else if(i==5){t+="0000E1F8 000A"+L+"10000564 0007"+L+L;}
            else if(i==6){t+="000045A1 000A"+L+"1000055C 0007"+L+L;}
            else if(i==7){t+="00001E2C 000A"+L+"1000055C 0007"+L+L;}
            else if(i==8){t+="00000018 000A"+L+"1000055C 0007"+L+L;}
            else if(i==9){t+="00005D09 000A"+L+"1000055C 0007"+L+L;}
            else if(i==10){t+="00007d44 000A"+L+"1000042C 0007"+L+L;}
            else if(i==11){t+="00000b86 000A"+L+"1000042C 0007"+L+L;}
            else if(i==12){t+="00004798 000A"+L+"10000434 0007"+L+L;}
            else if(i==13){t+="00002B1F 000A"+L+"10000434 0007"+L+L;}
            else if(i==14){t+="000077CA 000A"+L+"1004448C 0007"+L+"83005040 61A1"+L+"83005042 0A35"+L+L;}
            else if(i==15){t+="0000BE99 000A"+L+"1004448C 0007"+L+"83005040 61A1"+L+"83005042 0A35"+L+L;}
            else if(i==16){t+="0000295F 000A"+L+"10044EC8 0007"+L+"83005000 61A1"+L+"83005002 0A35"+L+L;}
            else if(i==17){t+="000038DA 000A"+L+"10044EC8 0007"+L+"83005000 61A1"+L+"83005002 0A35"+L+L;}
            else if(i==18){t+="0000961F 000A"+L+"1006F050 0007"+L+"83005ae0 61A1"+L+"83005ae2 0A35"+L+L;}
            else if(i==19){t+="0000???? 000A"+L+"10044EDC 0007"+L+"83005000 61A1"+L+"83005002 0A35"+L+L;}
            else if(i==20){t+="0000???? 000A"+L+"10044EDC 0007"+L+"83005000 61A1"+L+"83005002 0A35"+L+L;}
            else if(i==21){t+="00002937 000A"+L+"10044EA0 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            else if(i==22){t+="000048B2 000A"+L+"10044EA0 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            else if(i==23){t+="0000???? 000A"+L+"10044DCC 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            else if(i==24){t+="0000???? 000A"+L+"10044DCC 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            else if(i==25){t+="0000???? 000A"+L+"10044E8C 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            else if(i==26){t+="0000???? 000A"+L+"10044E8C 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            else if(i==27){t+="0000???? 000A"+L+"10044DB8 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            else if(i==28){t+="000045A6 000A"+L+"10044DB8 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}

        }
    }

    return t;
}

function getRibbonCodes(i,
                        r0, s0,
                        r1, s1,
                        r2, s2,
                        r3, s3,
                        r4, s4,
                        r5, s5,
                        r6, s6
) {
    var t = "";
    var tt;
    var addr;
    var tcode = "";
    var BA1;
    var BA2;

    if(r0){
        addr="02028844";
        if(i<12){addr="02028844";}
        if(i>11&&i<14){addr="020285A4";}
        if(i>13&&i<16){addr="02024FD8";}
        if(i>15&&i<18){addr="02025078";}
        if(i==18||i==29){addr="0202884C";}
        if(i>18){addr="02025078";}
        BA2=DecToHex(s0,2);
        tt=ec(addr,BA2,8,r);
        tcode+=tt+"\r\n";
    }

    if(r1){
        addr="02028845";
        if(i<12){addr="02028845";}
        if(i>11&&i<14){addr="020285A5";}
        if(i>13&&i<16){addr="02024FD9";}
        if(i>15&&i<18){addr="02025079";}
        if(i==18||i==29){addr="0202884D";}
        if(i>18){addr="02025079";}
        BA2=DecToHex(s1,2);
        tt=ec(addr,BA2,8,r);
        tcode+=tt+"\r\n";
    }

    if(r2){
        addr="02028846";
        if(i<12){addr="02028846";}
        if(i>11&&i<14){addr="020285A6";}
        if(i>13&&i<16){addr="02024FDA";}
        if(i>15&&i<18){addr="0202507A";}
        if(i==18||i==29){addr="0202884D";}
        if(i>18){addr="0202507A";}
        BA2=DecToHex(s2,2);
        tt=ec(addr,BA2,8,r);
        tcode+=tt+"\r\n";
    }

    if(r3){
        addr="02028847";
        if(i<12){addr="02028847";}
        if(i>11&&i<14){addr="020285A7";}
        if(i>13&&i<16){addr="02024FDB";}
        if(i>15&&i<18){addr="0202507B";}
        if(i==18||i==29){addr="0202884E";}
        if(i>18){addr="0202507B";}
        BA2=DecToHex(s3,2);
        tt=ec(addr,BA2,8,r);
        tcode+=tt+"\r\n";
    }

    if(r4){
        addr="02028848";
        if(i<12){addr="02028848";}
        if(i>11&&i<14){addr="020285A8";}
        if(i>13&&i<16){addr="02024FDC";}
        if(i>15&&i<18){addr="0202507C";}
        if(i==18||i==29){addr="0202884F";}
        if(i>18){addr="0202507C";}
        BA2=DecToHex(s4,2);
        tt=ec(addr,BA2,8,r);
        tcode+=tt+"\r\n";
    }

    if(r5){
        addr="02028849";
        if(i<12){addr="02028849";}
        if(i>11&&i<14){addr="020285A9";}
        if(i>13&&i<16){addr="02024FDD";}
        if(i>15&&i<18){addr="0202507D";}
        if(i==18||i==29){addr="02028850";}
        if(i>18){addr="0202507D";}
        BA2=DecToHex(s5,2);
        tt=ec(addr,BA2,8,r);
        tcode+=tt+"\r\n";
    }

    if(r6){
        addr="0202884A";
        if(i<12){addr="0202884A";}
        if(i>11&&i<14){addr="020285AA";}
        if(i>13&&i<16){addr="02024FDE";}
        if(i>15&&i<18){addr="0202507E";}
        if(i==18||i==29){addr="02028851";}
        if(i>18){addr="0202507E";}
        BA2=DecToHex(s6,2);
        tt=ec(addr,BA2,8,r);
        tcode+=tt+"\r\n";
    }

    return tcode;

}

function fCodeOut(f, n){
    var addr=0;
    var tt=" ";
    var t=" ";
    var r=0;
    var D=f.RDNA;
    var tcode="";
    var tlog=" ";
    var i=0;
    var gameIndex;
    var i2=0;
    var BA0=" ";
    var BA1=" ";
    var BA2=" ";

    t=FillAll();
    if(n==-1){
        r=0;
        for (i=0; i<6; i++){
          if(f.RCode[i].checked){
           r=i;
           i=7;
          }
        }
    } else {
            r=n;
    }
    f.LogC.value="Code Out";
    tlog="Code Output\r\n";
    tCode="";
    t="";

    gameIndex=f.Game.selectedIndex;
    // Gets the Master Codes & Anti-DMA stuff
    if(r<4||r==5){
        t = getGameName(gameIndex);
        if(f.MCode.checked){
            tcode+=getAntiDMACode(i, r);
        }
    }

    if(r<4||r==5){
        // Finds the write addresses for all the various flags we can add
        if(f.CTN.checked){
            tcode+="Trainer Name Code: "+f.TName.value+"\r\n";
            i=gameIndex;
            if(i<12){
                BA1="02024EA4";
            } else if(i>11&&i<14){
                BA1="02024C04";
            } else if(i>13&&i<16){
                BA1="020244E8";
            } else if(i>15&&i<18){
                BA1="02024588";
            } else if(i==18||i==29){ // probably need to figure out where US/UK Emerald should go...
                BA1="020246F8";
            } else if(i>18){
                BA1="02024588";
            }
            BA2=D[5].value;
            tt=ec(BA1, BA2,32, r);
            tcode+=tt+"\r\n";
            if(i<12){
                BA1="02024EA8";
            } else if(i>11&&i<14){
                BA1="02024C08";
            } else if(i>13&&i<16){
                BA1="020244EC";
            } else if(i>15&&i<18){
                BA1="0202458C";
            } else if(i==18||i==29){
                BA1="020246FC";
            } else if(i>18){
                BA1="0202458C";
            }
            BA2=D[6].value;
            BA2="FF"+BA2.substring(2,8);
            tt=ec(BA1, BA2, 32, r);
            tcode+=tt+"\r\n";
        }
        if(f.CTG.checked){
            BA0="Boy";
            if(f.TGender.selectedIndex==1){BA0="Girl";}
            tcode+="\r\nTrainer Gender Code: "+BA0+"\r\n";
            i=gameIndex;
            if(i<12){
                BA1="02024EAC";
            } else if(i>11&&i<14){
                BA1="02024C0C";
            } else if(i>13&&i<16){
                BA1="020244F0";
            } else if(i>15&&i<18){
                BA1="02024590";
            } else if(i==18||i==29){
                BA1="02024700";
            } else if(i>18){
                BA1="02024590";
            }
            BA2=DecToHex(f.TGender.selectedIndex,2);
            tt=ec(BA1, BA2,8,r);
            tcode+=tt+"\r\n";
        }
        if(f.CTID.checked){
            tcode+="\r\nTrainer ID Code: "+f.TID.value+"\r\n";
            i=gameIndex;
            if(i<12){
                BA1="02024EAE";
            } else if(i>11&&i<14){
                BA1="02024C0E";
            } else if(i>13&&i<16){
                BA1="020244F2";
            } else if(i>15&&i<18){
                BA1="02024592";
            } else if(i==18||i==29){
                BA1="02024702";
            } else if(i>18){
                BA1="02024592";
            }
            BA2=D[1].value.substring(4,8);
            tt=ec(BA1, BA2, 16, r);
            tcode+=tt+"\r\n";
        }
        if(f.CTSID.checked){
            tcode+="\r\nSecret Trainer ID Code: "+f.STID.value+"\r\n";
            i=gameIndex;
            if(i<12){
                BA1="02024EB0";
            } else if(i>11&&i<14){
                BA1="02024C10";
            } else if(i>13&&i<16){
                BA1="020244F4";
            } else if(i>15&&i<18){
                BA1="02024594";
            } else if(i==18||i==29){
                BA1="02024704";
            } else if(i>18){
                BA1="02024594";
            }
            BA2=D[1].value.substring(0,4);
            tt=ec(BA1,BA2, 16, r);
            tcode+=tt+"\r\n";
        }
        if(f.COPN.checked){
            tcode+="\r\nPokemon Name Code: "+f.PName.value+"\r\n";
            tcode+="Box:"+(f.Box.selectedIndex+1)+" Spot:"+(f.Spot.selectedIndex+1)+"\r\n";
            addr = getBoxAddress(gameIndex, f.Box.selectedIndex, f.Spot.selectedIndex);
            addr+=8;
            BA1=DecToHex(addr,8);
            BA2=D[2].value;
            tt=ec(BA1,BA2,32,r);
            tcode+=tt+"\r\n";
            addr+=4;
            BA1=DecToHex(addr,8);
            BA2=D[3].value;
            tt=ec(BA1,BA2,32,r);
            tcode+=tt+"\r\n";
            addr+=4;
            BA1=DecToHex(addr,8);
            BA2=D[4].value.substring(4,8);
            tt=ec(BA1,BA2,16,r);
            tcode+=tt+"\r\n";
        }
        if(f.FCo.checked){
            tcode+="Font Code:"+f.PFont.value+"\r\n";
            tcode+="Box:"+(f.Box.selectedIndex+1)+" Spot:"+(f.Spot.selectedIndex+1)+"\r\n";
            addr = getBoxAddress(gameIndex, f.Box.selectedIndex, f.Spot.selectedIndex);
            addr+=18;
            BA1=DecToHex(addr,8);
            BA2=f.PFont.value;
            tt=ec(BA1,BA2,16,r);
            tcode+=tt+"\r\n";
        }
        i=gameIndex;
        if(f.MIcode.checked&&(i<14||i==18||i==29)){
            tcode+="\r\nMirage Island Code for this Pokemon:\r\n";
            if(i<12){BA1="02026ABC";}
            if(i>11&&i<14){BA1="0202681C";}
            if(i==18||i==29){BA1="02026A88";}
            BA2=D[0].value.substring(4,8);
            tt=ec(BA1,BA2,16,r);
            tcode+=tt+"\r\n";
        }

        // Writes out the basic pokemon data based on the specified box and stuff
        tlog+="Box:"+(f.Box.selectedIndex+1)+" Spot:"+(f.Spot.selectedIndex+1)+"\r\n";
        addr = getBoxAddress(gameIndex, f.Box.selectedIndex, f.Spot.selectedIndex);
        tlog+="Address:"+DecToHex(addr,8)+"\r\n";
        i=f.Species.options[f.Species.selectedIndex].value;
        tt=PokeDex(i);
        t=FI(tt, "~", 3);
        tcode+="\r\nPokemon: "+t+" "+f.PName.value+"\r\n";

        //Lets you know about the hatching properties of your egg
        if(f.EFlag.checked){
            if(f.Happy.value<6){
                tcode+="It's making sounds.\r\nIt's about to hatch!\r\n";
            }
            if(f.Happy.value<11&&f.Happy.value>5){
                tcode+="It moves occsionally.\r\nIt should hatch soon.\r\nSet Happy lower for faster hatching\r\n";
            }
            if(f.Happy.value<41&&f.Happy.value>10){
                tcode+="What will hatch from this?\r\nIt will take some time.\r\nSet Happy lower for faster hatching\r\n";
            }
            if(f.Happy.value>40){
                tcode+="It looks like this EGG will\r\ntake a long time to hatch.\r\nSet Happy lower for faster hatching\r\n";
            }
        }

        tcode+="Box:"+(f.Box.selectedIndex+1)+" Spot:"+(f.Spot.selectedIndex+1)+"\r\n";
        if(r==5){
            BA1=DecToHex(addr,8);
            tt="5"+BA1.substring(1,8)+" 0028";
            tcode+=tt+"\r\n";
            BA2=f.DNA.value;
            for(i=0; i<13; i++){
                i2=i*12;
                BA0=BA2.substring(i2,i2+12);
                tt=BA0.substring(0,8)+" "+BA0.substring(8,12);
                tcode+=tt+"\r\n";
                tlog+="Code Sample "+i+":"+tt+"\r\n";
            }
            BA0=BA2.substring(156,160);
            tt=BA0.substring(0,4)+"0000 0000";
            tcode+=tt+"\r\n";
            tlog+="Code Sample 13:"+tt+"\r\n";
        } else {
            for(i=0; i<20; i++){
                t= D[i].value;
                BA1=DecToHex(addr,8);
                tt=ec(BA1,t,32,r);
                tcode+=tt+"\r\n";
                tlog+="Code Sample "+i+":"+t+"\r\n";
                addr+=4;
                }
        }

        if(f.RS0.checked || f.RS1.checked || f.RS2.checked || f.RS3.checked || f.RS4.checked || f.RS5.checked || f.RS6.checked){
         tcode+="\r\nSpecial Ribbon Codes:\r\n";
        }
        tcode += getRibbonCodes(
            gameIndex,
            f.RS0.checked,
            f.S0M.selectedIndex,
            f.RS1.checked,
            f.S1M.selectedIndex,
            f.RS2.checked,
            f.S2M.selectedIndex,
            f.RS3.checked,
            f.S3M.selectedIndex,
            f.RS4.checked,
            f.S4M.selectedIndex,
            f.RS5.checked,
            f.S5M.selectedIndex,
            f.RS6.checked,
            f.S6M.selectedIndex
        )

    }else{
        tcode=f.DNA.value;
    }
    f.Code.value=tcode;
    f.LogC.value=tlog+"Done.";
}
function codeout(n) {
    return fCodeOut(getDefaultForm(), n);
}

function fCodeIn(f){
    var t=" ";
    var tt=" ";
    var r=0;
    var tcode=" ";
    var tlog=" ";
    var i=0; var j=0; var n=0;
    var w=0; var x=0; var y=0; var z=0;
    var ao=0;
    var tf=0;
    var a=" "; var v=" ";
    var cb=0;
    var c=f.RCode;
    var D=f.RDNA;
    tcode=f.Code.value;
    f.LogC.value="Scanning for Addr\r\n";
    r=0; j=0; n=0; t="";
    tt="";
    tlog="";
    a=" ";
    v=" ";
    tf=0; ao=0; cb=0;
    tlog="Code Extraction\r\n";
    for(i=0;(tcode.length)>=i;i++){
     t=tcode.substring(i,i+1);
     if(IsCode(t)==1){
      tt+=t;
      n+=1;
      if(n>11 && cb==0){
       t=tt.substring(0,4);
       if(t=="8203"||t=="8202"||t=="5202"||t=="5203"){
        if(r==0){
         if(t=="8203"||t=="8202"){
         tlog+="CB/GSv4+Type8 Codes:\r\n";
         c[0].checked = false;
         c[1].checked = false;
         c[2].checked = false;
         c[3].checked = true;
         c[4].checked = false;
         c[5].checked = false;
         tf=4;}
         if(t=="5202"||t=="5203"){
         tlog+="CB/GSv4+Type5 Codes:\r\n";
         c[0].checked = false;
         c[1].checked = false;
         c[2].checked = false;
         c[3].checked = false;
         c[4].checked = false;
         c[5].checked = true;
         tf=6;}
         a="0"+tt.substring(1,8);
         z=Math.floor((1*("0x"+a))-Math.floor(1*"0x020300A4",10),10);
         x=z/80;
         w=Math.floor(z/80);
         y=x-w;
         if(y==0){
          f.LogC.Value+="Found International Ruby/Sapphire Code\r\n";
          tlog+="Found International Ruby/Sapphire Code\r\n";
          f.Game.selectedIndex=0;
          ao=z;
         }
         z=Math.floor((1*("0x"+a))-Math.floor(1*"0x0202FDC0",10),10);
         x=z/80;
         w=Math.floor(z/80);
         y=x-w;
         if(y==0){
          f.LogC.Value+="Found Japanese Ruby/Sapphire Code\r\n";
          tlog+="Found Japanese Ruby/Sapphire Code\r\n";
          f.Game.selectedIndex=12;
          ao=z;
         }
         z=Math.floor((1*("0x"+a))-Math.floor(1*"0x02029250",10),10);
         x=z/80;
         w=Math.floor(z/80);
         y=x-w;
         if(y==0){
          f.LogC.Value+="Found Japanese Fire/Leaf Code\r\n";
          tlog+="Found Japanese Fire/Leaf Code\r\n";
          f.Game.selectedIndex=14;
          ao=z;
         }
         z=Math.floor((1*("0x"+a))-Math.floor(1*"0x02029318",10),10);
         x=z/80;
         w=Math.floor(z/80);
         y=x-w;
         if(y==0){
          f.LogC.Value+="Found International Fire/Leaf Code\r\n";
          tlog+="Found International Fire/Leaf Code\r\n";
          f.Game.selectedIndex=16;
          ao=z;
         }
         z=Math.floor((1*("0x"+a))-Math.floor(1*"0x020294B0",10),10);
         x=z/80;
         w=Math.floor(z/80);
         y=x-w;
         if(y==0){
          f.LogC.Value+="Found Japanese Emerald Code\r\n";
          tlog+="Found Japanese Emerald Code\r\n";
          f.Game.selectedIndex=18;
          ao=z;
         }
         x=Math.floor((Math.floor(ao%2400,10)/80),10);
         if(x<0 || x>29){
          f.LogC.Value="Scanning for Addr";
          j=0;
         }else{
          y=Math.floor((ao-x)/2400);
          if(y<0 || y>13){
           f.LogC.Value="Scanning for Addr";
           j=0;
          }else{
           f.LogC.Value="Found Code Sample 0:\r\nScanning for Code";
           f.Box.selectedIndex=y;
           f.Spot.selectedIndex=x;
           tlog+="Box:"+(y+1)+" Spot:"+(x+1)+"\r\n";
           tlog+="Addr:"+a+"\r\n";
           j=1;
          }
         }
        }
        if(j==1){
         if(t=="8203"||t=="8202"){v=tt.substring(8,12); cb=8;}
         if(t=="5202"||t=="5203"){v=""; cb=5;}
        }
        n=0;
       }
      }
      if(n>11 && cb==8){
       a=tt.substring(8,12);
       v=a+v;
       D[r].value=v;
       tlog+="Code Sample "+r+":"+v+"\r\n";
       r+=1;
       cb=0;
       n=0;
      }
      if(n>11 && cb==5){
       v+=tt;
       tlog+=tt+"\r\n";
       r+=1;
       n=0;
      }
      if(n>15 && cb==0){
       if(tf<4){f.LogC.Value="Scanning for Code S"+r+"\r\n";}
       t=tt.substring(0,4);
       if(t=="0203"||t=="0202"){
        if(r==0){
         tlog+="VBA Codes:\r\n";
         c[0].checked = true;
         c[1].checked = false;
         c[2].checked = false;
         c[3].checked = false;
         c[4].checked = false;
         c[5].checked = false;
         tf=0;
        }
        a=tt.substring(0,8);
        v=tt.substring(8,16);
        j=1;
       }else{
        t=GAD(tt,"1");
        a=t.substring(0,4);
        if(a=="2203"||a=="2202"){
         if(r==0){
          tlog+="AR v1 Codes:\r\n";
          c[0].checked = false;
          c[1].checked = true;
          c[2].checked = false;
          c[3].checked = false;
          c[4].checked = false;
          c[5].checked = false;
         tf=2;
         }
         a="0"+t.substring(1,8);
         v=t.substring(8,16);
         j=1;
        }else{
         t=GAD(tt,"3");
         a=t.substring(0,4);
         if(a=="0423"||a=="0422"){
          if(r==0){
           tlog+="AR v3 Codes:\r\n";
           c[0].checked = false;
           c[1].checked = false;
           c[2].checked = true;
           c[3].checked = false;
           c[4].checked = false;
           c[5].checked = false;
        tf=3;
          }
          a="020"+t.substring(3,8);
          v=t.substring(8,16);
          j=1;
         }else{
          f.LogC.Value="Scanning for 80-Bytes";
          j=2;
         tf=5;
          if(n>159){
           tlog+="80-Bytes Found:\r\n";
           c[0].checked = false;
           c[1].checked = false;
           c[2].checked = false;
           c[3].checked = false;
           c[4].checked = true;
           c[5].checked = false;
          f.DNA.value=tt;
           for(r=0;r<20;r++){
            D[r].value=tt.substr((r*8+6),2)+tt.substr((r*8+4),2)+tt.substr((r*8+2),2)+tt.substr((r*8),2);
            tlog+=tt.substr((r*8),2)+tt.substr((r*8+2),2)+tt.substr((r*8+4),2)+tt.substr((r*8+6),2)+"\r\n";
           }
           f.Box.selectedIndex=0;
           f.Spot.selectedIndex=0;
           j=0;
          }
         }
        }
       }
       if(j==1){
        if(r==0){
         z=Math.floor((1*("0x"+a))-Math.floor(1*"0x020300A4",10),10);
         x=z/80;
         w=Math.floor(z/80);
         y=x-w;
         if(y==0){
          f.LogC.Value+="Found International Ruby/Sapphire Code\r\n";
          tlog+="Found International Ruby/Sapphire Code\r\n";
          f.Game.selectedIndex=0;
          ao=z;
         }
         z=Math.floor((1*("0x"+a))-Math.floor(1*"0x0202FDC0",10),10);
         x=z/80;
         w=Math.floor(z/80);
         y=x-w;
         if(y==0){
          f.LogC.Value+="Found Japanese Ruby/Sapphire Code\r\n";
          tlog+="Found Japanese Ruby/Sapphire Code\r\n";
          f.Game.selectedIndex=12;
          ao=z;
         }
         z=Math.floor((1*("0x"+a))-Math.floor(1*"0x02029250",10),10);
         x=z/80;
         w=Math.floor(z/80);
         y=x-w;
         if(y==0){
          f.LogC.Value+="Found Japanese Fire/Leaf Code\r\n";
          tlog+="Found Japanese Fire/Leaf Code\r\n";
          f.Game.selectedIndex=14;
          ao=z;
          }
         z=Math.floor((1*("0x"+a))-Math.floor(1*"0x02029318",10),10);
         x=z/80;
         w=Math.floor(z/80);
         y=x-w;
         if(y==0){
          f.LogC.Value+="Found International Fire/Leaf Code\r\n";
          tlog+="Found International Fire/Leaf Code\r\n";
          f.Game.selectedIndex=16;
          ao=z;
          }
         z=Math.floor((1*("0x"+a))-Math.floor(1*"0x020294B0",10),10);
         x=z/80;
         w=Math.floor(z/80);
         y=x-w;
         if(y==0){
          f.LogC.Value+="Found Japanese Emerald Code\r\n";
          tlog+="Found Japanese Emerald Code\r\n";
          f.Game.selectedIndex=18;
          ao=z;
          }
          x=Math.floor((Math.floor(ao%2400,10)/80),10);
         if(x<0 || x>29){
          f.LogC.Value="Scanning for Addr";
          j=0;
         }else{
          y=Math.floor((ao-x)/2400);
          if(y<0 || y>13){
           f.LogC.Value="Scanning for Addr";
           j=0;
          }else{
           f.LogC.Value="Found Code Sample 0:\r\nScanning for Code";
           f.Box.selectedIndex=y;
           f.Spot.selectedIndex=x;
           tlog+="Box:"+(y+1)+" Spot:"+(x+1)+"\r\n";
           tlog+="Addr:"+a+"\r\n";
           j=1;
          }
         }
        }
        if(j==1){
         if(r<20){
          D[r].value=v;
          tlog+="Code Sample "+r+":"+v+"\r\n";
          r+=1;
         }
        }
       }
       if(j<2){
        tt="";
        j=0;
        n=0;
       }
      }
     }else{
      if(IsCode(t)==2){
       if(n<8){n=0; tt="";}
      }else{
       n=0;
       tt="";
      }
     }
    }
    if(cb==5){
     if(r==14){r=20;}
     if((v.length)<160){
      r=1;
     }else{
      f.DNA.value=v;
      tt=v;
      for(r=0;r<20;r++){
       D[r].value=tt.substr((r*8+6),2)+tt.substr((r*8+4),2)+tt.substr((r*8+2),2)+tt.substr((r*8),2);
       tlog+=tt.substr((r*8),2)+tt.substr((r*8+2),2)+tt.substr((r*8+4),2)+tt.substr((r*8+6),2)+"\r\n";
      }
     }
    }
    if(r<20){tlog+="Error: Incomplete Code found.\r\n";}
    tlog=SetAll(tlog);
    f.LogC.value=tlog+"Done.";
}
function codein() {
    return fCodeIn(getDefaultForm());
}