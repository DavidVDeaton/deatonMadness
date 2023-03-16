var participants = 22;

    // Game 1
    var game1 = "";
    var gm1Picks = 9;
    var colost1 = 0;
    var mich1 = 0;
    if (gm1==="colost") {
        colost1 = participants/gm1Picks;
    }
    else if (gm1==="mich"){
        mich1 = participants/(participants-gm1Picks);
    }
    else {
        colost1 = 0;
        mich1 = 0;
    }

    console.log(mich1);

    // Game 2
    var gm2 = "prov";
    var gm2Picks = 12;
    var prov1 = 0;
    var sdakst1 = 0;
    if (gm2==="prov") {
        prov1 = participants/gm2Picks;
    }
    else if (gm2==="sdakst"){
        sdakst1 = participants/(participants-gm2Picks);
    }
    else {
        prov1 = 0;
        sdakst1 = 0;
    }

    console.log(prov1);

    // Game 3
    var gm3 = "mem";
    var gm3Picks = 6;
    var boise1 = 0;
    var mem1 = 0;
    if (gm3==="boise") {
        boise1 = participants/gm3Picks;
    }
    else if (gm3==="mem"){
        mem1 = participants/(participants-gm3Picks);
    }
    else {
        boise1 = 0;
        mem1 = 0;
    }

    console.log(mem1);

    // Game 4
    var gm4 = "bay";
    var gm4Picks = 22;
    var bay1 = 0;
    var norst1 = 0;
    if (gm4==="bay") {
        bay1 = participants/gm4Picks;
    }
    // else if (gm4==="norst"){
    //     norst1 = participants/(participants-gm4Picks);
    // }
    else {
        bay1 = 0;
        norst1 = 0;
    }

    console.log(bay1);

    // Game 5
    var gm5 = "tenn";
    var gm5Picks = 22;
    var tenn1 = 0;
    var longw1 = 0;
    if (gm5==="tenn") {
        tenn1 = participants/gm5Picks;
    }
    // else if (gm5="longw"){
    //     longw1 === participants/(participants-gm5Picks);
    // }
    else {
        tenn1 = 0;
        longw1 = 0;
    }

    console.log(tenn1);

    // Game 6
    var gm6 = "rich";
    var gm6Picks = 20;
    var iowa1 = 0;
    var rich1 = 0;
    if (gm6==="iowa") {
        iowa1 = participants/gm6Picks;
    }
    else if (gm6==="rich"){
        rich1 = participants/(participants-gm6Picks);
    }
    else {
        iowa1 = 0;
        rich1 = 0;
    }

    console.log(rich1);

    // Game 7
    var gm7 = "zaga";
    var gm7Picks = 22;
    var zaga1 = 0;
    var geost1 = 0;
    if (gm7==="zaga") {
        zaga1 = participants/gm7Picks;
    }
    else if (gm7==="geost"){
        geost1 = participants/(participants-gm7Picks);
    }
    else {
        zaga1 = 0;
        geost1 = 0;
    }

    console.log(zaga1);

    // Game 8
    var gm8 = "unc";
    var gm8Picks = 7;
    var marq1 = 0;
    var unc1 = 0;
    if (gm8==="marq") {
        marq1 = participants/gm8Picks;
    }
    else if (gm8==="unc"){
        unc1 = participants/(participants-gm8Picks);
    }
    else {
        marq1 = 0;
        unc1 = 0;
    }

    console.log(unc1);

    // Game 9
    var gm9 = "nmst";
    var gm9Picks = 18;
    var conn1 = 0;
    var nmst1 = 0;
    if (gm9==="conn") {
        conn1 = participants/gm9Picks;
    }
    else if (gm9==="nmst"){
        nmst1 = participants/(participants-gm9Picks);
    }
    else {
        conn1 = 0;
        nmst1 = 0;
    }

    // Game 10
    var gm10 = "stpete";
    var gm10Picks = 22;
    var uk1 = 0;
    var stpete1 = 0;
    if (gm10==="uk") {
        uk1 = participants/gm10Picks;
    }
    // else if (gm10==="stpete"){
    //     stpete1 = participants/(participants-gm10Picks);
    // }
    else {
        uk1 = 0;
        stpete1 = 0;
    }

    // Game 11
    var gm11 = "stmarys";
    var gm11Picks = 15;
    var stmarys1 = 0;
    var ind1 = 0;
    if (gm11==="stmarys") {
        stmarys1 = participants/gm11Picks;
    }
    else if (gm11==="ind"){
        ind1 = participants/(participants-gm11Picks);
    }
    else {
        stmarys1 = 0;
        ind1 = 0;
    }

    // Game 12
    var gm12 = "creight";
    var gm12Picks = 9;
    var sdsu1 = 0;
    var creight1 = 0;
    if (gm12==="sdsu") {
        sdsu1 = participants/gm12Picks;
    }
    else if (gm12==="creight"){
        creight1 = participants/(participants-gm12Picks);
    }
    else {
        sdsu1 = 0;
        creight1 = 0;
    }

    // Game 13
    var gm13 = "ark";
    var gm13Picks = 17;
    var ark1 = 0;
    var verm1 = 0;
    if (gm13==="ark") {
        ark1 = participants/gm13Picks;
    }
    else if (gm13==="verm"){
        verm1 = participants/(participants-gm13Picks);
    }
    else {
        ark1 = 0;
        verm1 = 0;
    }

    // Game 14
    var gm14 = "murr";
    var gm14Picks = 10;
    var murr1 = 0;
    var sf1 = 0;
    if (gm14==="murr") {
        murr1 = participants/gm14Picks;
    }
    else if (gm14==="sf"){
        sf1 = participants/(participants-gm14Picks);
    }
    else {
        murr1 = 0;
        sf1 = 0;
    }

    // Game 15
    var gm15 = "ucla";
    var gm15Picks = 22;
    var ucla1 = 0;
    var akron1 = 0;
    if (gm15==="ucla") {
        ucla1 = participants/gm15Picks;
    }
    // else if (gm15==="akron"){
    //     akron1 = participants/(participants-gm15Picks);
    // }
    else {
        ucla1 = 0;
        akron1 = 0;
    }

    // Game 16
    var gm16 = "kan";
    var gm16Picks = 21;
    var kan1 = 0;
    var txso1 = 0;
    if (gm16==="kan") {
        kan1 = participants/gm16Picks;
    }
    else if (gm16==="txso"){
        txso1 = participants/(participants-gm16Picks);
    }
    else {
        kan1 = 0;
        txso1 = 0;
    }

    // Game 17
    var gm17 = "ohiost";
    var gm17Picks = 13;
    var ohiost1 = 0;
    var loy1 = 0;
    if (gm17==="ohiost") {
        ohiost1 = participants/gm17Picks;
    }
    else if (gm17==="loy"){
        loy1 = participants/(participants-gm17Picks);
    }
    else {
        ohiost1 = 0;
        loy1 = 0;
    }

    // Game 18
    var gm18 = "aub";
    var gm18Picks = 21;
    var aub1 = 0;
    var jackst1 = 0;
    if (gm18==="aub") {
        aub1 = participants/gm18Picks;
    }
    else if (gm18==="jackst"){
        jackst1 = participants/(participants-gm18Picks);
    }
    else {
        aub1 = 0;
        jackst1 = 0;
    }

    // Game 19
    var gm19 = "textech";
    var gm19Picks = 21;
    var textech1 = 0;
    var montst1 = 0;
    if (gm19==="textech") {
        textech1 = participants/gm19Picks;
    }
    else if (gm19==="montst"){
        montst1 = participants/(participants-gm19Picks);
    }
    else {
        textech1 = 0;
        montst1 = 0;
    }

    // Game 20
    var gm20 = "pur";
    var gm20Picks = 19;
    var pur1 = 0;
    var yale1 = 0;
    if (gm20==="pur") {
        pur1 = participants/gm20Picks;
    }
    else if (gm20==="yale"){
        yale1 = participants/(participants-gm20Picks);
    }
    else {
        pur1 = 0;
        yale1 = 0;
    }

    // Game 21
    var gm21 = "nova";
    var gm21Picks = 21;
    var nova1 = 0;
    var del1 = 0;
    if (gm21==="nova") {
        nova1 = participants/gm21Picks;
    }
    else if (gm21==="del"){
        del1 = participants/(participants-gm21Picks);
    }
    else {
        nova1 = 0;
        del1 = 0;
    }

    // Game 22
    var gm22 = "miami";
    var gm22Picks = 10;
    var usc1 = 0;
    var miami1 = 0;
    if (gm22==="usc") {
        usc1 = participants/gm22Picks;
    }
    else if (gm22==="miami"){
        miami1 = participants/(participants-gm22Picks);
    }
    else {
        usc1 = 0;
        miami1 = 0;
    }

    // Game 23
    var gm23 = "nd";
    var gm23Picks = 13;
    var bama1 = 0;
    var nd1 = 0;
    if (gm23==="bama") {
        bama1 = participants/gm23Picks;
    }
    else if (gm23==="nd"){
        nd1 = participants/(participants-gm23Picks);
    }
    else {
        bama1 = 0;
        nd1 = 0;
    }

    // Game 24
    var gm24 = "tex";
    var gm24Picks = 10;
    var tex1 = 0;
    var vt1 = 0;
    if (gm24==="tex") {
        tex1 = participants/gm24Picks;
    }
    else if (gm24==="vt"){
        vt1 = participants/(participants-gm24Picks);
    }
    else {
        tex1 = 0;
        vt1 = 0;
    }
    
    // Game 25
    var gm25 = "ill";
    var gm25Picks = 17;
    var ill1 = 0;
    var chat1 = 0;
    if (gm25==="ill") {
        ill1 = participants/gm25Picks;
    }
    else if (gm25==="chat"){
        chat1 = participants/(participants-gm25Picks);
    }
    else {
        ill1 = 0;
        chat1 = 0;
    }

    // Game 26
    var gm26 = "duke";
    var gm26Picks = 22;
    var duke1 = 0;
    var csuf1 = 0;
    if (gm26==="duke") {
        duke1 = participants/gm26Picks;
    }
    // else if (gm26==="csuf"){
    //     csuf1 = participants/(participants-gm26Picks);
    // }
    else {
        duke1 = 0;
        csuf1 = 0;
    }

    // Game 27
    var gm27 = "iowast";
    var gm27Picks = 9;
    var lsu1 = 0;
    var iowast1 = 0;
    if (gm27==="lsu") {
        lsu1 = participants/gm27Picks;
    }
    else if (gm27==="iowast"){
        iowast1 = participants/(participants-gm27Picks);
    }
    else {
        lsu1 = 0;
        iowast1 = 0;
    }

    // Game 28
    var gm28 = "az";
    var gm28Picks = 22;
    var az1 = 0;
    var wrst1 = 0;
    if (gm28==="az") {
        az1 = participants/gm28Picks;
    }
    // else if (gm28==="wrst"){
    //     wrst1 = participants/(participants-gm28Picks);
    // }
    else {
        az1 = 0;
        wrst1 = 0;
    }

    // Game 29
    var gm29 = "hou";
    var gm29Picks = 17;
    var hou1 = 0;
    var uab1 = 0;
    if (gm29==="hou") {
        hou1 = participants/gm29Picks;
    }
    else if (gm29==="uab"){
        uab1 = participants/(participants-gm29Picks);
    }
    else {
        hou1 = 0;
        uab1 = 0;
    }

    // Game 30
    var gm30 = "michst";
    var gm30Picks = 7;
    var michst1 = 0;
    var david1 = 0;
    if (gm30==="michst") {
        michst1 = participants/gm30Picks;
    }
    else if (gm30==="david"){
        david1 = participants/(participants-gm30Picks);
    }
    else {
        michst1 = 0;
        david1 = 0;
    }

    // Game 31
    var gm31 = "wisc";
    var gm31Picks = 21;
    var wisc1 = 0;
    var col1 = 0;
    if (gm31==="wisc") {
        wisc1 = participants/gm31Picks;
    }
    else if (gm31==="col"){
        col1 = participants/(participants-gm31Picks);
    }
    else {
        wisc1 = 0;
        col1 = 0;
    }

    // Game 32
    var gm32 = "tcu";
    var gm32Picks = 7;
    var seton1 = 0;
    var tcu1 = 0;
    if (gm32==="seton") {
        seton1 = participants/gm32Picks;
    }
    else if (gm32==="tcu"){
        tcu1 = participants/(participants-gm32Picks);
    }
    else {
        seton1 = 0;
        tcu1 = 0;
    }

    // Game 33
    var gm33 = "unc";
    var uncPicks = 2;
    var bayPicks = 18;
    var unc2 = 0;
    var bay2 = 0;
    if (gm33==="unc") {
        unc2 = participants/uncPicks;
    }
    else if (gm33==="bay"){
        bay2 = participants/bayPicks;
    }
    else {
        unc2 = 0;
        bay2 = 0;
    }

    // Game 34
    var gm34 = "kan";
    var kanPicks = 20;
    var kan2 = 0;
    if (gm34==="kan") {
        kan2 = participants/kanPicks;
    }
    else {
        kan2 = 0;
    }

    // Game 35
    var gm35 = "mich";
    var michPicks = 3;
    var tennPicks = 18;
    var mich2 = 0;
    var tenn2 = 0;
    if (gm35==="mich") {
        mich2 = participants/michPicks;
    }
    else if (gm35==="tenn"){
        tenn2 = participants/tennPicks;
    }
    else {
        mich2 = 0;
        tenn2 = 0;
    }

    // Game 36
    var gm36 = "prov";
    var richPicks = 1;
    var provPicks = 2;
    var rich2 = 0;
    var prov2 = 0;
    if (gm36==="rich") {
        rich2 = participants/richPicks;
    }
    else if (gm36==="prov"){
        prov2 = participants/provPicks;
    }
    else {
        rich2 = 0;
        prov2 = 0;
    }

    // Game 37
    var gm37 = "ucla";
    var stmarysPicks = 5;
    var uclaPicks = 16;
    var stmarys2 = 0;
    var ucla2 = 0;
    if (gm37==="stmarys") {
        stmarys2 = participants/stmarysPicks;
    }
    else if (gm37==="ucla"){
        ucla2 = participants/uclaPicks;
    }
    else {
        stmarys2 = 0;
        ucla2 = 0;
    }

    // Game 38
    var gm38 = "zaga";
    var memPicks = 1;
    var zagaPicks = 21;
    var mem2 = 0;
    var zaga2 = 0;
    if (gm38==="mem") {
        mem2 = participants/memPicks;
    }
    else if (gm38==="zaga"){
        zaga2 = participants/zagaPicks;
    }
    else {
        mem2 = 0;
        zaga2 = 0;
    }

    // Game 39
    var gm39 = "ark";
    var nmstPicks = 2;
    var arkPicks = 8;
    var nmst2 = 0;
    var ark2 = 0;
    if (gm39==="nmst") {
        nmst2 = participants/nmstPicks;
    }
    else if (gm39==="ark"){
        ark2 = participants/arkPicks;
    }
    else {
        nmst2 = 0;
        ark2 = 0;
    }

    // Game 40
    var gm40 = "";
    var murrPicks = 1;
    var murr2 = 0;
    if (gm40==="murr") {
        murr2 = participants/murrPicks;
    }
    else {
        murr2 = 0;
    }

    // Game 41
    var gm41 = "hou";
    var houPicks = 11;
    var illPicks = 8;
    var hou2 = 0;
    var ill2 = 0;
    if (gm41==="hou") {
        hou2 = participants/houPicks;
    }
    else if (gm41==="ill"){
        ill2 = participants/illPicks;
    }
    else {
        hou2 = 0;
        ill2 = 0;
    }

    // Game 42
    var gm42 = "nova";
    var ohiostPicks = 5;
    var novaPicks = 15;
    var ohiost2 = 0;
    var nova2 = 0;
    if (gm42==="ohiost") {
        ohiost2 = participants/ohiostPicks;
    }
    else if (gm42==="nova"){
        nova2 = participants/novaPicks;
    }
    else {
        ohiost2 = 0;
        nova2 = 0;
    }

    // Game 43
    var gm43 = "duke";
    var michstPicks = 2;
    var dukePicks = 18;
    var michst2 = 0;
    var duke2 = 0;
    if (gm43==="michst") {
        michst2 = participants/michstPicks;
    }
    else if (gm43==="duke"){
        duke2 = participants/dukePicks;
    }
    else {
        michst2 = 0;
        duke2 = 0;
    }

    // Game 44
    var gm44 = "iowast";
    var iowastPicks = 4;
    var wiscPicks = 11;
    var iowast2 = 0;
    var wisc2 = 0;
    if (gm44==="iowast") {
        iowast2 = participants/iowastPicks;
    }
    else if (gm44==="wisc"){
        wisc2 = participants/wiscPicks;
    }
    else {
        iowast2 = 0;
        wisc2 = 0;
    }

    // Game 45
    var gm45 = "textech";
    var ndPicks = 11;
    var textechPicks = 8;
    var nd2 = 0;
    var textech2 = 0;
    if (gm45==="nd") {
        nd2 = participants/ndPicks;
    }
    else if (gm45==="textech"){
        textech2 = participants/textechPicks;
    }
    else {
        nd2 = 0;
        textech2 = 0;
    }

    // Game 46
    var gm46 = "miami";
    var miamiPicks = 2;
    var aubPicks = 17;
    var miami2 = 0;
    var aub2 = 0;
    if (gm46==="miami") {
        miami2 = participants/miamiPicks;
    }
    else if (gm46==="aub"){
        aub2 = participants/aubPicks;
    }
    else {
        miami2 = 0;
        aub2 = 0;
    }

    // Game 47
    var gm47 = "pur";
    var texPicks = 6;
    var purPicks = 10;
    var tex2 = 0;
    var pur2 = 0;
    if (gm47==="tex") {
        tex2 = participants/texPicks;
    }
    else if (gm47==="pur"){
        pur2 = participants/purPicks;
    }
    else {
        tex2 = 0;
        pur2 = 0;
    }

    // Game 48
    var gm48 = "az";
    var tcuPicks = 3;
    var azPicks = 19;
    var tcu2 = 0;
    var az2 = 0;
    if (gm48==="tcu") {
        tcu2 = participants/tcuPicks;
    }
    else if (gm48==="az"){
        az2 = participants/azPicks;
    }
    else {
        tcu2 = 0;
        az2 = 0;
    }

    // Game 49
    var gm49 = "ark";
    var gm49undPicks = 1;
    var gm49favPicks = 19;
    var ark3 = 0;
    var zaga3 = 0;
    if (gm49==="ark") {
        ark3 = (2*participants)/gm49undPicks;
    }
    else if (gm49==="zaga"){
        zaga3 = (2*participants)/gm49favPicks;
    }
    else {
        ark3 = 0;
        zaga3 = 0;
    }

    // Game 50
    var gm50 = "nova";
    var gm50undPicks = 1;
    var gm50favPicks = 9;
    var mich3 = 0;
    var nova3 = 0;
    if (gm50==="mich") {
        mich3 = (2*participants)/gm50undPicks;
    }
    else if (gm50==="nova"){
        nova3 = (2*participants)/gm50favPicks;
    }
    else {
        mich3 = 0;
        nova3 = 0;
    }

    // Game 51
    var gm51 = "duke";
    var gm51undPicks = 7;
    var gm51favPicks = 10;
    var textech3 = 0;
    var duke3 = 0;
    if (gm51==="textech") {
        textech3 = (2*participants)/gm51undPicks;
    }
    else if (gm51==="duke"){
        duke3 = (2*participants)/gm51favPicks;
    }
    else {
        textech3 = 0;
        duke3 = 0;
    }

    // Game 52
    var gm52 = "hou";
    var gm52undPicks = 1;
    var gm52favPicks = 18;
    var hou3 = 0;
    var az3 = 0;
    if (gm52==="hou") {
        hou3 = (2*participants)/gm52undPicks;
    }
    else if (gm52==="az"){
        az3 = (2*participants)/gm52favPicks;
    }
    else {
        hou3 = 0;
        az3 = 0;
    }

    // Game 53
    var gm53 = "";
    var gm53favPicks = 4;
    var pur3 = 0;
    if (gm53==="pur") {
        pur3 = (2*participants)/gm53favPicks;
    }
    else {
        pur3 = 0;
    }

    // Game 54
    var gm54 = "kan";
    var gm54favPicks = 19;
    var kan3 = 0;
    if (gm54==="kan") {
        kan3 = (2*participants)/gm54favPicks;
    }
    else {
        kan3 = 0;
    }

    // Game 55
    var gm55 = "";
    var gm55favPicks = 8;
    var ucla3 = 0;
    if (gm55==="ucla") {
        ucla3 = (2*participants)/gm55favPicks;
    }
    else {
        ucla3 = 0;
    }

    // Game 56
    var gm56 = "";
    var gm56favPicks = 1;
    var iowast3 = 0;
    if (gm56==="iowast") {
        iowast3 = (2*participants)/gm56favPicks;
    }
    else {
        iowast3 = 0;
    }

    // Game 57
    var gm57 = "duke";
    var gm57favPicks = 2;
    var duke4 = 0;
    if (gm57==="duke") {
        duke4 = (2*participants)/gm57favPicks;
    }
    else {
        duke4 = 0;
    }

    // Game 58
    var gm58 = "nova";
    var gm58favPicks = 1;
    var nova4 = 0;
    if (gm58==="nova") {
        nova4 = (2*participants)/gm58favPicks;
    }
    else {
        nova4 = 0;
    }

    // Game 59
    var gm59 = "kan";
    var gm59favPicks = 10;
    var kan4 = 0;
    if (gm59==="kan") {
        kan4 = (2*participants)/gm59favPicks;
    }
    else {
        kan4 = 0;
    }

    // Game 61
    var gm61 = "";
    var gm61favPicks = 2;
    var duke5 = 0;
    if (gm61==="duke") {
        duke5 = (3*participants)/gm61favPicks;
    }
    else {
        duke5 = 0;
    }

    // Game 62
    var gm62 = "kan";
    var gm62favPicks = 3;
    var kan5 = 0;
    if (gm62==="kan") {
        kan5 = (3*participants)/gm62favPicks;
    }
    else {
        kan5 = 0;
    }

    // Game 63
    var gm63 = "kan";
    var gm63favPicks = 1;
    var kan6 = 0;
    if (gm63==="kan") {
        kan6 = (3*participants)/gm63favPicks;
    }
    else {
        kan6 = 0;
    }

