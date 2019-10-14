// Functions for setting various form settings related to stats and whatnot

function fMaxContest(f){
    f.Luster.value=255;
    f.Cool.value=255;
    f.Beauty.value=255;
    f.Cute.value=255;
    f.Smart.value=255;
    f.Tough.value=255;
}
function MaxContest() {
    return fMaxContest(getDefaultForm());
}

function fMaxDV(f){
    f.HPDV.options[31].selected=true;
    f.AtkDV.options[31].selected=true;
    f.DefDV.options[31].selected=true;
    f.SpeDV.options[31].selected=true;
    f.SpADV.options[31].selected=true;
    f.SpDDV.options[31].selected=true;
    dv=fHPower(f);
}
function MaxDV() {
    return fMaxDV(getDefaultForm());
}

function fMaxEff(f){
    f.HPEff.value=255;
    f.AtkEff.value=255;
    f.DefEff.value=255;
    f.SpeEff.value=255;
    f.SpAEff.value=255;
    f.SpDEff.value=255;
    dv=fHPower(f);
}
function MaxEff(){
    return fMaxEff(getDefaultForm());
}

function fRandomEf(f){
    var dv=0;
    dv=Math.floor(Math.random() * 256);
    f.HPEff.value=dv;
    dv=Math.floor(Math.random() * 256);
    f.AtkEff.value=dv;
    dv=Math.floor(Math.random() * 256);
    f.DefEff.value=dv;
    dv=Math.floor(Math.random() * 256);
    f.SpeEff.value=dv;
    dv=Math.floor(Math.random() * 256);
    f.SpAEff.value=dv;
    dv=Math.floor(Math.random() * 256);
    f.SpDEff.value=dv;
    dv=fHPower(f);
}
function RandomEf() {
    return fRandomEf(getDefaultForm());
}

function fMSGReset(f){
    f.S0M.options[0].selected=true;
    f.S1M.options[0].selected=true;
    f.S2M.options[0].selected=true;
    f.S3M.options[0].selected=true;
    f.S4M.options[0].selected=true;
    f.S5M.options[0].selected=true;
    f.S6M.options[0].selected=true;
}
function MSGReset() {
    return fMSGReset(getDefaultForm());
}

function fOnRibbons(f, which){
    if(which=="20" || which=="32"){
        f.RCool.selectedIndex=4;
        f.RBeauty.selectedIndex=4;
        f.RCute.selectedIndex=4;
        f.RSmart.selectedIndex=4;
        f.RTough.selectedIndex=4;
    }
    if(which=="5" || which=="32"){
        f.RChampion.checked=true;
        f.RB50.checked=true;
        f.RB100.checked=true;
        f.RSketch.checked=true;
        f.RHardWorker.checked=true;
    }
    if(which=="7" || which=="32"){
        f.RS0.checked=true;
        f.RS1.checked=true;
        f.RS2.checked=true;
        f.RS3.checked=true;
        f.RS4.checked=true;
        f.RS5.checked=true;
        f.RS6.checked=true;
    }
}
function OnRibbons(which) {
    return fOnRibbons(getDefaultForm(), which);
}

function fNoRibbons(f, which){
    if(which=="20" || which=="32"){
        f.RCool.selectedIndex=0;
        f.RBeauty.selectedIndex=0;
        f.RCute.selectedIndex=0;
        f.RSmart.selectedIndex=0;
        f.RTough.selectedIndex=0;
    }
    if(which=="5" || which=="32"){
        f.RChampion.checked=false;
        f.RB50.checked=false;
        f.RB100.checked=false;
        f.RSketch.checked=false;
        f.RHardWorker.checked=false;
    }
    if(which=="7" || which=="32"){
        f.RS0.checked=false;
        f.RS1.checked=false;
        f.RS2.checked=false;
        f.RS3.checked=false;
        f.RS4.checked=false;
        f.RS5.checked=false;
        f.RS6.checked=false;
    }
}
function NoRibbons(which) {
    return fNoRibbons(getDefaultForm(), which);
}

function fMaxUPP(f){
    var d=0;
    f.M1UPP.options[3].selected=true;
    f.M2UPP.options[3].selected=true;
    f.M3UPP.options[3].selected=true;
    f.M4UPP.options[3].selected=true;
    d=NMove('5');
}
function MaxUPP(){
    return fMaxUPP(getDefaultForm());
}


function Ab(x,y){
    var n=0;
    var m=0;
    var o=" ";
    o="None";
    m=y;
    if(m<0){m=0;}
    if(m>1){m=1;}
    n=x;
    if(n<0){n=77;}
    if(n>77){n=77;}
    if(n==0){
        if(m==0){o="Air Lock";}
        if(m==1){o="Is not effected by weather.";}
    }
    if(n==1){
        if(m==0){o="Arena Trap";}
        if(m==1){
            o="The opponent cannot run nor switch. Flying-type Pokemon and Pokemon with ";
            o+="the Levitate special ability are uneffected.";
        }
    }
    if(n==2){
        if(m==0){o="Battle Armor";}
        if(m==1){o="The opponent's moves cannot Critical Hit.";}
    }
    if(n==3){
        if(m==0){o="Blaze";}
        if(m==1){o="When HP is below 1/3rd, Fire's power increases to 1.5 times.";}
    }
    if(n==4){
        if(m==0){o="Cacophony";}
        if(m==1){o="Uneffected by sound moves.";}
    }
    if(n==5){
        if(m==0){o="Chlorophyll";}
        if(m==1){o="When sunny, Speed doubles.";}
    }
    if(n==6){
        if(m==0){o="Clear Body";}
        if(m==1){o="Opponent's moves that lower ability values have no effect.";}
    }
    if(n==7){
        if(m==0){o="Cloud Nine";}
        if(m==1){o="Is not effected by weather.";}
    }
    if(n==8){
        if(m==0){o="Color Change";}
        if(m==1){o="Becomes the type of a damaging move that hits it.";}
    }
    if(n==9){
        if(m==0){o="Compoundeyes";}
        if(m==1){o="Accuracy is raised to 30% in battles.";}
    }
    if(n==10){
        if(m==0){o="Cute Charm";}
        if(m==1){
            o="The opponent has a 30% chance of being induced with ATTRACT when using a";
            o+=" direct attack against this Pokemon.";
        }
    }
    if(n==11){
    if(m==0){o="Damp";}
    if(m==1){o="Neither side can use Explosion or Selfdestruct.";}
    }
    if(n==12){
    if(m==0){o="Drizzle";}
    if(m==1){o="Rain falls when the Pokemon enters battle.";}
    }
    if(n==13){
    if(m==0){o="Drought";}
    if(m==1){o="Sunlight shines when the Pokemon enters battle.";}
    }
    if(n==14){
    if(m==0){o="Early Bird";}
    if(m==1){o="SLEEP conditions lasts for half as long.";}
    }
    if(n==15){
    if(m==0){o="Effect Spore";}
    if(m==1){
    o="The opponent has a 10% chance of being induced by PARALYE, POISON, or ";
    o+="SLEEP when using a direct attack against this Pokemon.";}
    }
    if(n==16){
    if(m==0){o="Flame Body";}
    if(m==1){
    o="The opponent has a 30% chance of being induced with BURN when using a ";
    o+="direct attack against this Pokemon.";}
    }
    if(n==17){
    if(m==0){o="Flash Fire";}
    if(m==1){
    o="Activates when user is hit by a damaging Fire-type move. Once activiated, ";
    o+="user's Fire-type moves deal 1.5 times damage and user is immune to damage from ";
    o+="Fire-type attacks.";}
    }
    if(n==18){
    if(m==0){o="Forecast";}
    if(m==1){o="Its type and figure change with the weather.";}
    }
    if(n==19){
    if(m==0){o="Guts";}
    if(m==1){o="Attack raises to 1.5 times when induced with a status.";}
    }
    if(n==20){
    if(m==0){o="Huge Power";}
    if(m==1){
    o="Attack power is doubled in battle. It will return to normal if special ";
    o+="ability is taken.";}
    }
    if(n==21){
    if(m==0){o="Hustle";}
    if(m==1){
    o="Damage from physical attacks is 1.5 times, but average accuracy is only ";
    o+="80%.";}
    }
    if(n==22){
    if(m==0){o="Hyper Cutter";}
    if(m==1){o="Opponent cannot lower Attack value.";}
    }
    if(n==23){
    if(m==0){o="Illuminate";}
    if(m==1){
    o="If the Pokemon is in the lead spot, chance of encountering a wild Pokemon ";
    o+="raises.";}
    }
    if(n==24){
    if(m==0){o="Immunity";}
    if(m==1){o="Cannot be POISON condition.";}
    }
    if(n==25){
    if(m==0){o="Inner Focus";}
    if(m==1){o="Will not flinch.";}
    }
    if(n==26){
    if(m==0){o="Insomnia";}
    if(m==1){o="Cannot be SLEEP condition.";}
    }
    if(n==27){
    if(m==0){o="Intimidate";}
    if(m==1){o="Upon entering battle, the opponent's Attack lowers one stage.";}
    }
    if(n==28){
    if(m==0){o="Keen Eye";}
    if(m==1){o="Opponent cannot lower accuracy.";}
    }
    if(n==29){
    if(m==0){o="Levitate";}
    if(m==1){o="Damage dealing Ground-type moves have no effect.";}
    }
    if(n==30){
    if(m==0){o="Lightningrod";}
    if(m==1){o="Electric type moves are drawn to it.";}
    }
    if(n==31){
    if(m==0){o="Limber";}
    if(m==1){o="Cannot be Paralyze condition.";}
    }
    if(n==32){
    if(m==0){o="Liquid Ooze";}
    if(m==1){
    o="When the opponent absorbs Hit Points, the opponent instead loses Hit ";
    o+="Points.";}
    }
    if(n==33){
    if(m==0){o="Magma Armor";}
    if(m==1){o="Cannot be FREEZE condition.";}
    }
    if(n==34){
    if(m==0){o="Magnet Pull";}
    if(m==1){o="Steel types cannot run nor switch.";}
    }
    if(n==35){
    if(m==0){o="Marvel Scale";}
    if(m==1){o="Defense raises to 1.5 times when induced with a status.";}
    }
    if(n==36){
    if(m==0){o="Minus";}
    if(m==1){o="When battling with Plus, Special Attack becomes 1.5 times.";}
    }
    if(n==37){
    if(m==0){o="Natural Cure";}
    if(m==1){o="Status is healed when withdrawn from battle.";}
    }
    if(n==77){
    if(m==0){o="No Ability";}
    if(m==1){o="No special ability";}
    }
    if(n==38){
    if(m==0){o="Oblivious";}
    if(m==1){o="Cannot be Attract condition.";}
    }
    if(n==39){
    if(m==0){o="Overgrow";}
    if(m==1){o="When HP is below 1/3rd, Grass's power increases to 1.5 times.";}
    }
    if(n==40){
    if(m==0){o="Own Tempo";}
    if(m==1){o="Cannot be confusion condition.";}
    }
    if(n==41){
    if(m==0){o="Pickup";}
    if(m==1){o="May find an item after battle.";}
    }
    if(n==42){
    if(m==0){o="Plus";}
    if(m==1){o="When battling with Minus, Special Attack becomes 1.5 times.";}
    }
    if(n==43){
    if(m==0){o="Poison Point";}
    if(m==1){
    o="The opponent has a 30% chance of being induced with POISON when using a ";
    o+="direct attack against this Pokemon.";}
    }
    if(n==44){
    if(m==0){o="Pressure";}
    if(m==1){o="When hit by a move, the opponent's PP lowers by 2 rather than 1.";}
    }
    if(n==45){
    if(m==0){o="Pure Power";}
    if(m==1){
    o="Attack power is doubled in battle. It will return to normal if special ";
    o+="ability is taken.";}
    }
    if(n==46){
    if(m==0){o="Rain Dish";}
    if(m==1){o="A little bit of HP is restored every turn that it is raining.";}
    }
    if(n==47){
    if(m==0){o="Rock Head";}
    if(m==1){
    o="Does not receive recoil damage from moves such as Double-Edge and Volt ";
    o+="Tackle.";}
    }
    if(n==48){
    if(m==0){o="Rough Skin";}
    if(m==1){
    o="The opponent is hurt by 1/16th hit points of recoil when using a direct ";
    o+="attack against this Pokemon.";}
    }
    if(n==49){
    if(m==0){o="Run Away";}
    if(m==1){o="Except for trainer battles, can always run from battle.";}
    }
    if(n==50){
    if(m==0){o="Sand Stream";}
    if(m==1){o="Sandstorm blows when the Pokemon enters battle.";}
    }
    if(n==51){
    if(m==0){o="Sand Veil";}
    if(m==1){o="During a sandstorm, evasion rises.";}
    }
    if(n==52){
    if(m==0){o="Serene Grace";}
    if(m==1){o="The chances of a move having an effect doubles.";}
    }
    if(n==53){
    if(m==0){o="Shadow Tag";}
    if(m==1){o="The opponent cannot run nor switch.";}
    }
    if(n==54){
    if(m==0){o="Shed Skin";}
    if(m==1){o="Every turn, it has a 1 in 3 chance of healing from a status condition.";}
    }
    if(n==55){
    if(m==0){o="Shell Armor";}
    if(m==1){o="The opponent's moves cannot Critical Hit.";}
    }
    if(n==56){
    if(m==0){o="Shield Dust";}
    if(m==1){o="Opponent's move do not have an additional effect.";}
    }
    if(n==57){
    if(m==0){o="Soundproof";}
    if(m==1){o="Uneffected by sound moves.";}
    }
    if(n==58){
    if(m==0){o="Speed Boost";}
    if(m==1){o="Speed increases by one stage each turn.";}
    }
    if(n==59){
    if(m==0){o="Static";}
    if(m==1){
    o="The opponent has a 30% chance of being induced with PARALYE when using a ";
    o+="direct attack against this Pokemon.";}
    }
    if(n==60){
    if(m==0){o="Stench";}
    if(m==1){
    o="If the Pokemon is in the lead spot, chance of encountering a wild Pokemon ";
    o+="lowers.";}
    }
    if(n==61){
        if(m==0){o="Sticky Hold";}
        if(m==1){o="Item cannot be taken.";}
    }
    if(n==62){
        if(m==0){o="Sturdy";}
        if(m==1){o="One-hit knock out moves have no effect.";}
    }
    if(n==63){
        if(m==0){o="Suction Cups";}
        if(m==1){o="Cannot be switched by the opponent using Roar or Whirlwind.";}
    }
    if(n==64){
        if(m==0){o="Swarm";}
        if(m==1){o="When HP is below 1/3rd, Bug's power increases to 1.5 times.";}
    }
    if(n==65){
        if(m==0){o="Swift Swim";}
        if(m==1){o="When rainy, Speed doubles.";}
    }
    if(n==66){
        if(m==0){o="Synchronize";}
        if(m==1){o="When the Pokemon becomes Poison, Paralyze, or Burn, so does the opponent.";}
    }
    if(n==67){
        if(m==0){o="Thick Fat";}
        if(m==1){o="Fire and Ice-type moves deal 50% damage.";}
    }
    if(n==68){
        if(m==0){o="Torrent";}
        if(m==1){o="When HP is below 1/3rd, Water's power increases to 1.5 times.";}
    }
    if(n==69){
        if(m==0){o="Trace";}
        if(m==1){o="Special ability becomes the same as that of the opponent.";}
    }
    if(n==70){
        if(m==0){o="Truant";}
        if(m==1){o="Cannot attack consecutively.";}
    }
    if(n==71){
        if(m==0){o="Vital Spirit";}
        if(m==1){o="Cannot be SLEEP condition.";}
    }
    if(n==72){
        if(m==0){o="Volt Absorb";}
        if(m==1){o="Healed by up to 1/4 maximum Hit Points when hit with Electric-type moves.";}
    }
    if(n==73){
        if(m==0){o="Water Absorb";}
        if(m==1){o="Healed by up to 1/4 maximum Hit Points when hit with Water-type moves.";}
    }
    if(n==74){
        if(m==0){o="Water Veil";}
        if(m==1){o="Cannot be BURN condition.";}
    }
    if(n==75){
        if(m==0){o="White Smoke";}
        if(m==1){o="Opponent's moves that lower ability values have no effect.";}
    }
    if(n==76){
        if(m==0){o="Wonder Guard";}
        if(m==1){o="Only harmed by Super Effective damage.";}
    }
    return o;
}
function fSetAb(f){
    var A=f.Ability;
    var pdex=" ";
    var pgn=0;
    var p=0;
    var o=" ";
    var at0=" ";
    var an0=0;
    var at1=" ";
    var an1=0;
    var t=" ";
    var u=" ";
    pgn=f.Species.options[f.Species.selectedIndex].value;
    pdex=fPokeDex(f, pgn);
    t=fFI(f, pdex,"~",19);
    if(t.length>2){
         u=FI(t,"/",1);
         an1=parseInt(u,10);
         t=t.substring(0,(t.length-u.length-1));
         an0=parseInt(t,10);
    }else{
         an0=parseInt(t,10);
         an1=77;
    }
    at0=Ab(an0,0);
    at1=Ab(an1,0);
    p=A.selectedIndex;
    A.options.length=0;
    A.options[0] = new Option(at0,"0",true);
    A.options[1] = new Option(at1,"1");
    A.options.length=2;
    A.selectedIndex=p;
    if(f.Ability.selectedIndex==0){
        f.ADesc.value=Ab(an0,1);
        p=an0;
    }else{
        f.ADesc.value=Ab(an1,1);
        p=an1;
    }
    return p;
}
function SetAb() {
    return fSetAb(getDefaultForm());
}

function fRandomDV(){
    var dv=0;
    dv=Math.round(Math.random() * 31);
    f.HPDV.options[dv].selected=true;
    dv=Math.round(Math.random() * 31);
    f.AtkDV.options[dv].selected=true;
    dv=Math.round(Math.random() * 31);
    f.DefDV.options[dv].selected=true;
    dv=Math.round(Math.random() * 31);
    f.SpeDV.options[dv].selected=true;
    dv=Math.round(Math.random() * 31);
    f.SpADV.options[dv].selected=true;
    dv=Math.round(Math.random() * 31);
    f.SpDDV.options[dv].selected=true;
    dv=fHPower(f);
}
function RandomDV() {
    return fRandomDV(getDefaultForm());
}

function XE(n){
    var d=0;
    var o=0;
    if(n==0){o=1000000;}
    if(n==1){o=600000;}
    if(n==2){o=1640000;}
    if(n==3){o=1059860;}
    if(n==4){o=800000;}
    if(n==5){o=1250000;}
    if(n==6){o=1000000;}
    if(n==7){o=1000000;}
    return o;
}

function fXL(f, n){
    var ex=0;
    var px=f.Exp.value;
    var o=0;
    var x1="00000000";
    var x2="00000000";
    var xe="00";
    var i=0;
    x1="00000000010000000f000000340000007a000000ed000000960100007d020000ae030000";
    x1+="2e0500000807000041090000e10b0000ee0e00006f12000069160000e11a0000";
    x1+="db1f00005c250000672b00000032000028390000e24000003149000014520000";
    x1+="8d5b00009c650000417000007a7b000048870000a893000097a0000014ae0000";
    x1+="1bbc0000a9ca0000b9d9000047e900004ef90000c9090100b11a0100002c0100";
    x1+="ae3d0100b64f01000d620100ae7401008d870100a29a0100e4ad010047c10100";
    x1+="c1d4010048e80100fc000200431a02001a3402007d4e020068690200d7840200";
    x1+="c5a002002fbd02000eda020060f702001d15030040330300c4510300a3700300";
    x1+="d78f030058af030021cf03002aef03008e140400ea370400785e0400a6850400";
    x1+="67aa0400aad2040083fb04007f210500554b0500b4750500bf9c050000c80500";
    x1+="bdf30500a51b06002648060016750600a49d060037cb060029f9060021220700";
    x1+="92500700527f070076a807008ed70700e1060800ed2f0800705f08001a8f0800";
    x1+="c5b7080073e708000a080900c0270900c1270900";
    x2="0000000001000000040000000d000000200000004100000070000000b200000014010000";
    x2+="890100001c020000e9020000c7030000ce04000037060000a507000099090000";
    x2+="e60b0000940e0000ae1100004015000052190000f21d00002b2300000a290000";
    x2+="9b2f0000ec3600000c3f000007480000ee510000d05c0000bb680000c2750000";
    x2+="f48300006393000021a4000040b60000ddc50000a1da000059ec000000040100";
    x2+="fd170100c5320100354901005e6701006f8001003da201001dbe0100d7e30100";
    x2+="b6020200a42c0200b64e0200217d020099a20200cfd50200e2fe020033370300";
    x2+="17640300d4a10300c2d2030040160400704b040005950400b3ce0400b81e0500";
    x2+="205d0500f0b305004ff705004a550600df9d06006403070070510700e1be0700";
    x2+="a7120800698808002be20800a6600900aac0090047480a00d3ae0a0000400b00";
    x2+="5bad0b0085480c00f9bc0c0091620d0069de0d00e48e0e006a120f003dce0f00";
    x2+="c05910006421110033b51100218912008c251300420614009cab140099991500";
    x2+="34481600fb4317002cfc17004006190041061900";
    o=0;
    ex=0;
    for(i=0;i<=101;i++){
        if(n==0){ex=i*i*i;}
        if(n==1){
            xe="0x";
            xe+=x1.substr((i*8)+6,2);
            xe+=x1.substr((i*8)+4,2);
            xe+=x1.substr((i*8)+2,2);
            xe+=x1.substr((i*8),2);
            ex=1*xe;
        }
        if(n==2){
            xe="0x";
            xe+=x2.substr((i*8)+6,2);
            xe+=x2.substr((i*8)+4,2);
            xe+=x2.substr((i*8)+2,2);
            xe+=x2.substr((i*8),2);
            ex=1*xe;
        }
        if(n==3){ex=Math.floor((1.2*i*i*i)-(15*i*i)+(100*i)-140);}
        if(n==4){ex=Math.floor(0.8*i*i*i);}
        if(n==5){ex=Math.floor(1.25*i*i*i);}
        if(n==6){ex=i*i*i;}
        if(n==7){ex=i*i*i;}
        if(i==0){ex=1; i=1;}
        if(px<ex){
            o=i-1;
            if((i-1)==100){
                f.NExp.value=0;
            }else{
                f.NExp.value=ex-px;
            }
            i=102;
        }
    }
    f.XLvl.value=o;
    return o;
}
function XL() {
    return fXL(getDefaultForm(), n)
}

