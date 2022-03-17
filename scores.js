var participants = 21;

    // Game 1
    var gm1 = "";
    var gm1Picks = 11;
    var colost1 = 0;
    var mich1 = 0;
    if (gm1="colost") {
        colost1 = participants/gm1Picks;
    }
    else if (gm1="mich"){
        mich1 = participants/(participants-gm1Picks);
    }
    else {
        colost1 = 0;
        mich1 = 0;
    }

    console.log(colost1, mich1);

    // Game 2
    var gm2 = "prov";
    var gm2Picks = 8;
    var prov1 = 0;
    var sdakst1 = 0;
    if (gm2="prov") {
        prov1 = participants/gm2Picks;
    }
    else if (gm2="sdakst"){
        sdakst1 = participants/(participants-gm2Picks);
    }
    else {
        prov1 = 0;
        sdakst1 = 0;
    }

    // Game 3
    var gm3 = "";
    var gm3Picks = 6;
    var boise1 = 0;
    var mem1 = 0;
    if (gm3="boise") {
        boise1 = participants/gm3Picks;
    }
    else if (gm3="mem"){
        mem1 = participants/(participants-gm3Picks);
    }
    else {
        boise1 = 0;
        mem1 = 0;
    }

    // Game 4
    var gm4 = "";
    var gm4Picks = 21;
    var bay1 = 0;
    var norst1 = 0;
    if (gm4="bay") {
        bay1 = participants/gm4Picks;
    }
    // else if (gm4="norst"){
    //     norst1 = participants/(participants-gm4Picks);
    // }
    else {
        bay1 = 0;
        norst1 = 0;
    }

    // Game 5
    var gm5 = "";
    var gm5Picks = 21;
    var tenn1 = 0;
    var longw1 = 0;
    if (gm5="tenn") {
        tenn1 = participants/gm5Picks;
    }
    // else if (gm5="longw"){
    //     longw1 = participants/(participants-gm5Picks);
    // }
    else {
        tenn1 = 0;
        longw1 = 0;
    }

    // Game 6
    var gm6 = "";
    var gm6Picks = 19;
    var iowa1 = 0;
    var rich1 = 0;
    if (gm6="iowa") {
        iowa1 = participants/gm6Picks;
    }
    else if (gm6="rich"){
        rich1 = participants/(participants-gm6Picks);
    }
    else {
        iowa1 = 0;
        rich1 = 0;
    }

    // Game 7
    var gm7 = "";
    var gm7Picks = 20;
    var zaga1 = 0;
    var geost1 = 0;
    if (gm7="zaga") {
        zaga1 = participants/gm7Picks;
    }
    else if (gm7="geost"){
        geost1 = participants/(participants-gm7Picks);
    }
    else {
        zaga1 = 0;
        geost1 = 0;
    }

    // Game 8
    var gm8 = "";
    var gm8Picks = 6;
    var marq1 = 0;
    var unc1 = 0;
    if (gm8="marq") {
        marq1 = participants/gm8Picks;
    }
    else if (gm8="unc"){
        unc1 = participants/(participants-gm8Picks);
    }
    else {
        marq1 = 0;
        unc1 = 0;
    }

    // Game 9
    var gm9 = "";
    var gm9Picks = 16;
    var conn1 = 0;
    var nmst1 = 0;
    if (gm9="conn") {
        conn1 = participants/gm9Picks;
    }
    else if (gm9="nmst"){
        nmst1 = participants/(participants-gm9Picks);
    }
    else {
        conn1 = 0;
        nmst1 = 0;
    }

    // Game 10
    var gm10 = "";
    var gm10Picks = 21;
    var uk1 = 0;
    var stpete1 = 0;
    if (gm10="uk") {
        uk1 = participants/gm10Picks;
    }
    // else if (gm10="stpete"){
    //     stpete1 = participants/(participants-gm10Picks);
    // }
    else {
        uk1 = 0;
        stpete1 = 0;
    }

    // Game 11
    var gm11 = "";
    var gm11Picks = 14;
    var stmarys1 = 0;
    var ind1 = 0;
    if (gm11="stmarys") {
        stmarys1 = participants/gm11Picks;
    }
    else if (gm11="ind"){
        ind1 = participants/(participants-gm11Picks);
    }
    else {
        stmarys1 = 0;
        ind1 = 0;
    }

    // Game 12
    var gm12 = "";
    var gm12Picks = 9;
    var sdsu1 = 0;
    var creight1 = 0;
    if (gm12="sdsu") {
        sdsu1 = participants/gm12Picks;
    }
    else if (gm12="creight"){
        creight1 = participants/(participants-gm12Picks);
    }
    else {
        sdsu1 = 0;
        creight1 = 0;
    }

    // Game 13
    var gm13 = "";
    var gm13Picks = 9;
    var ark1 = 0;
    var verm1 = 0;
    if (gm13="ark") {
        ark1 = participants/gm13Picks;
    }
    else if (gm13="verm"){
        verm1 = participants/(participants-gm13Picks);
    }
    else {
        ark1 = 0;
        verm1 = 0;
    }

    // Game 14
    var gm14 = "";
    var gm14Picks = 10;
    var murr1 = 0;
    var sf1 = 0;
    if (gm14="murr") {
        murr1 = participants/gm14Picks;
    }
    else if (gm14="sf"){
        sf1 = participants/(participants-gm14Picks);
    }
    else {
        murr1 = 0;
        sf1 = 0;
    }