var davidScore = 
                        // West Round 1
    zaga1 + boise1 + nmst1 + ark1 + bama1 + textech1 + michst1 + duke1 +
                        // South Round 1
    az1 + seton1 + hou1 + ill1 + mich1 + tenn1 + ohiost1 + del1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + tex1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + prov1 + iowast1 + wisc1 + usc1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + ucla2 + zaga2 + nmst2 + hou2 + ohiost2 + michst2 + iowast2 + textech2 + aub2 + tex2 + az2 +
    //                     // Sweet 16
    // zaga3 + az3 + kan3
;

var daveScore =  
                        // West Round 1
    zaga1 + boise1 + conn1 + ark1 + bama1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + ill1 + colost1 + tenn1 + loy1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + tex1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + sdakst1 + lsu1 + wisc1 + miami1 + aub1
    //                     // Round 2
    // + bay2 + kan2 + tenn2 + stmarys2 + zaga2 + ark2 + hou2 + nova2 + duke2 + wisc2 + textech2 + miami2 + pur2 + az2 +
    //                     // Sweet 16
    // zaga3 + az3 + nova3 + duke3 + pur3 + kan3 +
    //                     // Elite 8
    // kan4
;

var aprilScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + ark1 + bama1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + uab1 + ill1 + mich1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + vt1 + pur1 + murr1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + sdakst1 + iowast1 + wisc1 + miami1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + stmarys2 + zaga2 + murr2 + ill2 + nova2 + duke2 + wisc2 + textech2 + aub2 + tcu2 +
    //                     // Sweet 16
    // textech3 + kan3
