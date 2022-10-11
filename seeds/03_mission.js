/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw("TRUNCATE mission CASCADE");
  await knex("mission").del();
  await knex("mission").insert([
    {
      msn_title: "Ride The Bus",
      msn_type: 3,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "Pilsung",
      latitude: "37.3792589",
      longitude: "128.6611408",
    },

    {
      msn_title: "Ride the Lightning",
      msn_type: 1,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "Pilsung",
      latitude: "37.3792589",
      longitude: "128.6611408",
    },

    {
      msn_title: "Ride The Train",
      msn_type: 2,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "Pilsung",
      latitude: "40.3792589",
      longitude: "118.6611408",
    },

    {
      msn_title: "Ride The Airplane",
      msn_type: 1,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "Pilsung",
      latitude: "37.3792589",
      longitude: "128.6611408",
    },

    {
      msn_title: "Valkyrie",
      msn_type: 2,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Baghdad",
      latitude: "33",
      longitude: "44",
    },

    {
      msn_title: "Snake Eyes",
      msn_type: 3,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Baghdad",
      latitude: "33",
      longitude: "44",
    },

    {
      msn_title: "Slytherin",
      msn_type: 1,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Baghdad",
      latitude: "33",
      longitude: "44",
    },

    {
      msn_title: "Griffindor",
      msn_type: 2,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Baghdad",
      latitude: "33",
      longitude: "44",
    },

    {
      msn_title: "Hufflepuff",
      msn_type: 3,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Syria",
      latitude: "34",
      longitude: "35",
    },

    {
      msn_title: "Ravenclaw",
      msn_type: 1,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Syria",
      latitude: "34",
      longitude: "35",
    },

    {
      msn_title: "Bikini Bottom",
      msn_type: 1,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Syria",
      latitude: "34",
      longitude: "35",
    },

    {
      msn_title: "Krusty Krab",
      msn_type: 2,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Syria",
      latitude: "34",
      longitude: "35",
    },

    {
      msn_title: "The Chumbucket",
      msn_type: 3,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Sevastopol",
      latitude: "44",
      longitude: "33",
    },

    {
      msn_title: "Eagle Eyes",
      msn_type: 1,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Sevastopol",
      latitude: "44",
      longitude: "33",
    },

    {
      msn_title: "Operation Soaring Talon",
      msn_type: 2,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Sevastopol",
      latitude: "44",
      longitude: "33",
    },

    {
      msn_title: "Operation Stop The Bus",
      msn_type: 3,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Sevastopol",
      latitude: "44",
      longitude: "33",
    },

    {
      msn_title: "Operation Thunderstorm",
      msn_type: 1,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Hainan Island",
      latitude: "19",
      longitude: "110",
    },

    {
      msn_title: "Iraqi Freedom",
      msn_type: 2,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Hainan Island",
      latitude: "19",
      longitude: "110",
    },

    {
      msn_title: "Allies Refuge",
      msn_type: 3,
      msn_obj: `- Demonstrate smooth CAS cadence and flow  IAW JP 3-09.3 - Effectively utilize remote observer to conduct attacks on nominated targets`,
      supporting_players:
        "JTAC: ICEBOX XX, OSC: ERIS 06, FDC:Collocated, JFO: VESTA 95 (OP KIMCHEE), 2x A-10 c/s TBD",
      situation:
        "Counter Insurgency (COIN)- During Stability operations, KPA Special Purpose Force (SPF) remnants have been amassing within OBJ BUSAN. It is expected that they are preparing to stage a counterattack on US-RoK combined forces. In addition, they are expected to be setting up communications equipment in a building of unknown location in the AO to bolster C2 capabilities.",
      key_grids:
        "OP JAGALCHI: 52S DG  6952 3755 (100m NFA), OP KIMCHEE: 52S DG 714 364 (100m NFA), OBJ BUSAN (CENTER GRID): 52S DG 7015 3708, FOB WOLFHOUND: 52S DG 683 361 (100m NFA)",
      fires: "60 mm mortars: OP JAGALCHI (HE, Smoke)",
      assets: "2xA-10",
      intel:
        "Enemy Composition in AO: 60- 80 PAX, 20-25 tech vehicles, Poss SAs, no activity last 30 days. Enemy Condition in BN AO: In the past 3 weeks, SPF activity in OBJ BUSAN has been steadily increasing. Within the past 2 weeks, enemy personnel have begun to arm tech vics, and reliable HUMINT suggests that they are attempting to create a C2 node in the AO. ISR: None. MLCOA: SPF will make every attempt to defend their position and create obstacles to stop mounted and dismounted action in and around the AO. MDCOA: SPF finds and fixes scouts at OP JAGALCHI and conducts multi-axis ambush.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Hainan Island",
      latitude: "19",
      longitude: "110",
    },
  ]);
}
