var participants = 22;

    // Game 1
    var gm1 = "mich";
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
    var gm8Picks = 6;
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
    var gm12Picks = 10;
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
    var gm17 = "";
    var gm17Picks = 20;
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
    var gm18 = "";
    var gm18Picks = 20;
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
    var gm19 = "";
    var gm19Picks = 20;
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
    var gm20 = "";
    var gm20Picks = 20;
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
    var gm21 = "";
    var gm21Picks = 20;
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
    var gm22 = "";
    var gm22Picks = 20;
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
    var gm23 = "";
    var gm23Picks = 20;
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
    var gm24 = "";
    var gm24Picks = 20;
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
    var gm25 = "";
    var gm25Picks = 20;
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
    var gm26 = "";
    var gm26Picks = 20;
    var duke1 = 0;
    var csuf1 = 0;
    if (gm26==="duke") {
        duke1 = participants/gm26Picks;
    }
    else if (gm26==="csuf"){
        csuf1 = participants/(participants-gm26Picks);
    }
    else {
        duke1 = 0;
        csuf1 = 0;
    }

    // Game 27
    var gm27 = "";
    var gm27Picks = 20;
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
    var gm28 = "";
    var gm28Picks = 20;
    var az1 = 0;
    var wrst1 = 0;
    if (gm28==="az") {
        az1 = participants/gm28Picks;
    }
    else if (gm28==="wrst"){
        wrst1 = participants/(participants-gm28Picks);
    }
    else {
        az1 = 0;
        wrst1 = 0;
    }

    // Game 29
    var gm29 = "";
    var gm29Picks = 20;
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
    var gm30 = "";
    var gm30Picks = 20;
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
    var gm31 = "";
    var gm31Picks = 20;
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
    var gm32 = "";
    var gm32Picks = 20;
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

var davidScore = 
                        // West Round 1
    zaga1 + boise1 + nmst1 + ark1 + bama1 + textech1 + michst1 + duke1 +
                        // South Round 1
    az1 + seton1 + hou1 + ill1 + mich1 + tenn1 + ohiost1 + del1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + tex1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + prov1 + iowast1 + wisc1 + usc1 + aub1
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
;

var dennisScore = 
                        // West Round 1
    zaga1 + mem1 + conn1 + ark1 + nd1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + seton1 + hou1 + ill1 + colost1 + tenn1 + loy1 + nova1 + 
                        // East Round 1
    bay1 + unc1 + stmarys1 + ucla1 + vt1 + pur1 + murr1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + iowa1 + prov1 + lsu1 + wisc1 + usc1 + aub1
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
;

var rachelScore = 
                        // West Round 1
    zaga1 + mem1 + nmst1 + ark1 + bama1 + textech1 + david1 + duke1 +
                        // South Round 1
    az1 + tcu1 + uab1 + chat1 + colost1 + tenn1 + ohiost1 + nova1 + 
                        // East Round 1
    bay1 + marq1 + ind1 + ucla1 + tex1 + pur1 + sf1 + uk1 + 
                        // Midwest Round 1
    kan1 + creight1 + rich1 + prov1 + iowast1 + wisc1 + miami1 + jackst1
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