function fXQ(f, what){
    var ex=0;
    var px=f.Exp;
    var pl=f.XLvl;
    var x1="00000000";
    var x2="00000000";
    var xe="00";
    var o=" ";
    var s=0;
    var i=0;
    x1="00000000010000000f000000340000007a000000ed000000960100007d020000ae030000";
    x1+="2e0500000807000041090000e10b0000ee0e00006f12000069160000e11a0000";
    x1+="db1f00005c250000672b00000032000028390000e24000003149000014520000";
    x1+="8d5b00009c650000417000007a7b000048870000a893000097a0000014ae0000";
    x1+="1bbc0000a9ca0000b9d9000047e900004ef90000c9090100b11a0100002c0100";
    x1+="ae3d0100b64f01000d620100ae7401008d870100a29a0100e4ad010047c10100";
    x1+="c1d4010048e80100fc000200431a02001a3402007d4e020068690200d7840200";
    x1+="c5a002002fbd02000eda020060f702001d15030040330300c4510300a3700300";
    x1+="d78f030058af030021cf03002aef03008e140400ea370400785e0400a6850400";
    x1+="67aa0400aad2040083fb04007f210500554b0500b4750500bf9c050000c80500";
    x1+="bdf30500a51b06002648060016750600a49d060037cb060029f9060021220700";
    x1+="92500700527f070076a807008ed70700e1060800ed2f0800705f08001a8f0800";
    x1+="c5b7080073e708000a080900c0270900c1270900";
    x2="0000000001000000040000000d000000200000004100000070000000b200000014010000";
    x2+="890100001c020000e9020000c7030000ce04000037060000a507000099090000";
    x2+="e60b0000940e0000ae1100004015000052190000f21d00002b2300000a290000";
    x2+="9b2f0000ec3600000c3f000007480000ee510000d05c0000bb680000c2750000";
    x2+="f48300006393000021a4000040b60000ddc50000a1da000059ec000000040100";
    x2+="fd170100c5320100354901005e6701006f8001003da201001dbe0100d7e30100";
    x2+="b6020200a42c0200b64e0200217d020099a20200cfd50200e2fe020033370300";
    x2+="17640300d4a10300c2d2030040160400704b040005950400b3ce0400b81e0500";
    x2+="205d0500f0b305004ff705004a550600df9d06006403070070510700e1be0700";
    x2+="a7120800698808002be20800a6600900aac0090047480a00d3ae0a0000400b00";
    x2+="5bad0b0085480c00f9bc0c0091620d0069de0d00e48e0e006a120f003dce0f00";
    x2+="c05910006421110033b51100218912008c251300420614009cab140099991500";
    x2+="34481600fb4317002cfc17004006190040161900";
    if(what=="X"){i=f.XLvl.value;}
    if(i<0){i=0;}
    if(i>100){i=100;}
    pl.value=i;
    s=f.Species.options[f.Species.selectedIndex].value;
    o=PokeDex(s);
    n=FI(o,"~",21);
    if(n==0){ex=i*i*i;}
    if(n==1){
        xe="0x";
        xe+=x1.substr((i*8)+6,2);
        xe+=x1.substr((i*8)+4,2);
        xe+=x1.substr((i*8)+2,2);
        xe+=x1.substr((i*8),2);
        ex=1*xe;
    }
    if(n==2){
        xe="0x";
        xe+=x2.substr((i*8)+6,2);
        xe+=x2.substr((i*8)+4,2);
        xe+=x2.substr((i*8)+2,2);
        xe+=x2.substr((i*8),2);
        ex=1*xe;
    }
    if(n==3){ex=Math.floor((1.2*i*i*i)-(15*i*i)+(100*i)-140);}
    if(n==4){ex=Math.floor(0.8*i*i*i);}
    if(n==5){ex=Math.floor(1.25*i*i*i);}
    if(n==6){ex=i*i*i;}
    if(n==7){ex=i*i*i;}
    if(i==1){ex=1;}
    if(i==0){ex=0;}
    px.value=ex;
    n=fHPower(f);
}
function XQ(what) {
    return fXQ(getDefaultForm(), what);
}

function fHPower(f){
    var o=" ";
    var pd=" ";
    var a0=0;
    var a1=0;
    var a2=0;
    var a3=0;
    var a4=0;
    var a5=0;
    var p=0;
    var pg=0;
    var q=0;
    var s=0;
    pg=f.Species.options[f.Species.selectedIndex].value;
    pd=fPokeDex(f, pg);
    o=fFI(f, pd,"~",21);
    p=parseInt(o,10);
    q=XE(p);
    if(f.Exp.value<0){f.Exp.value=0;}
    if(f.Exp.value>q){f.Exp.value=q;}
    q=fXL(f, p);
    p=f.HPEff.value;
    if(p<0){f.HPEff.value=0;}
    if(p>255){f.HPEff.value=255;}
    s=(1*f.HPEff.value);
    p=f.AtkEff.value;
    if(p<0){f.AtkEff.value=0;}
    if(p>255){f.AtkEff.value=255;}
    s+=(1*f.AtkEff.value);
    p=f.DefEff.value;
    if(p<0){f.DefEff.value=0;}
    if(p>255){f.DefEff.value=255;}
    s+=(1*f.DefEff.value);
    p=f.SpeEff.value;
    if(p<0){f.SpeEff.value=0;}
    if(p>255){f.SpeEff.value=255;}
    s+=(1*f.SpeEff.value);
    p=f.SpAEff.value;
    if(p<0){f.SpAEff.value=0;}
    if(p>255){f.SpAEff.value=255;}
    s+=(1*f.SpAEff.value);
    p=f.SpDEff.value;
    if(p<0){f.SpDEff.value=0;}
    if(p>255){f.SpDEff.value=255;}
    s+=(1*f.SpDEff.value);
    f.EffSum.value=s;

    a0=(
        Math.floor(
            (
                (
                    (2*FI(pd,"~",4))-(-1*f.HPDV.selectedIndex)-Math.ceil(f.HPEff.value/-4)
                )*f.XLvl.value)/100)-(-10)-(-1*f.XLvl.value)
    );

    console.log(PerMod("Atk"));
    a1=Math.floor(
        (
            Math.floor(
            (((2*FI(pd,"~",5))-(-1*f.AtkDV.selectedIndex)-Math.ceil(f.AtkEff.value/-4))*f.XLvl.value)/100
            )-(-5)
        )*PerMod("Atk")
    );
    a2=Math.floor(
        (
            Math.floor(
                (((2*FI(pd,"~",6))-(-1*f.DefDV.selectedIndex)-Math.ceil(f.DefEff.value/-4))*f.XLvl.value
                )/100
            )-(-5)
        )*PerMod("Def")
    );
    a3=Math.floor(
        (
            Math.floor(
                (((2*FI(pd,"~",7))-(-1*f.SpeDV.selectedIndex)-Math.ceil(f.SpeEff.value/-4))*f.XLvl.value)/100
            )-(-5)
        )*PerMod("Spe")
    );
    a4=Math.floor(
        (
            Math.floor(
                (((2*FI(pd,"~",8))-(-1*f.SpADV.selectedIndex)-Math.ceil(f.SpAEff.value/-4))*f.XLvl.value)/100
        )-(-5)
        )*PerMod("SpA")
    );
    a5=Math.floor(
        (
            Math.floor(
                (
                    ((2*FI(pd,"~",9))-(-1*f.SpDDV.selectedIndex)-Math.ceil(f.SpDEff.value/-4))*f.XLvl.value
                )/100
            )-(-5)
        )*PerMod("SpD")
    );
    f.HPDex.value=a0;
    f.AtkDex.value=a1;
    f.DefDex.value=a2;
    f.SpeDex.value=a3;
    f.SpADex.value=a4;
    f.SpDDex.value=a5;
    p=0;
    q=(1*f.HPDV.selectedIndex)%4;
    if(q==2||q==3){p+=1;}
    q=(1*f.AtkDV.selectedIndex)%4;
    if(q==2||q==3){p+=2;}
    q=(1*f.DefDV.selectedIndex)%4;
    if(q==2||q==3){p+=4;}
    q=(1*f.SpeDV.selectedIndex)%4;
    if(q==2||q==3){p+=8;}
    q=(1*f.SpADV.selectedIndex)%4;
    if(q==2||q==3){p+=16;}
    q=(1*f.SpDDV.selectedIndex)%4;
    if(q==2||q==3){p+=32;}
    p=Math.floor((p*40)/63)+30;
    f.HidePower.value=p;
    p=0;
    q=(1*f.HPDV.selectedIndex)%2;
    if(q==1){p+=1;}
    q=(1*f.AtkDV.selectedIndex)%2;
    if(q==1){p+=2;}
    q=(1*f.DefDV.selectedIndex)%2;
    if(q==1){p+=4;}
    q=(1*f.SpeDV.selectedIndex)%2;
    if(q==1){p+=8;}
    q=(1*f.SpADV.selectedIndex)%2;
    if(q==1){p+=16;}
    q=(1*f.SpDDV.selectedIndex)%2;
    if(q==1){p+=32;}
    p=Math.floor((p*15)/63);
    f.HiddenPower.selectedIndex=p;
    return p;
}
function HPower() {
    fHPower(getDefaultForm());
}

function fPerMod(f, w){
    var o= 1.0;
    var n=0;
    n=f.Nature.selectedIndex;
    o=1.0;
    if(w=="Atk"){
        if(n==1){o=1.1;}
        if(n==2){o=1.1;}
        if(n==3){o=1.1;}
        if(n==4){o=1.1;}
        if(n==5){o=0.9;}
        if(n==10){o=0.9;}
        if(n==15){o=0.9;}
        if(n==20){o=0.9;}
    }
    if(w=="Def"){
        if(n==1){o=0.9;}
        if(n==5){o=1.1;}
        if(n==7){o=1.1;}
        if(n==8){o=1.1;}
        if(n==9){o=1.1;}
        if(n==11){o=0.9;}
        if(n==16){o=0.9;}
        if(n==21){o=0.9;}
    }
    if(w=="Spe"){
        if(n==2){o=0.9;}
        if(n==7){o=0.9;}
        if(n==10){o=1.1;}
        if(n==11){o=1.1;}
        if(n==13){o=1.1;}
        if(n==14){o=1.1;}
        if(n==17){o=0.9;}
        if(n==22){o=0.9;}
    }
    if(w=="SpA"){
        if(n==3){o=0.9;}
        if(n==8){o=0.9;}
        if(n==13){o=0.9;}
        if(n==15){o=1.1;}
        if(n==16){o=1.1;}
        if(n==17){o=1.1;}
        if(n==19){o=1.1;}
        if(n==23){o=0.9;}
    }
    if(w=="SpD"){
        if(n==4){o=0.9;}
        if(n==9){o=0.9;}
        if(n==14){o=0.9;}
        if(n==19){o=0.9;}
        if(n==20){o=1.1;}
        if(n==21){o=1.1;}
        if(n==22){o=1.1;}
        if(n==23){o=1.1;}
    }
    return o;
}
function PerMod(w){
    return fPerMod(getDefaultForm(), w);
}

function fMT(f, n, W, T2){
    var x=0;
    var c=" ";
    var o=" ";
    o="Unknown";
    x=n;
    if(x<0){o="P=================/None";}
    if(x>16){o="P=================/None";}
    if(x==0){o="P=--=+-0+====-+=++/Fighting";}
    if(x==1){o="P+===-+=-==+-=====/Flying";}
    if(x==2){o="P==---=-0==+======/Poison";}
    if(x==3){o="P=0+=+-=++=-+=====/Ground";}
    if(x==4){o="P-+=-=+=-+====+===/Rock";}
    if(x==5){o="P---===---=+=+==+=/Bug";}
    if(x==6){o="P======+-====+==-0/Ghost";}
    if(x==7){o="P====+==---=-=+===/Steel";}
    if(x==8){o="S====-+=+--+==+-==/Fire";}
    if(x==9){o="S===++===+--===-==/Water";}
    if(x==10){o="S=--++-=--+-===-==/Grass";}
    if(x==11){o="S=+=0=====+--==-==/Electric";}
    if(x==12){o="S+=+====-====-==0=/Psychic";}
    if(x==13){o="S=+=+===---+==-+==/Ice";}
    if(x==14){o="S=======-======+==/Dragon";}
    if(x==15){o="S-=====+-====+==-=/Dark";}
    if(x==16){o="P====-=0-=========/Normal";}
    x=W;
    if(x<0){x=1;}
    if(x>3){x=1;}
    if(x==0){o=o.substring(0,1);}
    if(x==1){o=o.substring(19,o.length);}
    if(x==2){o=o.substring(1,18);}
    if(x==3){
        x=T2;
        if(x<0){x=16;}
        if(x>16){x=16;}
        c=o.substring((1+x),1);
        if(c=="+"){o=2.0;}
        if(c=="-"){o=-2.0;}
        if(c=="="){o=1.0;}
        if(c=="0"){o=0.0;}
    }
    return o;
}
function MT(n, W, T2){
    return fMT(getDefaultForm(), n, W, T2);
}

function fGtest(f){
    var pg=0;
    var pd=" ";
    var p=" ";
    var gt=0;
    gt=256;
    pg=f.Species.options[f.Species.selectedIndex].value;
    pd=fPokeDex(f, pg);
    p=fFI(f, pd,"~",20);
    if(p=="-1"){gt=128;}
    if(p=="0"){gt=128;}
    if(p=="12"){gt=30;}
    if(p=="25"){gt=63;}
    if(p=="50"){gt=126;}
    if(p=="75"){gt=190;}
    if(p=="100"){gt=128;}
    return gt;
}
function Gtest(){
    return fGtest(getDefaultForm());
}

function fFI(form, S,C,N){
    var i=0;
    var j=0;
    var f=0;
    var t=" ";
    var o=" ";
    j=0;
    f=0;
    o="";
    for(i=0;i<(S.length);i++){
     t=S.substring(i,i+1);
     if(f==0){
      if(t==C){
       j+=1;
       if(j==N){
        f=1;
       }
      }
     }else{
      if(t==C){
       j=i;
       i=(S.length)+1;
      }else{
       o+=t;
      }
     }
    }
    return o;
}
function FI(S, C, N){
    return fFI(getDefaultForm(), S, C, N);
}