;

var hyrumScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + ark1 + bama1 + textech1 + michst1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + ill1 + mich1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + tex1 + pur1 + murr1 + uk1 + 
                        // Midwest Round 1
    kan1 + sdsu1 + iowa1 + prov1 + lsu1 + wisc1 + usc1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + ucla2 + zaga2 + ark2 + ill2 + nova2 + duke2 + textech2 + aub2 + tex2 + az2 +
    //                     // Sweet 16
    // zaga3 + textech3 + nova3 + ucla3 +
    //                     // Elite 8
    // nova4
;

var mattScore =  
                        // West Round 1
    zaga1 + boise1 + conn1 + verm1 + bama1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + seton1 + uab1 + ill1 + colost1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + vt1 + pur1 + murr1 + uk1 + 
                        // Midwest Round 1
    kan1 + sdsu1 + iowa1 + prov1 + iowast1 + wisc1 + miami1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + stmarys2 + zaga2 + ill2 + nova2 + duke2 + wisc2 + aub2 + az2 + 
    //                     // Sweet 16
    // zaga3 + az3 + duke3 + kan3 +
    //                     // Elite 8
    // kan4
;

var timScore =  
                        // West Round 1
    zaga1 + mem1 + conn1 + ark1 + nd1 + textech1 + michst1 + duke1 +
                        // South Round 1
    az1 + seton1 + hou1 + ill1 + mich1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + tex1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + sdakst1 + iowast1 + wisc1 + usc1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + ucla2 + zaga2 + hou2 + nova2 + duke2 + wisc2 + textech2 + aub2 + pur2 + az2 +
    //                     // Sweet 16
    // zaga3 + az3 + nova3 + duke3 + kan3 +
    //                     // Elite 8
    // kan4