//     // West Round 1

// var zaga1Picks = 19;
// var zaga1 = participants/zaga1Picks;
// var geost1 = participants/(participants-zaga1Picks);

// var boise1Picks = 19;
// var boise1 = participants/boise1Picks;
// var mem1 = participants/(participants-boise1Picks);

// var conn1Picks = 19;
// var conn1 = participants/conn1Picks;
// var nmst1 = participants/(participants-conn1Picks);

// var ark1Picks = 19;
// var ark1 = participants/ark1Picks;
// var verm1 = participants/(participants-ark1Picks);

// var bama1Picks = 19;
// var bama1 = participants/bama1Picks;
// var nd1 = participants/(participants-bama1Picks);

// var textech1Picks = 19;
// var textech1 = participants/textech1Picks;
// var montst1 = participants/(participants-textech1Picks);

// var michst1Picks = 19;
// var michst1 = participants/michst1Picks;
// var david1 = participants/(participants-michst1Picks);

// var duke1Picks = 19;
// var duke1 = participants/duke1Picks;
// var csuf1 = participants/(participants-duke1Picks);

//     // South Round 1

// var az1Picks = 19;
// var az1 = participants/az1Picks;
// var wrst1 = participants/(participants-az1Picks);

// var seton1Picks = 19;
// var seton1 = participants/seton1Picks;
// var tcu1 = participants/(participants-seton1Picks);

// var hou1Picks = 19;
// var hou1 = participants/hou1Picks;
// var uab1 = participants/(participants-hou1Picks);

// var ill1Picks = 19;
// var ill1 = participants/ill1Picks;
// var chat1 = participants/(participants-ill1Picks);

// var tenn1Picks = 19;
// var tenn1 = participants/tenn1Picks;
// var longw1 = participants/(participants-tenn1Picks);

// var ohiost1Picks = 19;
// var ohiost1 = participants/ohiost1Picks;
// var loy1 = participants/(participants-ohiost1Picks);

// var nova1Picks = 19;
// var nova1 = participants/nova1Picks;
// var del1 = participants/(participants-nova1Picks);


//     // East Round 1

// var bay1Picks = 19;
// var bay1 = participants/bay1Picks;
// var norst1 = participants/(participants-bay1Picks);

// var unc1Picks = 19;
// var unc1 = participants/unc1Picks;
// var marq1 = participants/(participants-unc1Picks);

// var stmarys1Picks = 19;
// var stmarys1 = participants/stmarys1Picks;
// var ind1 = participants/(participants-stmarys1Picks);

// var ucla1Picks = 19;
// var ucla1 = participants/ucla1Picks;
// var akron1 = participants/(participants-ucla1Picks);

// var tex1Picks = 19;
// var tex1 = participants/tex1Picks;
// var vt1 = participants/(participants-tex1Picks);

// var pur1Picks = 19;
// var pur1 = participants/pur1Picks;
// var yale1 = participants/(participants-pur1Picks);

// var murr1Picks = 19;
// var murr1 = participants/murr1Picks;
// var sf1 = participants/(participants-murr1Picks);

// var uk1Picks = 19;
// var uk1 = participants/uk1Picks;
// var stpete1 = participants/(participants-uk1Picks);

//    // Midwest Round 1

// var kan1Picks = 19;
// var kan1 = participants/kan1Picks;
// var txso1 = participants/(participants-kan1Picks);

// var sdsu1Picks = 19;
// var sdsu1 = participants/sdsu1Picks;
// var creight1 = participants/(participants-sdsu1Picks);

// var iowa1Picks = 19;
// var iowa1 = participants/iowa1Picks;
// var rich1 = participants/(participants-iowa1Picks);

// var prov1Picks = 19;
// var prov1 = participants/prov1Picks;
// var sdakst1 = participants/(participants-prov1Picks);

// var lsu1Picks = 19;
// var lsu1 = participants/lsu1Picks;
// var iowast1 = participants/(participants-lsu1Picks);

// var wisc1Picks = 19;
// var wisc1 = participants/wisc1Picks;
// var col1 = participants/(participants-wisc1Picks);

// var usc1Picks = 19;
// var usc1 = participants/usc1Picks;
// var miami1 = participants/(participants-usc1Picks);

// var aub1Picks = 19;
// var aub1 = participants/aub1Picks;
// var jackst1 = participants/(participants-aub1Picks);

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

// var katieScore = 
//                         // West Round 1
//     zaga1 + boise1 + nmst1 + ark1 + bama1 + textech1 + michst1 + duke1 +
//                         // South Round 1
//     az1 + seton1 + hou1 + ill1 + mich1 + tenn1 + ohiost1 + del1 + 
//                         // East Round 1
//     bay1 + unc1 + stmarys1 + ucla1 + tex1 + pur1 + sf1 + uk1 + 
//                         // Midwest Round 1
//     kan1 + creight1 + iowa1 + prov1 + iowast1 + wisc1 + usc1 + aub1
// ;

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