function fPokeDex(f, n){
    // info from http://pokefor.tk/
    // 1   2   3    4  5  6  7  8   9   10 11 12 13 14  15  16  17   18
    // ~Na#~Hn#~Name~HP~AT~DF~SP~SpA~SpD~HP~AT~DF~SP~SpA~SpD~Bex~Rare~
    //     19      20     21      22        23
    // Type~Ability~Gender~Max EXP~Egg Group~Held Item~
    var O=" ";
    O="~1~203~Bulbasaur~45~49~49~45~65~65~0~0~0~0~1~0~64~45~10/2~39~12~3~9/11~0/0~";
    if(n==1){O="~1~203~Bulbasaur~45~49~49~45~65~65~0~0~0~0~1~0~64~45~10/2~39~12~3~9/11~0/0~";}
    if(n==2){O="~2~204~Ivysaur~60~62~63~60~80~80~0~0~0~0~1~1~141~45~10/2~39~12~3~9/11~0/0~";}
    if(n==3){O="~3~205~Venusaur~80~82~83~80~100~100~0~0~0~0~2~1~208~45~10/2~39~12~3~9/11~0/0~";}
    if(n==4){O="~4~206~Charmander~39~52~43~65~60~50~0~0~0~1~0~0~65~45~8~3~12~3~9/2~0/0~";}
    if(n==5){O="~5~207~Charmeleon~58~64~58~80~80~65~0~0~0~1~1~0~142~45~8~3~12~3~9/2~0/0~";}
    if(n==6){O="~6~208~Charizard~78~84~78~100~109~85~0~0~0~0~3~0~209~45~8/1~3~12~3~9/2~0/0~";}
    if(n==7){O="~7~209~Squirtle~44~48~65~43~50~64~0~0~1~0~0~0~66~45~9~68~12~3~9/12~0/0~";}
    if(n==8){O="~8~210~Wartortle~59~63~80~58~65~80~0~0~1~0~0~1~143~45~9~68~12~3~9/12~0/0~";}
    if(n==9){O="~9~211~Blastoise~79~83~100~78~85~105~0~0~0~0~0~3~210~45~9~68~12~3~9/12~0/0~";}
    if(n==10){O="~10~212~Caterpie~45~30~35~45~20~20~1~0~0~0~0~0~53~255~5~56~50~0~0~0/0~";}
    if(n==11){O="~11~213~Metapod~50~20~55~30~25~25~0~0~2~0~0~0~72~120~5~54~50~0~0~0/0~";}
    if(n==12){O="~12~214~Butterfree~60~45~50~70~80~80~0~0~0~0~2~1~160~45~5/1~9~50~0~0~0/0BC~";}
    if(n==13){O="~13~215~Weedle~40~35~30~50~20~20~0~0~0~1~0~0~52~255~5/2~56~50~0~0~0/0~";}
    if(n==14){O="~14~216~Kakuna~45~25~50~35~25~25~0~0~2~0~0~0~71~120~5/2~54~50~0~0~0/0~";}
    if(n==15){O="~15~217~Beedrill~65~80~40~75~45~80~0~2~0~0~0~1~159~45~5/2~64~50~0~0~0/0D3~";}
    if(n==16){O="~16~218~Pidgey~40~45~40~56~35~35~0~0~0~1~0~0~55~255~16/1~28~50~3~4~0/0~";}
    if(n==17){O="~17~219~Pidgeotto~63~60~55~71~50~50~0~0~0~2~0~0~113~120~16/1~28~50~3~4~0/0~";}
    if(n==18){O="~18~220~Pidgeot~83~80~75~91~70~70~0~0~0~3~0~0~172~45~16/1~28~50~3~4~0/0~";}
    if(n==19){O="~19~221~Rattata~30~56~35~72~25~35~0~0~0~1~0~0~57~255~16~49/19~50~0~5~0/0~";}
    if(n==20){O="~20~222~Raticate~55~81~60~97~50~70~0~0~0~2~0~0~116~127~16~49/19~50~0~5~0/0~";}
    if(n==21){O="~21~223~Spearow~40~60~30~70~31~31~0~0~0~1~0~0~58~255~16/1~28~50~0~4~0/0~";}
    if(n==22){O="~22~224~Fearow~65~90~65~100~61~61~0~0~0~2~0~0~162~90~16/1~28~50~0~4~0/0D2~";}
    if(n==23){O="~23~225~Ekans~35~60~44~55~40~54~0~1~0~0~0~0~62~255~2~27/54~50~0~5/2~0/0~";}
    if(n==24){O="~24~226~Arbok~60~85~69~80~65~79~0~2~0~0~0~0~147~90~2~27/54~50~0~5/2~0/0~";}
    if(n==25){O="~25~156~Pikachu~35~55~30~90~50~40~0~0~0~2~0~0~82~190~11~59~50~0~5/3~08B/0CA~";}
    if(n==26){O="~26~157~Raichu~60~90~55~100~90~80~0~0~0~3~0~0~122~75~11~59~50~0~5/3~0/08B~";}
    if(n==27){O="~27~112~Sandshrew~50~75~85~40~20~30~0~0~1~0~0~0~93~255~3~51~50~0~5~0/0B7~";}
    if(n==28){O="~28~113~Sandslash~75~100~110~65~45~55~0~0~2~0~0~0~163~90~3~51~50~0~5~0/0B7~";}
    if(n==29){O="~29~227~Nidoran Female~55~47~52~41~40~40~1~0~0~0~0~0~59~235~2~43~100~3~9/5~0/0~";}
    if(n==30){O="~30~228~Nidorina~70~62~67~56~55~55~2~0~0~0~0~0~117~120~2~43~100~3~10~0/0~";}
    if(n==31){O="~31~229~Nidoqueen~90~82~87~76~75~85~3~0~0~0~0~0~194~45~2/3~43~100~3~10~0/0~";}
    if(n==32){O="~32~230~Nidoran Male~46~57~40~50~40~40~0~1~0~0~0~0~60~235~2~43~0~3~9/5~0/0~";}
    if(n==33){O="~33~231~Nidorino~61~72~57~65~55~55~0~2~0~0~0~0~118~120~2~43~0~3~9/5~0/0~";}
    if(n==34){O="~34~232~Nidoking~81~92~77~85~85~75~0~3~0~0~0~0~195~45~2/3~43~0~3~9/5~0/0~";}
    if(n==35){O="~35~233~Clefairy~70~45~48~35~60~65~2~0~0~0~0~0~68~150~16~10~75~4~3~08A/05E~";}
    if(n==36){O="~36~234~Clefable~95~70~73~60~85~90~3~0~0~0~0~0~129~25~16~10~75~4~3~08A/05E~";}
    if(n==37){O="~37~153~Vulpix~38~41~40~65~50~65~0~0~0~1~0~0~63~190~8~17~75~0~5~088/088~";}
    if(n==38){O="~38~154~Ninetales~73~76~75~100~81~100~0~0~0~1~0~1~178~75~8~17~75~0~5~088/088~";}
    if(n==39){O="~39~138~Jigglypuff~115~45~20~20~45~25~2~0~0~0~0~0~76~170~16~10~75~4~3~0/0~";}
    if(n==40){O="~40~139~Wigglytuff~140~70~45~45~75~50~3~0~0~0~0~0~109~50~16~10~75~4~3~0/0~";}
    if(n==41){O="~41~63~Zubat~40~45~35~55~30~40~0~0~0~1~0~0~54~255~2/1~25~50~0~4~0/0~";}
    if(n==42){O="~42~64~Golbat~75~80~70~90~65~75~0~0~0~2~0~0~171~90~2/1~25~50~0~4~0/0~";}
    if(n==43){O="~43~88~Oddish~45~50~55~30~75~65~0~0~0~0~1~0~78~255~10/2~5~50~3~11~0/0~";}
    if(n==44){O="~44~89~Gloom~60~65~70~40~85~75~0~0~0~0~2~0~132~120~10/2~5~50~3~11~0/0~";}
    if(n==45){O="~45~90~Vileplume~75~80~85~50~100~90~0~0~0~0~3~0~184~45~10/2~5~50~3~11~0/0~";}
    if(n==46){O="~46~235~Paras~35~70~55~25~45~55~0~1~0~0~0~0~70~190~5/10~15~50~0~0/11~067/068~";}
    if(n==47){O="~47~236~Parasect~60~95~80~30~60~80~0~2~1~0~0~0~128~75~5/10~15~50~0~0/11~067/068~";}
    if(n==48){O="~48~237~Venonat~60~55~50~45~40~55~0~0~0~0~0~1~75~190~5/2~9~50~0~0~0/0~";}
    if(n==49){O="~49~238~Venomoth~70~65~60~90~90~75~0~0~0~1~1~0~138~75~5/2~56~50~0~0~0/0~";}
    if(n==50){O="~50~239~Diglett~10~55~25~95~35~45~0~0~0~1~0~0~81~255~3~51/1~50~0~5~0/0~";}
    if(n==51){O="~51~240~Dugtrio~35~80~50~120~50~70~0~0~0~2~0~0~153~50~3~51/1~50~0~5~0/0~";}
    if(n==52){O="~52~241~Meowth~40~45~35~90~40~40~0~0~0~1~0~0~69~255~16~41~50~0~5~0/0~";}
    if(n==53){O="~53~242~Persian~65~70~60~115~65~65~0~0~0~2~0~0~148~90~16~31~50~0~5~0/0~";}
    if(n==54){O="~54~158~Psyduck~50~52~48~55~65~50~0~0~0~0~1~0~80~190~9~11/7~50~0~12/5~0/0~";}
    if(n==55){O="~55~159~Golduck~80~82~78~85~95~80~0~0~0~0~2~0~174~75~9~11/7~50~0~12/5~0/0~";}
    if(n==56){O="~56~243~Mankey~40~80~35~70~35~45~0~1~0~0~0~0~74~190~0~71~50~0~5~0/0~";}
    if(n==57){O="~57~244~Primeape~65~105~60~95~60~70~0~2~0~0~0~0~149~75~0~71~50~0~5~0/0~";}
    if(n==58){O="~58~245~Growlithe~55~70~45~60~70~50~0~1~0~0~0~0~91~190~8~27/17~25~5~5~088/088~";}
    if(n==59){O="~59~246~Arcanine~90~110~80~95~100~80~0~2~0~0~0~0~213~75~8~27/17~25~5~5~088/088~";}
    if(n==60){O="~60~247~Poliwag~40~50~40~90~40~40~0~0~0~1~0~0~77~255~9~73/11~50~3~12~0/0~";}
    if(n==61){O="~61~248~Poliwhirl~65~65~65~90~50~50~0~0~0~2~0~0~131~120~9~73/11~50~3~12~0/0BB~";}
    if(n==62){O="~62~249~Poliwrath~90~85~95~70~70~90~0~0~3~0~0~0~185~45~9/0~73/11~50~3~12~0/0BB~";}
    if(n==63){O="~63~39~Abra~25~20~15~90~105~55~0~0~0~0~1~0~73~200~12~66/25~25~3~6~0/0D6~";}
    if(n==64){O="~64~40~Kadabra~40~35~30~105~120~70~0~0~0~0~2~0~145~100~12~66/25~25~3~6~0/0D6~";}
    if(n==65){O="~65~41~Alakazam~55~50~45~120~135~85~0~0~0~0~3~0~186~50~12~66/25~25~3~6~0/0D6~";}
    if(n==66){O="~66~73~Machop~70~80~50~35~35~35~0~1~0~0~0~0~88~180~0~19~25~3~6~0/0~";}
    if(n==67){O="~67~74~Machoke~80~100~70~45~50~60~0~2~0~0~0~0~146~90~0~19~25~3~6~0/0~";}
    if(n==68){O="~68~75~Machamp~90~130~80~55~65~85~0~3~0~0~0~0~193~45~0~19~25~3~6~0/0~";}
    if(n==69){O="~69~250~Bellsprout~50~75~35~40~70~30~0~1~0~0~0~0~84~255~10/2~5~50~3~11~0/0~";}
    if(n==70){O="~70~251~Weepinbell~65~90~50~55~85~45~0~2~0~0~0~0~151~120~10/2~5~50~3~11~0/0~";}
    if(n==71){O="~71~252~Victreebel~80~105~65~70~100~60~0~3~0~0~0~0~191~45~10/2~5~50~3~11~0/0~";}
    if(n==72){O="~72~66~Tentacool~40~40~35~70~50~100~0~0~0~0~0~1~105~190~9/2~6/32~50~5~14~0/0~";}
    if(n==73){O="~73~67~Tentacruel~80~70~65~100~80~120~0~0~0~0~0~2~205~60~9/2~6/32~50~5~14~0/0~";}
    if(n==74){O="~74~57~Geodude~40~80~100~20~30~30~0~0~1~0~0~0~86~255~4/3~47/62~50~3~8~0/0C3~";}
    if(n==75){O="~75~58~Graveler~55~95~115~35~45~45~0~0~2~0~0~0~134~120~4/3~47/62~50~3~8~0/0C3~";}
    if(n==76){O="~76~59~Golem~80~110~130~45~55~65~0~0~3~0~0~0~177~45~4/3~47/62~50~3~8~0/0C3~";}
    if(n==77){O="~77~253~Ponyta~50~85~55~90~65~65~0~0~0~1~0~0~152~190~8~49/17~50~0~5~0/0~";}
    if(n==78){O="~78~254~Rapidash~65~100~70~105~80~80~0~0~0~2~0~0~192~60~8~49/17~50~0~5~0/0~";}
    if(n==79){O="~79~255~Slowpoke~90~65~65~15~40~40~1~0~0~0~0~0~99~190~9/12~38/40~50~0~9/12~0/0BB~";}
    if(n==80){O="~80~256~Slowbro~95~75~110~30~100~80~0~0~2~0~0~0~164~75~9/12~38/40~50~0~9/12~0/0BB~";}
    if(n==81){O="~81~82~Magnemite~25~35~70~45~95~55~0~0~0~0~1~0~89~190~11/7~34/62~-1~0~8~0/0C7~";}
    if(n==82){O="~82~83~Magneton~50~60~95~70~120~70~0~0~0~0~2~0~161~60~11/7~34/62~-1~0~8~0/0C7~";}
    if(n==83){O="~83~257~Farfetch'd~52~65~55~60~58~62~0~1~0~0~0~0~94~45~16/1~28/25~50~0~4/5~0/0E1~";}
    if(n==84){O="~84~92~Doduo~35~85~45~75~35~35~0~1~0~0~0~0~96~190~16/1~49/14~50~0~4~0/0D2~";}
    if(n==85){O="~85~93~Dodrio~60~110~70~100~60~60~0~2~0~0~0~0~158~45~16/1~49/14~50~0~4~0/0D2~";}
    if(n==86){O="~86~258~Seel~65~45~55~45~45~70~0~0~0~0~0~1~100~190~9~67~50~0~12/5~0/0~";}
    if(n==87){O="~87~259~Dewgong~90~70~80~70~70~95~0~0~0~0~0~2~176~75~9/13~67~50~0~12/5~0/0~";}
    if(n==88){O="~88~106~Grimer~80~80~50~25~40~50~1~0~0~0~0~0~90~190~2~60/61~50~0~7~0/06E~";}
    if(n==89){O="~89~107~Muk~105~105~75~50~65~100~1~1~0~0~0~0~157~75~2~60/61~50~0~7~0/06E~";}
    if(n==90){O="~90~260~Shellder~30~65~100~40~45~25~0~0~1~0~0~0~97~190~9~55~50~5~14~06A/06B~";}
    if(n==91){O="~91~261~Cloyster~50~95~180~70~85~45~0~0~2~0~0~0~203~60~9/13~55~50~5~14~06A/06B~";}
    if(n==92){O="~92~262~Gastly~30~35~30~80~100~35~0~0~0~0~1~0~95~190~6/2~29~50~3~7~0/0~";}
    if(n==93){O="~93~263~Haunter~45~50~45~95~115~55~0~0~0~0~2~0~126~90~6/2~29~50~3~7~0/0~";}
    if(n==94){O="~94~264~Gengar~60~65~60~110~130~75~0~0~0~0~3~0~190~45~6/2~29~50~3~7~0/0~";}
    if(n==95){O="~95~265~Onix~35~45~160~70~30~45~0~0~1~0~0~0~108~45~4/3~47/62~50~0~8~0/0~";}
    if(n==96){O="~96~266~Drowzee~60~48~45~42~43~90~0~0~0~0~0~1~102~190~12~26~50~0~6~0/0~";}
    if(n==97){O="~97~267~Hypno~85~73~70~67~73~115~0~0~0~0~0~2~165~75~12~26~50~0~6~0/0~";}
    if(n==98){O="~98~268~Krabby~30~105~90~50~25~25~0~1~0~0~0~0~115~225~9~22/55~50~0~14~0/0~";}
    if(n==99){O="~99~269~Kingler~55~130~115~75~50~50~0~2~0~0~0~0~206~60~9~22/55~50~0~14~0/0~";}
    if(n==100){O="~100~84~Voltorb~40~30~50~100~55~55~0~0~0~1~0~0~103~190~11~57/59~-1~0~8~0/0~";}
    if(n==101){O="~101~85~Electrode~60~50~70~140~80~80~0~0~0~2~0~0~150~60~11~57/59~-1~0~8~0/0~";}
    if(n==102){O="~102~270~Exeggcute~60~40~80~40~60~45~0~0~1~0~0~0~98~90~10/12~5~50~5~11~0/0~";}
    if(n==103){O="~103~271~Exeggutor~95~95~85~55~125~65~0~0~0~0~2~0~212~45~10/12~5~50~5~11~0/0~";}
    if(n==104){O="~104~272~Cubone~50~50~95~35~40~50~0~0~1~0~0~0~87~190~3~47/30~50~0~9~0/0E0~";}
    if(n==105){O="~105~273~Marowak~60~80~110~45~50~80~0~0~2~0~0~0~124~75~3~47/30~50~0~9~0/0E0~";}
    if(n==106){O="~106~274~Hitmonlee~50~120~53~87~35~110~0~2~0~0~0~0~139~45~0~31~0~0~6~0/0~";}
    if(n==107){O="~107~275~Hitmonchan~50~105~79~76~35~110~0~0~0~0~0~2~140~45~0~28~0~0~6~0/0~";}
    if(n==108){O="~108~276~Lickitung~90~55~75~30~60~75~2~0~0~0~0~0~127~45~16~40/38~50~0~9~0/0~";}
    if(n==109){O="~109~108~Koffing~40~65~95~35~60~45~0~0~1~0~0~0~114~190~2~29~50~0~7~0/0C2~";}
    if(n==110){O="~110~109~Weezing~65~90~120~60~85~70~0~0~2~0~0~0~173~60~2~29~50~0~7~0/0C2~";}
    if(n==111){O="~111~169~Rhyhorn~80~85~95~25~30~30~0~0~1~0~0~0~135~120~3/4~30/47~50~5~9/5~0/0~";}
    if(n==112){O="~112~170~Rhydon~105~130~120~40~45~45~0~2~0~0~0~0~204~60~3/4~30/47~50~5~9/5~0/0~";}
    if(n==113){O="~113~277~Chansey~250~5~5~50~35~105~2~0~0~0~0~0~255~30~16~37/52~100~4~3~0/0C5~";}
    if(n==114){O="~114~278~Tangela~65~55~115~60~100~40~0~0~1~0~0~0~166~45~10~5~50~0~11~0/0~";}
    if(n==115){O="~115~279~Kangaskhan~105~95~80~90~40~80~2~0~0~0~0~0~175~45~16~14~100~0~9~0/0~";}
    if(n==116){O="~116~184~Horsea~30~40~70~60~70~25~0~0~0~0~1~0~83~225~9~65~50~0~12/2~0/0C9~";}
    if(n==117){O="~117~185~Seadra~55~65~95~85~95~45~0~0~1~0~1~0~155~75~9~43~50~0~12/2~0/0C9~";}
    if(n==118){O="~118~50~Goldeen~45~67~60~63~35~50~0~1~0~0~0~0~111~225~9~65/74~50~0~13~0/0~";}
    if(n==119){O="~119~51~Seaking~80~92~65~68~65~80~0~2~0~0~0~0~170~60~9~65/74~50~0~13~0/0~";}
    if(n==120){O="~120~143~Staryu~30~45~55~85~70~55~0~0~0~1~0~0~106~225~9~23/37~-1~5~14~06C/06D~";}
    if(n==121){O="~121~144~Starmie~60~75~85~115~100~85~0~0~0~2~0~0~207~70~9/12~23/37~-1~5~14~06C/06D~";}
    if(n==122){O="~122~280~Mr. Mime~40~45~65~90~100~120~0~0~0~0~0~2~136~45~12~57~50~0~6~0/08A~";}
    if(n==123){O="~123~281~Scyther~70~110~80~105~55~80~0~1~0~0~0~0~187~45~5/1~64~50~0~0~0/0~";}
    if(n==124){O="~124~282~Jynx~65~50~35~95~115~95~0~0~0~0~2~0~137~45~13/12~38~100~0~6~089/089~";}
    if(n==125){O="~125~283~Electabuzz~65~83~57~105~95~85~0~0~0~2~0~0~156~45~11~59~25~0~6~0/0~";}
    if(n==126){O="~126~284~Magmar~65~95~57~93~100~85~0~0~0~0~2~0~167~45~8~16~25~0~6~088/088~";}
    if(n==127){O="~127~167~Pinsir~65~125~100~85~55~70~0~2~0~0~0~0~200~45~5~22~50~5~0~0/0~";}
    if(n==128){O="~128~285~Tauros~75~100~95~110~40~70~0~1~0~1~0~0~211~45~16~27~0~5~5~0/0~";}
    if(n==129){O="~129~52~Magikarp~20~10~55~80~15~20~0~0~0~1~0~0~20~255~9~65~50~5~13/2~0/0~";}
    if(n==130){O="~130~53~Gyarados~95~125~79~81~60~100~0~2~0~0~0~0~214~45~9/1~27~50~5~13/2~0/0~";}
    if(n==131){O="~131~286~Lapras~130~85~80~60~85~95~2~0~0~0~0~0~219~45~9/13~73/55~50~5~9/12~0/0~";}
    if(n==132){O="~132~287~Ditto~48~48~48~48~48~48~1~0~0~0~0~0~61~35~16~31~-1~0~1~0/0DF~";}
    if(n==133){O="~133~288~Eevee~55~55~50~55~45~65~0~0~0~0~0~1~92~45~16~49~12~0~5~0/0~";}
    if(n==134){O="~134~289~Vaporeon~130~65~60~65~110~95~2~0~0~0~0~0~196~45~9~73~12~0~5~0/0~";}
    if(n==135){O="~135~290~Jolteon~65~65~60~130~110~95~0~0~0~2~0~0~197~45~11~72~12~0~5~0/0~";}
    if(n==136){O="~136~291~Flareon~65~130~60~65~95~110~0~2~0~0~0~0~198~45~8~17~12~0~5~0/0~";}
    if(n==137){O="~137~292~Porygon~65~60~70~40~85~75~0~0~0~0~1~0~130~45~16~69~-1~0~8~0/0~";}
    if(n==138){O="~138~293~Omanyte~35~40~100~35~90~55~0~0~1~0~0~0~120~45~4/9~65/55~12~0~12/14~0/0~";}
    if(n==139){O="~139~294~Omastar~70~60~125~55~115~70~0~0~2~0~0~0~199~45~4/9~65/55~12~0~12/14~0/0~";}
    if(n==140){O="~140~295~Kabuto~30~80~90~55~55~45~0~0~1~0~0~0~119~45~4/9~65/2~12~0~12/14~0/0~";}
    if(n==141){O="~141~296~Kabutops~60~115~105~80~65~70~0~2~0~0~0~0~201~45~4/9~65/2~12~0~12/14~0/0~";}
    if(n==142){O="~142~297~Aerodactyl~80~105~65~130~60~75~0~0~0~2~0~0~202~45~4/1~47/44~12~5~4~0/0~";}
    if(n==143){O="~143~298~Snorlax~160~110~65~30~65~110~2~0~0~0~0~0~154~25~16~24/67~12~5~9~0C8/0C8~";}
    if(n==144){O="~144~299~Articuno~90~85~100~85~95~125~0~0~0~0~0~3~215~3~13/1~44~-1~5~10~0/0~";}
    if(n==145){O="~145~300~Zapdos~90~90~85~100~125~90~0~0~0~0~3~0~216~3~11/1~44~-1~5~10~0/0~";}
    if(n==146){O="~146~301~Moltres~90~100~90~90~125~85~0~0~0~0~3~0~217~3~8/1~44~-1~5~10~0/0~";}
    if(n==147){O="~147~302~Dratini~41~64~45~50~50~50~0~1~0~0~0~0~67~45~14~54~50~5~12/2~0/0C9~";}
    if(n==148){O="~148~303~Dragonair~61~84~65~70~70~70~0~2~0~0~0~0~144~45~14~54~50~5~12/2~0/0C9~";}
    if(n==149){O="~149~304~Dragonite~91~134~95~80~100~100~0~3~0~0~0~0~218~45~14/1~25~50~5~12/2~0/0C9~";}
    if(n==150){O="~150~305~Mewtwo~106~110~90~130~154~90~0~0~0~0~3~0~220~3~12~44~-1~5~10~0/0~";}
    if(n==151){O="~151~306~Mew~100~100~100~100~100~100~3~0~0~0~0~0~64~45~12~66~-1~3~10~08D/08D~";}
    if(n==152){O="~152~307~Chikorita~45~49~65~45~49~65~0~0~0~0~0~1~64~45~10~39~12~3~9/11~0/0~";}
    if(n==153){O="~153~308~Bayleef~60~62~80~60~63~80~0~0~1~0~0~1~141~45~10~39~12~3~9/11~0/0~";}
    if(n==154){O="~154~309~Meganium~80~82~100~80~83~100~0~0~1~0~0~2~208~45~10~39~12~3~9/11~0/0~";}
    if(n==155){O="~155~310~Cyndaquil~39~52~43~65~60~50~0~0~0~1~0~0~65~45~8~3~12~3~5~0/0~";}
    if(n==156){O="~156~311~Quilava~58~64~58~80~80~65~0~0~0~1~1~0~142~45~8~3~12~3~5~0/0~";}
    if(n==157){O="~157~312~Typhlosion~78~84~78~100~109~85~0~0~0~0~3~0~209~45~8~3~12~3~5~0/0~";}
    if(n==158){O="~158~313~Totodile~50~65~64~43~44~48~0~1~0~0~0~0~66~45~9~68~12~3~9/12~0/0~";}
    if(n==159){O="~159~314~Croconaw~65~80~80~58~59~63~0~1~1~0~0~0~143~45~9~68~12~3~9/12~0/0~";}
    if(n==160){O="~160~315~Feraligatr~85~105~100~78~79~83~0~2~1~0~0~0~210~45~9~68~12~3~9/12~0/0~";}
    if(n==161){O="~161~316~Sentret~35~46~34~20~35~45~0~1~0~0~0~0~57~255~16~49/28~50~0~5~0/08B~";}
    if(n==162){O="~162~317~Furret~85~76~64~90~45~55~0~0~0~2~0~0~116~90~16~49/28~50~0~5~08B/08E~";}
    if(n==163){O="~163~318~Hoothoot~60~30~30~50~36~56~1~0~0~0~0~0~58~255~16/1~26/28~50~0~4~0/0~";}
    if(n==164){O="~164~319~Noctowl~100~50~50~70~76~96~2~0~0~0~0~0~162~90~16/1~26/28~50~0~4~0/0~";}
    if(n==165){O="~165~320~Ledyba~40~20~30~55~40~80~0~0~0~0~0~1~54~255~5/1~64/14~50~4~0~0/0~";}
    if(n==166){O="~166~321~Ledian~55~35~50~85~55~110~0~0~0~0~0~2~134~90~5/1~64/14~50~4~0~0/0~";}
    if(n==167){O="~167~322~Spinarak~40~60~40~30~40~40~0~1~0~0~0~0~54~255~5/2~64/26~50~4~0~0/0~";}
    if(n==168){O="~168~323~Ariados~70~90~70~40~60~60~0~2~0~0~0~0~134~90~5/2~64/26~50~4~0~0/0~";}
    if(n==169){O="~169~65~Crobat~85~90~80~130~70~80~0~0~0~3~0~0~204~90~2/1~25~50~0~4~0/0~";}
    if(n==170){O="~170~181~Chinchou~75~38~38~67~56~56~1~0~0~0~0~0~90~190~9/11~72/23~50~5~13~0/032~";}
    if(n==171){O="~171~182~Lanturn~125~58~58~67~76~76~2~0~0~0~0~0~156~75~9/11~72/23~50~5~13~0/032~";}
    if(n==172){O="~172~155~Pichu~20~40~15~60~35~35~0~0~0~1~0~0~42~190~11~59~50~0~10~0/08B~";}
    if(n==173){O="~173~324~Cleffa~50~25~28~15~45~55~0~0~0~0~0~1~37~150~16~10~75~4~10~08A 05E~";}
    if(n==174){O="~174~137~Igglybuff~90~30~15~15~40~20~1~0~0~0~0~0~39~170~16~10~75~4~10~0/0~";}
    if(n==175){O="~175~325~Togepi~35~20~65~20~40~65~0~0~0~0~0~1~74~190~16~21/52~12~4~10~0/0~";}
    if(n==176){O="~176~326~Togetic~55~40~85~40~80~105~0~0~0~0~0~2~114~75~16/1~21/52~12~4~4/3~0/0~";}
    if(n==177){O="~177~162~Natu~40~50~45~70~70~45~0~0~0~0~1~0~73~190~12/1~66/14~50~0~4~0/0~";}
    if(n==178){O="~178~163~Xatu~65~75~70~95~95~70~0~0~0~1~1~0~171~75~12/1~66/14~50~0~4~0/0~";}
    if(n==179){O="~179~327~Mareep~55~40~40~35~65~45~0~0~0~0~1~0~59~235~11~59~50~3~9/5~0/0~";}
    if(n==180){O="~180~328~Flaaffy~70~55~55~45~80~60~0~0~0~0~2~0~117~120~11~59~50~3~9/5~0/0~";}
    if(n==181){O="~181~329~Ampharos~90~75~75~55~115~90~0~0~0~0~3~0~194~45~11~59~50~3~9/5~0/0~";}
    if(n==182){O="~182~91~Bellossom~75~80~85~50~90~100~0~0~0~0~0~3~184~45~10~5~50~3~11~0/0~";}
    if(n==183){O="~183~55~Marill~70~20~50~40~20~50~2~0~0~0~0~0~58~190~9~67/20~50~4~12/3~0/0~";}
    if(n==184){O="~184~56~Azumarill~100~50~80~50~50~80~3~0~0~0~0~0~153~75~9~67/20~50~4~12/3~0/0~";}
    if(n==185){O="~185~330~Sudowoodo~70~100~115~30~30~65~0~0~2~0~0~0~135~65~4~62/47~50~0~8~0/0~";}
    if(n==186){O="~186~331~Politoed~90~75~75~70~90~100~0~0~0~0~0~3~185~45~9~73/11~50~3~12~0/0BB~";}
    if(n==187){O="~187~332~Hoppip~35~35~40~50~35~55~0~0~0~0~0~1~74~255~10/1~5~50~3~3/11~0/0~";}
    if(n==188){O="~188~333~Skiploom~55~45~50~80~45~65~0~0~0~2~0~0~136~120~10/1~5~50~3~3/11~0/0~";}
    if(n==189){O="~189~334~Jumpluff~75~55~70~110~55~85~0~0~0~3~0~0~176~45~10/1~5~50~3~3/11~0/0~";}
    if(n==190){O="~190~335~Aipom~55~70~55~85~40~55~0~0~0~1~0~0~94~45~16~49/41~50~4~5~0/0~";}
    if(n==191){O="~191~336~Sunkern~30~30~30~30~30~30~0~0~0~0~1~0~52~235~10~5~50~3~11~0/0~";}
    if(n==192){O="~192~337~Sunflora~75~75~55~30~105~85~0~0~0~0~2~0~146~120~10~5~50~3~11~0/0~";}
    if(n==193){O="~193~338~Yanma~65~65~45~95~75~45~0~0~0~2~0~0~147~75~5/1~58/9~50~0~0~0/0~";}
    if(n==194){O="~194~339~Wooper~55~45~45~15~25~25~1~0~0~0~0~0~52~255~9/3~11/73~50~0~12/5~0/0~";}
    if(n==195){O="~195~340~Quagsire~95~85~85~35~65~65~2~0~0~0~0~0~137~90~9/3~11/73~50~0~12/5~0/0~";}
    if(n==196){O="~196~341~Espeon~65~65~60~110~130~95~0~0~0~0~2~0~197~45~12~66~12~0~5~0/0~";}
    if(n==197){O="~197~342~Umbreon~95~65~110~65~60~130~0~0~0~0~0~2~197~45~15~66~12~0~5~0/0~";}
    if(n==198){O="~198~343~Murkrow~60~85~42~91~85~42~0~0~0~1~0~0~107~30~15/1~26~50~3~4~0/0~";}
    if(n==199){O="~199~344~Slowking~95~75~80~30~100~110~0~0~0~0~0~3~164~70~9/12~38/40~50~0~9/12~0/0BB~";}
    if(n==200){O="~200~345~Misdreavus~60~60~60~85~85~85~0~0~0~0~1~1~147~45~6~29~50~4~7~0/0D5~";}
    if(n==201){O="~201~346~Unown~48~72~48~48~72~48~0~1~0~0~1~0~61~225~12~29~-1~0~10~0/0~";}
    if(n==202){O="~202~161~Wobbuffet~190~33~58~33~33~58~2~0~0~0~0~0~177~45~12~53~50~0~7~0/0~";}
    if(n==203){O="~203~164~Girafarig~70~80~65~85~90~65~0~0~0~0~2~0~149~60~16/12~25/14~50~0~5~0/08C~";}
    if(n==204){O="~204~347~Pineco~50~65~90~15~35~35~0~0~1~0~0~0~60~190~5~62~50~0~0~0/0~";}
    if(n==205){O="~205~348~Forretress~75~90~140~40~60~60~0~0~2~0~0~0~118~75~5/7~62~50~0~0~0/0~";}
    if(n==206){O="~206~349~Dunsparce~100~70~70~45~65~65~1~0~0~0~0~0~75~190~16~52/49~50~0~5~0/0~";}
    if(n==207){O="~207~350~Gligar~65~75~105~85~35~65~0~0~1~0~0~0~108~60~3/1~22/51~50~3~0~0/0~";}
    if(n==208){O="~208~351~Steelix~75~85~200~30~55~65~0~0~2~0~0~0~196~25~7/3~47/62~50~0~8~0/0C7~";}
    if(n==209){O="~209~352~Snubbull~60~80~50~30~40~40~0~1~0~0~0~0~63~190~16~27/49~75~4~5/3~0/0~";}
    if(n==210){O="~210~353~Granbull~90~120~75~45~60~60~0~2~0~0~0~0~178~75~16~27~75~4~5/3~0/0~";}
    if(n==211){O="~211~354~Qwilfish~65~95~75~85~55~55~0~1~0~0~0~0~100~45~9/2~43/65~50~0~13~0/0~";}
    if(n==212){O="~212~355~Scizor~70~130~100~65~55~80~0~2~0~0~0~0~200~25~5/7~64~50~0~0~0/0~";}
    if(n==213){O="~213~356~Shuckle~20~10~230~5~10~230~0~0~1~0~0~1~80~190~5/4~62~50~3~0~08B/08B~";}
    if(n==214){O="~214~168~Heracross~80~125~75~85~40~95~0~2~0~0~0~0~200~45~5/0~64/19~50~5~0~0/0~";}
    if(n==215){O="~215~357~Sneasel~55~95~55~115~35~75~0~0~0~1~0~0~132~60~15/13~25/28~50~3~5~0/0B7~";}
    if(n==216){O="~216~358~Teddiursa~60~80~50~40~50~50~0~1~0~0~0~0~124~120~16~41~50~0~5~0/0~";}
    if(n==217){O="~217~359~Ursaring~90~130~75~55~75~75~0~2~0~0~0~0~189~60~16~19~50~0~5~0/0~";}
    if(n==218){O="~218~103~Slugma~40~40~40~20~70~40~0~0~0~0~1~0~78~190~8~33/16~50~0~7~0/0~";}
    if(n==219){O="~219~104~Magcargo~50~50~120~30~80~80~0~0~2~0~0~0~154~75~8/4~33/16~50~0~7~0/0~";}
    if(n==220){O="~220~360~Swinub~50~50~40~50~30~30~0~1~0~0~0~0~78~225~13/3~38~50~5~5~0/0~";}
    if(n==221){O="~221~361~Piloswine~100~100~80~50~60~60~1~1~0~0~0~0~160~75~13/3~38~50~5~5~0/0~";}
    if(n==222){O="~222~180~Corsola~55~55~85~35~65~85~0~0~1~0~0~1~113~60~9/4~21/37~75~4~12/14~0/030~";}
    if(n==223){O="~223~362~Remoraid~35~65~35~65~65~35~0~0~0~0~1~0~78~190~9~21~50~0~12/13~0/0~";}
    if(n==224){O="~224~363~Octillery~75~105~75~45~105~75~0~1~0~0~1~0~164~75~9~63~50~0~12/13~0/0~";}
    if(n==225){O="~225~364~Delibird~45~55~45~75~65~45~0~0~0~1~0~0~183~45~13/1~71/21~50~4~12/5~0/0~";}
    if(n==226){O="~226~365~Mantine~65~40~70~70~80~140~0~0~0~0~0~2~168~25~9/1~65/73~50~5~12~0/0~";}
    if(n==227){O="~227~115~Skarmory~65~80~140~70~40~70~0~0~2~0~0~0~168~25~7/1~28/62~50~5~4~0/0~";}
    if(n==228){O="~228~366~Houndour~45~60~30~65~80~50~0~0~0~0~1~0~114~120~15/8~14/17~50~5~5~0/0~";}
    if(n==229){O="~229~367~Houndoom~75~90~50~95~110~80~0~0~0~0~2~0~204~45~15/8~14/17~50~5~5~0/0~";}
    if(n==230){O="~230~186~Kingdra~75~95~95~85~95~95~0~1~0~0~1~1~207~45~9/14~65~50~0~12/2~0/0C9~";}
    if(n==231){O="~231~165~Phanpy~90~60~60~40~40~40~1~0~0~0~0~0~124~120~3~41~50~0~5~0/0~";}
    if(n==232){O="~232~166~Donphan~90~120~120~50~60~60~0~1~1~0~0~0~189~60~3~62~50~0~5~0/0~";}
    if(n==233){O="~233~368~Porygon2~85~80~90~60~105~95~0~0~0~0~2~0~180~45~16~69~-1~0~8~0/0~";}
    if(n==234){O="~234~369~Stantler~73~95~62~85~85~65~0~1~0~0~0~0~165~45~16~27~50~5~5~0/0~";}
    if(n==235){O="~235~370~Smeargle~55~20~35~75~20~45~0~0~0~1~0~0~106~45~16~40~50~4~5~0/0~";}
    if(n==236){O="~236~371~Tyrogue~35~35~35~35~35~35~0~1~0~0~0~0~91~75~0~19~0~0~10~0/0~";}
    if(n==237){O="~237~372~Hitmontop~50~95~95~70~35~110~0~0~0~0~0~2~138~45~0~27~0~0~6~0/0~";}
    if(n==238){O="~238~373~Smoochum~45~30~15~65~85~65~0~0~0~0~1~0~87~45~13/12~38~100~0~10~089/089~";}
    if(n==239){O="~239~374~Elekid~45~63~37~95~65~55~0~0~0~1~0~0~106~45~11~59~25~0~10~0/0~";}
    if(n==240){O="~240~375~Magby~45~75~37~83~70~55~0~0~0~1~0~0~117~45~8~16~25~0~10~088/088~";}
    if(n==241){O="~241~376~Miltank~95~80~105~100~40~70~0~0~2~0~0~0~200~45~16~67~100~5~5~01D/01D~";}
    if(n==242){O="~242~377~Blissey~255~10~10~55~75~135~2~0~0~0~0~0~255~30~16~37/52~100~4~3~0/0C5~";}
    if(n==243){O="~243~378~Raikou~90~85~75~115~115~100~0~0~0~2~1~0~216~3~11~44~-1~5~10~0/0~";}
    if(n==244){O="~244~379~Entei~115~115~85~100~90~75~1~2~0~0~0~0~217~3~8~44~-1~5~10~0/0~";}
    if(n==245){O="~245~380~Suicune~100~75~115~85~90~115~0~0~1~0~0~2~215~3~9~44~-1~5~10~0/0~";}
    if(n==246){O="~246~381~Larvitar~50~64~50~41~45~50~0~1~0~0~0~0~67~45~4/3~19~50~5~9~0/0~";}
    if(n==247){O="~247~382~Pupitar~70~84~70~51~65~70~0~2~0~0~0~0~144~45~4/3~54~50~5~9~0/0~";}
    if(n==248){O="~248~383~Tyranitar~100~134~110~61~95~100~0~3~0~0~0~0~218~45~4/15~50~50~5~9~0/0~";}
    if(n==249){O="~249~384~Lugia~106~90~130~110~90~154~0~0~0~0~0~3~220~3~12/1~44~-1~5~10~0/0~";}
    if(n==250){O="~250~385~Ho-oh~106~130~90~90~110~154~0~0~0~0~0~3~220~3~8/1~44~-1~5~10~02D/02D~";}
    if(n==251){O="~251~386~Celebi~100~100~100~100~100~100~3~0~0~0~0~0~64~45~12/10~37~-1~3~10~08D/08D~";}
    if(n==277){O="~252~1~Treecko~40~45~35~70~65~55~0~0~0~1~0~0~65~45~10~39~12~3~9/2~0/0~";}
    if(n==278){O="~253~2~Grovyle~50~65~45~95~85~65~0~0~0~2~0~0~141~45~10~39~12~3~9/2~0/0~";}
    if(n==279){O="~254~3~Sceptile~70~85~65~120~105~85~0~0~0~3~0~0~208~45~10~39~12~3~9/2~0/0~";}
    if(n==280){O="~255~4~Torchic~45~60~40~45~70~50~0~0~0~0~1~0~65~45~8~3~12~3~5~0/0~";}
    if(n==281){O="~256~5~Combusken~60~85~60~55~85~60~0~1~0~0~1~0~142~45~8/0~3~12~3~5~0/0~";}
    if(n==282){O="~257~6~Blaziken~80~120~70~80~110~70~0~3~0~0~0~0~209~45~8/0~3~12~3~5~0/0~";}
    if(n==283){O="~258~7~Mudkip~50~70~50~40~50~50~0~1~0~0~0~0~65~45~9~68~12~3~9/12~0/0~";}
    if(n==284){O="~259~8~Marshtomp~70~85~70~50~60~70~0~2~0~0~0~0~143~45~9/3~68~12~3~9/12~0/0~";}
    if(n==285){O="~260~9~Swampert~100~110~90~60~85~90~0~3~0~0~0~0~210~45~9/3~68~12~3~9/12~0/0~";}
    if(n==286){O="~261~10~Poochyena~35~55~35~35~30~30~0~1~0~0~0~0~55~255~15~49~50~0~5~0/087~";}
    if(n==287){O="~262~11~Mightyena~70~90~70~70~60~60~0~2~0~0~0~0~128~127~15~27~50~0~5~0/087~";}
    if(n==288){O="~263~12~Zigzagoon~38~30~41~60~30~41~0~0~0~1~0~0~60~255~16~41~50~0~5~0/08B~";}
    if(n==289){O="~264~13~Linoone~78~70~61~100~50~61~0~0~0~2~0~0~128~90~16~41~50~0~5~08B/08E~";}
    if(n==290){O="~265~14~Wurmple~45~45~35~20~20~30~1~0~0~0~0~0~54~255~5~56~50~0~0~0/0~";}
    if(n==291){O="~266~15~Silcoon~50~35~55~15~25~25~0~0~2~0~0~0~71~120~5~54~50~0~0~0/0~";}
    if(n==292){O="~267~16~Beautifly~60~70~50~65~90~50~0~0~0~0~3~0~161~45~5/1~64~50~0~0~0/0BC~";}
    if(n==293){O="~268~17~Cascoon~50~35~55~15~25~25~0~0~2~0~0~0~72~120~5~54~50~0~0~0/0~";}
    if(n==294){O="~269~18~Dustox~60~50~70~65~50~90~0~0~0~0~0~3~160~45~5/2~56~50~0~0~0/0BC~";}
    if(n==295){O="~270~19~Lotad~40~30~30~30~40~50~0~0~0~0~0~1~74~255~9/10~65/46~50~3~12/11~0/0~";}
    if(n==296){O="~271~20~Lombre~60~50~50~50~60~70~0~0~0~0~0~2~141~120~9/10~65/46~50~3~12/11~0/0~";}
    if(n==297){O="~272~21~Ludicolo~80~70~70~70~90~100~0~0~0~0~0~3~181~45~9/10~65/46~50~3~12/11~0/0~";}
    if(n==298){O="~273~22~Seedot~40~40~50~30~30~30~0~0~1~0~0~0~74~255~10~5/14~50~3~5/11~0/0~";}
    if(n==299){O="~274~23~Nuzleaf~70~70~40~60~60~40~0~2~0~0~0~0~141~45~10/15~5/14~50~3~5/11~0/0~";}
    if(n==300){O="~275~24~Shiftry~90~100~60~80~90~60~0~3~0~0~0~0~181~45~10/15~5/14~50~3~5/11~0/0~";}
    if(n==301){O="~290~42~Nincada~31~45~90~40~30~30~0~0~1~0~0~0~65~255~5/3~9~50~1~0~0/0~";}
    if(n==302){O="~291~43~Ninjask~61~90~45~160~50~50~0~0~0~2~0~0~155~120~5/1~58~50~1~0~0/0~";}
    if(n==303){O="~292~44~Shedinja~1~90~45~40~30~30~2~0~0~0~0~0~95~45~5/6~76~-1~1~8~0/0~";}
    if(n==304){O="~276~25~Taillow~40~55~30~85~30~30~0~0~0~1~0~0~59~200~16/1~19~50~3~4~0/0~";}
    if(n==305){O="~277~26~Swellow~60~85~60~125~50~50~0~0~0~2~0~0~162~45~16/1~19~50~3~4~0/0~";}
    if(n==306){O="~285~34~Shroomish~60~40~60~35~40~60~1~0~0~0~0~0~65~255~10~15~50~2~3/11~0/0~";}
    if(n==307){O="~286~35~Breloom~60~130~80~70~60~60~0~2~0~0~0~0~165~90~10/0~15~50~2~3/11~0/0~";}
    if(n==308){O="~327~114~Spinda~60~60~60~60~60~60~0~0~0~0~1~0~85~255~16~40~50~4~5/6~0/086~";}
    if(n==309){O="~278~27~Wingull~40~30~30~85~55~30~0~0~0~1~0~0~64~190~9/1~28~50~0~12/4~0/0~";}
    if(n==310){O="~279~28~Pelipper~60~50~100~65~85~70~0~0~2~0~0~0~164~45~9/1~28~50~0~12/4~0/0~";}
    if(n==311){O="~283~32~Surskit~40~30~32~65~50~52~0~0~0~1~0~0~63~200~5/9~65~50~0~12/0~0/0~";}
    if(n==312){O="~284~33~Masquerain~70~60~62~60~80~82~0~0~0~0~1~1~128~75~5/1~27~50~0~12/0~0/0BC~";}
    if(n==313){O="~320~99~Wailmer~130~70~35~60~70~35~1~0~0~0~0~0~137~125~9~74/38~50~2~5/13~0/0~";}
    if(n==314){O="~321~100~Wailord~170~90~45~60~90~45~2~0~0~0~0~0~206~60~9~74/38~50~2~5/13~0/0~";}
    if(n==315){O="~300~61~Skitty~50~45~45~50~35~35~0~0~0~1~0~0~65~255~16~10~75~4~5/3~0/08A~";}
    if(n==316){O="~301~62~Delcatty~70~65~65~70~55~55~1~0~0~1~0~0~138~60~16~10~75~4~5/3~0/08A~";}
    if(n==317){O="~352~145~Kecleon~60~90~70~40~60~120~0~0~0~0~0~1~132~200~16~8~50~3~5~0/08C~";}
    if(n==318){O="~343~131~Baltoy~40~40~55~55~40~70~0~0~0~0~0~1~58~255~3/12~29~-1~0~8~0/0~";}
    if(n==319){O="~344~132~Claydol~60~70~105~75~70~120~0~0~0~0~0~2~189~90~3/12~29~-1~0~8~0/0~";}
    if(n==320){O="~299~60~Nosepass~30~45~135~30~45~90~0~0~1~0~0~0~108~255~4~62/34~50~0~8~0/0~";}
    if(n==321){O="~324~105~Torkoal~70~85~140~20~85~70~0~0~2~0~0~0~161~90~8~75~50~0~5~0/0~";}
    if(n==322){O="~302~68~Sableye~50~75~75~50~65~65~0~1~1~0~0~0~98~45~15/6~28~50~3~6~0/0~";}
    if(n==323){O="~339~127~Barboach~50~48~43~60~46~41~1~0~0~0~0~0~92~190~9/3~38~50~0~13~0/0~";}
    if(n==324){O="~340~128~Whiscash~110~78~73~60~76~71~2~0~0~0~0~0~158~75~9/3~38~50~0~13~0/0~";}
    if(n==325){O="~370~183~Luvdisc~43~30~55~97~40~65~0~0~0~1~0~0~110~225~9~65~75~4~13~06F/0~";}
    if(n==326){O="~341~129~Corphish~43~80~65~35~50~35~0~1~0~0~0~0~111~205~9~22/55~50~2~12/14~0/0~";}
    if(n==327){O="~342~130~Crawdaunt~63~120~85~55~90~55~0~2~0~0~0~0~161~155~9/15~22/55~50~2~12/14~0/0~";}
    if(n==328){O="~349~140~Feebas~20~15~20~80~10~55~0~0~0~1~0~0~61~255~9~65~50~1~12/2~0/0~";}
    if(n==329){O="~350~141~Milotic~95~60~79~81~100~125~0~0~0~0~0~2~213~60~9~35~50~1~12/2~0/0~";}
    if(n==330){O="~318~97~Carvanha~45~90~20~65~65~20~0~1~0~0~0~0~88~225~9/15~48~50~5~13~0/0~";}
    if(n==331){O="~319~98~Sharpedo~70~120~40~95~95~40~0~2~0~0~0~0~175~60~9/15~48~50~5~13~0/0~";}
    if(n==332){O="~328~116~Trapinch~45~100~45~10~45~45~0~1~0~0~0~0~73~255~3~22/1~50~3~0~0/0CB~";}
    if(n==333){O="~329~117~Vibrava~50~70~50~70~50~50~0~1~0~1~0~0~126~120~3/14~29~50~3~0~0/0~";}
    if(n==334){O="~330~118~Flygon~80~100~80~100~80~80~0~1~0~2~0~0~197~45~3/14~29~50~3~0~0/0~";}
    if(n==335){O="~296~48~Makuhita~72~60~30~25~20~30~1~0~0~0~0~0~87~180~0~67/19~25~2~6~0/0~";}
    if(n==336){O="~297~49~Hariyama~144~120~60~50~40~60~2~0~0~0~0~0~184~200~0~67/19~25~2~6~0/0BB~";}
    if(n==337){O="~309~78~Electrike~40~45~40~65~65~40~0~0~0~1~0~0~104~120~11~59/30~50~5~5~0/0~";}
    if(n==338){O="~310~79~Manectric~70~75~60~105~105~60~0~0~0~2~0~0~168~45~11~59/30~50~5~5~0/0~";}
    if(n==339){O="~322~101~Numel~60~60~40~35~65~45~0~0~0~0~1~0~88~255~8/3~38~50~0~5~088/088~";}
    if(n==340){O="~323~102~Camerupt~70~100~70~40~105~75~0~1~0~0~1~0~175~150~8/3~33~50~0~5~088/088~";}
    if(n==341){O="~363~173~Spheal~70~40~50~25~55~50~1~0~0~0~0~0~75~255~13/9~67~50~3~12/5~0/0~";}
    if(n==342){O="~364~174~Sealeo~90~60~70~45~75~70~2~0~0~0~0~0~128~120~13/9~67~50~3~12/5~0/0~";}
    if(n==343){O="~365~175~Walrein~110~80~90~65~95~90~3~0~0~0~0~0~192~45~13/9~67~50~3~12/5~0/0~";}
    if(n==344){O="~331~119~Cacnea~50~85~40~35~85~40~0~0~0~0~1~0~97~190~10~51~50~3~11/6~0/0D3~";}
    if(n==345){O="~332~120~Cacturne~70~115~60~55~115~60~0~1~0~0~1~0~177~60~10/15~51~50~3~11/6~0/0D3~";}
    if(n==346){O="~361~171~Snorunt~50~50~50~50~50~50~1~0~0~0~0~0~74~190~13~25~50~0~3/8~0/0~";}
    if(n==347){O="~362~172~Glalie~80~80~80~80~80~80~2~0~0~0~0~0~187~75~13~25~50~0~3/8~0/0D4~";}
    if(n==348){O="~337~125~Lunatone~70~55~65~70~95~85~0~0~0~0~2~0~150~45~4/12~29~-1~4~8~0/05E~";}
    if(n==349){O="~338~126~Solrock~70~95~85~70~55~65~0~2~0~0~0~0~150~45~4/12~29~-1~4~8~0/05D~";}
    if(n==350){O="~298~54~Azurill~50~20~40~20~20~40~1~0~0~0~0~0~33~150~16~67/20~75~4~10~0/0~";}
    if(n==351){O="~325~110~Spoink~60~25~35~60~70~80~0~0~0~0~0~1~89~255~12~67/40~50~4~5~0/0~";}
    if(n==352){O="~326~111~Grumpig~80~45~65~80~90~110~0~0~0~0~0~2~164~60~12~67/40~50~4~5~0/0~";}
    if(n==353){O="~311~80~Plusle~60~50~40~95~85~75~0~0~0~1~0~0~120~200~11~42~50~0~3~0/0~";}
    if(n==354){O="~312~81~Minun~60~40~50~95~75~85~0~0~0~1~0~0~120~200~11~36~50~0~3~0/0~";}
    if(n==355){O="~303~69~Mawile~50~85~85~50~55~55~0~1~1~0~0~0~98~45~7~22/27~50~4~5/3~0/0~";}
    if(n==356){O="~307~76~Meditite~30~40~55~60~40~55~0~0~0~1~0~0~91~180~0/12~45~50~0~6~0/0~";}
    if(n==357){O="~308~77~Medicham~60~60~75~80~60~75~0~0~0~2~0~0~153~90~0/12~45~50~0~6~0/0~";}
    if(n==358){O="~333~121~Swablu~45~40~60~50~40~75~0~0~0~0~0~1~74~255~16/1~37~50~1~4/2~0/0~";}
    if(n==359){O="~334~122~Altaria~75~70~90~80~70~105~0~0~0~0~0~2~188~45~14/1~37~50~1~4/2~0/0~";}
    if(n==360){O="~360~160~Wynaut~95~23~48~23~23~48~1~0~0~0~0~0~44~125~12~53~50~0~10~0/0~";}
    if(n==361){O="~355~148~Duskull~20~40~90~25~30~90~0~0~1~0~0~1~97~190~6~29~50~4~7~0/0D5~";}
    if(n==362){O="~356~149~Dusclops~40~70~130~25~60~130~0~0~1~0~0~2~179~90~6~44~50~4~7~0/0D5~";}
    if(n==363){O="~315~94~Roselia~50~60~45~65~100~80~0~0~0~0~1~0~152~150~10/2~37/43~50~3~3/11~0/0D3~";}
    if(n==364){O="~287~36~Slakoth~60~60~60~30~35~35~1~0~0~0~0~0~83~255~16~70~50~5~5~0/0~";}
    if(n==365){O="~288~37~Vigoroth~80~80~80~90~55~55~0~0~0~2~0~0~126~120~16~71~50~5~5~0/0~";}
    if(n==366){O="~289~38~Slaking~150~160~100~100~95~65~3~0~0~0~0~0~210~45~16~70~50~5~5~0/0~";}
    if(n==367){O="~316~95~Gulpin~70~43~53~40~43~53~1~0~0~0~0~0~75~225~2~32/61~50~2~7~0/06B~";}
    if(n==368){O="~317~96~Swalot~100~73~83~55~73~83~2~0~0~0~0~0~168~75~2~32/61~50~2~7~0/06B~";}
    if(n==369){O="~357~150~Tropius~99~68~83~51~72~87~2~0~0~0~0~0~169~200~10/1~5~50~5~9/11~0/0~";}
    if(n==370){O="~293~45~Whismur~64~51~23~28~51~23~1~0~0~0~0~0~68~190~16~57~50~3~9/5~0/086~";}
    if(n==371){O="~294~46~Loudred~84~71~43~48~71~43~2~0~0~0~0~0~126~120~16~57~50~3~9/5~0/086~";}
    if(n==372){O="~295~47~Exploud~104~91~63~68~91~63~3~0~0~0~0~0~184~45~16~57~50~3~9/5~0/086~";}
    if(n==373){O="~366~176~Clamperl~35~64~85~32~74~55~0~0~1~0~0~0~142~255~9~55~50~1~12~0/031~";}
    if(n==374){O="~367~177~Huntail~55~104~105~52~94~75~0~1~1~0~0~0~178~60~9~65~50~1~12~0/0~";}
    if(n==375){O="~368~178~Gorebyss~55~84~105~52~114~75~0~0~0~0~2~0~178~60~9~65~50~1~12~0/0~";}
    if(n==376){O="~359~152~Absol~65~130~60~75~75~60~0~2~0~0~0~0~174~30~15~44~50~3~5~0/0~";}
    if(n==377){O="~353~146~Shuppet~44~75~35~45~63~33~0~1~0~0~0~0~97~225~6~26~50~4~7~0/0D5~";}
    if(n==378){O="~354~147~Banette~64~115~65~65~83~63~0~2~0~0~0~0~179~45~6~26~50~4~7~0/0D5~";}
    if(n==379){O="~336~124~Seviper~73~100~60~65~100~60~0~1~0~0~1~0~165~90~2~54~50~2~5/2~0/0~";}
    if(n==380){O="~335~123~Zangoose~73~115~60~90~60~60~0~2~0~0~0~0~165~90~16~24~50~1~5~0/0~";}
    if(n==381){O="~369~179~Relicanth~100~90~130~55~45~65~1~0~1~0~0~0~198~25~9/4~65/47~12~5~12/13~0/033~";}
    if(n==382){O="~304~70~Aron~50~70~100~30~40~40~0~0~1~0~0~0~96~180~7/4~62/47~50~5~9~0/0CC~";}
    if(n==383){O="~305~71~Lairon~60~90~140~40~50~50~0~0~2~0~0~0~152~90~7/4~62/47~50~5~9~0/0CC~";}
    if(n==384){O="~306~72~Aggron~70~110~180~50~60~60~0~0~3~0~0~0~205~45~7/4~62/47~50~5~9~0/0CC~";}
    if(n==385){O="~351~142~Castform~70~70~70~70~70~70~1~0~0~0~0~0~145~45~16~18~50~0~3/7~0D1/0D1~";}
    if(n==386){O="~313~86~Volbeat~65~73~55~85~47~75~0~0~0~1~0~0~146~150~5~23/64~0~1~0/6~0/0~";}
    if(n==387){O="~314~87~Illumise~65~47~55~85~73~75~0~0~0~1~0~0~146~150~5~38~100~2~0/6~0/0~";}
    if(n==388){O="~345~133~Lileep~66~41~77~23~61~87~0~0~0~0~0~1~121~45~4/10~63~12~1~14~0/0~";}
    if(n==389){O="~346~134~Cradily~86~81~97~43~81~107~0~0~0~0~0~2~201~45~4/10~63~12~1~14~0/0~";}
    if(n==390){O="~347~135~Anorith~45~95~50~75~40~50~0~1~0~0~0~0~119~45~4/5~2~12~1~14~0/0~";}
    if(n==391){O="~348~136~Armaldo~75~125~100~45~70~80~0~2~0~0~0~0~200~45~4/5~2~12~1~14~0/0~";}
    if(n==392){O="~280~29~Ralts~28~25~25~40~45~35~0~0~0~0~1~0~70~235~12~66/69~50~5~7~0/0~";}
    if(n==393){O="~281~30~Kirlia~38~35~35~50~65~55~0~0~0~0~2~0~140~120~12~66/69~50~5~7~0/0~";}
    if(n==394){O="~282~31~Gardevoir~68~65~65~80~125~115~0~0~0~0~3~0~208~45~12~66/69~50~5~7~0/0~";}
    if(n==395){O="~371~187~Bagon~45~75~60~50~40~30~0~1~0~0~0~0~89~45~14~47~50~5~2~0/0C9~";}
    if(n==396){O="~372~188~Shelgon~65~95~100~50~60~50~0~0~2~0~0~0~144~45~14~47~50~5~2~0/0C9~";}
    if(n==397){O="~373~189~Salamence~95~135~80~100~110~80~0~3~0~0~0~0~218~45~14/1~27~50~5~2~0/0C9~";}
    if(n==398){O="~374~190~Beldum~40~55~80~30~35~60~0~0~1~0~0~0~103~3~7/12~6~-1~5~8~0/0C7~";}
    if(n==399){O="~375~191~Metang~60~75~100~50~55~80~0~0~2~0~0~0~153~3~7/12~6~-1~5~8~0/0C7~";}
    if(n==400){O="~376~192~Metagross~80~135~130~70~95~90~0~0~3~0~0~0~210~3~7/12~6~-1~5~8~0/0C7~";}
    if(n==401){O="~377~193~Regirock~80~100~200~50~50~100~0~0~3~0~0~0~217~3~4~6~-1~5~10~0/0~";}
    if(n==402){O="~378~194~Regice~80~50~100~50~100~200~0~0~0~0~0~3~216~3~13~6~-1~5~10~0/0~";}
    if(n==403){O="~379~195~Registeel~80~75~150~50~75~150~0~0~2~0~0~1~215~3~7~6~-1~5~10~0/0~";}
    if(n==404){O="~382~198~Kyogre~100~100~90~90~150~140~0~0~0~0~3~0~218~5~9~12~-1~5~10~0/0~";}
    if(n==405){O="~383~199~Groudon~100~150~140~90~100~90~0~3~0~0~0~0~218~5~3~13~-1~5~10~0/0~";}
    if(n==406){O="~384~200~Rayquaza~105~150~90~95~150~90~0~2~0~0~1~0~220~3~14/1~0~-1~5~10~0/0~";}
    if(n==407){O="~380~196~Latias~80~80~90~110~110~130~0~0~0~0~0~3~211~3~14/12~29~100~5~10~0/0~";}
    if(n==408){O="~381~197~Latios~80~90~80~110~130~110~0~0~0~0~3~0~211~3~14/12~29~0~5~10~0/0~";}
    if(n==409){O="~385~201~Jirachi~100~100~100~100~100~100~3~0~0~0~0~0~215~3~7/12~52~-1~5~10~06D/06D~";}
    if(n==410){
     O="~386~202~Deoxys~50~150~50~150~150~50~0~1~0~1~1~0~215~3~12~44~-1~5~10~0/0~";
     if(f.Game.selectedIndex==14||f.Game.selectedIndex==16||f.Game.selectedIndex==19||f.Game.selectedIndex==21
      ||f.Game.selectedIndex==23||f.Game.selectedIndex==25||f.Game.selectedIndex==27
      ){O="~386~202~Deoxys~50~180~20~150~180~20~0~1~0~1~1~0~215~3~12~44~-1~5~10~0/0~";}
     if(f.Game.selectedIndex==15||f.Game.selectedIndex==17||f.Game.selectedIndex==20||f.Game.selectedIndex==22
      ||f.Game.selectedIndex==24||f.Game.selectedIndex==26||f.Game.selectedIndex==28
      ){O="~386~202~Deoxys~50~70~160~90~70~160~0~1~0~1~1~0~215~3~12~44~-1~5~10~0/0~";}
     if(f.Game.selectedIndex==18||f.Game.selectedIndex==29){O="~386~202~Deoxys~50~95~90~180~95~90~0~1~0~1~1~0~215~3~12~44~-1~5~10~0/0~";}
    }
    if(n==411){O="~358~151~Chimecho~65~50~70~65~95~80~0~0~0~0~1~1~147~45~12~29~50~4~7~0/0~";}
    return O;
}
function PokeDex(n){
    return fPokeDex(getDefaultForm(), n);
}

