var FormatData = require('./realtimedata').FormatData;
var moment = require('moment');

var meterTag = "PL_" + "_*^H3000[12]" + "__PL" + "," +      // current A, B, C, N, G, avg
               "PL_" + "_*^H3012[8]" + "__PL" + "," +       // current unbalance A, B, C, worst
               "PL_" + "_*^H3020[16]" + "__PL" + "," +      // voltage (phase, line and avgs)
               "PL_" + "_*^H3038[16]" + "__PL" + "," +      // voltage unbalance A, B, C, worst
               "PL_" + "_*^H3054[24]" + "__PL" + "," +      // power
                                                            // Array.length = 76 (Index = Array - 1 ---> 180)
               "PL_" + "_*^H3078[16]" + "__PL" + "," +      // power factor
               "PL_" + "_*^H3110[2]" + "__PL" + "," +       // frequency
               "PL_" + "_*^H3132[2]" + "__PL" + "," +       // temperature
               "PL_" + "_*^H3134[1]" + "__PL" + "," +       // phase rotation
               "PL_" + "_*^H3192[4]" + "__PL" + "," +       // power_fact_iec_16u, power_fact_total_16u
                                                            // Array.length = 112 (Index = Array - 1 ---> 111)
               "PL_" + "_*^H21300[54]" + "__PL" + "," +     // THD and thd of current, demand and voltage
               "PL_" + "_*^H21358[26]"; // + "__PL" + "," +     // K-factor and crest factor
                                                            // Array.length = 181 (Index = Array - 1 ---> 180)