;

var katieScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + ark1 + bama1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + ill1 + colost1 + tenn1 + loy1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + tex1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + sdsu1 + iowa1 + prov1 + lsu1 + wisc1 + miami1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + prov2 + stmarys2 + zaga2 + ark2 + hou2 + nova2 + duke2 + wisc2 + textech2 + aub2 + pur2 + az2 + 
    //                     // Sweet 16
    // ark3 + az3 + textech3 + pur3 + kan3
;

var noahScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + ark1 + nd1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + ill1 + mich1 + tenn1 + loy1 + nova1 + 
                        // East Round 1
    bay1 + marq1 + stmarys1 + ucla1 + vt1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + prov1 + iowast1 + wisc1 + miami1 + aub1
    //                     // Round 2
    // + bay2 + kan2 + tenn2 + ucla2 + zaga2 + ill2 + nova2 + duke2 + wisc2 + textech2 + aub2 + pur2 + az2 + 
    //                     // Sweet 16
    // zaga3 + az3 + nova3 + duke3 + kan3
;

var miriamScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + ark1 + nd1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + ill1 + mich1 + tenn1 + loy1 + nova1 + 
                        // East Round 1
    bay1 + marq1 + stmarys1 + ucla1 + vt1 + pur1 + murr1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + prov1 + iowast1 + wisc1 + usc1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + ucla2 + zaga2 + hou2 + nova2 + duke2 + wisc2 + textech2 + aub2 + pur2 + az2 +
    //                     // Sweet 16
    // zaga3 + az3 + nova3 + duke3 + kan3 +
    //                     // Elite 8
    // duke4 + kan4
    //                     // Final 4
    // + duke5 + kan5