function fItemC(f){
    var t=" ";
    var i=0;
    i=f.Held.selectedIndex;
    t=f.Held[i].value;
    f.ItemDesc.value=ItemDex(t,2);
    return i;
}
function ItemC(){
    return fItemC(getDefaultForm());
}

function fItemDex(f, n,w){
    var o=" ";
    var i=0;
    var t=" ";
    if(n=="000"){o="~None~No Item Held~";}else{o="~Unknown~"+n+" Unknown Item~";}
    i=0;
    if(n=="001"){o="~Master Ball~The greatest ball, it catches Pokemon without fail.~"; i=1;}
    if(n=="002"){o="~Ultra Ball~Easier to catch than with a Great Ball. Has a *2.0 catch rate.~"; i=2;}
    if(n=="003"){o="~Great Ball~Easier to catch than with a Poke Ball. Has a *1.5 catch rate.~"; i=3;}
    if(n=="004"){o="~Poke Ball~Item used to catch wild Pokemon. Has a *1.0 catch rate.~"; i=4;}
    if(n=="005"){o="~Safari Ball~A special ball made to use only in the Safari Zone. Has a *1.5 catch rate.~"; i=5;}
    if(n=="006"){o="~Net Ball~A ball that makes it easy to catch Water and Bug type Pokemon. Has a *3.0 catch rate for these Pokemon.~"; i=6;}
    if(n=="007"){o="~Dive Ball~A ball that makes it easy to catch Pokemon on the ocean floor. Has a *3.5 catch rate for these Pokemon.~"; i=7;}
    if(n=="008"){o="~Nest Ball~A ball that easily catches Pokemon weaker than your own. Has a *1.0~*4.0 catch rate for these Pokemon.~"; i=8;}
    if(n=="009"){o="~Repeat Ball~Pokemon already caught are easier to catch. Has a *3.0 catch rate for these Pokemon.~"; i=9;}
    if(n=="00A"){o="~Timer Ball~After a number of turns that go by, it becomes easier to catch a Pokemon. Has a *1.0 through *4.0 catch rate for these Pokemon.~"; i=10;}
    if(n=="00B"){o="~Luxury Ball~Has a *1.0 catch rate. A caught Pokemon's Tameness Value is higher.~"; i=11;}
    if(n=="00C"){o="~Premier Ball~A new, commemorative Poke Ball. Has a *1.0 catch rate.~"; i=12;}
    if(n=="00D"){o="~Potion~Pokemon recoveres 20 HP.~"; i=13;}
    if(n=="00E"){o="~Antidote~Recover from Poison status.~"; i=14;}
    if(n=="00F"){o="~Burn Heal~Recover from Burn status.~"; i=15;}
    if(n=="010"){o="~Ice Heal~Recover from Freeze status.~"; i=16;}
    if(n=="011"){o="~Awakeningg~Recover from Sleep status.~"; i=17;}
    if(n=="012"){o="~Parlyz Heal~Recover from Paralyze status.~"; i=18;}
    if(n=="013"){o="~Full Restore~Pokemon recovers full HP and from any status ailment~"; i=19;}
    if(n=="014"){o="~Max Potion~Pokemon recovers full HP.~"; i=20;}
    if(n=="015"){o="~Hyper Potion~Pokemon recovers 200 HP.~"; i=21;}
    if(n=="016"){o="~Super Potion~Pokemon recovers 50 HP.~"; i=22;}
    if(n=="017"){o="~Full Heal~Recovers from any status ailment.~"; i=23;}
    if(n=="018"){o="~Revive~Recovers from Faint status with half HP recovered.~"; i=24;}
    if(n=="019"){o="~Max Revive~Recovers from Faint status with full HP recovered.~"; i=25;}
    if(n=="01A"){o="~Fresh Water~A mineral-filled water which recovers 50 HP for a Pokemon.~"; i=26;}
    if(n=="01B"){o="~Soda Pop~A fizzy soda which recovers 60 HP for a Pokemon.~"; i=27;}
    if(n=="01C"){o="~Lemonade~A very sweet which recovers 80 HP for a Pokemon.~"; i=28;}
    if(n=="01D"){o="~MooMoo Milk~A nutrition-filled milk which recovers 100 HP for a Pokemon.~"; i=29;}
    if(n=="01E"){o="~Energy Powder~A very bitter powder which recovers 50 HP for a Pokemon.~"; i=30;}
    if(n=="01F"){o="~Energy Root~A very bitter root which recovers 200 HP for a Pokemon.~"; i=31;}
    if(n=="020"){o="~Heal Powder~An extremely bitter powder which completely recovers from any status ailment.~"; i=32;}
    if(n=="021"){o="~Revival Herb~A very bitter herb which recovers from Faint status.~"; i=33;}
    if(n=="022"){o="~Ether~Recovers 10 PP for one move.~"; i=34;}
    if(n=="023"){o="~Max Ether~Recovers full PP for one move.~"; i=35;}
    if(n=="024"){o="~Elixer~Recovers 10 PP for all moves.~"; i=36;}
    if(n=="025"){o="~Max Elixer~Recovers all PP for one Pokemon.~"; i=37;}
    if(n=="026"){o="~Lava Cookie~A local specialty which completely recovers from any status ailment.~"; i=38;}
    if(n=="027"){o="~Blue Flute~Play this glass flute to recover from Sleep status.(Must walk 250 steps at volcano to obtain.)~"; i=39;}
    if(n=="028"){o="~Yellow Flute~Play this glass flute to recover from Confusion status.(Must walk 500 steps at volcano to obtain.)~"; i=40;}
    if(n=="029"){o="~Red Flute~Play this glass flute to recover from Attract status. (Must walk 1,000 steps at volcano to obtain.)~"; i=41;}
    if(n=="02A"){o="~Black Flute~Play this glass flute to encounter wild Pokemon less often. (Must walk 1,000 steps at volcano to obtain.)~"; i=42;}
    if(n=="02B"){o="~White Flute~Play this glass flute to encounter wild Pokemon more often. (Must walk 1,000 steps at volcano to obtain.)~"; i=43;}
    if(n=="02C"){o="~Berry Juice~Made completely from berries, it restores 20 HP for a Pokemon.~"; i=44;}
    if(n=="02D"){o="~Sacred Ash~Revives all Pokemon from Faint status.~"; i=45;}
    if(n=="02E"){o="~Shoal Salt~Salt obtained from deep inside the SHOAL CAVE.~"; i=46;}
    if(n=="02F"){o="~Shoal Shell~A seashell found deep inside the SHOAL CAVE.~"; i=47;}
    if(n=="030"){o="~Red Shard~Appears to be a fragment of an item made long ago. Sells low. [Becomes Fire Stone.]~"; i=48;}
    if(n=="031"){o="~Blue Shard~Appears to be a fragment of an item made long ago. Sells low. [Becomes Water Stone.]~"; i=49;}
    if(n=="032"){o="~Yellow Shard~Appears to be a fragment of an item made long ago. Sells low. [Becomes Thunderstone.]~"; i=50;}
    if(n=="033"){o="~Green Shard~Appears to be a fragment of an item made long ago. Sells low. [Becomes Leaf Stone.]"; i=51;}
    if(n=="03F"){o="~HP Up~Raises HP.~"; i=52;}
    if(n=="040"){o="~Protein~Raises Attack points.~"; i=53;}
    if(n=="041"){o="~Iron~Raises Defense points.~"; i=54;}
    if(n=="042"){o="~Carbos~Raises Speed points.~"; i=55;}
    if(n=="043"){o="~Calcium~Raises Special Attack points.~"; i=56;}
    if(n=="044"){o="~Rare Candy~Pokemon raises 1 level.~"; i=57;}
    if(n=="045"){o="~PP Up~PP's maximum raises.~"; i=58;}
    if(n=="046"){o="~Zinc~Raises Special Defense points.~"; i=59;}
    if(n=="047"){o="~PP Max~PP's maximum raises to its limit.~"; i=60;}
    if(n=="049"){o="~Guard Spec~Abilities cannot be lowered in battle.~"; i=61;}
    if(n=="04A"){o="~Dire Hit~Critical hits occur more often in battle.~"; i=62;}
    if(n=="04B"){o="~X Attack~ATTACK power raises in battle.~"; i=63;}
    if(n=="04C"){o="~X Defend~DEFENSE power raises in battle.~"; i=64;}
    if(n=="04D"){o="~X Speed~SPEED raises in battle.~"; i=65;}
    if(n=="04E"){o="~X Accuracy~Accuracy raises in battle.~"; i=66;}
    if(n=="04F"){o="~X Special~SPECIAL ATTACK's power raises in battle.~"; i=67;}
    if(n=="050"){o="~Poke Doll~Run away from wild Pokemon without fail.~"; i=68;}
    if(n=="051"){o="~Fluffy Tail~Run away from wild Pokemon without fail.~"; i=69;}
    if(n=="053"){o="~Super Repel~Do not encounter weaker Pokemon for 200 steps.~"; i=70;}
    if(n=="054"){o="~Max Repel~Do not encounter weaker Pokemon for 250 steps.~"; i=71;}
    if(n=="055"){o="~Escape Rope~Escape from caves and dungeons.~"; i=72;}
    if(n=="056"){o="~Repel~Do not encounter weaker Pokemon for 100 steps.~"; i=73;}
    if(n=="05D"){o="~Sun Stone~A stone which evolves special Pokemon.~"; i=74;}
    if(n=="05E"){o="~Moon Stone~A stone which evolves special Pokemon.~"; i=75;}
    if(n=="05F"){o="~Fire Stone~A stone which evolves special Pokemon.~"; i=76;}
    if(n=="060"){o="~Thunder Stone~A stone which evolves special Pokemon.~"; i=77;}
    if(n=="061"){o="~Water Stone~A stone which evolves special Pokemon.~"; i=78;}
    if(n=="062"){o="~Leaf Stone~A stone which evolves special Pokemon.~"; i=79;}
    if(n=="067"){o="~Tiny Mushroom~A plain, ordinary mushroom. Sells low.~"; i=80;}
    if(n=="068"){o="~Big Mushroom~A rare mushroom. Sells high.~"; i=81;}
    if(n=="06A"){o="~Pearl~A pretty pearl. Sells low.~"; i=82;}
    if(n=="06B"){o="~Big Pearl~A very pretty large pearl. Sells high.~"; i=83;}
    if(n=="06C"){o="~Stardust~Beautiful red sand. Sells high.~"; i=84;}
    if(n=="06D"){o="~Star Piece~A red gem shard. Sells very high.~"; i=85;}
    if(n=="06E"){o="~Nugget~A solid gold nugget. Sells high.~"; i=86;}
    if(n=="06F"){o="~Heart Scale~A beautiful scale which is popular among collectors.~"; i=87;}
    if(n=="079"){o="~Orange Mail~Zigzagoon-print mail which a Pokemon holds.~"; i=88;}
    if(n=="07A"){o="~Harbor Mail~Wingull-print mail which a Pokemon holds.~"; i=89;}
    if(n=="07B"){o="~Glitter Mail~Pikachu-print mail which a Pokemon holds.~"; i=90;}
    if(n=="07C"){o="~Mech Mail~Magmemite-print mail which a Pokemon holds.~"; i=91;}
    if(n=="07D"){o="~Wood Mail~Slakoth-print mail which a Pokemon holds.~"; i=92;}
    if(n=="07E"){o="~Wave Mail~Wailmer-print mail which a Pokemon holds.~"; i=93;}
    if(n=="07F"){o="~Bead Mail~Mail which shows a sketch of the Pokemon holding it.~"; i=94;}
    if(n=="080"){o="~Shadow Mail~Duskull-print mail which a Pokemon holds.~"; i=95;}
    if(n=="081"){o="~Tropic Mail~Bellossom-print mail which a Pokemon holds.~"; i=96;}
    if(n=="082"){o="~Dream Mail~Mail which shows a sketch of the Pokemon holding it.~"; i=97;}
    if(n=="083"){o="~Fab Mail~Gorgeous-print mail which a Pokemon holds.~"; i=98;}
    if(n=="084"){o="~Retro Mail~Three starter Pokemon-print mail which a Pokemon holds.~"; i=99;}
    if(n=="085"){o="~Cheri Berry~When held, Paralyze status recovers by itself.~"; i=100;}
    if(n=="086"){o="~Chesto Berry~When held, Sleep status recovers by itself.~"; i=101;}
    if(n=="087"){o="~Pecha Berry~When held, Poison status recovers by itself.~"; i=102;}
    if(n=="088"){o="~Rawst Berry~When held, Burn status recovers by itself.~"; i=103;}
    if(n=="089"){o="~Aspear Berry~When held, Freeze status recovers by itself.~"; i=104;}
    if(n=="08A"){o="~Leppa Berry~When held, 10 PP recovers by itself when PP is 0.~"; i=105;}
    if(n=="08B"){o="~Oran Berry~When held, 10 HP recovers by itself when HP is below half.~"; i=106;}
    if(n=="08C"){o="~Persim Berry~When held, Confusion status recovers by itself.~"; i=107;}
    if(n=="08D"){o="~Lum Berry~When held, any status ailment recovers by itself.~"; i=108;}
    if(n=="08E"){o="~Sitrus Berry~When held, 30 HP recovers by itself when HP is below half.~"; i=109;}
    if(n=="08F"){o="~Figy Berry~When held, 1/8 HP recovers when HP is below half, but Confusion occurs in all but Pokemon that are Bold, Timid, Modest, or Calm.~"; i=110;}
    if(n=="090"){o="~Wiki Berry~When held, 1/8 HP recovers when HP is below half, but Confusion occurs in all but Pokemon that are Adamant, Impish, Jolly, or Careful.~"; i=111;}
    if(n=="091"){o="~Mago Berry~When held, 1/8 HP recovers when HP is below half, but Confusion occurs in all but Pokemon that are Brave, Relaxed, Quiet, or Sassy.~"; i=112;}
    if(n=="092"){o="~Aguav Berry~When held, 1/8 HP recovers when HP is below half, but Confusion occurs in all but Pokemon that are Naughty, Lax, Naive, or Rash.~"; i=113;}
    if(n=="093"){o="~Iapapa Berry~When held, 1/8 HP recovers when HP is below half, but Confusion occurs in all but Pokemon that are Lonely, Hasty, Mild, or Gentle.~"; i=114;}
    if(n=="094"){o="~Razz Berry~Bury in the earth to grow RAZZ ingredients for PokeBlocks.~"; i=115;}
    if(n=="095"){o="~Bluk Berry~Bury in the earth to grow BLUK ingredients for PokeBlocks.~"; i=116;}
    if(n=="096"){o="~Nanab Berry~Bury in the earth to grow NANAB ingredients for PokeBlocks.~"; i=117;}
    if(n=="097"){o="~Wepear Berry~Bury in the earth to grow WEPEAR ingredients for PokeBlocks.~"; i=118;}
    if(n=="098"){o="~Pinap Berry~Bury in the earth to grow PINAP ingredients for PokeBlocks.~"; i=119;}
    if(n=="099"){o="~Pomeg Berry~Bury in the earth to grow POMEG ingredients for PokeBlocks.~"; i=120;}
    if(n=="09A"){o="~Kelpsy Berry~Bury in the earth to grow KELPSY ingredients for PokeBlocks.~"; i=121;}
    if(n=="09B"){o="~Qualot Berry~Bury in the earth to grow QUALOT ingredients for PokeBlocks.~"; i=122;}
    if(n=="09C"){o="~Hondew Berry~Bury in the earth to grow HONDEW ingredients for PokeBlocks.~"; i=123;}
    if(n=="09D"){o="~Grepa Berry~Bury in the earth to grow GREPA ingredients for PokeBlocks.~"; i=124;}
    if(n=="09E"){o="~Tamato Berry~Bury in the earth to grow TAMATO ingredients for PokeBlocks.~"; i=125;}
    if(n=="09F"){o="~Cornn Berry~Bury in the earth to grow CORNN ingredients for PokeBlocks.~"; i=126;}
    if(n=="0A0"){o="~Magost Berry~Bury in the earth to grow MAGOST ingredients for PokeBlocks.~"; i=127;}
    if(n=="0A1"){o="~Rabuta Berry~Bury in the earth to grow RABUTA ingredients for PokeBlocks.~"; i=128;}
    if(n=="0A2"){o="~Nomel Berry~Bury in the earth to grow NOMEL ingredients for PokeBlocks.~"; i=129;}
    if(n=="0A3"){o="~Spelon Berry~Bury in the earth to grow SPELON ingredients for PokeBlocks.~"; i=130;}
    if(n=="0A4"){o="~Pamtre Berry~Bury in the earth to grow PAMTRE ingredients for PokeBlocks.~"; i=131;}
    if(n=="0A5"){o="~Watmel Berry~Bury in the earth to grow WATMEL ingredients for PokeBlocks.~"; i=132;}
    if(n=="0A6"){o="~Durin Berry~Bury in the earth to grow DURIN ingredients for PokeBlocks.~"; i=133;}
    if(n=="0A7"){o="~Belue Berry~Bury in the earth to grow BELUE ingredients for PokeBlocks.~"; i=134;}
    if(n=="0A8"){o="~Liechi Berry~When held, while in a pinch, Attack raises one stage.~"; i=135;}
    if(n=="0A9"){o="~Ganlon Berry~When held, while in a pinch, Defense raises one stage.~"; i=136;}
    if(n=="0AA"){o="~Salac Berry~When held, while in a pinch, Speed raises one stage.~"; i=137;}
    if(n=="0AB"){o="~Petaya Berry~When held, while in a pinch, Special Attack raises one stage.~"; i=138;}
    if(n=="0AC"){o="~Apicot Berry~When held, while in a pinch, Special Defense raises one stage.~"; i=139;}
    if(n=="0AD"){o="~Lansat Berry~When held, while in a pinch, it becomes easy to Critical Hit the enemy.~"; i=140;}
    if(n=="0AE"){o="~Starf Berry~When held, while in a pinch, one ability raises two stages.~"; i=141;}
    if(n=="0AF"){o="~Enigma Berry~Bury in the earth to grow mysterious ingredients for PokeBlocks.~"; i=142;}
    if(n=="0B3"){o="~Bright Powder~Hold and a light lowers the opponent's accuracy.~"; i=143;}
    if(n=="0B4"){o="~White Herb~When held by a Pokemon, if an ability is lowered, it will be raised back up.~"; i=144;}
    if(n=="0B5"){o="~Macho Brace~When held by a Pokemon, Speed lowers one stage, but Effort Values earned doubles.~"; i=145;}
    if(n=="0B6"){o="~Exp Share~When held by a Pokemon, its Experience Value and Effort Value raise without battling.~"; i=146;}
    if(n=="0B7"){o="~Quick Claw~When held by a Pokemon, a preemptive attack may occur.~"; i=147;}
    if(n=="0B8"){o="~Soothe Bell~When held, a Pokemon's Tameness Value raises more easily.~"; i=148;}
    if(n=="0B9"){o="~Mental Herb~When held, Attract recovers by itself.~"; i=149;}
    if(n=="0BA"){o="~Choice Band~The user's Attack becomes *1.5, but only the first chosen move can be used. Special Attack is uneffected.~"; i=150;}
    if(n=="0BB"){o="~King's Rock~When held by a Pokemon, its attacks may cause the opponent to flinch.~"; i=151;}
    if(n=="0BC"){o="~Silver Powder~When held, a Pokemon's Bug type moves power increases by 10%.~"; i=152;}
    if(n=="0BD"){o="~Amulet Coin~When held by a Pokemon, double the money is earned from battles.~"; i=153;}
    if(n=="0BE"){o="~Cleanse Tag~When held by a Pokemon, wild Pokemon will be encountered less often.~"; i=154;}
    if(n=="0BF"){o="~Soul Dew~When held, Latias or Latios SPECIAL ATTACK increases by 50%.~"; i=155;}
    if(n=="0C0"){o="~Deep Sea Tooth~When held, Clamperl's SPECIAL ATTACK increases by 100%.~"; i=156;}
    if(n=="0C1"){o="~Deep Sea Scale~When held, Clamperl's SPECIAL DEFENSE increases by 100%.~"; i=157;}
    if(n=="0C2"){o="~Smoke Ball~Run away from wild Pokemon without fail.~"; i=158;}
    if(n=="0C3"){o="~Everstone~A mysterious rock that prevents a Pokemon from evolving when held.~"; i=159;}
    if(n=="0C4"){o="~Focus Band~When held, sometimes the Pokemon will survive with 1 HP instead of 0 HP.~"; i=160;}
    if(n=="0C5"){o="~Lucky Egg~When held, a Pokemon gains more experience.~"; i=161;}
    if(n=="0C6"){o="~Scope Lens~When held, it is easier for a Pokemon to Critical Hit.~"; i=162;}
    if(n=="0C7"){o="~Metal Coat~When held, a Pokemon's Steel type moves power increases by 10%.~"; i=163;}
    if(n=="0C8"){o="~Leftovers~When held, HP recovers by 1/16th every turn.~"; i=164;}
    if(n=="0C9"){o="~Dragon Scale~A mysterious scale held by Dragon type Pokemon.~"; i=165;}
    if(n=="0CA"){o="~Light Ball~When held, Pikachu's SPECIAL ATTACK increases by 100%.~"; i=166;}
    if(n=="0CB"){o="~Soft Sand~When held, a Pokemon's Ground type moves power increases by 10%.~"; i=167;}
    if(n=="0CC"){o="~Hard Stone~When held, a Pokemon's Rock type moves power increases by 10%.~"; i=168;}
    if(n=="0CD"){o="~Miracle Seed~When held, a Pokemon's Grass type moves power increases by 10%.~"; i=169;}
    if(n=="0CE"){o="~Black Glasses~When held, a Pokemon's Dark type moves power increases by 10%.~"; i=170;}
    if(n=="0CF"){o="~Black Belt~When held, a Pokemon's Fighting type moves power increases by 10%.~"; i=171;}
    if(n=="0D0"){o="~Magnet~When held, a Pokemon's Electric type moves power increases by 10%.~"; i=172;}
    if(n=="0D1"){o="~Mystic Water~When held, a Pokemon's Water type moves power increases by 10%.~"; i=173;}
    if(n=="0D2"){o="~Sharp Beak~When held, a Pokemon's Flying type moves power increases by 10%.~"; i=174;}
    if(n=="0D3"){o="~Poison Barb~When held, a Pokemon's Poison type moves power increases by 10%.~"; i=175;}
    if(n=="0D4"){o="~Nevermelt Ice~When held, a Pokemon's Ice type moves power increases by 10%.~"; i=176;}
    if(n=="0D5"){o="~Spell Tag~When held, a Pokemon's Ghost type moves power increases by 10%.~"; i=177;}
    if(n=="0D6"){o="~Twisted Spoon~When held, a Pokemon's Psychic type moves power increases by 10%.~"; i=178;}
    if(n=="0D7"){o="~Charcoal~When held, a Pokemon's Fire type moves power increases by 10%."; i=179;}
    if(n=="0D8"){o="~Dragon Fang~When held, a Pokemon's Dragon type moves power increases by 10%."; i=180;}
    if(n=="0D9"){o="~Silk Scarf~When held, a Pokemon's Normal type moves power increases by 10%.~"; i=181;}
    if(n=="0DA"){o="~Up-Grade~When held, evolves Porygon when traded.~"; i=182;}
    if(n=="0DB"){o="~Shell Bell~When held, a Pokemon recovers HP equal to 1/8th the damage its attacks deal to the opponent.~"; i=183;}
    if(n=="0DC"){o="~Sea Incense~When held, a Pokemon's Water type moves power increases slightly by 5%."; i=184;}
    if(n=="0DD"){o="~Lax Incense~When held, the enemy's accuracy lowers slightly by 5%.~"; i=185;}
    if(n=="0DE"){o="~Lucky Punch~When held, it is easier for Chansey to Critical Hit.~"; i=186;}
    if(n=="0DF"){o="~Metal Powder~When held, Ditto's DEFENSE and SPECIAL DEFENSE become *1.5.~"; i=187;}
    if(n=="0E0"){o="~Thick Club~When held, Cubone and Marowak's ATTACK becomes *2.~"; i=188;}
    if(n=="0E1"){o="~Stick~When held, it is easier for Farfetch'd to Critical Hit.~"; i=189;}
    if(n=="0FE"){o="~Red Scarf~When held, raises COOL in contests.~"; i=190;}
    if(n=="0FF"){o="~Blue Scarf~When held, raises BEAUTY in contests.~"; i=191;}
    if(n=="100"){o="~Pink Scarf~When held, raises CUTE in contests.~"; i=192;}
    if(n=="101"){o="~Green Scarf~When held, raises SMART in contests.~"; i=193;}
    if(n=="102"){o="~Yellow Scarf~When held, raises TOUGH in contests.~"; i=194;}
    if(n=="103"){o="~Mach Bike~A folding bicycle that more than doubles movement speed.~"; i=195;}
    if(n=="104"){o="~Coin Case~A case that holds up to 9,999 COINS.~"; i=196;}
    if(n=="105"){o="~ItemFinder~Makes a sound when an unseen item is detected.~"; i=197;}
    if(n=="106"){o="~Old Rod~Use to fish for Pokemon in the water.~"; i=198;}
    if(n=="107"){o="~Good Rod~A better rod used to fish for Pokemon."; i=199;}
    if(n=="108"){o="~Super Rod~The best rod used to fish for Pokemon.~"; i=200;}
    if(n=="109"){o="~S.S. Ticket~A ticket required to sail on a ferry.~"; i=201;}
    if(n=="10A"){o="~Contest Pass~A pass required to participate in a contest.~"; i=202;}
    if(n=="10C"){o="~Wailmer Pail~Used to pour water on the ground. Buried trees will quickly grow berries.~"; i=203;}
    if(n=="10D"){o="~Devon's Goods~A package that contains DEVON's machine parts.~"; i=204;}
    if(n=="10E"){o="~Soot Sack~A sack used to gather and hold volcanic ash.~"; i=205;}
    if(n=="10F"){o="~Basement Key~The key for NEW MAUVILLE beneath MAUVILLE CITY.~"; i=206;}
    if(n=="110"){o="~Acro Bike~A folding bicycle capable of jumps and wheelies.~"; i=207;}
    if(n=="111"){o="~PokeBlock Case~A case for holding PokeBlocks made with a BERRY BLENDER.~"; i=208;}
    if(n=="112"){o="~Letter~A letter to STEVEN from the PRESIDENT of the DEVON CORP.~"; i=209;}
    if(n=="113"){o="~Eon Ticket~The ticket for a ferry to a distant southern island.~"; i=210;}
    if(n=="114"){o="~Red Orb~A red, glowing orb said to contain an ancient power.~"; i=211;}
    if(n=="115"){o="~Blue Orb~A blue, glowing orb said to contain an ancient power.~"; i=212;}
    if(n=="116"){o="~Scanner~A device found inside the ABANDONED SHIP.~"; i=213;}
    if(n=="117"){o="~Go-Goggles~Great goggles which protect the eyes from desert sandstorms.~"; i=214;}
    if(n=="118"){o="~Meteorite~A fallen meteorite found in Meteor Falls.~"; i=215;}
    if(n=="119"){o="~Rm.1 Key~A key that opens a door inside the ABANDONED SHIP.~"; i=216;}
    if(n=="11A"){o="~Rm.2 Key~A key that opens a door inside the ABANDONED SHIP.~"; i=217;}
    if(n=="11B"){o="~Rm.4 Key~A key that opens a door inside the ABANDONED SHIP.~"; i=218;}
    if(n=="11C"){o="~Rm.6 Key~A key that opens a door inside the ABANDONED SHIP.~"; i=219;}
    if(n=="11D"){o="~Storage Key~The key to the storage inside the ABANDONED SHIP.~"; i=220;}
    if(n=="11E"){o="~Root Fossil~A fossil of an ancient Pokemon believes to live on the sea floor.~"; i=221;}
    if(n=="11F"){o="~Claw Fossil~A fossil of an ancient Pokemon believes to live on the sea floor.~"; i=222;}
    if(n=="120"){o="~Devon Scope~A special item made by Devon. It makes a sound when it finds an unseen Pokemon.~"; i=223;}
    if(n=="121"){o="~TM01 (Focus Punch)~A powerful loyalty attack. The user flinches if hit.~"; i=224;}
    if(n=="122"){o="~TM02 (Dragon Claw)~Slashes the foe with sharp claws.~"; i=225;}
    if(n=="123"){o="~TM03 (Water Pulse)~Attacks with ultrasonic waves. May confuse the foe.~"; i=226;}
    if(n=="124"){o="~TM04 (Calm Mind)~Raises SP. ATK and SP. DEF by focusing the mind.~"; i=227;}
    if(n=="125"){o="~TM05 (Roar)~Makes the foe flee to end the battle.~"; i=228;}
    if(n=="126"){o="~TM06 (Toxic)~Poisons the foe with an intensifying toxin.~"; i=229;}
    if(n=="127"){o="~TM07 (Hail)~Summons a hailstorm that strikes every turn.~"; i=230;}
    if(n=="128"){o="~TM08 (Bulk Up)~Bulks up the body to boost both ATTACK and DEFENSE.~"; i=231;}
    if(n=="129"){o="~TM09 (Bullet Seed)~Shoots 2 to 5 seeds in a row to strike the foe.~"; i=232;}
    if(n=="12A"){o="~TM10 (Hidden Power)~The effectiveness varies with the user.~"; i=233;}
    if(n=="12B"){o="~TM11 (Sunny Day)~Boosts the power of FIREtype moves for 5 turns.~"; i=234;}
    if(n=="12C"){o="~TM12 (Taunt)~Taunts the foe into only using attack moves.~"; i=235;}
    if(n=="12D"){o="~TM13 (Ice Beam)~Blasts the foe with an icy beam that may freeze it.~"; i=236;}
    if(n=="12E"){o="~TM14 (Blizzard)~Hits the foe with an icy storm that may freeze it.~"; i=237;}
    if(n=="12F"){o="~TM15 (Hyper Beam)~Powerful, but leaves the user immobile the next turn.~"; i=238;}
    if(n=="130"){o="~TM16 (Light Screen)~Creates a wall of light that lowers SP. ATK damage.~"; i=239;}
    if(n=="131"){o="~TM17 (Protect)~Evades attack, but may fail if used in succession.~"; i=240;}
    if(n=="132"){o="~TM18 (Rain Dance)~Boosts the power of WATERtype moves for 5 turns.~"; i=241;}
    if(n=="133"){o="~TM19 (Giga Drain)~An attack that steals half the damage inflicted.~"; i=242;}
    if(n=="134"){o="~TM20 (Safeguard)~A mystical force prevents all status problems.~"; i=243;}
    if(n=="135"){o="~TM21 (Frustration)~An attack that is stronger if the TRAINER is disliked.~"; i=244;}
    if(n=="136"){o="~TM22 (Solar Beam)~Absorbs light in one turn, then attacks next turn.~"; i=245;}
    if(n=="137"){o="~TM23 (Iron Tail)~Attacks with a rock-hard tail. May lower DEFENSE.~"; i=246;}
    if(n=="138"){o="~TM24 (Thunderbolt)~A strong electrical attack that may paralyze the foe.~"; i=247;}
    if(n=="139"){o="~TM25 (Thunder)~A lightning attack that may cause paralysis.~"; i=248;}
    if(n=="13A"){o="~TM26 (Earthquake)~A powerful quake, but has no effect on flying foes.~"; i=249;}
    if(n=="13B"){o="~TM27 (Return)~An attack that increases in power with friendship.~"; i=250;}
    if(n=="13C"){o="~TM28 (Dig)~Digs underground the first turn and strikes next turn.~"; i=251;}
    if(n=="13D"){o="~TM29 (Psychic)~A powerful psychic attack that may lower SP. DEF.~"; i=252;}
    if(n=="13E"){o="~TM30 (Shadow Ball)~Hurls a black blob that may lower the foe's SP. DEF.~"; i=253;}
    if(n=="13F"){o="~TM31 (Brick Break)~Destroys barriers such as REFLECT and causes damage.~"; i=254;}
    if(n=="140"){o="~TM32 (Double Team)~Creates illusory copies to raise evasiveness.~"; i=255;}
    if(n=="141"){o="~TM33 (Reflect)~Creates a wall of light that weakens physical attacks.~"; i=256;}
    if(n=="142"){o="~TM34 (Shock Wave)~A fast and unavoidable electric attack.~"; i=257;}
    if(n=="143"){o="~TM35 (Flamethrower)~A powerful fire attack that may inflict a burn.~"; i=258;}
    if(n=="144"){o="~TM36 (Sludge Bomb)~Sludge is hurled to inflict damage. May also poison.~"; i=259;}
    if(n=="145"){o="~TM37 (Sandstorm)~Causes a sandstorm that rages for several turns.~"; i=260;}
    if(n=="146"){o="~TM38 (Fire Blast)~A fiery blast that scorches all. May cause a burn.~"; i=261;}
    if(n=="147"){o="~TM39 (Rock Tomb)~Stops the foe from moving with rocks and cuts SPEED.~"; i=262;}
    if(n=="148"){o="~TM40 (Aerial Ace)~An extremely speedy and unavoidable attack.~"; i=263;}
    if(n=="149"){o="~TM41 (Torment)~Torments the foe and stops successive use of a move.~"; i=264;}
    if(n=="14A"){o="~TM42 (Facade)~Boosts ATTACK when burned, paralyzed, or poisoned.~"; i=265;}
    if(n=="14B"){o="~TM43 (Secret Power)~An attack with effects that vary by location.~"; i=266;}
    if(n=="14C"){o="~TM44 (Rest)~The user sleeps for 2 turns, restoring HP and status.~"; i=267;}
    if(n=="14D"){o="~TM45 (Attract)~Makes the opposite gender less likely to attack.~"; i=268;}
    if(n=="14E"){o="~TM46 (Thief)~While attacking, it may steal the foe's held item.~"; i=269;}
    if(n=="14F"){o="~TM47 (Steel Wing)~Strikes the foe with hard wings spread wide.~"; i=270;}
    if(n=="150"){o="~TM48 (Skill Swap)~The user swaps special abilities with the target.~"; i=271;}
    if(n=="151"){o="~TM49 (Snatch)~Steals the effects of the move the foe uses next.~"; i=272;}
    if(n=="152"){o="~TM50 (Overheat)~Allows a full-power attack, but sharply lowers SP. ATK.~"; i=273;}
    if(n=="153"){o="~HM01 (Cut)~Cuts the foe with sharp scythes, claws, etc.~"; i=274;}
    if(n=="154"){o="~HM02 (Fly)~Flies up on the first turn, then strikes the next turn.~"; i=275;}
    if(n=="155"){o="~HM03 (Surf)~Creates a huge wave, then crashes it down on the foe.~"; i=276;}
    if(n=="156"){o="~HM04 (Strength)~Builds enormous power, then slams the foe.~"; i=277;}
    if(n=="157"){o="~HM05 (Flash)~Looses a powerful blast of light that cuts accuracy.~"; i=278;}
    if(n=="158"){o="~HM06 (Rock Smash)~A rock-crushing attack that may lower DEFENSE.~"; i=279;}
    if(n=="159"){o="~HM07 (Waterfall)~Charges the foe with speed to climb waterfalls.~"; i=280;}
    if(n=="15A"){o="~HM08 (Dive)~Dives underwater the first turn and strikes next turn.~"; i=281;}
    if(n=="15D"){o="~{Oak's Parcel}~A package from Viridian City's Pok�Mart. Deliver to Professor Oak.~"; i=282;}
    if(n=="15E"){o="~{Poke Flute}~Plays a beautiful melody, which awakens sleeping Pok�mon.~"; i=283;}
    if(n=="15F"){o="~{Secret Key}~Cinnabar Island Pok�mon Gym's Key~"; i=284;}
    if(n=="160"){o="~{Bike Voucher}~Cerulean's Miracle Bicycle~"; i=285;}
    if(n=="161"){o="~{Gold Teeth}~Safari Zone's warden very~"; i=286;}
    if(n=="162"){o="~{Old Amber}~A reddish-coloured amber. It can be used to recreate the ancient Pokemon Aerodactyl.~"; i=287;}
    if(n=="163"){o="~{Card Key}~apphron's Silph Company building's door lock card type's key~"; i=288;}
    if(n=="164"){o="~{Elevator Key}~Team Rocket hideout elevator key Team Rocket's mark~"; i=289;}
    if(n=="165"){o="~{Dome Fossil}~A fossil of the ancient Pokemon Kabuto. It's dome-shaped.~"; i=290;}
    if(n=="166"){o="~{Helix Fossil}~A fossil of the ancient Pokemon Omanyte. It's helix-shaped.~"; i=291;}
    if(n=="167"){o="~{Silph Scope}~scope Silph Company~"; i=292;}
    if(n=="168"){o="~{Bicycle}~Running shoes/bicycle.~"; i=293;}
    if(n=="169"){o="~{Town Map}~Fire/Leaf Key Item~"; i=294;}
    if(n=="16A"){o="~{VS Seeker}~Fire/Leaf Key Item~"; i=295;}
    if(n=="16B"){o="~{Fame Seeker}~Fire/Leaf Key Item~"; i=296;}
    if(n=="16C"){o="~{TM Case}~TM holding case. Bag's Important Items~"; i=297;}
    if(n=="16D"){o="~{Berry Bag}~Berry holding sack. Bag's Important Items~"; i=298;}
    if(n=="16E"){o="~{Help TV}~A TV with programs that aide beginning trainers.~"; i=299;}
    if(n=="16F"){o="~{Tri-Pass}~A boat pass to 1 Island, 2 Island, and 3 Island.~"; i=300;}
    if(n=="170"){o="~{Rainbow Pass}~A boat pass for Vermilion City to Nana Island.~"; i=301;}
    if(n=="171"){o="~{Tea}~Old lady~"; i=302;}
    if(n=="172"){o="~{Mystery Ticket}~A boat ticket necessary to travel to Navel Cavern. Lugia/Ho-oh is found there.~"; i=303;}
    if(n=="173"){o="~{Aurora Ticket}~A boat ticket necessary to travel to Birth Island. Deoxys is found there.~"; i=304;}
    if(n=="174"){o="~{Powder Jar}~Berry crush berry~"; i=305;}
    if(n=="175"){o="~{Ruby Plate}~A very beautiful shining red jewel. A symbol of passion.~"; i=306;}
    if(n=="176"){o="~{Sapphire Plate}~A very beautiful shining blue jewel. A symbol of faith.~"; i=307;}
    if(n=="1F4"){o="~[Jail Key]~Colosseum Key Item~"; i=308;}
    if(n=="1F5"){o="~[Elevator Key]~Colosseum Key Item~"; i=309;}
    if(n=="1F6"){o="~[Small Tablet]~Colosseum Key Item~"; i=310;}
    if(n=="1F7"){o="~[F-Disk]~Colosseum Key Item~"; i=311;}
    if(n=="1F8"){o="~[R-Disk]~Colosseum Key Item~"; i=312;}
    if(n=="1F9"){o="~[L-Disk]~Colosseum Key Item~"; i=313;}
    if(n=="1FA"){o="~[D-Disk]~Colosseum Key Item~"; i=314;}
    if(n=="1FB"){o="~[U-Disk]~Colosseum Key Item~"; i=315;}
    if(n=="1FC"){o="~[Subway Key]~Colosseum Key Item~"; i=316;}
    if(n=="1FD"){o="~[Maingate Key]~Colosseum Key Item~"; i=317;}
    if(n=="1FE"){o="~[Card Key]~Colosseum Key Item~"; i=318;}
    if(n=="1FF"){o="~[Down St. Key]~Colosseum Key Item~"; i=319;}
    if(n=="200"){o="~[DNA Sample 1]~Colosseum Key Item~"; i=320;}
    if(n=="201"){o="~[Bayleef DNA]~Colosseum Key Item~"; i=321;}
    if(n=="202"){o="~[DNA Sample 2]~Colosseum Key Item~"; i=322;}
    if(n=="203"){o="~[Quilava DNA]~Colosseum Key Item~"; i=323;}
    if(n=="204"){o="~[DNA Sample 3]~Colosseum Key Item~"; i=324;}
    if(n=="205"){o="~[Croconaw DNA]~Colosseum Key Item~"; i=325;}
    if(n=="206"){o="~[DNA Sample 4]~Colosseum Key Item~"; i=326;}
    if(n=="207"){o="~[Sudowoodo DNA]~Colosseum Key Item~"; i=327;}
    if(n=="208"){o="~[DNA Sample 5]~Colosseum Key Item~"; i=328;}
    if(n=="209"){o="~[Misdreavus DNA]~Colosseum Key Item~"; i=329;}
    if(n=="20A"){o="~[DNA Sample 6]~Colosseum Key Item~"; i=330;}
    if(n=="20B"){o="~[Mightyena DNA]~Colosseum Key Item~"; i=331;}
    if(n=="20C"){o="~[DNA Sample 7]~Colosseum Key Item~"; i=332;}
    if(n=="20D"){o="~[Raikou DNA]~Colosseum Key Item~"; i=333;}
    if(n=="20E"){o="~[DNA Sample 8]~Colosseum Key Item~"; i=334;}
    if(n=="20F"){o="~[Entei DNA]~Colosseum Key Item~"; i=335;}
    if(n=="210"){o="~[DNA Sample 9]~Colosseum Key Item~"; i=336;}
    if(n=="211"){o="~[Suicune DNA]~Colosseum Key Item~"; i=337;}
    if(n=="212"){o="~[Data ROM]~Colosseum Key Item~"; i=338;}
    if(n=="213"){o="~[Steel Teeth]~Colosseum Key Item~"; i=339;}
    if(n=="214"){o="~[Gear]~Colosseum Key Item~"; i=340;}
    if(n=="215"){o="~[Red ID Badge]~Colosseum Key Item~"; i=341;}
    if(n=="216"){o="~[Green ID Badge]~Colosseum Key Item~"; i=342;}
    if(n=="217"){o="~[Blue ID Badge]~Colosseum Key Item~"; i=343;}
    if(n=="218"){o="~[Yellow ID Badge]~Colosseum Key Item~"; i=344;}
    if(n=="219"){o="~[Time Flute]~Colosseum Key Item~"; i=345;}
    if(n=="21A"){o="~[Ein File S]~Colosseum Key Item~"; i=346;}
    if(n=="21B"){o="~[Ein File H]~Colosseum Key Item~"; i=347;}
    if(n=="21C"){o="~[Ein File C]~Colosseum Key Item~"; i=348;}
    if(n=="21D"){o="~[Ein File P]~Colosseum Key Item~"; i=349;}
    if(n=="21E"){o="~[Cologne Case]~Colosseum Key Item~"; i=350;}
    if(n=="21F"){o="~[Joy Scent]~Colosseum Key Item~"; i=351;}
    if(n=="220"){o="~[Excite Scent]~Colosseum Key Item~"; i=352;}
    if(n=="221"){o="~[Vivid Scent]~Colosseum Key Item~"; i=353;}
    if(n=="222"){o="~[Powerup Part]~Colosseum Key Item~"; i=354;}
    if(n=="223"){o="~[Ein File F]~Colosseum Key Item~"; i=355;}
    if(w==0){t=o;}
    if(w==1){t=i;}
    if(w==2){t=fFI(f, o,"~",2);}
    if(w==3){t=fFI(f, o,"~",1);}
    return t;
}
function ItemDex(n,w){
    return fItemDex(getDefaultForm(), n, w);
}

