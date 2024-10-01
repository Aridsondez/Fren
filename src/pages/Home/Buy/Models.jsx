import React from "react";

const Models = (props) =>{

    if (props.make == '-1'){
        return(
            <option>
                All Models
            </option>
        )
    }else if (props.make =='m4'){
        return (
            <>
            <option value="-1">All Models</option>
            <optgroup label="Popular Models">
            <option value="d2137" class="selectOption firstSelectOption">ILX</option>
            <option value="d36" class="selectOption">Integra</option>
            <option value="d16" class="selectOption">MDX</option>
            <option value="d17" class="selectOption">NSX</option>
            <option value="d921" class="selectOption">RDX</option>
            <option value="d2214" class="selectOption">RLX</option>
            <option value="d19" class="selectOption">TL</option>
            <option value="d2278" class="selectOption">TLX</option>
            <option value="d20" class="selectOption">TSX</option>
            <option value="d2065" class="selectOption">ZDX</option>
            </optgroup>
            <optgroup label="Other Models" class="inactiveModelGroup">
            <option value="d191" class="selectOption firstSelectOption">CL</option>
            <option value="d2913" class="selectOption">ILX Hybrid</option>
            <option value="d37" class="selectOption">Legend</option>
            <option value="d2555" class="selectOption">MDX Sport Hybrid</option>
            <option value="d18" class="selectOption">RL</option>
            <option value="d2912" class="selectOption">RLX Sport Hybrid</option>
            <option value="d3" class="selectOption">RSX</option>
            <option value="d192" class="selectOption">SLX</option>
            <option value="d38" class="selectOption">Vigor</option>
            </optgroup>
            </>

        )
    }else if (props.make == 'm124'){
        return(
            <>
            <option value="-1">All Models</option>
            <optgroup label="Popular Models" class="activeModelGroup">
            <option value="d1751" class="selectOption firstSelectOption">Giulia</option>
            <option value="d2512" class="selectOption">Stelvio</option>
            <option value="d3226" class="selectOption">Tonale</option>
            </optgroup>
            <optgroup label="Other Models" class="inactiveModelGroup">
            <option value="d1419" class="selectOption firstSelectOption">164</option>
            <option value="d2999" class="selectOption">1900</option>
            <option value="d1864" class="selectOption">2000</option>
            <option value="d1813" class="selectOption">2600</option>
            <option value="d2277" class="selectOption">4C</option>
            <option value="d1267" class="selectOption">8C Competizione</option>
            <option value="d1974" class="selectOption">8C Spider</option>
            <option value="d1750" class="selectOption">Giulietta</option>
            <option value="d1173" class="selectOption">GTV</option>
            <option value="d1818" class="selectOption">Montreal</option>
            <option value="d1149" class="selectOption">Spider</option>
            </optgroup>
            </>

        )
    }else if (props.make == "m110"){
        return(
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d2448" value="d2448" label="DB11">DB11</option><option id="d3341" value="d3341" label="DB12">DB12</option><option id="d3054" value="d3054" label="DBX">DBX</option><option id="d2646" value="d2646" label="Vantage">Vantage</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d2495" value="d2495" label="DB2/4">DB2/4</option><option id="d1191" value="d1191" label="DB5">DB5</option><option id="d1440" value="d1440" label="DB6">DB6</option><option id="d907" value="d907" label="DB7">DB7</option><option id="d908" value="d908" label="DB9">DB9</option><option id="d1301" value="d1301" label="DBS">DBS</option><option id="d1766" value="d1766" label="Lagonda">Lagonda</option><option id="d2086" value="d2086" label="Rapide">Rapide</option><option id="d909" value="d909" label="V12 Vanquish">V12 Vanquish</option><option id="d2061" value="d2061" label="V12 Vantage">V12 Vantage</option><option id="d910" value="d910" label="V8 Vantage">V8 Vantage</option><option id="d2223" value="d2223" label="Vanquish">Vanquish</option><option id="d1880" value="d1880" label="Virage">Virage</option></optgroup>
            </>

        )
    }else if (props.make == "m19"){
        return(
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models">
                <option id="d24" value="d24" label="A3">A3</option>
                <option id="d25" value="d25" label="A4">A4</option>
                <option id="d2149" value="d2149" label="A4 Allroad">A4 Allroad</option>
                <option id="d1034" value="d1034" label="A5">A5</option>
                <option id="d2508" value="d2508" label="A5 Sportback">A5 Sportback</option>
                <option id="d27" value="d27" label="A6">A6</option>
                <option id="d2201" value="d2201" label="A6 Allroad">A6 Allroad</option>
                <option id="d2113" value="d2113" label="A7">A7</option>
                <option id="d29" value="d29" label="A8">A8</option>
                <option id="d683" value="d683" label="Allroad">Allroad</option>
                <option id="d2829" value="d2829" label="e-tron">e-tron</option>
                <option id="d3115" value="d3115" label="e-tron GT">e-tron GT</option>
                <option id="d2129" value="d2129" label="Q3">Q3</option>
                <option id="d3142" value="d3142" label="Q4 e-tron">Q4 e-tron</option>
                <option id="d3143" value="d3143" label="Q4 Sportback e-tron">Q4 Sportback e-tron</option>
                <option id="d1988" value="d1988" label="Q5">Q5</option>
                <option id="d2970" value="d2970" label="Q5 Hybrid Plug-in">Q5 Hybrid Plug-in</option>
                <option id="d3140" value="d3140" label="Q5 Sportback">Q5 Sportback</option>
                <option id="d930" value="d930" label="Q7">Q7</option>
                <option id="d2792" value="d2792" label="Q8">Q8</option>
                <option id="d3325" value="d3325" label="Q8 e-tron">Q8 e-tron</option>
                <option id="d3326" value="d3326" label="Q8 e-tron Sportback">Q8 e-tron Sportback</option>
                <option id="d1019" value="d1019" label="R8">R8</option>
                <option id="d2564" value="d2564" label="RS 3">RS 3</option>
                <option id="d2136" value="d2136" label="RS 5">RS 5</option>
                <option id="d2700" value="d2700" label="RS 5 Sportback">RS 5 Sportback</option>
                <option id="d2965" value="d2965" label="RS 6 Avant">RS 6 Avant</option>
                <option id="d2230" value="d2230" label="RS 7">RS 7</option>
                <option id="d3126" value="d3126" label="RS e-tron GT">RS e-tron GT</option>
                <option id="d2993" value="d2993" label="RS Q8">RS Q8</option>
                <option id="d1183" value="d1183" label="S3">S3</option>
                <option id="d30" value="d30" label="S4">S4</option>
                <option id="d1055" value="d1055" label="S5">S5</option>
                <option id="d2509" value="d2509" label="S5 Sportback">S5 Sportback</option>
                <option id="d687" value="d687" label="S6">S6</option>
                <option id="d2156" value="d2156" label="S7">S7</option>
                <option id="d688" value="d688" label="S8">S8</option>
                <option id="d2237" value="d2237" label="SQ5">SQ5</option>
                <option id="d3138" value="d3138" label="SQ5 Sportback">SQ5 Sportback</option>
                <option id="d3019" value="d3019" label="SQ7">SQ7</option>
                <option id="d3020" value="d3020" label="SQ8">SQ8</option>
                <option id="d3354" value="d3354" label="SQ8 e-tron">SQ8 e-tron</option>
                <option id="d3355" value="d3355" label="SQ8 e-tron Sportback">SQ8 e-tron Sportback</option>
                <option id="d32" value="d32" label="TT">TT</option>
                <option id="d2176" value="d2176" label="TTS">TTS</option>
                </optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d679" value="d679" label="100">100</option><option id="d1781" value="d1781" label="4000">4000</option><option id="d2326" value="d2326" label="A3 Sportback">A3 Sportback</option><option id="d26" value="d26" label="A4 Avant">A4 Avant</option><option id="d684" value="d684" label="Cabriolet">Cabriolet</option><option id="d685" value="d685" label="Coupe">Coupe</option><option id="d3242" value="d3242" label="e-tron S">e-tron S</option><option id="d2157" value="d2157" label="Q5 Hybrid">Q5 Hybrid</option><option id="d992" value="d992" label="RS 4">RS 4</option><option id="d686" value="d686" label="RS 6">RS 6</option><option id="d31" value="d31" label="S4 Avant">S4 Avant</option><option id="d2177" value="d2177" label="TT RS">TT RS</option></optgroup>


            </>

        )
    }else if (props.make == "m20"){
        return(
            <> 
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d2354" value="d2354" label="Bentayga">Bentayga</option><option id="d2966" value="d2966" label="Bentayga Hybrid">Bentayga Hybrid</option><option id="d34" value="d34" label="Continental Flying Spur">Continental Flying Spur</option><option id="d35" value="d35" label="Continental GT">Continental GT</option><option id="d399" value="d399" label="Continental GTC">Continental GTC</option><option id="d2288" value="d2288" label="Flying Spur">Flying Spur</option></optgroup>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d2354" value="d2354" label="Bentayga">Bentayga</option><option id="d2966" value="d2966" label="Bentayga Hybrid">Bentayga Hybrid</option><option id="d34" value="d34" label="Continental Flying Spur">Continental Flying Spur</option><option id="d35" value="d35" label="Continental GT">Continental GT</option><option id="d399" value="d399" label="Continental GTC">Continental GTC</option><option id="d2288" value="d2288" label="Flying Spur">Flying Spur</option></optgroup>
            </>

        )
    }else if (props.make == "m3"){
        return(
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d1052" value="d1052" label="1 Series">1 Series</option><option id="d2262" value="d2262" label="2 Series">2 Series</option><option id="d1512" value="d1512" label="3 Series">3 Series</option><option id="d2240" value="d2240" label="3 Series Gran Turismo">3 Series Gran Turismo</option><option id="d2244" value="d2244" label="4 Series">4 Series</option><option id="d1628" value="d1628" label="5 Series">5 Series</option><option id="d2075" value="d2075" label="5 Series Gran Turismo">5 Series Gran Turismo</option><option id="d1513" value="d1513" label="6 Series">6 Series</option><option id="d1517" value="d1517" label="7 Series">7 Series</option><option id="d1627" value="d1627" label="8 Series">8 Series</option><option id="d2263" value="d2263" label="i3">i3</option><option id="d3155" value="d3155" label="i4">i4</option><option id="d3334" value="d3334" label="i5">i5</option><option id="d3236" value="d3236" label="i7">i7</option><option id="d2274" value="d2274" label="i8">i8</option><option id="d3156" value="d3156" label="iX">iX</option><option id="d2396" value="d2396" label="M2">M2</option><option id="d390" value="d390" label="M3">M3</option><option id="d2258" value="d2258" label="M4">M4</option><option id="d391" value="d391" label="M5">M5</option><option id="d825" value="d825" label="M6">M6</option><option id="d2902" value="d2902" label="M8">M8</option><option id="d2160" value="d2160" label="X1">X1</option><option id="d2623" value="d2623" label="X2">X2</option><option id="d392" value="d392" label="X3">X3</option><option id="d2847" value="d2847" label="X3 M">X3 M</option><option id="d2271" value="d2271" label="X4">X4</option><option id="d2848" value="d2848" label="X4 M">X4 M</option><option id="d393" value="d393" label="X5">X5</option><option id="d2120" value="d2120" label="X5 M">X5 M</option><option id="d1137" value="d1137" label="X6">X6</option><option id="d2139" value="d2139" label="X6 M">X6 M</option><option id="d2656" value="d2656" label="X7">X7</option><option id="d3278" value="d3278" label="XM">XM</option><option id="d394" value="d394" label="Z3">Z3</option><option id="d395" value="d395" label="Z4">Z4</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d2172" value="d2172" label="1M">1M</option><option id="d3151" value="d3151" label="2000">2000</option><option id="d1266" value="d1266" label="2002">2002</option><option id="d3352" value="d3352" label="3.0 CSL">3.0 CSL</option><option id="d3160" value="d3160" label="3.0CS">3.0CS</option><option id="d2615" value="d2615" label="6 Series Gran Turismo">6 Series Gran Turismo</option><option id="d2186" value="d2186" label="ActiveHybrid 3">ActiveHybrid 3</option><option id="d2181" value="d2181" label="ActiveHybrid 7">ActiveHybrid 7</option><option id="d1626" value="d1626" label="Isetta">Isetta</option><option id="d2161" value="d2161" label="Z3 M">Z3 M</option><option id="d2162" value="d2162" label="Z4 M">Z4 M</option><option id="d396" value="d396" label="Z8">Z8</option></optgroup>
            </>

        )
    }else if (props.make === 'm21') {
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d2305" value="d2305" label="Cascada">Cascada</option><option id="d1029" value="d1029" label="Enclave">Enclave</option><option id="d2128" value="d2128" label="Encore">Encore</option><option id="d2901" value="d2901" label="Encore GX">Encore GX</option><option id="d2398" value="d2398" label="Envision">Envision</option><option id="d3333" value="d3333" label="Envista">Envista</option><option id="d272" value="d272" label="LaCrosse">LaCrosse</option><option id="d273" value="d273" label="LeSabre">LeSabre</option><option id="d844" value="d844" label="Lucerne">Lucerne</option><option id="d277" value="d277" label="Regal">Regal</option><option id="d2608" value="d2608" label="Regal Sportback">Regal Sportback</option><option id="d2119" value="d2119" label="Verano">Verano</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d2298" value="d2298" label="Centurion">Centurion</option><option id="d269" value="d269" label="Century">Century</option><option id="d270" value="d270" label="Electra">Electra</option><option id="d2538" value="d2538" label="Gran Sport">Gran Sport</option><option id="d1336" value="d1336" label="Grand National">Grand National</option><option id="d274" value="d274" label="Park Avenue">Park Avenue</option><option id="d275" value="d275" label="Rainier">Rainier</option><option id="d276" value="d276" label="Reatta">Reatta</option><option id="d2609" value="d2609" label="Regal TourX">Regal TourX</option><option id="d278" value="d278" label="Rendezvous">Rendezvous</option><option id="d279" value="d279" label="Riviera">Riviera</option><option id="d280" value="d280" label="Roadmaster">Roadmaster</option><option id="d281" value="d281" label="Skylark">Skylark</option><option id="d1765" value="d1765" label="Special">Special</option><option id="d2281" value="d2281" label="Super">Super</option><option id="d282" value="d282" label="Terraza">Terraza</option><option id="d1740" value="d1740" label="Wildcat">Wildcat</option></optgroup>
            </>
        );
    } else if (props.make === 'm22') {
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d2138" value="d2138" label="ATS">ATS</option><option id="d2269" value="d2269" label="ATS Coupe">ATS Coupe</option><option id="d2963" value="d2963" label="CT4">CT4</option><option id="d2903" value="d2903" label="CT4-V Blackwing">CT4-V Blackwing</option><option id="d2876" value="d2876" label="CT5">CT5</option><option id="d2904" value="d2904" label="CT5-V Blackwing">CT5-V Blackwing</option><option id="d2352" value="d2352" label="CT6">CT6</option><option id="d138" value="d138" label="CTS">CTS</option><option id="d2084" value="d2084" label="CTS Coupe">CTS Coupe</option><option id="d140" value="d140" label="DeVille">DeVille</option><option id="d732" value="d732" label="DTS">DTS</option><option id="d141" value="d141" label="Eldorado">Eldorado</option><option id="d142" value="d142" label="Escalade">Escalade</option><option id="d143" value="d143" label="Escalade ESV">Escalade ESV</option><option id="d144" value="d144" label="Escalade EXT">Escalade EXT</option><option id="d3248" value="d3248" label="Escalade-V">Escalade-V</option><option id="d3157" value="d3157" label="LYRIQ">LYRIQ</option><option id="d148" value="d148" label="SRX">SRX</option><option id="d150" value="d150" label="XLR">XLR</option><option id="d2673" value="d2673" label="XT4">XT4</option><option id="d2393" value="d2393" label="XT5">XT5</option><option id="d2843" value="d2843" label="XT6">XT6</option><option id="d2141" value="d2141" label="XTS">XTS</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d3320" value="d3320" label="355A">355A</option><option id="d135" value="d135" label="Allante">Allante</option><option id="d2302" value="d2302" label="ATS-V">ATS-V</option><option id="d2316" value="d2316" label="ATS-V Coupe">ATS-V Coupe</option><option id="d136" value="d136" label="Brougham">Brougham</option><option id="d2852" value="d2852" label="Calais">Calais</option><option id="d137" value="d137" label="Catera">Catera</option><option id="d2604" value="d2604" label="CT6 Hybrid Plug-In ">CT6 Hybrid Plug-In </option><option id="d2861" value="d2861" label="CT6-V">CT6-V</option><option id="d2626" value="d2626" label="CTS Sport Wagon">CTS Sport Wagon</option><option id="d139" value="d139" label="CTS-V">CTS-V</option><option id="d2085" value="d2085" label="CTS-V Coupe">CTS-V Coupe</option><option id="d2636" value="d2636" label="CTS-V Wagon">CTS-V Wagon</option><option id="d2204" value="d2204" label="ELR">ELR</option><option id="d2914" value="d2914" label="Escalade Hybrid">Escalade Hybrid</option><option id="d145" value="d145" label="Fleetwood">Fleetwood</option><option id="d2330" value="d2330" label="LaSalle">LaSalle</option><option id="d2983" value="d2983" label="Series 61">Series 61</option><option id="d2328" value="d2328" label="Series 62">Series 62</option><option id="d2467" value="d2467" label="Series 75">Series 75</option><option id="d146" value="d146" label="Seville">Seville</option><option id="d147" value="d147" label="Sixty Special">Sixty Special</option><option id="d149" value="d149" label="STS">STS</option><option id="d832" value="d832" label="STS-V">STS-V</option><option id="d833" value="d833" label="XLR-V">XLR-V</option></optgroup>
            </>
        );
    } else if (props.make === 'm1') {
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d599" value="d599" label="Avalanche">Avalanche</option><option id="d600" value="d600" label="Aveo">Aveo</option><option id="d774" value="d774" label="Bel Air">Bel Air</option><option id="d602" value="d602" label="Blazer">Blazer</option><option id="d3351" value="d3351" label="Blazer EV">Blazer EV</option><option id="d3116" value="d3116" label="Bolt EUV">Bolt EUV</option><option id="d2397" value="d2397" label="Bolt EV">Bolt EV</option><option id="d755" value="d755" label="C/K 1500">C/K 1500</option><option id="d606" value="d606" label="Camaro">Camaro</option><option id="d1713" value="d1713" label="Captiva Sport">Captiva Sport</option><option id="d739" value="d739" label="Chevelle">Chevelle</option><option id="d2280" value="d2280" label="City Express">City Express</option><option id="d613" value="d613" label="Cobalt">Cobalt</option><option id="d614" value="d614" label="Colorado">Colorado</option><option id="d1" value="d1" label="Corvette">Corvette</option><option id="d3313" value="d3313" label="Corvette E-Ray">Corvette E-Ray</option><option id="d2076" value="d2076" label="Cruze">Cruze</option><option id="d1102" value="d1102" label="El Camino">El Camino</option><option id="d616" value="d616" label="Equinox">Equinox</option><option id="d3267" value="d3267" label="Equinox EV">Equinox EV</option><option id="d617" value="d617" label="Express">Express</option><option id="d618" value="d618" label="Express Cargo">Express Cargo</option><option id="d3090" value="d3090" label="Express Chassis">Express Chassis</option><option id="d716" value="d716" label="HHR">HHR</option><option id="d619" value="d619" label="Impala">Impala</option><option id="d2424" value="d2424" label="Impala Limited">Impala Limited</option><option id="d622" value="d622" label="Malibu">Malibu</option><option id="d625" value="d625" label="Monte Carlo">Monte Carlo</option><option id="d628" value="d628" label="S-10">S-10</option><option id="d630" value="d630" label="Silverado 1500">Silverado 1500</option><option id="d634" value="d634" label="Silverado 2500HD">Silverado 2500HD</option><option id="d635" value="d635" label="Silverado 3500">Silverado 3500</option><option id="d1027" value="d1027" label="Silverado 3500HD">Silverado 3500HD</option><option id="d3031" value="d3031" label="Silverado 3500HD Chassis">Silverado 3500HD Chassis</option><option id="d3386" value="d3386" label="Silverado 4500HD Chassis">Silverado 4500HD Chassis</option><option id="d3292" value="d3292" label="Silverado 5500HD Chassis">Silverado 5500HD Chassis</option><option id="d3293" value="d3293" label="Silverado 6500HD Chassis">Silverado 6500HD Chassis</option><option id="d3222" value="d3222" label="Silverado EV">Silverado EV</option><option id="d2112" value="d2112" label="Sonic">Sonic</option><option id="d2008" value="d2008" label="Spark">Spark</option><option id="d637" value="d637" label="SSR">SSR</option><option id="d638" value="d638" label="Suburban">Suburban</option><option id="d639" value="d639" label="Tahoe">Tahoe</option><option id="d642" value="d642" label="Trailblazer">Trailblazer</option><option id="d1521" value="d1521" label="Traverse">Traverse</option><option id="d2272" value="d2272" label="Trax">Trax</option><option id="d2012" value="d2012" label="Volt">Volt</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d2520" value="d2520" label="150">150</option><option id="d2299" value="d2299" label="210">210</option><option id="d2283" value="d2283" label="3100">3100</option><option id="d2345" value="d2345" label="3600">3600</option><option id="d3198" value="d3198" label="4400">4400</option><option id="d2245" value="d2245" label="Apache">Apache</option><option id="d597" value="d597" label="Astro">Astro</option><option id="d598" value="d598" label="Astro Cargo">Astro Cargo</option><option id="d601" value="d601" label="Beretta">Beretta</option><option id="d775" value="d775" label="Biscayne">Biscayne</option><option id="d1610" value="d1610" label="C/K 10">C/K 10</option><option id="d1611" value="d1611" label="C/K 20">C/K 20</option><option id="d752" value="d752" label="C/K 2500">C/K 2500</option><option id="d1612" value="d1612" label="C/K 30">C/K 30</option><option id="d753" value="d753" label="C/K 3500">C/K 3500</option><option id="d607" value="d607" label="Caprice">Caprice</option><option id="d608" value="d608" label="Cavalier">Cavalier</option><option id="d1401" value="d1401" label="Chevette">Chevette</option><option id="d610" value="d610" label="Chevy Van">Chevy Van</option><option id="d612" value="d612" label="Classic">Classic</option><option id="d2640" value="d2640" label="Confederate">Confederate</option><option id="d615" value="d615" label="Corsica">Corsica</option><option id="d1179" value="d1179" label="Corvair">Corvair</option><option id="d776" value="d776" label="Delray">Delray</option><option id="d2340" value="d2340" label="Fleetline">Fleetline</option><option id="d2471" value="d2471" label="Fleetmaster">Fleetmaster</option><option id="d620" value="d620" label="Lumina">Lumina</option><option id="d621" value="d621" label="Lumina Minivan">Lumina Minivan</option><option id="d1929" value="d1929" label="LUV">LUV</option><option id="d2321" value="d2321" label="Malibu Hybrid">Malibu Hybrid</option><option id="d623" value="d623" label="Malibu Maxx">Malibu Maxx</option><option id="d2386" value="d2386" label="Master">Master</option><option id="d3006" value="d3006" label="Master 85">Master 85</option><option id="d3004" value="d3004" label="Master Deluxe">Master Deluxe</option><option id="d3005" value="d3005" label="Master Eagle">Master Eagle</option><option id="d624" value="d624" label="Metro">Metro</option><option id="d1692" value="d1692" label="Nomad">Nomad</option><option id="d1106" value="d1106" label="Nova">Nova</option><option id="d2099" value="d2099" label="Opala">Opala</option><option id="d626" value="d626" label="Prizm">Prizm</option><option id="d2703" value="d2703" label="R/V 10">R/V 10</option><option id="d2704" value="d2704" label="R/V 20">R/V 20</option><option id="d2705" value="d2705" label="R/V 2500">R/V 2500</option><option id="d756" value="d756" label="R/V 3500">R/V 3500</option><option id="d629" value="d629" label="S-10 Blazer">S-10 Blazer</option><option id="d2917" value="d2917" label="Silverado 1500 Hybrid">Silverado 1500 Hybrid</option><option id="d632" value="d632" label="Silverado 1500HD">Silverado 1500HD</option><option id="d633" value="d633" label="Silverado 2500">Silverado 2500</option><option id="d3084" value="d3084" label="Silverado 3500 Chassis">Silverado 3500 Chassis</option><option id="d3118" value="d3118" label="Silverado 4500HD">Silverado 4500HD</option><option id="d3119" value="d3119" label="Silverado 5500HD">Silverado 5500HD</option><option id="d3137" value="d3137" label="Silverado 6500HD">Silverado 6500HD</option><option id="d1030" value="d1030" label="Silverado Classic 1500">Silverado Classic 1500</option><option id="d2754" value="d2754" label="Silverado Classic 1500HD">Silverado Classic 1500HD</option><option id="d1031" value="d1031" label="Silverado Classic 2500HD">Silverado Classic 2500HD</option><option id="d1028" value="d1028" label="Silverado Classic 3500">Silverado Classic 3500</option><option id="d2059" value="d2059" label="Silverado Hybrid">Silverado Hybrid</option><option id="d631" value="d631" label="Silverado SS">Silverado SS</option><option id="d2205" value="d2205" label="Spark EV">Spark EV</option><option id="d2236" value="d2236" label="Special Deluxe">Special Deluxe</option><option id="d636" value="d636" label="Sportvan">Sportvan</option><option id="d2217" value="d2217" label="SS">SS</option><option id="d2593" value="d2593" label="Standard">Standard</option><option id="d3009" value="d3009" label="Styleline Deluxe">Styleline Deluxe</option><option id="d2527" value="d2527" label="Stylemaster">Stylemaster</option><option id="d2353" value="d2353" label="Superior">Superior</option><option id="d2916" value="d2916" label="Tahoe Hybrid">Tahoe Hybrid</option><option id="d641" value="d641" label="Tracker">Tracker</option><option id="d643" value="d643" label="Trailblazer EXT">Trailblazer EXT</option><option id="d644" value="d644" label="Uplander">Uplander</option><option id="d1632" value="d1632" label="Vega">Vega</option><option id="d645" value="d645" label="Venture">Venture</option></optgroup>
            </>
        );
    } else if (props.make === 'm23') {
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d2106" value="d2106" label="200">200</option><option id="d165" value="d165" label="300">300</option><option id="d170" value="d170" label="Crossfire">Crossfire</option><option id="d177" value="d177" label="Pacifica">Pacifica</option><option id="d2478" value="d2478" label="Pacifica Hybrid">Pacifica Hybrid</option><option id="d179" value="d179" label="PT Cruiser">PT Cruiser</option><option id="d180" value="d180" label="Sebring">Sebring</option><option id="d182" value="d182" label="Town &amp; Country">Town &amp; Country</option><option id="d183" value="d183" label="Voyager">Voyager</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d167" value="d167" label="300M">300M</option><option id="d945" value="d945" label="Aspen">Aspen</option><option id="d168" value="d168" label="Cirrus">Cirrus</option><option id="d169" value="d169" label="Concorde">Concorde</option><option id="d1532" value="d1532" label="Conquest">Conquest</option><option id="d1913" value="d1913" label="Cordoba">Cordoba</option><option id="d171" value="d171" label="Crossfire SRT-6">Crossfire SRT-6</option><option id="d172" value="d172" label="Grand Voyager">Grand Voyager</option><option id="d173" value="d173" label="Imperial">Imperial</option><option id="d174" value="d174" label="Le Baron">Le Baron</option><option id="d175" value="d175" label="LHS">LHS</option><option id="d176" value="d176" label="New Yorker">New Yorker</option><option id="d1804" value="d1804" label="Newport">Newport</option><option id="d178" value="d178" label="Prowler">Prowler</option><option id="d1738" value="d1738" label="Royal">Royal</option><option id="d1871" value="d1871" label="Saratoga">Saratoga</option><option id="d181" value="d181" label="TC">TC</option><option id="d2331" value="d2331" label="Windsor">Windsor</option></optgroup>
            </>
        );
    } else if (props.make === 'm24') {
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d646" value="d646" label="Avenger">Avenger</option><option id="d932" value="d932" label="Caliber">Caliber</option><option id="d894" value="d894" label="Challenger">Challenger</option><option id="d733" value="d733" label="Charger">Charger</option><option id="d649" value="d649" label="Dakota">Dakota</option><option id="d896" value="d896" label="Dart">Dart</option><option id="d651" value="d651" label="Durango">Durango</option><option id="d653" value="d653" label="Grand Caravan">Grand Caravan</option><option id="d3260" value="d3260" label="Hornet">Hornet</option><option id="d1135" value="d1135" label="Journey">Journey</option><option id="d899" value="d899" label="Nitro">Nitro</option><option id="d665" value="d665" label="RAM 1500">RAM 1500</option><option id="d667" value="d667" label="RAM 2500">RAM 2500</option><option id="d668" value="d668" label="RAM 3500">RAM 3500</option><option id="d678" value="d678" label="Viper">Viper</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d1762" value="d1762" label="330">330</option><option id="d2614" value="d2614" label="400">400</option><option id="d1744" value="d1744" label="600">600</option><option id="d2346" value="d2346" label="A100">A100</option><option id="d1472" value="d1472" label="Aspen">Aspen</option><option id="d647" value="d647" label="Caravan">Caravan</option><option id="d895" value="d895" label="Coronet">Coronet</option><option id="d650" value="d650" label="Daytona">Daytona</option><option id="d897" value="d897" label="Diplomat">Diplomat</option><option id="d654" value="d654" label="Intrepid">Intrepid</option><option id="d3066" value="d3066" label="M37">M37</option><option id="d655" value="d655" label="Magnum">Magnum</option><option id="d656" value="d656" label="Monaco">Monaco</option><option id="d657" value="d657" label="Neon">Neon</option><option id="d658" value="d658" label="Neon SRT-4">Neon SRT-4</option><option id="d1703" value="d1703" label="Polara">Polara</option><option id="d900" value="d900" label="Power Wagon">Power Wagon</option><option id="d902" value="d902" label="RAM">RAM</option><option id="d2712" value="d2712" label="RAM 100">RAM 100</option><option id="d660" value="d660" label="RAM 150">RAM 150</option><option id="d661" value="d661" label="RAM 250">RAM 250</option><option id="d662" value="d662" label="RAM 350">RAM 350</option><option id="d2227" value="d2227" label="RAM 3500 Chassis ">RAM 3500 Chassis </option><option id="d2228" value="d2228" label="RAM 4500 Chassis ">RAM 4500 Chassis </option><option id="d663" value="d663" label="RAM 50 Pickup">RAM 50 Pickup</option><option id="d669" value="d669" label="RAM Van">RAM Van</option><option id="d670" value="d670" label="RAM Wagon">RAM Wagon</option><option id="d671" value="d671" label="Ramcharger">Ramcharger</option><option id="d672" value="d672" label="Shadow">Shadow</option><option id="d675" value="d675" label="Sprinter Cargo">Sprinter Cargo</option><option id="d674" value="d674" label="Sprinter Passenger">Sprinter Passenger</option><option id="d676" value="d676" label="Stealth">Stealth</option><option id="d677" value="d677" label="Stratus">Stratus</option><option id="d904" value="d904" label="Super Bee">Super Bee</option><option id="d2783" value="d2783" label="Wayfarer">Wayfarer</option></optgroup>
            </>
        );
    } else if (props.make === 'm25') { // Ferarri
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup label="Popular Models" className="activeModelGroup">
                    {/* Options for Ferrari Popular Models */}
                </optgroup>
                <optgroup label="Other Models" className="inactiveModelGroup">
                    {/* Options for Ferrari Other Models */}
                </optgroup>
            </>
        );
    } else if (props.make === 'm98') { //FIAT
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d1414" value="d1414" label="124 Spider">124 Spider</option><option id="d1327" value="d1327" label="500">500</option><option id="d2239" value="d2239" label="500e">500e</option><option id="d2199" value="d2199" label="500L">500L</option><option id="d2306" value="d2306" label="500X">500X</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d1873" value="d1873" label="131">131</option><option id="d1872" value="d1872" label="600">600</option><option id="d1337" value="d1337" label="Barchetta">Barchetta</option><option id="d1215" value="d1215" label="Uno">Uno</option></optgroup>
            </>
        );
    } else if (props.make === 'm183') {// FISKER
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup label="Popular Models" className="activeModelGroup">
                    {/* Options for Fisker Popular Models */}
                </optgroup>
                <optgroup label="Other Models" className="inactiveModelGroup">
                    {/* Options for Fisker Other Models */}
                </optgroup>
            </>
        );
    } else if (props.make === 'm2') {// FORD
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d320" value="d320" label="Bronco">Bronco</option><option id="d3225" value="d3225" label="Bronco Raptor">Bronco Raptor</option><option id="d3094" value="d3094" label="Bronco Sport">Bronco Sport</option><option id="d1315" value="d1315" label="C-Max Energi">C-Max Energi</option><option id="d2920" value="d2920" label="C-Max Hybrid">C-Max Hybrid</option><option id="d324" value="d324" label="Crown Victoria">Crown Victoria</option><option id="d2384" value="d2384" label="E-Series">E-Series</option><option id="d3024" value="d3024" label="E-Series Chassis">E-Series Chassis</option><option id="d3114" value="d3114" label="E-Transit">E-Transit</option><option id="d3230" value="d3230" label="E-Transit Chassis">E-Transit Chassis</option><option id="d2506" value="d2506" label="EcoSport">EcoSport</option><option id="d923" value="d923" label="Edge">Edge</option><option id="d330" value="d330" label="Escape">Escape</option><option id="d759" value="d759" label="Escape Hybrid">Escape Hybrid</option><option id="d2938" value="d2938" label="Escape Hybrid Plug-in">Escape Hybrid Plug-in</option><option id="d332" value="d332" label="Excursion">Excursion</option><option id="d333" value="d333" label="Expedition">Expedition</option><option id="d334" value="d334" label="Explorer">Explorer</option><option id="d2786" value="d2786" label="Explorer Hybrid">Explorer Hybrid</option><option id="d336" value="d336" label="Explorer Sport Trac">Explorer Sport Trac</option><option id="d337" value="d337" label="F-150">F-150</option><option id="d3147" value="d3147" label="F-150 Lightning">F-150 Lightning</option><option id="d340" value="d340" label="F-250">F-250</option><option id="d341" value="d341" label="F-250 Super Duty">F-250 Super Duty</option><option id="d342" value="d342" label="F-350">F-350</option><option id="d343" value="d343" label="F-350 Super Duty">F-350 Super Duty</option><option id="d3025" value="d3025" label="F-350 Super Duty Chassis">F-350 Super Duty Chassis</option><option id="d1022" value="d1022" label="F-450 Super Duty">F-450 Super Duty</option><option id="d3069" value="d3069" label="F-450 Super Duty Chassis">F-450 Super Duty Chassis</option><option id="d2224" value="d2224" label="F-550 Super Duty">F-550 Super Duty</option><option id="d3021" value="d3021" label="F-550 Super Duty Chassis">F-550 Super Duty Chassis</option><option id="d3049" value="d3049" label="F-600 Super Duty">F-600 Super Duty</option><option id="d1060" value="d1060" label="Fiesta">Fiesta</option><option id="d1049" value="d1049" label="Flex">Flex</option><option id="d346" value="d346" label="Focus">Focus</option><option id="d2402" value="d2402" label="Focus RS">Focus RS</option><option id="d845" value="d845" label="Fusion">Fusion</option><option id="d2197" value="d2197" label="Fusion Energi">Fusion Energi</option><option id="d2702" value="d2702" label="Fusion Hybrid">Fusion Hybrid</option><option id="d1293" value="d1293" label="Maverick">Maverick</option><option id="d2" value="d2" label="Mustang">Mustang</option><option id="d2990" value="d2990" label="Mustang Mach-E">Mustang Mach-E</option><option id="d2303" value="d2303" label="Mustang Shelby GT350">Mustang Shelby GT350</option><option id="d924" value="d924" label="Mustang Shelby GT500">Mustang Shelby GT500</option><option id="d352" value="d352" label="Mustang SVT Cobra">Mustang SVT Cobra</option><option id="d354" value="d354" label="Ranger">Ranger</option><option id="d355" value="d355" label="Taurus">Taurus</option><option id="d357" value="d357" label="Thunderbird">Thunderbird</option><option id="d1067" value="d1067" label="Transit Cargo">Transit Cargo</option><option id="d3091" value="d3091" label="Transit Chassis">Transit Chassis</option><option id="d2037" value="d2037" label="Transit Connect">Transit Connect</option><option id="d2270" value="d2270" label="Transit Passenger">Transit Passenger</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d321" value="d321" label="Bronco II">Bronco II</option><option id="d322" value="d322" label="Contour">Contour</option><option id="d323" value="d323" label="Contour SVT">Contour SVT</option><option id="d742" value="d742" label="Country Squire">Country Squire</option><option id="d2403" value="d2403" label="Coupe">Coupe</option><option id="d1965" value="d1965" label="Crestline">Crestline</option><option id="d2311" value="d2311" label="Custom">Custom</option><option id="d2246" value="d2246" label="Customline">Customline</option><option id="d2378" value="d2378" label="Deluxe">Deluxe</option><option id="d328" value="d328" label="Econoline Cargo">Econoline Cargo</option><option id="d3256" value="d3256" label="Econoline Chassis">Econoline Chassis</option><option id="d329" value="d329" label="Econoline Wagon">Econoline Wagon</option><option id="d743" value="d743" label="Elite">Elite</option><option id="d331" value="d331" label="Escort">Escort</option><option id="d335" value="d335" label="Explorer Sport">Explorer Sport</option><option id="d2582" value="d2582" label="F-1">F-1</option><option id="d1395" value="d1395" label="F-100">F-100</option><option id="d338" value="d338" label="F-150 Heritage">F-150 Heritage</option><option id="d339" value="d339" label="F-150 SVT Lightning">F-150 SVT Lightning</option><option id="d1563" value="d1563" label="F-650 Super Duty">F-650 Super Duty</option><option id="d1307" value="d1307" label="Fairlane">Fairlane</option><option id="d1341" value="d1341" label="Falcon">Falcon</option><option id="d3012" value="d3012" label="Falcon Futura">Falcon Futura</option><option id="d345" value="d345" label="Five Hundred">Five Hundred</option><option id="d2468" value="d2468" label="Focus Electric">Focus Electric</option><option id="d347" value="d347" label="Focus SVT">Focus SVT</option><option id="d348" value="d348" label="Freestar">Freestar</option><option id="d349" value="d349" label="Freestyle">Freestyle</option><option id="d1213" value="d1213" label="Galaxie">Galaxie</option><option id="d3016" value="d3016" label="Galaxie 500">Galaxie 500</option><option id="d1165" value="d1165" label="Granada">Granada</option><option id="d350" value="d350" label="GT">GT</option><option id="d1976" value="d1976" label="GT40">GT40</option><option id="d1394" value="d1394" label="LTD">LTD</option><option id="d351" value="d351" label="LTD Crown Victoria">LTD Crown Victoria</option><option id="d2779" value="d2779" label="Mainline">Mainline</option><option id="d2439" value="d2439" label="Model 18">Model 18</option><option id="d2350" value="d2350" label="Model 40">Model 40</option><option id="d3063" value="d3063" label="Model 68">Model 68</option><option id="d1564" value="d1564" label="Model A">Model A</option><option id="d1393" value="d1393" label="Model B">Model B</option><option id="d2049" value="d2049" label="Model T">Model T</option><option id="d2948" value="d2948" label="Mustang II">Mustang II</option><option id="d3034" value="d3034" label="Pick Up">Pick Up</option><option id="d1571" value="d1571" label="Pinto">Pinto</option><option id="d353" value="d353" label="Probe">Probe</option><option id="d2833" value="d2833" label="Ranch Wagon">Ranch Wagon</option><option id="d1362" value="d1362" label="Ranchero">Ranchero</option><option id="d3026" value="d3026" label="Ranger Chassis">Ranger Chassis</option><option id="d2470" value="d2470" label="Super Deluxe">Super Deluxe</option><option id="d1020" value="d1020" label="Taurus X">Taurus X</option><option id="d1198" value="d1198" label="Torino">Torino</option><option id="d2198" value="d2198" label="Transit Connect Electric">Transit Connect Electric</option><option id="d2892" value="d2892" label="Transit Crew">Transit Crew</option><option id="d2169" value="d2169" label="Victoria">Victoria</option><option id="d358" value="d358" label="Windstar">Windstar</option></optgroup>
            </>
        );
    } else if (props.make === 'm203') {// GENESIS
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup label="Popular Models" className="activeModelGroup">
                    {/* Options for Genesis Popular Models */}
                </optgroup>
                <optgroup label="Other Models" className="inactiveModelGroup">
                    {/* Options for Genesis Other Models */}
                </optgroup>
            </>
        );
    } else if (props.make === 'm26') {//GMC
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup label="Popular Models" className="activeModelGroup">
                    {/* Options for GMC Popular Models */}
                </optgroup>
                <optgroup label="Other Models" className="inactiveModelGroup">
                    {/* Options for GMC Other Models */}
                </optgroup>
            </>
        );
    } else if (props.make === 'm6') {//Honda
        return (
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d585" value="d585" label="Accord">Accord</option><option id="d976" value="d976" label="Accord Coupe">Accord Coupe</option><option id="d2067" value="d2067" label="Accord Crosstour">Accord Crosstour</option><option id="d2256" value="d2256" label="Accord Hybrid">Accord Hybrid</option><option id="d586" value="d586" label="Civic">Civic</option><option id="d977" value="d977" label="Civic Coupe">Civic Coupe</option><option id="d2441" value="d2441" label="Civic Hatchback">Civic Hatchback</option><option id="d2923" value="d2923" label="Civic Hybrid">Civic Hybrid</option><option id="d2568" value="d2568" label="Civic Type R">Civic Type R</option><option id="d2560" value="d2560" label="Clarity Hybrid Plug-In">Clarity Hybrid Plug-In</option><option id="d589" value="d589" label="CR-V">CR-V</option><option id="d3002" value="d3002" label="CR-V Hybrid">CR-V Hybrid</option><option id="d2081" value="d2081" label="CR-Z">CR-Z</option><option id="d2184" value="d2184" label="Crosstour">Crosstour</option><option id="d590" value="d590" label="Element">Element</option><option id="d744" value="d744" label="Fit">Fit</option><option id="d1271" value="d1271" label="HR-V">HR-V</option><option id="d591" value="d591" label="Insight">Insight</option><option id="d592" value="d592" label="Odyssey">Odyssey</option><option id="d593" value="d593" label="Passport">Passport</option><option id="d594" value="d594" label="Pilot">Pilot</option><option id="d3357" value="d3357" label="Prologue">Prologue</option><option id="d734" value="d734" label="Ridgeline">Ridgeline</option><option id="d596" value="d596" label="S2000">S2000</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d2155" value="d2155" label="Accord Hybrid Plug-In ">Accord Hybrid Plug-In </option><option id="d587" value="d587" label="Civic CRX">Civic CRX</option><option id="d588" value="d588" label="Civic del Sol">Civic del Sol</option><option id="d2449" value="d2449" label="Clarity Fuel Cell">Clarity Fuel Cell</option><option id="d595" value="d595" label="Prelude">Prelude</option></optgroup>
            </>
        );
    }else if (props.make === "m7"){// Toyota 
        return(
            <>
                <option value="-1">All Models</option>
                <optgroup data-testid="Popular models" label="Popular models"><option id="d290" value="d290" label="4Runner">4Runner</option><option id="d291" value="d291" label="Avalon">Avalon</option><option id="d2665" value="d2665" label="Avalon Hybrid">Avalon Hybrid</option><option id="d3220" value="d3220" label="bZ4X">bZ4X</option><option id="d2474" value="d2474" label="C-HR">C-HR</option><option id="d292" value="d292" label="Camry">Camry</option><option id="d2908" value="d2908" label="Camry Hybrid">Camry Hybrid</option><option id="d293" value="d293" label="Camry Solara">Camry Solara</option><option id="d295" value="d295" label="Corolla">Corolla</option><option id="d3154" value="d3154" label="Corolla Cross">Corolla Cross</option><option id="d3296" value="d3296" label="Corolla Cross Hybrid">Corolla Cross Hybrid</option><option id="d2697" value="d2697" label="Corolla Hatchback">Corolla Hatchback</option><option id="d2840" value="d2840" label="Corolla Hybrid">Corolla Hybrid</option><option id="d1156" value="d1156" label="Crown">Crown</option><option id="d3371" value="d3371" label="Crown Signia">Crown Signia</option><option id="d826" value="d826" label="FJ Cruiser">FJ Cruiser</option><option id="d3243" value="d3243" label="GR Corolla">GR Corolla</option><option id="d2436" value="d2436" label="GR86">GR86</option><option id="d3314" value="d3314" label="Grand Highlander">Grand Highlander</option><option id="d3342" value="d3342" label="Grand Highlander Hybrid">Grand Highlander Hybrid</option><option id="d298" value="d298" label="Highlander">Highlander</option><option id="d757" value="d757" label="Highlander Hybrid">Highlander Hybrid</option><option id="d299" value="d299" label="Land Cruiser">Land Cruiser</option><option id="d300" value="d300" label="Matrix">Matrix</option><option id="d2359" value="d2359" label="Mirai">Mirai</option><option id="d15" value="d15" label="Prius">Prius</option><option id="d2127" value="d2127" label="Prius c">Prius c</option><option id="d2191" value="d2191" label="Prius Plug-In">Prius Plug-In</option><option id="d2418" value="d2418" label="Prius Prime">Prius Prime</option><option id="d2150" value="d2150" label="Prius v">Prius v</option><option id="d306" value="d306" label="RAV4">RAV4</option><option id="d2318" value="d2318" label="RAV4 Hybrid">RAV4 Hybrid</option><option id="d2992" value="d2992" label="RAV4 Prime">RAV4 Prime</option><option id="d307" value="d307" label="Sequoia">Sequoia</option><option id="d308" value="d308" label="Sienna">Sienna</option><option id="d309" value="d309" label="Supra">Supra</option><option id="d311" value="d311" label="Tacoma">Tacoma</option><option id="d313" value="d313" label="Tundra">Tundra</option><option id="d3414" value="d3414" label="Tundra Hybrid">Tundra Hybrid</option><option id="d1516" value="d1516" label="Venza">Venza</option><option id="d827" value="d827" label="Yaris">Yaris</option><option id="d2566" value="d2566" label="Yaris iA">Yaris iA</option></optgroup>
                <optgroup data-testid="Other models" label="Other models"><option id="d294" value="d294" label="Celica">Celica</option><option id="d1075" value="d1075" label="Chaser">Chaser</option><option id="d2565" value="d2565" label="Corolla iM">Corolla iM</option><option id="d1443" value="d1443" label="Corona">Corona</option><option id="d296" value="d296" label="Cressida">Cressida</option><option id="d297" value="d297" label="ECHO">ECHO</option><option id="d1450" value="d1450" label="Hiace">Hiace</option><option id="d1185" value="d1185" label="Hilux">Hilux</option><option id="d2879" value="d2879" label="Mark II">Mark II</option><option id="d301" value="d301" label="MR2">MR2</option><option id="d302" value="d302" label="MR2 Spyder">MR2 Spyder</option><option id="d304" value="d304" label="Pickup">Pickup</option><option id="d305" value="d305" label="Previa">Previa</option><option id="d1483" value="d1483" label="Sera">Sera</option><option id="d1672" value="d1672" label="Soarer">Soarer</option><option id="d310" value="d310" label="T100">T100</option><option id="d312" value="d312" label="Tercel">Tercel</option></optgroup>

            </>
        )
    }

}

export default Models