;

var susanScore = 
                        // West Round 1
    zaga1 + boise1 + conn1 + ark1 + nd1 + textech1 + michst1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + chat1 + colost1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + marq1 + stmarys1 + ucla1 + vt1 + pur1 + murr1 + uk1 + 
                        // Midwest Round 1
    kan1 + sdsu1 + iowa1 + prov1 + lsu1 + wisc1 + usc1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + ucla2 + zaga2 + ark2 + hou2 + nova2 + duke2 + textech2 + pur2 + az2 +
    //                     // Sweet 16
    // zaga3 + az3 + nova3 + duke3 + pur3 + kan3 +
    //                     // Elite 8
    // kan4
;

var sheaScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + ark1 + bama1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + ill1 + colost1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + marq1 + stmarys1 + ucla1 + tex1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + prov1 + iowast1 + wisc1 + miami1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + stmarys2 + zaga2 + hou2 + nova2 + duke2 + wisc2 + aub2 + pur2 + az2 +
    //                     // Sweet 16
    // zaga3 + az3 + duke3 + pur3 + kan3
;

var leviScore = 
                        // West Round 1
    zaga1 + mem1 + nmst1 + ark1 + nd1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + chat1 + colost1 + tenn1 + loy1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + ind1 + ucla1 + vt1 + pur1 + murr1 + uk1 + 
                        // Midwest Round 1
    kan1 + sdsu1 + iowa1 + prov1 + iowast1 + wisc1 + usc1 + aub1
                        // Round 2
    // + unc2 + tenn2 + ucla2 + zaga2 + ark2 + duke2 + wisc2 + nd2 + aub2 + pur2 + az2 +
    //                     // Sweet 16
    // zaga3 + az3 + ucla3