function fMoveDex(f, n,w){
    var o=" ";
    // 1    2     3        4  5    6
    // ~Name~power~Accuracy~PP~Type~Desc~
    o="~Unknown~0~0%~5~Unknown~"+DecToHex(n,4)+" Unknown Move~";
    if(n==0){o="~Empty Move~0~0%~0~None~No Move.~";}
    if(n==1){o="~Pound~40~100%~35~Normal~No effect.~";}
    if(n==2){o="~Karate Chop~50~100%~25~Fighting~Has a high critical hit rate.~";}
    if(n==3){o="~Doubleslap~15~85%~10~Normal~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==4){o="~Comet Punch~18~85%~15~Normal~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==5){o="~Mega Punch~80~85%~20~Normal~No effect.~";}
    if(n==6){o="~Pay Day~40~100%~20~Normal~User gains money after battle.~";}
    if(n==7){o="~Fire Punch~75~100%~15~Fire~May induce opponent with BURN status.~";}
    if(n==8){o="~Ice Punch~75~100%~15~Ice~May induce opponent with FREEZE status.~";}
    if(n==9){o="~Thunderpunch~75~100%~15~Electric~May induce opponent with PARALYSIS status.~";}
    if(n==10){o="~Scratch~40~100%~35~Normal~No effect.~";}
    if(n==11){o="~Vicegrip~55~100%~30~Normal~No effect.~";}
    if(n==12){o="~Guillotine~1~30%~5~Normal~Knocks out opponent in one hit. Accuracy increases by an amount equal to the difference between user and enemy's experience levels, then divided by 128. Accuracy will be 23.4-100%.~";}
    if(n==13){o="~Razor Wind~80~100%~10~Normal~Attacks in two turns. Has a high critical hit ratio.~";}
    if(n==14){o="~Swords Dance~0~0%~30~Normal~Raises user's ATTACK ability up two stages.~";}
    if(n==15){o="~Cut~50~95%~30~Normal~HM01-No effect.~";}
    if(n==16){o="~Gust~40~100%~35~Flying~Forces opponent to switch. Also hits while opponent is using Fly.~";}
    if(n==17){o="~Wing Attack~60~100%~35~Flying~No effect.~";}
    if(n==18){o="~Whirlwind~0~100%~20~Normal~Escape from a wild battle. Switch opponent's Pok�mon in a link battle.~";}
    if(n==19){o="~Fly~70~95%~15~Flying~HM02-Attacks in two turns. The first turn, user does not take damage.~";}
    if(n==20){o="~Bind~15~75%~20~Normal~Traps opponent for 2-5 turns. Deals 1/16 HP of damage each turn.~";}
    if(n==21){o="~Slam~80~75%~20~Normal~No effect.~";}
    if(n==22){o="~Vine Whip~35~100%~10~Grass~No effect.~";}
    if(n==23){o="~Stomp~65~100%~20~Normal~May cause opponent to FLINCH.~";}
    if(n==24){o="~Double Kick~30~100%~30~Fighting~Attacks twice.~";}
    if(n==25){o="~Mega Kick~120~75%~5~Normal~No effect.~";}
    if(n==26){o="~Jump Kick~70~95%~25~Fighting~If attack misses, user takes 1/8 HP of damage.~";}
    if(n==27){o="~Rolling Kick~60~85%~15~Fighting~May cause opponent to FLINCH.~";}
    if(n==28){o="~Sand-Attack~0~100%~15~Ground~Lowers opponent's Hit Ratio ability down one stage.~";}
    if(n==29){o="~Headbutt~70~100%~15~Normal~May cause opponent to FLINCH.~";}
    if(n==30){o="~Horn Attack~65~100%~25~Normal~No effect.~";}
    if(n==31){o="~Fury Attack~15~85%~20~Normal~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==32){o="~Horn Drill~1~30%~5~Normal~Knocks out opponent in one hit. Accuracy increases by an amount equal to the difference between user and enemy's experience levels, then divided by 128. Accuracy will be 23.4-100%.~";}
    if(n==33){o="~Tackle~35~95%~35~Normal~No effect.~";}
    if(n==34){o="~Body Slam~85~100%~15~Normal~May induce opponent with PARALYSIS status.~";}
    if(n==35){o="~Wrap~15~85%~20~Normal~Traps opponent for 2-5 turns. Deals 1/16 HP of damage each turn.~";}
    if(n==36){o="~Take Down~90~85%~20~Normal~User is dealt recoil damage equal to 1/4 damage dealt to opponent.~";}
    if(n==37){o="~Thrash~90~100%~20~Normal~Attacks 2, 3 turns, then induces user with CONFUSION condition.~";}
    if(n==38){o="~Double-Edge~120~100%~15~Normal~User is dealt recoil damage equal to 1/3 damage dealt to opponent.~";}
    if(n==39){o="~Tail Whip~0~100%~30~Normal~Lowers opponent's DEFENSE ability down one stage.~";}
    if(n==40){o="~Poison Sting~15~100%~35~Poison~May induce opponent with POISON status.~";}
    if(n==41){o="~Twineedle~25~100%~20~Bug~Attacks 2 times. May induce opponent with POISON condition.~";}
    if(n==42){o="~Pin Missile~14~85%~20~Bug~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==43){o="~Leer~0~100%~30~Normal~Lowers opponent's DEFENSE ability down one stage.~";}
    if(n==44){o="~Bite~60~100%~25~Dark~May cause opponent to FLINCH.~";}
    if(n==45){o="~Growl~0~100%~40~Normal~Lowers opponent's ATTACK ability down one stage.~";}
    if(n==46){o="~Roar~0~100%~20~Normal~TM05-Escape from a wild battle. Switch opponent's Pok�mon in a link battle.~";}
    if(n==47){o="~Sing~0~55%~15~Normal~May induce opponent with SLEEP status.~";}
    if(n==48){o="~Supersonic~0~55%~20~Normal~Induces opponent with CONFUSION condition.~";}
    if(n==49){o="~Sonicboom~1~90%~20~Normal~Alway deals 20 HP of damage.~";}
    if(n==50){o="~Disable~0~55%~20~Normal~Disables an opponent's move for a short amount of time.~";}
    if(n==51){o="~Acid~40~100%~30~Poison~May lower opponent's DEFENSE ability down one stage.~";}
    if(n==52){o="~Ember~40~100%~25~Fire~May induce opponent with BURN status.~";}
    if(n==53){o="~Flamethrower~95~100%~15~Fire~TM35-May induce opponent with BURN status.~";}
    if(n==54){o="~Mist~0~0%~30~Ice~Prevents user's abilities from being lowered.~";}
    if(n==55){o="~Water Gun~40~100%~25~Water~No effect.~";}
    if(n==56){o="~Hydro Pump~120~80%~5~Water~No effect.~";}
    if(n==57){o="~Surf~95~100%~15~Water~HM03-No effect.~";}
    if(n==58){o="~Ice Beam~95~100%~10~Ice~TM13-May induce opponent with FREEZE status.~";}
    if(n==59){o="~Blizzard~120~70%~5~Ice~TM14-May induce opponent with FREEZE status.~";}
    if(n==60){o="~Psybeam~65~100%~20~Psychic~May induce opponent with CONFUSION condition.~";}
    if(n==61){o="~Bubblebeam~65~100%~20~Water~May lower opponent's SPEED ability down one stage.~";}
    if(n==62){o="~Aurora Beam~65~100%~20~Ice~May lower opponent's ATTACK ability down one stage.~";}
    if(n==63){o="~Hyper Beam~150~90%~5~Normal~TM15-Attacks in two turns. The second turn, user does not attack.~";}
    if(n==64){o="~Peck~35~100%~35~Flying~No effect.~";}
    if(n==65){o="~Drill Peck~80~100%~20~Flying~No effect.~";}
    if(n==66){o="~Submission~80~80%~25~Fighting~User is dealt recoil damage equal to 1/4 damage dealt to opponent.~";}
    if(n==67){o="~Low Kick~1~100%~20~Fighting~Power depends on the opponent's weight.~";}
    if(n==68){o="~Counter~1~100%~20~Fighting~If hit by a physical attack, deals back double the damage.~";}
    if(n==69){o="~Seismic Toss~1~100%~20~Fighting~Deals HP of damage equal to user's level.~";}
    if(n==70){o="~Strength~80~100%~15~Normal~HM04-No effect.~";}
    if(n==71){o="~Absorb~20~100%~20~Grass~User recovers half damage dealt.~";}
    if(n==72){o="~Mega Drain~40~100%~10~Grass~User recovers half damage dealt.~";}
    if(n==73){o="~Leech Seed~0~90%~10~Grass~Absorbs a small amount of HP from the opponent every turn.~";}
    if(n==74){o="~Growth~0~0%~40~Normal~Raises user's SPECIAL ATTACK ability up one stage.~";}
    if(n==75){o="~Razor Leaf~55~95%~25~Grass~Has a high critical hit rate.~";}
    if(n==76){o="~Solarbeam~120~100%~10~Grass~TM22-Attacks in two turns. The first turn, user does not attack. Attacks in one turn during Clear Skies weather.~";}
    if(n==77){o="~Poisonpowder~0~75%~35~Poison~Induces opponent with POISON status.~";}
    if(n==78){o="~Stun Spore~0~75%~30~Grass~Induces opponent with PARALYSIS status.~";}
    if(n==79){o="~Sleep Powder~0~75%~15~Grass~May induce opponent with SLEEP status.~";}
    if(n==80){o="~Petal Dance~70~100%~20~Grass~Attacks 2, 3 turns, then induces user with CONFUSION condition.~";}
    if(n==81){o="~String Shot~0~95%~40~Bug~Lowers opponent's SPEED ability down one stage.~";}
    if(n==82){o="~Dragon Rage~1~100%~10~Dragon~Alway deals 40 HP of damage.~";}
    if(n==83){o="~Fire Spin~15~70%~15~Fire~Traps opponent for 2-5 turns. Deals 1/16 HP of damage each turn.~";}
    if(n==84){o="~Thundershock~40~100%~30~Electric~May induce opponent with PARALYSIS status.~";}
    if(n==85){o="~Thunderbolt~95~100%~15~Electric~TM24-May induce opponent with PARALYSIS status.~";}
    if(n==86){o="~Thunder Wave~0~100%~20~Electric~Induces opponent with PARALYSIS status.~";}
    if(n==87){o="~Thunder~120~70%~10~Electric~TM25-May induce opponent with PARALYSIS. Has 100% accuracy during Big Rain weather.~";}
    if(n==88){o="~Rock Throw~50~90%~15~Rock~No effect.~";}
    if(n==89){o="~Earthquake~100~100%~10~Ground~TM26-Hits all opponents.~";}
    if(n==90){o="~Fissure~1~30%~5~Ground~Knocks out opponent in one hit. Accuracy increases by an amount equal to the difference between user and enemy's experience levels, then divided by 128. Accuracy will be 23.4-100%.~";}
    if(n==91){o="~Dig~60~100%~10~Ground~TM28-Attacks in two turns. The first turn, user does not take damage.~";}
    if(n==92){o="~Toxic~0~85%~10~Poison~TM06-Induces opponent with TOXIC status.~";}
    if(n==93){o="~Confusion~50~100%~25~Psychic~May induce opponent with CONFUSION condition.~";}
    if(n==94){o="~Psychic~90~100%~10~Psychic~TM29-May lower opponent's SPECIAL DEFENSE ability down one stage.~";}
    if(n==95){o="~Hypnosis~0~60%~20~Psychic~May induce opponent with SLEEP status.~";}
    if(n==96){o="~Meditate~0~0%~40~Psychic~Raises user's ATTACK ability up one stage.~";}
    if(n==97){o="~Agility~0~0%~30~Psychic~Raises user's SPEED ability up two stages.~";}
    if(n==98){o="~Quick Attack~40~100%~30~Normal~Always attacks first.~";}
    if(n==99){o="~Rage~20~100%~20~Normal~User's Attack raises when damaged by opponent.~";}
    if(n==100){o="~Teleport~0~0%~20~Psychic~Flees from battle. Does not work in Trainer Battles.~";}
    if(n==101){o="~Night Shade~1~100%~15~Ghost~Deals HP of damage equal to user's level.~";}
    if(n==102){o="~Mimic~0~100%~10~Normal~Copies move used by opponent.~";}
    if(n==103){o="~Screech~0~85%~40~Normal~Lowers opponent's DEFENSE ability down two stages.~";}
    if(n==104){o="~Double Team~0~0%~15~Normal~TM32-Raises user's Evasion ability up one stage.~";}
    if(n==105){o="~Recover~0~0%~20~Normal~Restores half of user's maximum HP.~";}
    if(n==106){o="~Harden~0~0%~30~Normal~Raises user's DEFENSE ability up one stage.~";}
    if(n==107){o="~Minimize~0~0%~20~Normal~Raises user's Evasion ability up one stage. STOMP deals double damage to user as long as user remains in battle.~";}
    if(n==108){o="~Smokescreen~0~100%~20~Normal~Lowers opponent's Hit Ratio ability down one stage.~";}
    if(n==109){o="~Confuse Ray~0~100%~10~Ghost~Induces opponent with CONFUSION condition.~";}
    if(n==110){o="~Withdraw~0~0%~40~Water~Raises user's DEFENSE ability up one stage.~";}
    if(n==111){o="~Defense Curl~0~0%~40~Normal~Raises Defense up one stage. Damage from Rollout will increase.~";}
    if(n==112){o="~Barrier~0~0%~30~Psychic~Raises user's DEFENSE ability up two stages.~";}
    if(n==113){o="~Light Screen~0~0%~30~Psychic~TM16-Special type moves deal half damage to user for five turns.~";}
    if(n==114){o="~Haze~0~0%~30~Ice~Resets all ability stages.~";}
    if(n==115){o="~Reflect~0~0%~20~Psychic~TM33-Physical type moves deal half damage to user for five turns.~";}
    if(n==116){o="~Focus Energy~0~0%~30~Normal~Increases user's critical hit rate.~";}
    if(n==117){o="~Bide~1~100%~10~Normal~Withstands attacks for 2, 3 turns, then deals back double the damage.~";}
    if(n==118){o="~Metronome~0~0%~10~Normal~Randomly uses almost any attack.~";}
    if(n==119){o="~Mirror Move~0~0%~20~Flying~Move is replaced by the last move used by opponent.~";}
    if(n==120){o="~Selfdestruct~200~100%~5~Normal~Attack deals double damage. User faints.~";}
    if(n==121){o="~Egg Bomb~100~75%~10~Normal~No effect.~";}
    if(n==122){o="~Lick~20~100%~30~Ghost~May induce opponent with PARALYSIS status.~";}
    if(n==123){o="~Smog~20~70%~20~Poison~May induce opponent with POISON status.~";}
    if(n==124){o="~Sludge~65~100%~20~Poison~May induce opponent with POISON status.~";}
    if(n==125){o="~Bone Club~65~85%~20~Ground~May cause opponent to FLINCH.~";}
    if(n==126){o="~Fire Blast~120~85%~5~Fire~TM38-May induce opponent with BURN status.~";}
    if(n==127){o="~Waterfall~80~100%~15~Water~HM07-No effect.~";}
    if(n==128){o="~Clamp~35~75%~10~Water~Traps opponent for 2-5 turns. Deals 1/16 HP of damage each turn.~";}
    if(n==129){o="~Swift~60~0%~20~Normal~If opponent is on screen, hits without fail.~";}
    if(n==130){o="~Skull Bash~100~100%~15~Normal~Raises Defense up one stage first turn, then attacks second turn.~";}
    if(n==131){o="~Spike Cannon~20~100%~15~Normal~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==132){o="~Constrict~10~100%~35~Normal~May lower opponent's SPEED ability down one stage.~";}
    if(n==133){o="~Amnesia~0~0%~20~Psychic~Raises user's SPECIAL DEFENSE ability up two stages.~";}
    if(n==134){o="~Kinesis~0~80%~15~Psychic~Lowers opponent's Hit Ratio ability down one stage.~";}
    if(n==135){o="~Softboiled~0~100%~10~Normal~User recovers half maximum HP.~";}
    if(n==136){o="~Hi Jump Kick~85~90%~20~Fighting~If attack misses, user takes 1/8 HP of damage.~";}
    if(n==137){o="~Glare~0~75%~30~Normal~Induces opponent with PARALYSIS status.~";}
    if(n==138){o="~Dream Eater~100~100%~15~Psychic~Only works when opponent is SLEEP condition. User recovers HP based on damage to opponent.~";}
    if(n==139){o="~Poison Gas~0~55%~40~Poison~Induces opponent with POISON status.~";}
    if(n==140){o="~Barrage~15~85%~20~Normal~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==141){o="~Leech Life~20~100%~15~Bug~User recovers half damage dealt.~";}
    if(n==142){o="~Lovely Kiss~0~75%~10~Normal~May induce opponent with SLEEP status.~";}
    if(n==143){o="~Sky Attack~140~90%~5~Flying~Attacks in two turns. May cause opponent to FLINCH.~";}
    if(n==144){o="~Transform~0~0%~10~Normal~User's abilities (except for HP) become that of opponent. User's ability changes and status inducement also become that of opponent. Users moves become those of opponent, but only have 5 PP each.~";}
    if(n==145){o="~Bubble~20~100%~30~Water~May lower opponent's SPEED ability down one stage.~";}
    if(n==146){o="~Dizzy Punch~70~100%~10~Normal~May induce opponent with CONFUSION condition.~";}
    if(n==147){o="~Spore~0~100%~15~Grass~May induce opponent with SLEEP status.~";}
    if(n==148){o="~Flash~0~70%~20~Normal~HM05-Lowers opponent's Hit Ratio ability down one stage.~";}
    if(n==149){o="~Psywave~1~80%~15~Psychic~Deals HP of damage equal to 1 to 1.5 x user's level.~";}
    if(n==150){o="~Splash~0~0%~40~Normal~Does nothing.~";}
    if(n==151){o="~Acid Armor~0~0%~40~Poison~Raises user's DEFENSE ability up two stages.~";}
    if(n==152){o="~Crabhammer~90~85%~10~Water~Has a high critical hit rate.~";}
    if(n==153){o="~Explosion~250~100%~5~Normal~Attack deals double damage. User faints.~";}
    if(n==154){o="~Fury Swipes~18~80%~15~Normal~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==155){o="~Bonemerang~50~90%~10~Ground~Attacks twice.~";}
    if(n==156){o="~Rest~0~0%~10~Psychic~TM44-User restores all HP and is induced with SLEEP condition for two turns.~";}
    if(n==157){o="~Rock Slide~75~90%~10~Rock~May cause opponent to FLINCH.~";}
    if(n==158){o="~Hyper Fang~80~90%~15~Normal~May cause opponent to FLINCH.~";}
    if(n==159){o="~Sharpen~0~0%~30~Normal~Raises user's ATTACK ability up one stage.~";}
    if(n==160){o="~Conversion~0~0%~30~Normal~User's Type becomes the same as the Type of one of its moves.~";}
    if(n==161){o="~Tri Attack~80~100%~10~Normal~May induce opponent with either BURN, FREEZE, or PARALYSIS.~";}
    if(n==162){o="~Super Fang~1~90%~10~Normal~Deals damage equal to half opponent's current HP.~";}
    if(n==163){o="~Slash~70~100%~20~Normal~Has a high critical hit rate.~";}
    if(n==164){o="~Substitute~0~0%~10~Normal~Uses 1/4 of the user's HP to make a decoy. Decoy takes damage from opponent's attacks until it breaks.~";}
    if(n==165){o="~Struggle~50~100%~1~Normal~User is dealt recoil damage equal to 1/4 damage dealt to opponent.~";}
    if(n==166){o="~Sketch~0~0%~1~Normal~Permanently copies opponent's last move.~";}
    if(n==167){o="~Triple Kick~10~90%~10~Fighting~Attacks 1 to 3 times.~";}
    if(n==168){o="~Thief~40~100%~10~Dark~TM46-If user is not holding an item, user takes opponent's item.~";}
    if(n==169){o="~Spider Web~0~100%~10~Bug~Opponent cannot escape as long as user remains in battle.~";}
    if(n==170){o="~Mind Reader~0~100%~5~Normal~Ensures that user's next attack will hit without fail.~";}
    if(n==171){o="~Nightmare~0~100%~15~Ghost~Inflicts 1/4 damage every turn. Only works if opponent is induced with SLEEP condition.~";}
    if(n==172){o="~Flame Wheel~60~100%~25~Fire~May induce opponent with BURN status. Can remove FREEZE status from user.~";}
    if(n==173){o="~Snore~40~100%~15~Normal~Can only be used when user is induced with SLEEP.~";}
    if(n==174){o="~Curse~0~0%~10~???~For a Ghost type Pok�mon, the user loses half their maximum HIT POINTS, and the opponent is inflicted with a Nightmare. For all other type Pok�mon, raises user's ATTACK and DEFENSE abilities each up one stage. Lowers user's SPEED ability down one stage.~";}
    if(n==175){o="~Flail~1~100%~15~Normal~The less HP user has, the higher the attack power. When HP is very low, attack power is 200. When HP is highest, attack power is 20.~";}
    if(n==176){o="~Conversion 2~0~100%~30~Normal~User becomes a Type resistent to last attack's Type.~";}
    if(n==177){o="~Aeroblast~100~95%~5~Flying~Has a high critical hit rate.~";}
    if(n==178){o="~Cotton Spore~0~85%~40~Grass~Lowers opponent's SPEED ability down two stages.~";}
    if(n==179){o="~Reversal~1~100%~15~Fighting~The less HP user has, the higher the attack power. When HP is very low, attack power is 200. When HP is highest, attack power is 20.~";}
    if(n==180){o="~Spite~0~100%~10~Ghost~Opponent's last move used loses 2 to 5 PP.~";}
    if(n==181){o="~Powder Snow~40~100%~25~Ice~May induce opponent with FREEZE status.~";}
    if(n==182){o="~Protect~0~0%~10~Normal~TM17-Takes no damage from opponent's attack. May fail if used more than once in a row.~";}
    if(n==183){o="~Mach Punch~40~100%~30~Fighting~Always attacks first.~";}
    if(n==184){o="~Scary Face~0~90%~10~Normal~Lowers opponent's SPEED ability down two stages.~";}
    if(n==185){o="~Faint Attack~60~0%~20~Dark~If opponent is on screen, hits without fail.~";}
    if(n==186){o="~Sweet Kiss~0~75%~10~Normal~Induces opponent with CONFUSION condition.~";}
    if(n==187){o="~Belly Drum~0~0%~10~Normal~Raises user's ATTACK ability up very high. Will consume half of the user's maximum HP is available.~";}
    if(n==188){o="~Sludge Bomb~90~100%~10~Poison~TM36-May induce opponent with POISON status.~";}
    if(n==189){o="~Mud-Slap~20~100%~10~Ground~May lower opponent's Hit Ratio ability down one stage.~";}
    if(n==190){o="~Octazooka~65~85%~10~Water~May lower opponent's Hit Ratio ability down one stage.~";}
    if(n==191){o="~Spikes~0~0%~20~Ground~Sets spikes down. Opponent takes damage upon switch.~";}
    if(n==192){o="~Zap Cannon~100~50%~5~Electric~May induce opponent with PARALYSIS status.~";}
    if(n==193){o="~Foresight~0~100%~40~Normal~After use, opponent's raised evasion will be ignored.~";}
    if(n==194){o="~Destiny Bond~0~0%~5~Ghost~If user is knocked out by opponent's next move, then opponent is also knocked out.~";}
    if(n==195){o="~Perish Song~0~0%~5~Normal~All Pok�mon will faint after three turns. Switching a Pok�mon out of battle prevents its fainting.~";}
    if(n==196){o="~Icy Wind~55~95%~15~Ice~May lower opponent's SPEED ability down one stage.~";}
    if(n==197){o="~Detect~0~0%~5~Fighting~Takes no damage from opponent's attack. May fail if used more than once in a row.~";}
    if(n==198){o="~Bone Rush~25~80%~10~Ground~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==199){o="~Lock-On~0~100%~5~Normal~Ensures that user's next attack will hit without fail.~";}
    if(n==200){o="~Outrage~90~100%~15~Dragon~Attacks 2, 3 turns, then induces user with CONFUSION condition.~";}
    if(n==201){o="~Sandstorm~0~0%~10~Rock~TM37-Causes sandstorm weather for five turns.~";}
    if(n==202){o="~Giga Drain~60~100%~5~Grass~TM19-User recovers half damage dealt.~";}
    if(n==203){o="~Endure~0~0%~10~Normal~Ensures that opponent's next attack will leave user with at least 1 HP.~";}
    if(n==204){o="~Charm~0~100%~20~Normal~Lowers opponent's ATTACK ability down two stages.~";}
    if(n==205){o="~Rollout~30~90%~20~Rock~Attacks for 5 turns.~";}
    if(n==206){o="~False Swipe~40~100%~40~Normal~Always leaves opponent with at least 1 HP.~";}
    if(n==207){o="~Swagger~0~90%~15~Normal~Raises opponent's ATTACK ability up two stages, then induces opponent with CONFUSION condition.~";}
    if(n==208){o="~Milk Drink~0~0%~10~Normal~User recovers half maximum HP.~";}
    if(n==209){o="~Spark~65~100%~20~Electric~May induce opponent with PARALYSIS status.~";}
    if(n==210){o="~Fury Cutter~10~95%~20~Bug~Move's power becomes stonger if it hits.~";}
    if(n==211){o="~Steel Wing~70~90%~25~Steel~TM47-May raise user's DEFENSE ability up one stage.~";}
    if(n==212){o="~Mean Look~0~100%~5~Normal~Opponent cannot escape as long as user remains in battle.~";}
    if(n==213){o="~Attract~0~100%~15~Normal~TM45-Induces opponent with ATTRACT condition.~";}
    if(n==214){o="~Sleep Talk~0~0%~10~Normal~Is user if includes with SLEEP condition, randomly uses ones of the user's moves.~";}
    if(n==215){o="~Heal Bell~0~0%~5~Normal~Party recovers from all status ailments.~";}
    if(n==216){o="~Return~1~100%~20~Normal~TM27-Power is greater when Pok�mon is happy. Attack power is Tameness*10/25~";}
    if(n==217){o="~Present~1~90%~15~Normal~Causes damage randomly (40,80, or 120 points) or restores defender's HP by 80.~";}
    if(n==218){o="~Frustration~1~100%~20~Normal~TM21-Power is greater when Pok�mon is not happy. Attack power is (255-Tameness)*10/25~";}
    if(n==219){o="~Safeguard~0~0%~25~Normal~TM20-User's status cannot be altered for five turns.~";}
    if(n==220){o="~Pain Split~0~100%~20~Normal~Evenly divides HP so that both user and opponent have half of their combined remaining HP.~";}
    if(n==221){o="~Sacred Fire~100~95%~5~Fire~May induce opponent with BURN status. Can remove FREEZE status from user.~";}
    if(n==222){o="~Magnitude~1~100%~30~Ground~Attack power is randomly 10, 30, 50, 70, 90, 110, or 150, based on the magnitude of the attack (4 through 20 respectively.)~";}
    if(n==223){o="~Dynamicpunch~100~50%~5~Fighting~May induce opponent with CONFUSION condition.~";}
    if(n==224){o="~Megahorn~120~85%~10~Bug~No effect.~";}
    if(n==225){o="~Dragonbreath~60~100%~20~Dragon~May induce opponent with PARALYSIS status.~";}
    if(n==226){o="~Baton Pass~0~0%~40~Normal~User switches Pokemon without losing increased stats and battle-only status conditions, such as Leech Seed.~";}
    if(n==227){o="~Encore~0~100%~5~Normal~The opponent must repeat its last move for another 3-6 turns.~";}
    if(n==228){o="~Pursuit~40~100%~20~Dark~If the opponent switches, double damage is dealt.~";}
    if(n==229){o="~Rapid Spin~20~100%~40~Normal~User becomes free of restrictive moves, such as Wrap and Fire Spin.~";}
    if(n==230){o="~Sweet Scent~0~100%~20~Normal~Lowers opponent's Evasion ability down one stage.~";}
    if(n==231){o="~Iron Tail~100~75%~15~Steel~TM23-May lower opponent's DEFENSE ability down one stage.~";}
    if(n==232){o="~Metal Claw~50~95%~35~Steel~May raise user's ATTACK ability up one stage.~";}
    if(n==233){o="~Vital Throw~70~100%~10~Fighting~Hits opponent without fail. Always goes last.~";}
    if(n==234){o="~Morning Sun~0~0%~5~Normal~Recovers user's HP by 25%. Recovery doubles during the morning. Sunny weather increases healing and rainy weather decrease healing.";}
    if(n==235){o="~Synthesis~0~0%~5~Grass~Recovers user's HP by 25%. Recovery doubles during the daytime. Sunny weather increases healing and rainy weather decrease healing.~";}
    if(n==236){o="~Moonlight~0~0%~5~Normal~Recovers user's HP by 25%. Recovery doubles during the night. Sunny weather increases healing and rainy weather decrease healing.~";}
    if(n==237){o="~Hidden Power~1~100%~15~Normal~TM10-Power and type are dependant of the user's Individual Values.~";}
    if(n==238){o="~Cross Chop~100~80%~5~Fighting~Has a high critical hit rate.~";}
    if(n==239){o="~Twister~40~100%~20~Dragon~May cause opponent to FLINCH. Damage is double while opponent is using Fly.~";}
    if(n==240){o="~Rain Dance~0~0%~5~Water~TM18-Causes 'Big Rain' weather for five turns.~";}
    if(n==241){o="~Sunny Day~0~0%~5~Fire~TM11-Causes 'Clear Skies' weather for five turns.~";}
    if(n==242){o="~Crunch~80~100%~15~Dark~May lower opponent's SPECIAL DEFENSE ability down one stage.~";}
    if(n==243){o="~Mirror Coat~1~100%~20~Psychic~If hit by a special attack, deals back double the damage.~";}
    if(n==244){o="~Psych Up~0~0%~10~Normal~The user's ability stages raise to those of the opponent.~";}
    if(n==245){o="~Extremespeed~80~100%~5~Normal~Always attacks first.~";}
    if(n==246){o="~Ancientpower~60~100%~5~Rock~May raise all of user's abilities up one stage.~";}
    if(n==247){o="~Shadow Ball~80~100%~15~Ghost~May lower opponent's SPECIAL DEFENSE ability down one stage.~";}
    if(n==248){o="~Future Sight~80~90%~15~Psychic~Damage is dealt after two turns pass. There is no type affinity.~";}
    if(n==249){o="~Rock Smash~20~100%~15~Fighting~HM06-May lower opponent's DEFENSE ability down one stage.~";}
    if(n==250){o="~Whirlpool~15~70%~15~Water~Traps opponent for 2-5 turns. Deals 1/16 HP of damage each turn.~";}
    if(n==251){o="~Beat Up~10~100%~10~Dark~Attacks opponent a number of times equal to your number of healthy pokemon.~";}
    if(n==252){o="~Fake Out~40~100%~10~Normal~When used on the first turn, the user attacks first and the opponent will FLINCH.~";}
    if(n==253){o="~Uproar~50~100%~10~Normal~Cannot sleep for 2 to 5 turns.~";}
    if(n==254){o="~Stockpile~0~0%~10~Normal~Stores energy. May be used up to three times.~";}
    if(n==255){o="~Spit Up~100~100%~10~Normal~Deals damage depending on how much energy is stored.~";}
    if(n==256){o="~Swallow~0~0%~10~Normal~Recovers HP depending on how much energy is stored.~";}
    if(n==257){o="~Heat Wave~100~90%~10~Fire~May induce opponent with BURN status.~";}
    if(n==258){o="~Hail~0~0%~10~Ice~TM07-Causes hailstorm weather for five turns.~";}
    if(n==259){o="~Torment~0~100%~15~Dark~TM41-The same move cannot be used twice in a row.~";}
    if(n==260){o="~Flatter~0~100%~15~Dark~Raises opponent's SPECIAL ATTACK ability up two stages, then induces opponent with CONFUSION condition.~";}
    if(n==261){o="~Will-O-Wisp~0~75%~15~Fire~Induces opponent with BURN status.~";}
    if(n==262){o="~Memento~0~100%~10~Dark~User faints and opponent's abilities lower.~";}
    if(n==263){o="~Facade~70~100%~20~Normal~TM42-Attack power is double if user is inflicted with a status change (i.e. POISON, PARALYZE, BURN).~";}
    if(n==264){o="~Focus Punch~150~100%~20~Fighting~TM01-If user is hit before attacking, user will FLINCH.~";}
    if(n==265){o="~Smellingsalt~60~100%~10~Normal~If the opponent is induced with PARALYZE status, attack power is double. Opponent recovers from PARALYZE status.~";}
    if(n==266){o="~Follow Me~0~100%~20~Normal~User takes all hits from opponents' attacks. Best used in 2vs2 battles.~";}
    if(n==267){o="~Nature Power~0~95%~20~Normal~Move used depends on battle location.~";}
    if(n==268){o="~Charge~0~100%~20~Electric~Stores electricity to increase the power of the next electric attack.~";}
    if(n==269){o="~Taunt~0~100%~20~Dark~TM12-For two turns, non-damage-dealing moves by the opponent will fail.~";}
    if(n==270){o="~Helping Hand~0~100%~20~Normal~During a 2vs2 battle, the partner's attacks are 1.5x attack power. Best used in 2vs2 battles.~";}
    if(n==271){o="~Trick~0~100%~10~Psychic~User and opponent exchange held items.~";}
    if(n==272){o="~Role Play~0~100%~10~Psychic~User's characteristic changes to opponent's characteristic.~";}
    if(n==273){o="~Wish~0~100%~10~Normal~Half maximum HP is recovered at the end of the next turn. Still recovers, even if user switches.~";}
    if(n==274){o="~Assist~0~100%~20~Normal~Uses a random move of a Pok�mon on the belt.~";}
    if(n==275){o="~Ingrain~0~100%~20~Grass~HP is recovered every turn. However, the user cannot switch.~";}
    if(n==276){o="~Superpower~120~100%~5~Fighting~Lowers user's ATTACK and DEFENSE abilities each down one stage.~";}
    if(n==277){o="~Magic Coat~0~100%~15~Psychic~(The effect of any SPECIAL move will rebound and return to opponent.)~";}
    if(n==278){o="~Recycle~0~100%~10~Normal~User's disposable held item returns.~";}
    if(n==279){o="~Revenge~60~100%~10~Fighting~If the user is damaged before it attacks, the attack power is double.~";}
    if(n==280){o="~Brick Break~75~100%~15~Fighting~TM31-The effects of Reflect and Light Screen are removed.~";}
    if(n==281){o="~Yawn~0~100%~10~Normal~If the opponent remains in battle, it will be induced with SLEEP on the following turn.~";}
    if(n==282){o="~Knock Off~20~100%~20~Dark~Opponent drops item for remainder of battle.~";}
    if(n==283){o="~Endeavor~1~100%~5~Normal~Damage is equal to opponent's current HP minus user's current HP.~";}
    if(n==284){o="~Eruption~150~100%~5~Fire~Power decreases as user's HP lowers.~";}
    if(n==285){o="~Skill Swap~0~100%~10~Psychic~TM48-User and opponent trade Abilities.~";}
    if(n==286){o="~Imprison~0~100%~10~Psychic~Opponent cannot use any move that user knows.~";}
    if(n==287){o="~Refresh~0~100%~20~Normal~User recovers from BURN, FREEZE, or PARALYSIS status.~";}
    if(n==288){o="~Grudge~0~100%~5~Ghost~If user is fainted by opponent's next move, then that move's PP drops to 0.~";}
    if(n==289){o="~Snatch~0~100%~10~Dark~TM49-If the opponent uses a beneficial move, the user gets the effects of the move instead.~";}
    if(n==290){o="~Secret Power~70~100%~20~Normal~TM43-Effect depends on surroundings. In grass, effect is POISON. In tall grass, effect is SLEEP. On the ocean, ATTACK lowers one stage. Underwater, DEFENSE lowers one stage. In a pond, SPEED lowers one stage. In sand, accuracy lowers one stage. In a cave, effect is FLINCH. On rocks, effect is CONFUSION. Elsewhere, effect is PARALYZE.~";}
    if(n==291){o="~Dive~60~100%~10~Water~HM08-Attacks in two turns. The first turn, user does not take damage.~";}
    if(n==292){o="~Arm Thrust~15~100%~20~Fighting~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==293){o="~Camouflage~0~100%~20~Normal~Type changes based on surroundings. On and under water, changes to Water type. In caves and on rocks, changes to Rock type. Elsewhere, changes to Normal type.~";}
    if(n==294){o="~Tail Glow~0~100%~20~Bug~Raises user's SPECIAL ATTACK ability up two stages.~";}
    if(n==295){o="~Luster Purge~70~100%~5~Psychic~May lower opponent's SPECIAL DEFENSE ability down one stage.~";}
    if(n==296){o="~Mist Ball~70~100%~5~Psychic~May lower opponent's SPECIAL ATTACK ability down one stage.~";}
    if(n==297){o="~Featherdance~0~100%~15~Flying~Lowers opponent's ATTACK ability down two stages.~";}
    if(n==298){o="~Teeter Dance~0~100%~20~Normal~All Pok�mon except user become induced with CONFUSION.~";}
    if(n==299){o="~Blaze Kick~85~90%~10~Fire~May induce opponent with BURN status. Has a high critical hit ratio.~";}
    if(n==300){o="~Mud Sport~0~100%~15~Ground~As long as user remains in battle, Electric type moves deal less damage to user and opponent.~";}
    if(n==301){o="~Ice Ball~30~90%~20~Ice~Attacks for 5 turns.~";}
    if(n==302){o="~Needle Arm~60~100%~15~Grass~May cause opponent to FLINCH.~";}
    if(n==303){o="~Slack Off~0~100%~10~Normal~Restores half of user's maximum HP.~";}
    if(n==304){o="~Hyper Voice~90~100%~10~Normal~No effect.~";}
    if(n==305){o="~Poison Fang~50~100%~15~Poison~May induce opponent with TOXIC status.~";}
    if(n==306){o="~Crush Claw~75~95%~10~Normal~May lower opponent's DEFENSE ability down one stage.~";}
    if(n==307){o="~Blast Burn~150~90%~5~Fire~Attacks in two turns. The second turn, user does not attack.~";}
    if(n==308){o="~Hydro Cannon~150~90%~5~Water~Attacks in two turns. The second turn, user does not attack.~";}
    if(n==309){o="~Meteor Mash~100~85%~10~Steel~May raise user's ATTACK ability up one stage.~";}
    if(n==310){o="~Astonish~30~100%~15~Ghost~May cause opponent to FLINCH.~";}
    if(n==311){o="~Weather Ball~50~100%~10~Normal~Attack power doubles during weather. Type changes based on weather. Becomes Fire type in 'Clear Skies'. Becomes Water type in 'Big Rain'. Becomes Ice type in hailstorm. Becomes Rock type in sandstorm.~";}
    if(n==312){o="~Aromatherapy~0~0%~5~Grass~Party recovers from all status ailments.~";}
    if(n==313){o="~Fake Tears~0~100%~20~Dark~Lowers opponent's SPECIAL DEFENSE ability down two stages.~";}
    if(n==314){o="~Air Cutter~55~95%~25~Flying~Has a high critical hit rate.~";}
    if(n==315){o="~Overheat~140~90%~5~Fire~TM50-Lowers user's SPECIAL ATTACK ability down two stages.~";}
    if(n==316){o="~Odor Sleuth~0~100%~40~Normal~After use, opponent's raised evasion will be ignored.~";}
    if(n==317){o="~Rock Tomb~50~80%~10~Rock~TM39-May lower opponent's SPEED ability down one stage.~";}
    if(n==318){o="~Silver Wind~60~100%~5~Bug~May raise all of user's abilities up one stage.~";}
    if(n==319){o="~Metal Sound~0~85%~40~Steel~Lowers opponent's SPECIAL DEFENSE ability down two stages.~";}
    if(n==320){o="~Grasswhistle~0~55%~15~Grass~May induce opponent with SLEEP status.~";}
    if(n==321){o="~Tickle~0~100%~20~Normal~Lowers opponent's ATTACK and DEFENSE abilities each down one stage.~";}
    if(n==322){o="~Cosmic Power~0~0%~20~Psychic~Raises user's DEFENSE and SPECIAL DEFENSE abilities each up one stage.~";}
    if(n==323){o="~Water Spout~150~100%~5~Water~Power decreases as user's HP lowers.~";}
    if(n==324){o="~Signal Beam~75~100%~15~Bug~May induce opponent with CONFUSION condition.~";}
    if(n==325){o="~Shadow Punch~60~0%~20~Ghost~TM30-If opponent is on screen, hits without fail.~";}
    if(n==326){o="~Extrasensory~80~100%~30~Psychic~May cause opponent to FLINCH.~";}
    if(n==327){o="~Sky Uppercut~85~90%~15~Fighting~Can hit opponent during FLY.~";}
    if(n==328){o="~Sand Tomb~15~70%~15~Ground~Traps opponent for 2-5 turns. Deals 1/16 HP of damage each turn.~";}
    if(n==329){o="~Sheer Cold~1~30%~5~Ice~Knocks out opponent in one hit. Accuracy increases by an amount equal to the difference between user and enemy's experience levels, then divided by 128. Accuracy will be 23.4-100%.~";}
    if(n==330){o="~Muddy Water~95~85%~10~Water~May lower opponent's Hit Ratio ability down one stage.~";}
    if(n==331){o="~Bullet Seed~10~100%~30~Grass~TM09-Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==332){o="~Aerial Ace~60~0%~20~Flying~TM40-If opponent is on screen, hits without fail.~";}
    if(n==333){o="~Icicle Spear~10~100%~30~Ice~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==334){o="~Iron Defense~0~0%~15~Steel~Raises user's DEFENSE ability up two stages.~";}
    if(n==335){o="~Block~0~100%~5~Normal~Opponent cannot escape as long as user remains in battle.~";}
    if(n==336){o="~Howl~0~0%~40~Normal~Raises user's ATTACK ability up one stage.~";}
    if(n==337){o="~Dragon Claw~80~100%~15~Dragon~TM02-No effect.~";}
    if(n==338){o="~Frenzy Plant~150~90%~5~Grass~Attacks in two turns. The second turn, user does not attack.~";}
    if(n==339){o="~Bulk Up~0~0%~20~Fighting~TM08-Raises user's ATTACK and DEFENSE abilities each up one stage.~";}
    if(n==340){o="~Bounce~85~85%~5~Flying~Attacks in two turns. The first turn, user does not take damage.~";}
    if(n==341){o="~Mud Shot~55~95%~15~Ground~May lower opponent's SPEED ability down one stage.~";}
    if(n==342){o="~Poison Tail~50~100%~25~Poison~May induce opponent with POISON status. Has a high critical hit ratio.~";}
    if(n==343){o="~Covet~40~100%~40~Normal~If user is not holding an item, user takes opponent's item.~";}
    if(n==344){o="~Volt Tackle~120~100%~15~Electric~User is dealt recoil damage equal to 1/3 damage dealt to opponent.~";}
    if(n==345){o="~Magical Leaf~60~0%~20~Grass~If opponent is on screen, hits without fail.~";}
    if(n==346){o="~Water Sport~0~100%~15~Water~As long as user remains in battle, Fire type moves deal less damage to user and opponent.~";}
    if(n==347){o="~Calm Mind~0~0%~20~Psychic~TM04-Raises user's SPECIAL ATTACK and SPECIAL DEFENSE abilities each up one stage.~";}
    if(n==348){o="~Leaf Blade~70~100%~15~Grass~Has a high critical hit rate.~";}
    if(n==349){o="~Dragon Dance~0~0%~20~Dragon~Raises user's ATTACK and SPEED abilities each up one stage.~";}
    if(n==350){o="~Rock Blast~25~80%~10~Rock~Attacks 2-5 times. Has a 37.5% chance each of hitting 2 or 3 times and a 12.5% chance each of hitting 4 or 5 times.~";}
    if(n==351){o="~Shock Wave~60~0%~20~Electric~TM34-If opponent is on screen, hits without fail.~";}
    if(n==352){o="~Water Pulse~60~100%~20~Water~TM03-May induce opponent with CONFUSION condition.~";}
    if(n==353){o="~Doom Desire~120~85%~5~Steel~Damage is dealt after two turns pass. There is no type affinity.~";}
    if(n==354){o="~Psycho Boost~140~90%~5~Psychic~Lowers user's SPECIAL ATTACK ability down two stage.~";}
    if(n==356){o="~Shadow Rush~90~100%~99~Shadow~Pokemon Colosseum ONLY [Only Shadow Pokemon can use this move; self-inflicts some damage.]~";}
    t=fFI(f, o,"~",w);
    return t;
}
function MoveDex(n,w){
    return fMoveDex(getDefaultForm(), n, w);
}

function fNMove(f, n){
    var i=0;
    var x=0;
    var y=0;
    var o=" ";
    i=f.Move1.options[f.Move1.selectedIndex].value;
    if(n=="1" || n=="5"){
        o=fMoveDex(f, i,4);
        x=Math.floor((1*o)/5);
        y=(x*f.M1UPP.selectedIndex)+(1*o);
        f.M1PP.value=y;
    }
    o=fMoveDex(f, i,5); f.M1Ty.value=o;
    o=fMoveDex(f, i,2); f.M1Po.value=o;
    o=fMoveDex(f, i,3); f.M1Ac.value=o;
    o=fMoveDex(f, i,6); f.M1De.value=o;
    i=f.Move2.options[f.Move2.selectedIndex].value;
    if(n=="2" || n=="5"){
        o=fMoveDex(f, i,4);
        x=Math.floor((1*o)/5);
        y=(x*f.M2UPP.selectedIndex)+(1*o);
        f.M2PP.value=y;
    }
    o=fMoveDex(f, i,5); f.M2Ty.value=o;
    o=fMoveDex(f, i,2); f.M2Po.value=o;
    o=fMoveDex(f, i,3); f.M2Ac.value=o;
    o=fMoveDex(f, i,6); f.M2De.value=o;
    i=f.Move3.options[f.Move3.selectedIndex].value;
    if(n=="3" || n=="5"){
        o=MoveDex(i,4);
        x=Math.floor((1*o)/5);
        y=(x*f.M3UPP.selectedIndex)+(1*o);
        f.M3PP.value=y;
    }
    o=fMoveDex(f, i,5); f.M3Ty.value=o;
    o=fMoveDex(f, i,2); f.M3Po.value=o;
    o=fMoveDex(f, i,3); f.M3Ac.value=o;
    o=fMoveDex(f, i,6); f.M3De.value=o;
    i=f.Move4.options[f.Move4.selectedIndex].value;
    if(n=="4" || n=="5"){
        o=fMoveDex(f, i,4);
        x=Math.floor((1*o)/5);
        y=(x*f.M4UPP.selectedIndex)+(1*o);
        f.M4PP.value=y;
    }
    o=fMoveDex(f, i,5); f.M4Ty.value=o;
    o=fMoveDex(f, i,2); f.M4Po.value=o;
    o=fMoveDex(f, i,3); f.M4Ac.value=o;
    o=fMoveDex(f, i,6); f.M4De.value=o;
    return i;
}
function NMove(n){
    return fNMove(getDefaultForm(), n);
}

