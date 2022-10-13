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
      msn_title: "Ride The Fire",
      msn_type: 3,
      msn_obj: `- Demonstrate smooth mission cadence and flow, effectively utilize remote observers`,
      supporting_players:
        "COMMANDER: c/s LANCER, JFO: c/s VESTA, Aircraft: 2x A-10",
      situation:
        "Friendly forces must neutralize enemy to maintain city security",
      key_grids:
        "OP ALPHA: 12A AB  1234 5678, OP BRAVO: 12A AB 123 456, OBJ CHARLIE: 12A AB 123 456",
      fires: "mortars",
      assets: "2xA-10",
      intel:
        "Enemy is highly active in area of operations, and is expecting to launch attack within the next week",
      comms: "TBD",
      user_id: 1,
      location: "California",
      latitude: "37.871051",
      longitude: "-122.267435",
    },

    {
      msn_title: "Ride the Volcano",
      msn_type: 1,
      msn_obj: `- A volcano is set to erupt within 36 hours. Your duty is to evacuate the citizens of the town at the base of the volcano.`,
      supporting_players:
        "Firefighter Chief: c/s SMOKEY, Safety Coordinator: c/s LIFESAVER, Red Cross Lead: c/s CROSS",
      situation:
        "There has been a massive earthquake, and due to this, a volcano is set to have a massive eruption. The city below the volcano must be evacuated. The Red Cross and the fire department have offered to help you as you coordinate the effort. Telephone and internet connectivity is not expected to last after the volcano erupts",
      key_grids:
        "CITY CENTER: 12A AB  1234 5678, VOLCANO: 12A AB  1234 5678, RED CROSS HQ: 12A AB  1234 5678, HOSPITAL: 12A AB  1234 5678",
      fires: "N/A",
      assets: "1XP-8A",
      intel:
        "Volcano is expected to erupt in 36 hours. There is no enemy presence in the area, but the citizens of the city are visibly concerned. There has been a mass exodus, leading to traffic jams and vehicle accidents, which further exacerbate the problem. There is little air evacuation capability.",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "New York",
      latitude: "40.723442",
      longitude: "-73.932688",
    },

    {
      msn_title: "Ride The Train",
      msn_type: 2,
      msn_obj: `- Demonstrate proper utilization of Train passenger etiquette and safety procedures`,
      supporting_players:
        "Train Conductor: Steve, Engineer: Bert",
      situation:
        "As tensions rise in your home, you have decided to take a trip across country with your family via train.  You must safely and effectively transport 5 personnel from your home to your final vacation destination.",
      key_grids:
        "N/A",
      fires: "N/A",
      assets: "1xSpouse",
      intel:
        "Passengers tend to get less motion sickness when utilizing the seats towards the front of the train",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "California",
      latitude: "33",
      longitude: "-116",
    },

    {
      msn_title: "Ride The Airplane",
      msn_type: 1,
      msn_obj: `- Effectively evacuate civilians from a collapsed airport with 100% survival rate`,
      supporting_players:
        "Paramedic Chief: c/s DOCTOR, Police Chief: c/s BADGE, Airport Manager: c/s FLIGHT",
      situation:
        "A significant portion of an airport has collapsed to to structural integrity issues. You must evacuate the civilians trapped inside.",
      key_grids:
        "AIRPORT: 12A AB  1234 5678, HOSPITAL: 12A AB  1234 5678, POLICE STATION: 12A AB  1234 5678",
      fires: "N/A",
      assets: "P-8A",
      intel:
        "A portion of a major airport has collapsed. No foul play is suspected. Although nobody was injured in the collapse, 25 people are trapped inside a waiting area and must be evacuated. The police chief has offered to help, and the paramedic head is on standby in case anyone inside is injured",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "Kansas",
      latitude: "39.188819",
      longitude: "-96.568584",
    },

    {
      msn_title: "Rising Tides",
      msn_type: 2,
      msn_obj: `- You are tasked to safely evacuate the coastline of California utilizing overhead air support`,
      supporting_players:
        "P-8A: Sticky Fingers",
      situation:
        "Unprecedented swells are building in the Atlantic off the coast of California.  Weather experts predict that the swells will bring forth a Tsunami that will cause severe damage and flooding to the coast of California. ",
      key_grids:
        "TOWN CENTER: AB 123 456, HOSPITAL: AB 1234 5678",
      fires: "2xSmokes, 2xFlares",
      assets: "2xCG units",
      intel:
        "Citizens of California underestimate the gravity of the situation.  There is a potential for a large number of people to still be congregating on and near the beaches.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Long Beach",
      latitude: "33",
      longitude: "-118",
    },

    {
      msn_title: "Man Overboard",
      msn_type: 3,
      msn_obj: `- Locate an overboard fisherman and direct a rescue team towards their location.`,
      supporting_players:
        "MH-60R: c/s Blade",
      situation:
        "A medium sized fishing vessel was caught in a massive storm off the coast of virginia. While fighting to keep all of their equipment and haul onboard the ship, a member of the crew fell overboard.  The captain of the ship has given a man overboard call over all radio frequencies desperately asking for help.",
      key_grids:
        "CENTER OF AOP: AB 123 456",
      fires: "N/A",
      assets: "1xMH-60R",
      intel:
        "As you arrive on station you will be 25 minutes time late.  The captain has informed you that the overboard fisherman fell off the starboard side of the boat and is wearing an IR reflective life vest.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "North Atlantic",
      latitude: "36",
      longitude: "-56",
    },

    {
      msn_title: "Operation Flame",
      msn_type: 3,
      msn_obj: `- Demonstrate smooth mission cadence and flow, effectively utilize remote observers`,
      supporting_players:
        "COMMANDER: c/s LANCER, JFO: c/s VESTA, Aircraft: 2x A-10",
      situation:
        "Friendly forces must neutralize enemy to maintain city security",
      key_grids:
        "OP ALPHA: 12A AB  1234 5678, OP BRAVO: 12A AB 123 456, OBJ CHARLIE: 12A AB 123 456",
      fires: "mortars",
      assets: "2xA-10",
      intel:
        "Enemy is highly active in area of operations, and is expecting to launch attack within the next week",
      comms: "TBD",
      user_id: 1,
      location: "California",
      latitude: "37.871051",
      longitude: "-122.267435",
    },

    {
      msn_title: "Through the Ashes",
      msn_type: 1,
      msn_obj: `- A volcano is set to erupt within 36 hours. Your duty is to evacuate the citizens of the town at the base of the volcano.`,
      supporting_players:
        "Firefighter Chief: c/s SMOKEY, Safety Coordinator: c/s LIFESAVER, Red Cross Lead: c/s CROSS",
      situation:
        "There has been a massive earthquake, and due to this, a volcano is set to have a massive eruption. The city below the volcano must be evacuated. The Red Cross and the fire department have offered to help you as you coordinate the effort. Telephone and internet connectivity is not expected to last after the volcano erupts",
      key_grids:
        "CITY CENTER: 12A AB  1234 5678, VOLCANO: 12A AB  1234 5678, RED CROSS HQ: 12A AB  1234 5678, HOSPITAL: 12A AB  1234 5678",
      fires: "N/A",
      assets: "1XP-8A",
      intel:
        "Volcano is expected to erupt in 36 hours. There is no enemy presence in the area, but the citizens of the city are visibly concerned. There has been a mass exodus, leading to traffic jams and vehicle accidents, which further exacerbate the problem. There is little air evacuation capability.",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "New York",
      latitude: "40.723442",
      longitude: "-73.932688",
    },

    {
      msn_title: "Operation Jamestown",
      msn_type: 2,
      msn_obj: `- Demonstrate proper utilization of Train passenger etiquette and safety procedures`,
      supporting_players:
        "Train Conductor: Steve, Engineer: Bert",
      situation:
        "As tensions rise in your home, you have decided to take a trip across country with your family via train.  You must safely and effectively transport 5 personnel from your home to your final vacation destination.",
      key_grids:
        "N/A",
      fires: "N/A",
      assets: "1xSpouse",
      intel:
        "Passengers tend to get less motion sickness when utilizing the seats towards the front of the train",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "California",
      latitude: "33",
      longitude: "-116",
    },

    {
      msn_title: "Dallas Fort Worth",
      msn_type: 1,
      msn_obj: `- Effectively evacuate civilians from a collapsed airport with 100% survival rate`,
      supporting_players:
        "Paramedic Chief: c/s DOCTOR, Police Chief: c/s BADGE, Airport Manager: c/s FLIGHT",
      situation:
        "A significant portion of an airport has collapsed to to structural integrity issues. You must evacuate the civilians trapped inside.",
      key_grids:
        "AIRPORT: 12A AB  1234 5678, HOSPITAL: 12A AB  1234 5678, POLICE STATION: 12A AB  1234 5678",
      fires: "N/A",
      assets: "P-8A",
      intel:
        "A portion of a major airport has collapsed. No foul play is suspected. Although nobody was injured in the collapse, 25 people are trapped inside a waiting area and must be evacuated. The police chief has offered to help, and the paramedic head is on standby in case anyone inside is injured",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "Kansas",
      latitude: "39.188819",
      longitude: "-96.568584",
    },

    {
      msn_title: "Long Beach",
      msn_type: 2,
      msn_obj: `- You are tasked to safely evacuate the coastline of California utilizing overhead air support`,
      supporting_players:
        "P-8A: Sticky Fingers",
      situation:
        "Unprecedented swells are building in the Atlantic off the coast of California.  Weather experts predict that the swells will bring forth a Tsunami that will cause severe damage and flooding to the coast of California. ",
      key_grids:
        "TOWN CENTER: AB 123 456, HOSPITAL: AB 1234 5678",
      fires: "2xSmokes, 2xFlares",
      assets: "2xCG units",
      intel:
        "Citizens of California underestimate the gravity of the situation.  There is a potential for a large number of people to still be congregating on and near the beaches.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Long Beach",
      latitude: "33",
      longitude: "-118",
    },

    {
      msn_title: "Lost at Sea",
      msn_type: 3,
      msn_obj: `- Locate an overboard fisherman and direct a rescue team towards their location.`,
      supporting_players:
        "MH-60R: c/s Blade",
      situation:
        "A medium sized fishing vessel was caught in a massive storm off the coast of virginia. While fighting to keep all of their equipment and haul onboard the ship, a member of the crew fell overboard.  The captain of the ship has given a man overboard call over all radio frequencies desperately asking for help.",
      key_grids:
        "CENTER OF AOP: AB 123 456",
      fires: "N/A",
      assets: "1xMH-60R",
      intel:
        "As you arrive on station you will be 25 minutes time late.  The captain has informed you that the overboard fisherman fell off the starboard side of the boat and is wearing an IR reflective life vest.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "North Atlantic",
      latitude: "36",
      longitude: "-56",
    },

    {
      msn_title: "Gryffindor",
      msn_type: 3,
      msn_obj: `- Demonstrate smooth mission cadence and flow, effectively utilize remote observers`,
      supporting_players:
        "COMMANDER: c/s LANCER, JFO: c/s VESTA, Aircraft: 2x A-10",
      situation:
        "Friendly forces must neutralize enemy to maintain city security",
      key_grids:
        "OP ALPHA: 12A AB  1234 5678, OP BRAVO: 12A AB 123 456, OBJ CHARLIE: 12A AB 123 456",
      fires: "mortars",
      assets: "2xA-10",
      intel:
        "Enemy is highly active in area of operations, and is expecting to launch attack within the next week",
      comms: "TBD",
      user_id: 1,
      location: "California",
      latitude: "37.871051",
      longitude: "-122.267435",
    },

    {
      msn_title: "Slytherin",
      msn_type: 1,
      msn_obj: `- A volcano is set to erupt within 36 hours. Your duty is to evacuate the citizens of the town at the base of the volcano.`,
      supporting_players:
        "Firefighter Chief: c/s SMOKEY, Safety Coordinator: c/s LIFESAVER, Red Cross Lead: c/s CROSS",
      situation:
        "There has been a massive earthquake, and due to this, a volcano is set to have a massive eruption. The city below the volcano must be evacuated. The Red Cross and the fire department have offered to help you as you coordinate the effort. Telephone and internet connectivity is not expected to last after the volcano erupts",
      key_grids:
        "CITY CENTER: 12A AB  1234 5678, VOLCANO: 12A AB  1234 5678, RED CROSS HQ: 12A AB  1234 5678, HOSPITAL: 12A AB  1234 5678",
      fires: "N/A",
      assets: "1XP-8A",
      intel:
        "Volcano is expected to erupt in 36 hours. There is no enemy presence in the area, but the citizens of the city are visibly concerned. There has been a mass exodus, leading to traffic jams and vehicle accidents, which further exacerbate the problem. There is little air evacuation capability.",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "New York",
      latitude: "40.723442",
      longitude: "-73.932688",
    },

    {
      msn_title: "Hufflepuff",
      msn_type: 2,
      msn_obj: `- Demonstrate proper utilization of Train passenger etiquette and safety procedures`,
      supporting_players:
        "Train Conductor: Steve, Engineer: Bert",
      situation:
        "As tensions rise in your home, you have decided to take a trip across country with your family via train.  You must safely and effectively transport 5 personnel from your home to your final vacation destination.",
      key_grids:
        "N/A",
      fires: "N/A",
      assets: "1xSpouse",
      intel:
        "Passengers tend to get less motion sickness when utilizing the seats towards the front of the train",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "California",
      latitude: "33",
      longitude: "-116",
    },

    {
      msn_title: "Ravenclaw",
      msn_type: 1,
      msn_obj: `- Effectively evacuate civilians from a collapsed airport with 100% survival rate`,
      supporting_players:
        "Paramedic Chief: c/s DOCTOR, Police Chief: c/s BADGE, Airport Manager: c/s FLIGHT",
      situation:
        "A significant portion of an airport has collapsed to to structural integrity issues. You must evacuate the civilians trapped inside.",
      key_grids:
        "AIRPORT: 12A AB  1234 5678, HOSPITAL: 12A AB  1234 5678, POLICE STATION: 12A AB  1234 5678",
      fires: "N/A",
      assets: "P-8A",
      intel:
        "A portion of a major airport has collapsed. No foul play is suspected. Although nobody was injured in the collapse, 25 people are trapped inside a waiting area and must be evacuated. The police chief has offered to help, and the paramedic head is on standby in case anyone inside is injured",
      comms: "Frequencies:TBD",
      user_id: 1,
      location: "Kansas",
      latitude: "39.188819",
      longitude: "-96.568584",
    },

    {
      msn_title: "Stable Diffusion",
      msn_type: 2,
      msn_obj: `- You are tasked to safely evacuate the coastline of California utilizing overhead air support`,
      supporting_players:
        "P-8A: Sticky Fingers",
      situation:
        "Unprecedented swells are building in the Atlantic off the coast of California.  Weather experts predict that the swells will bring forth a Tsunami that will cause severe damage and flooding to the coast of California. ",
      key_grids:
        "TOWN CENTER: AB 123 456, HOSPITAL: AB 1234 5678",
      fires: "2xSmokes, 2xFlares",
      assets: "2xCG units",
      intel:
        "Citizens of California underestimate the gravity of the situation.  There is a potential for a large number of people to still be congregating on and near the beaches.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "Long Beach",
      latitude: "33",
      longitude: "-118",
    },

    {
      msn_title: "OverWatch",
      msn_type: 3,
      msn_obj: `- Locate an overboard fisherman and direct a rescue team towards their location.`,
      supporting_players:
        "MH-60R: c/s Blade",
      situation:
        "A medium sized fishing vessel was caught in a massive storm off the coast of virginia. While fighting to keep all of their equipment and haul onboard the ship, a member of the crew fell overboard.  The captain of the ship has given a man overboard call over all radio frequencies desperately asking for help.",
      key_grids:
        "CENTER OF AOP: AB 123 456",
      fires: "N/A",
      assets: "1xMH-60R",
      intel:
        "As you arrive on station you will be 25 minutes time late.  The captain has informed you that the overboard fisherman fell off the starboard side of the boat and is wearing an IR reflective life vest.",
      comms: "Frequencies:TBD",
      user_id: 2,
      location: "North Atlantic",
      latitude: "36",
      longitude: "-56",
    },
  ])
}