;

var calebScore =  
                        // West Round 1
    zaga1 + mem1 + nmst1 + ark1 + nd1 + montst1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + uab1 + chat1 + mich1 + tenn1 + loy1 + nova1 + 
                        // East Round 1
    bay1 + marq1 + ind1 + ucla1 + vt1 + yale1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + sdsu1 + iowa1 + sdakst1 + iowast1 + col1 + miami1 + aub1
                        // Round 2
    // + kan2 + tenn2 + zaga2 + ark2 + nd2 + aub2 + az2 +
    //                     // Sweet 16
    // zaga3 + az3 + kan3
;

var ethanScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + verm1 + bama1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + seton1 + hou1 + chat1 + mich1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + ind1 + ucla1 + vt1 + yale1 + murr1 + uk1 + 
                        // Midwest Round 1
    kan1 + sdsu1 + iowa1 + sdakst1 + lsu1 + wisc1 + miami1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + ucla2 + zaga2 + hou2 + ohiost2 + duke2 + textech2 + aub2 + az2 +
    //                     // Sweet 16
    // zaga3 + az3 + textech3 + kan3 + ucla3
;

var rachelScore = 
                        // West Round 1
    zaga1 + mem1 + nmst1 + ark1 + textech1 + duke1 +
                        // South Round 1
    az1 + tcu1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + ucla1 + tex1 + pur1 +
                        // Midwest Round 1
    kan1 + creight1 + rich1 + prov1 + iowast1 + wisc1 + miami1
                        // Round 2
    // + kan2 + prov2 + ucla2 + zaga2 + nova2 + duke2 + iowast2 + miami2 + az2 +
    //                     // Sweet 16
    // nova3 + duke3 + kan3 +
    //                     // Elite 8
    // duke4 + kan4
    //                     // Final 4