exports.meterTag = meterTag;
exports.meterJson = function (arrayBuffer) {
  var meterJson = {
      time_iso: moment().format(),
      meter_data_basic: {
        current: {
          A: FormatData("IA", "FL32", 0, "0", 2, false, arrayBuffer),
          B: FormatData("IB", "FL32", 2, "0", 2, false, arrayBuffer),
          C: FormatData("IC", "FL32", 4, "0", 2, false, arrayBuffer),
          N: FormatData("IN", "FL32", 6, "0", 2, false, arrayBuffer),
          G: FormatData("IG", "FL32", 8, "0", 2, false, arrayBuffer),
          avg: FormatData("IAvg", "FL32", 10, "0", 2, false, arrayBuffer)
        },
        current_unbal: {
          A: FormatData("IunbA", "FL32", 12, "0", 2, false, arrayBuffer),
          B: FormatData("IunbB", "FL32", 14, "0", 2, false, arrayBuffer),
          C: FormatData("IunbC", "FL32", 16, "0", 2, false, arrayBuffer),
          worst: FormatData("IunbWorst", "FL32", 18, "0", 2, false, arrayBuffer)
        },
        voltage: {
          AB: FormatData("VAB", "FL32", 20, "0", 2, false, arrayBuffer),
          BC: FormatData("VBC", "FL32", 22, "0", 2, false, arrayBuffer),
          CA: FormatData("VCA", "FL32", 24, "0", 2, false, arrayBuffer),
          LL_avg: FormatData("VLLavg", "FL32", 26, "0", 2, false, arrayBuffer),
          AN: FormatData("VAN", "FL32", 28, "0", 2, false, arrayBuffer),
          BN: FormatData("VBN", "FL32", 30, "0", 2, false, arrayBuffer),
          CN: FormatData("VCN", "FL32", 32, "0", 2, false, arrayBuffer),
          LN_avg: FormatData("VLNavg", "FL32", 34, "0", 2, false, arrayBuffer)
        },
        voltage_unbal: {
          AB: FormatData("VunbAB", "FL32", 36, "0", 2, false, arrayBuffer),
          BC: FormatData("VunbBC", "FL32", 38, "0", 2, false, arrayBuffer),
          CA: FormatData("VunbCA", "FL32", 40, "0", 2, false, arrayBuffer),
          LL_avg: FormatData("VunbLL", "FL32", 42, "0", 2, false, arrayBuffer),
          AN: FormatData("VunbAN", "FL32", 44, "0", 2, false, arrayBuffer),
          BN: FormatData("VunbBN", "FL32", 46, "0", 2, false, arrayBuffer),
          CN: FormatData("VunbCN", "FL32", 48, "0", 2, false, arrayBuffer),
          LN_avg: FormatData("VunbLN", "FL32", 50, "0", 2, false, arrayBuffer),
        },
        power: {
          act_A: FormatData("ActPwA", "FL32", 52, "0", 2, false, arrayBuffer),
          act_B: FormatData("ActPwB", "FL32", 54, "0", 2, false, arrayBuffer),
          act_C: FormatData("ActPwC", "FL32", 56, "0", 2, false, arrayBuffer),
          act_total: FormatData("ActPwTtl", "FL32", 58, "0", 2, false, arrayBuffer),
          react_A: FormatData("ReactPwA", "FL32", 60, "0", 2, false, arrayBuffer),
          react_B: FormatData("ReactPwB", "FL32", 62, "0", 2, false, arrayBuffer),
          react_C: FormatData("ReactPwC", "FL32", 64, "0", 2, false, arrayBuffer),
          react_total: FormatData("ReactPwTtl", "FL32", 66, "0", 2, false, arrayBuffer),
          appar_A: FormatData("AppPwA", "FL32", 68, "0", 2, false, arrayBuffer),
          appar_B: FormatData("AppPwB", "FL32", 70, "0", 2, false, arrayBuffer),
          appar_C: FormatData("AppPwC", "FL32", 72, "0", 2, false, arrayBuffer),
          appar_total: FormatData("AppPwTtl", "FL32", 74, "0", 2, false, arrayBuffer)
        },
        power_factor: {
          A: FormatData("PFA", "PF_FL32_2", 76, "0", 5, false, arrayBuffer),
          B: FormatData("PFB", "PF_FL32_2", 78, "0", 5, false, arrayBuffer),
          C: FormatData("PFC", "PF_FL32_2", 80, "0", 5, false, arrayBuffer),
          total: FormatData("PFTtl", "PF_FL32_2", 82, "0", 5, false, arrayBuffer),
          displ_A: FormatData("DispPFA", "PF_FL32_2", 84, "0", 5, false, arrayBuffer),
          displ_B: FormatData("DispPFB", "PF_FL32_2", 86, "0", 5, false, arrayBuffer),
          displ_C: FormatData("DispPFC", "PF_FL32_2", 88, "0", 5, false, arrayBuffer),
          displ_total: FormatData("DispPFTtl", "PF_FL32_2", 90, "0", 5, false, arrayBuffer)
        },
        frequency: FormatData("Freq", "FL32", 92, "0", 2, false, arrayBuffer),
        temperature: FormatData("Temperature", "FL32", 94, "0", 2, false, arrayBuffer),
        misc: {
          phase_rot: Number(arrayBuffer[96]),                    // INT16U
          PF_total_iec: FormatData("Freq", "FL32", 97, "0", 2, false, arrayBuffer),
          PF_total_lead_lag: FormatData("Freq", "FL32", 99, "0", 2, false, arrayBuffer)
        }
      },
      power_quality: {
        THD_current: {
          A: FormatData("THDCurrentA", "FL32", 101, "0", 2, false, arrayBuffer),
          B: FormatData("THDCurrentB", "FL32", 103, "0", 2, false, arrayBuffer),
          C: FormatData("THDCurrentC", "FL32", 105, "0", 2, false, arrayBuffer),
          N: FormatData("THDCurrentN", "FL32", 107, "0", 2, false, arrayBuffer),
          G: FormatData("THDCurrentG", "FL32", 109, "0", 2, false, arrayBuffer)
        },
        thd_current: {
          A: FormatData("thdCurrentA", "FL32", 111, "0", 2, false, arrayBuffer),
          B: FormatData("thdCurrentB", "FL32", 113, "0", 2, false, arrayBuffer),
          C: FormatData("thdCurrentC", "FL32", 115, "0", 2, false, arrayBuffer),
          N: FormatData("thdCurrentN", "FL32", 117, "0", 2, false, arrayBuffer),
          G: FormatData("thdCurrentG", "FL32", 119, "0", 2, false, arrayBuffer)
        },
        total_demand_distortion: FormatData("TotalDemandDist", "FL32", 121, "0", 2, false, arrayBuffer),
        THD_voltage: {
          AB: FormatData("THDVoltageAB", "FL32", 123, "0", 2, false, arrayBuffer),
          BC: FormatData("THDVoltageBC", "FL32", 125, "0", 2, false, arrayBuffer),
          CA: FormatData("THDVoltageCA", "FL32", 127, "0", 2, false, arrayBuffer),
          LL: FormatData("THDVoltageLL", "FL32", 129, "0", 2, false, arrayBuffer),
          AN: FormatData("THDVoltageAN", "FL32", 131, "0", 2, false, arrayBuffer),
          BN: FormatData("THDVoltageBN", "FL32", 133, "0", 2, false, arrayBuffer),
          CN: FormatData("THDVoltageCN", "FL32", 135, "0", 2, false, arrayBuffer),
          LN: FormatData("THDVoltageLN", "FL32", 137, "0", 2, false, arrayBuffer)
        },
        thd_voltage: {
          AB: FormatData("thdVoltageAB", "FL32", 139, "0", 2, false, arrayBuffer),
          BC: FormatData("thdVoltageBC", "FL32", 141, "0", 2, false, arrayBuffer),
          CA: FormatData("thdVoltageCA", "FL32", 143, "0", 2, false, arrayBuffer),
          LL: FormatData("thdVoltageLL", "FL32", 145, "0", 2, false, arrayBuffer),
          AN: FormatData("thdVoltageAN", "FL32", 147, "0", 2, false, arrayBuffer),
          BN: FormatData("thdVoltageBN", "FL32", 149, "0", 2, false, arrayBuffer),
          CN: FormatData("thdVoltageCN", "FL32", 151, "0", 2, false, arrayBuffer),
          LN: FormatData("thdVoltageLN", "FL32", 153, "0", 2, false, arrayBuffer)
        },
        K_factor: {
          A: FormatData("KFactorA", "FL32", 155, "0", 2, false, arrayBuffer),
          B: FormatData("KFactorB", "FL32", 157, "0", 2, false, arrayBuffer),
          C: FormatData("KFactorC", "FL32", 159, "0", 2, false, arrayBuffer)
        },
        crest_factor: {
          A: FormatData("CrestFactorA", "FL32", 161, "0", 2, false, arrayBuffer),
          B: FormatData("CrestFactorB", "FL32", 163, "0", 2, false, arrayBuffer),
          C: FormatData("CrestFactorC", "FL32", 165, "0", 2, false, arrayBuffer),
          N: FormatData("CrestFactorN", "FL32", 167, "0", 2, false, arrayBuffer),
          volt_AB: FormatData("CrestFactorVoltageAB", "FL32", 169, "0", 2, false, arrayBuffer),
          volt_BC: FormatData("CrestFactorVoltageBC", "FL32", 171, "0", 2, false, arrayBuffer),
          volt_CA: FormatData("CrestFactorVoltageCA", "FL32", 173, "0", 2, false, arrayBuffer),
          volt_AN: FormatData("CrestFactorVoltageAN", "FL32", 175, "0", 2, false, arrayBuffer),
          volt_BN: FormatData("CrestFactorVoltageBN", "FL32", 177, "0", 2, false, arrayBuffer),
          volt_CN: FormatData("CrestFactorVoltageCN", "FL32", 179, "0", 2, false, arrayBuffer)
        },
      }
  };
  return meterJson;
};