;

var dennisScore = 
                        // West Round 1
    zaga1 + mem1 + ark1 + nd1 + textech1 + duke1 +
                        // South Round 1
    az1 + hou1 + ill1 + tenn1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + pur1 + murr1 +
                        // Midwest Round 1
    kan1 + creight1 + prov1 + wisc1 + aub1
                        // Round 2
    // + kan2 + ucla2 + zaga2 + nova2 + duke2 + textech2 + az2 +
    //                     // Sweet 16
    // duke3 + kan3 +
    //                     // Elite 8
    // kan4
    //                     // Final 4
    // + kan5
    //                     // Championship Game
    // + kan6
;

var paigeScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + ark1 + bama1 + textech1 + michst1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + ill1 + mich1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + tex1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + sdsu1 + iowa1 + sdakst1 + lsu1 + wisc1 + miami1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + ucla2 + zaga2 + ark2 + ill2 + ohiost2 + duke2 + aub2 + tex2 + tcu2 + 
    //                     // Sweet 16
    // zaga3 + kan3
;

var reedScore = 
                        // West Round 1
    geost1 + mem1 + conn1 + ark1 + bama1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + ill1 + colost1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + marq1 + ind1 + ucla1 + vt1 + pur1 + murr1 + uk1 + 
                        // Midwest Round 1
    txso1 + creight1 + iowa1 + sdakst1 + iowast1 + wisc1 + usc1 + aub1
                        // Round 2
    // + bay2 + tenn2 + ucla2 + mem2 + hou2 + ohiost2 + iowast2 + pur2 + tcu2 +
    //                     // Sweet 16
    // hou3 + ucla3 
;

var christineScore = 
                        // West Round 1
    zaga1 + boise1 + conn1 + verm1 + nd1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + ill1 + mich1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + ind1 + ucla1 + tex1 + yale1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + rich1 + prov1 + lsu1 + wisc1 + usc1 + aub1
                        // Round 2
    // + unc2 + kan2 + mich2 + rich2 + ucla2 + zaga2 + ill2 + nova2 + duke2 + nd2 + tex2 + az2 +
    //                     // Sweet 16
    // zaga3 + az3 + nova3 + duke3 + kan3 + ucla3 
;

var lukeScore = 
                        // West Round 1
    zaga1 + boise1 + conn1 + verm1 + bama1 + textech1 + michst1 + duke1 +
                        // South Round 1
    az1 + seton1 + uab1 + ill1 + mich1 + tenn1 + loy1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + vt1 + pur1 + murr1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + sdakst1 + iowast1 + wisc1 + miami1 + aub1
                        // Round 2
    // + bay2 + kan2 + mich2 + ucla2 + zaga2 + ill2 + nova2 + duke2 + wisc2 + textech2 + aub2 + pur2 + az2
    //                     // Sweet 16
    // zaga3 + az3 + nova3 + textech3 + kan3 + ucla3 +
    //                     // Elite 8
    // kan4
;

var nickScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + ark1 + nd1 + textech1 + michst1 + duke1 +
                        // South Round 1
    az1 + seton1 + hou1 + ill1 + mich1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + tex1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + sdsu1 + iowa1 + sdakst1 + lsu1 + wisc1 + miami1 + aub1
                        // Round 2
    // + bay2 + kan2 + tenn2 + ucla2 + zaga2 + ark2 + hou2 + ohiost2 + michst2 + textech2 + aub2 + tex2 + az2
    //                     // Sweet 16
    // + zaga3 + az3 + textech3 + kan3 +
    //                     // Elite 8
    // kan4
;

var sabrinaScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + verm1 + bama1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + hou1 + ill1 + mich1 + tenn1 + loy1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + ind1 + ucla1 + vt1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + sdakst1 + iowast1 + wisc1 + usc1 + aub1
                        // Round 2
    // + bay2 + kan2 + mich2 + ucla2 + zaga2 + hou2 + nova2 + duke2 + iowast2 + textech2 + aub2 + az2
    //                     // Sweet 16
    // + zaga3 + az3 + mich3 + textech3 + kan3 + ucla3 +
    //                     // Elite 8
    // kan4
    //                     // Final 4
    // + kan5
;

var nsabrina = sabrinaScore.toFixed(2);
var nnick = nickScore.toFixed(2);
var nluke = lukeScore.toFixed(2);
var ndavid = davidScore.toFixed(2);
var ndennis = dennisScore.toFixed(2);
var nsusan = susanScore.toFixed(2);
var ndave = daveScore.toFixed(2);
var napril  = aprilScore.toFixed(2);
var ncaleb = calebScore.toFixed(2);
var nethan = ethanScore.toFixed(2);
var nlevi = leviScore.toFixed(2);
var nhyrum = hyrumScore.toFixed(2);
var nrachel = rachelScore.toFixed(2);
var npaige = paigeScore.toFixed(2);
var nmatt = mattScore.toFixed(2);
var nkatie = katieScore.toFixed(2);
var nreed = reedScore.toFixed(2);
var nnoah = noahScore.toFixed(2);
var nshea = sheaScore.toFixed(2);
var nchristine = christineScore.toFixed(2);
var ntim = timScore.toFixed(2);
var nmiriam = miriamScore.toFixed(2);

$("#davidScore").text(ndavid);
$("#dennisScore").text(ndennis);
$("#susanScore").text(nsusan);
$("#daveScore").text(ndave);
$("#aprilScore").text(napril);
$("#calebScore").text(ncaleb);
$("#ethanScore").text(nethan);
$("#leviScore").text(nlevi);
$("#hyrumScore").text(nhyrum);
$("#rachelScore").text(nrachel);
$("#paigeScore").text(npaige);
$("#mattScore").text(nmatt);
$("#katieScore").text(nkatie);
$("#reedScore").text(nreed);
$("#noahScore").text(nnoah);
$("#sheaScore").text(nshea);
$("#lukeScore").text(nluke);
$("#nickScore").text(nnick);
$("#sabrinaScore").text(nsabrina);
$("#christineScore").text(nchristine);
$("#timScore").text(ntim);
$("#miriamScore").text(nmiriam);