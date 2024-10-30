<template>
    <div class="match-container">
      <h1>Próximos Partidos de la Primera División</h1>
      <div class="matches">
        <div
          v-for="match in matches"
          :key="match.id"
          class="match-card"
        >
          <div class="match-header">
            <h2 class="competition">{{ match.competition_name }}</h2>
            <span class="round">Ronda: {{ match.round }}</span>
          </div>
          <div class="teams">
            <div class="team local">
              <img :src="match.local_shield" alt="Local Team Logo" />
              <div>
                <span class="team-name">{{ match.local }}</span>
                <span class="team-abbr">{{ match.local_abbr }}</span>
              </div>
            </div>
            <div class="vs">VS</div>
            <div class="team visitor">
              <img :src="match.visitor_shield" alt="Visitor Team Logo" />
              <div>
                <span class="team-name">{{ match.visitor }}</span>
                <span class="team-abbr">{{ match.visitor_abbr }}</span>
              </div>
            </div>
          </div>
          <div class="details">
            <p><strong>Fecha:</strong> {{ match.date }}</p>
            <p><strong>Horario:</strong> {{ match.hour }}:{{ match.minute }}</p>
            <p><strong>Estadio:</strong> {{ match.stadium }}</p>
            <p>
              <strong>Estado:</strong>
              <span :class="{'status-upcoming': match.status === -1, 'status-finished': match.status !== -1}">
                {{ match.status === -1 ? 'Próximo' : 'Finalizado' }}
              </span>
            </p>
            <p class="extra-text">{{ match.extraTxt }}</p>
          </div>
          <div class="channels">
            <h3>Transmisiones:</h3>
            <div class="channel" v-for="channel in match.channels" :key="channel.id">
              <img :src="channel.image" alt="Channel Logo" />
              <span class="channel-name">{{ channel.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      matches:  [
    {
      "id": "49632",
      "year": "2023",
      "group": "1",
      "total_group": "1",
      "round": "26",
      "local": "Real Valladolid",
      "visitor": "Athletic",
      "league_id": "67669",
      "stadium": "Municipal José Zorrilla",
      "team1": "6515747",
      "team2": "6514920",
      "conference": "0",
      "dteam1": "2654",
      "dteam2": "347",
      "numc": "0",
      "no_hour": false,
      "local_abbr": "VAD",
      "visitor_abbr": "ATH",
      "competition_name": "Primera División",
      "competition_id": "1",
      "split_league": "",
      "type": "Regular",
      "type_id": "4",
      "playoffs": false,
      "group_code": "1",
      "total_rounds": "38",
      "coef": "70.000",
      "cflag_local": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "cflag_visitor": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "local_shield": "https://t.resfu.com/img_data/escudos/medium/2654.jpg?size=60x&lossy=1&v=28",
      "visitor_shield": "https://t.resfu.com/img_data/escudos/medium/347.jpg?size=60x&lossy=1&v=28",
      "extraTxt": "En 3 días",
      "schedule": "2023-03-17 21:00:00",
      "date": "2023/03/17",
      "hour": "21",
      "minute": "00",
      "local_goals": "x",
      "visitor_goals": "x",
      "result": "x-x",
      "live_minute": "",
      "status": -1,
      "channels": [
        {
          "id": "20",
          "name": "Gol Play",
          "image": "https://t.resfu.com/media/televisiones/20.png?size=50x"
        },
        {
          "id": "317",
          "name": "DAZN",
          "image": "https://t.resfu.com/media/televisiones/317.png?size=50x"
        },
        {
          "id": "12063",
          "name": "DAZN LaLiga",
          "image": "https://t.resfu.com/media/televisiones/12063.png?size=50x"
        },
        {
          "id": "12066",
          "name": "LaLiga TV Bar",
          "image": "https://t.resfu.com/media/televisiones/12066.png?size=50x"
        }
      ],
      "winner": "0",
      "penaltis1": 0,
      "penaltis2": 0
    },
    {
      "id": "49630",
      "year": "2023",
      "group": "1",
      "total_group": "1",
      "round": "26",
      "local": "Almería",
      "visitor": "Cádiz",
      "league_id": "67669",
      "stadium": "Power Horse Stadium",
      "team1": "6515748",
      "team2": "6514923",
      "conference": "0",
      "dteam1": "183",
      "dteam2": "603",
      "numc": "0",
      "no_hour": false,
      "local_abbr": "ALM",
      "visitor_abbr": "CAD",
      "competition_name": "Primera División",
      "competition_id": "1",
      "split_league": "",
      "type": "Regular",
      "type_id": "4",
      "playoffs": false,
      "group_code": "1",
      "total_rounds": "38",
      "coef": "70.000",
      "cflag_local": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "cflag_visitor": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "local_shield": "https://t.resfu.com/img_data/escudos/medium/183.jpg?size=60x&lossy=1&v=28",
      "visitor_shield": "https://t.resfu.com/img_data/escudos/medium/603.jpg?size=60x&lossy=1&v=28",
      "extraTxt": "En 3 días",
      "schedule": "2023-03-18 14:00:00",
      "date": "2023/03/18",
      "hour": "14",
      "minute": "00",
      "local_goals": "x",
      "visitor_goals": "x",
      "result": "x-x",
      "live_minute": "",
      "status": -1,
      "channels": [
        {
          "id": "325",
          "name": "LaLigaTV por M+",
          "image": "https://t.resfu.com/media/televisiones/325.png?size=50x"
        },
        {
          "id": "12066",
          "name": "LaLiga TV Bar",
          "image": "https://t.resfu.com/media/televisiones/12066.png?size=50x"
        }
      ],
      "winner": "0",
      "penaltis1": 0,
      "penaltis2": 0
    },
    {
      "id": "49640",
      "year": "2023",
      "group": "1",
      "total_group": "1",
      "round": "26",
      "local": "Rayo Vallecano",
      "visitor": "Girona",
      "league_id": "67669",
      "stadium": "Estadio de Vallecas",
      "team1": "6514931",
      "team2": "6519125",
      "conference": "0",
      "dteam1": "2080",
      "dteam2": "1236",
      "numc": "0",
      "no_hour": false,
      "local_abbr": "RAY",
      "visitor_abbr": "GIR",
      "competition_name": "Primera División",
      "competition_id": "1",
      "split_league": "",
      "type": "Regular",
      "type_id": "4",
      "playoffs": false,
      "group_code": "1",
      "total_rounds": "38",
      "coef": "70.000",
      "cflag_local": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "cflag_visitor": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "local_shield": "https://t.resfu.com/img_data/escudos/medium/2080.jpg?size=60x&lossy=1&v=28",
      "visitor_shield": "https://t.resfu.com/img_data/escudos/medium/1236.jpg?size=60x&lossy=1&v=28",
      "extraTxt": "En 4 días",
      "schedule": "2023-03-18 16:15:00",
      "date": "2023/03/18",
      "hour": "16",
      "minute": "15",
      "local_goals": "x",
      "visitor_goals": "x",
      "result": "x-x",
      "live_minute": "",
      "status": -1,
      "channels": [
        {
          "id": "317",
          "name": "DAZN",
          "image": "https://t.resfu.com/media/televisiones/317.png?size=50x"
        },
        {
          "id": "12063",
          "name": "DAZN LaLiga",
          "image": "https://t.resfu.com/media/televisiones/12063.png?size=50x"
        },
        {
          "id": "12066",
          "name": "LaLiga TV Bar",
          "image": "https://t.resfu.com/media/televisiones/12066.png?size=50x"
        }
      ],
      "winner": "0",
      "penaltis1": 0,
      "penaltis2": 0
    },
    {
      "id": "49635",
      "year": "2023",
      "group": "1",
      "total_group": "1",
      "round": "26",
      "local": "Espanyol",
      "visitor": "Celta",
      "league_id": "67669",
      "stadium": "RCDE Stadium",
      "team1": "6514926",
      "team2": "6514924",
      "conference": "0",
      "dteam1": "998",
      "dteam2": "712",
      "numc": "0",
      "no_hour": false,
      "local_abbr": "ESP",
      "visitor_abbr": "CEL",
      "competition_name": "Primera División",
      "competition_id": "1",
      "split_league": "",
      "type": "Regular",
      "type_id": "4",
      "playoffs": false,
      "group_code": "1",
      "total_rounds": "38",
      "coef": "70.000",
      "cflag_local": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "cflag_visitor": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "local_shield": "https://t.resfu.com/img_data/escudos/medium/998.jpg?size=60x&lossy=1&v=28",
      "visitor_shield": "https://t.resfu.com/img_data/escudos/medium/712.jpg?size=60x&lossy=1&v=28",
      "extraTxt": "En 4 días",
      "schedule": "2023-03-18 18:30:00",
      "date": "2023/03/18",
      "hour": "18",
      "minute": "30",
      "local_goals": "x",
      "visitor_goals": "x",
      "result": "x-x",
      "live_minute": "",
      "status": -1,
      "channels": [
        {
          "id": "317",
          "name": "DAZN",
          "image": "https://t.resfu.com/media/televisiones/317.png?size=50x"
        },
        {
          "id": "325",
          "name": "LaLigaTV por M+",
          "image": "https://t.resfu.com/media/televisiones/325.png?size=50x"
        },
        {
          "id": "12066",
          "name": "LaLiga TV Bar",
          "image": "https://t.resfu.com/media/televisiones/12066.png?size=50x"
        }
      ],
      "winner": "0",
      "penaltis1": 0,
      "penaltis2": 0
    },
    {
      "id": "49617",
      "year": "2023",
      "group": "1",
      "total_group": "1",
      "round": "26",
      "local": "Atlético",
      "visitor": "Valencia",
      "league_id": "67669",
      "stadium": "Cívitas Metropolitano",
      "team1": "6514921",
      "team2": "6514935",
      "conference": "0",
      "dteam1": "369",
      "dteam2": "2647",
      "numc": "0",
      "no_hour": false,
      "local_abbr": "ATM",
      "visitor_abbr": "VCF",
      "competition_name": "Primera División",
      "competition_id": "1",
      "split_league": "",
      "type": "Regular",
      "type_id": "4",
      "playoffs": false,
      "group_code": "1",
      "total_rounds": "38",
      "coef": "70.000",
      "cflag_local": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "cflag_visitor": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "local_shield": "https://t.resfu.com/img_data/escudos/medium/369.jpg?size=60x&lossy=1&v=28",
      "visitor_shield": "https://t.resfu.com/img_data/escudos/medium/2647.jpg?size=60x&lossy=1&v=28",
      "extraTxt": "En 4 días",
      "schedule": "2023-03-18 21:00:00",
      "date": "2023/03/18",
      "hour": "21",
      "minute": "00",
      "local_goals": "x",
      "visitor_goals": "x",
      "result": "x-x",
      "live_minute": "",
      "status": -1,
      "channels": [
        {
          "id": "317",
          "name": "DAZN",
          "image": "https://t.resfu.com/media/televisiones/317.png?size=50x"
        },
        {
          "id": "12063",
          "name": "DAZN LaLiga",
          "image": "https://t.resfu.com/media/televisiones/12063.png?size=50x"
        },
        {
          "id": "12066",
          "name": "LaLiga TV Bar",
          "image": "https://t.resfu.com/media/televisiones/12066.png?size=50x"
        }
      ],
      "winner": "0",
      "penaltis1": 0,
      "penaltis2": 0
    },
    {
      "id": "49623",
      "year": "2023",
      "group": "1",
      "total_group": "1",
      "round": "26",
      "local": "Real Betis",
      "visitor": "Mallorca",
      "league_id": "67669",
      "stadium": "Benito Villamarín",
      "team1": "6514932",
      "team2": "6514928",
      "conference": "0",
      "dteam1": "486",
      "dteam2": "1623",
      "numc": "0",
      "no_hour": false,
      "local_abbr": "BET",
      "visitor_abbr": "MLL",
      "competition_name": "Primera División",
      "competition_id": "1",
      "split_league": "",
      "type": "Regular",
      "type_id": "4",
      "playoffs": false,
      "group_code": "1",
      "total_rounds": "38",
      "coef": "70.000",
      "cflag_local": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "cflag_visitor": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "local_shield": "https://t.resfu.com/img_data/escudos/medium/486.jpg?size=60x&lossy=1&v=28",
      "visitor_shield": "https://t.resfu.com/img_data/escudos/medium/1623.jpg?size=60x&lossy=1&v=28",
      "extraTxt": "En 4 días",
      "schedule": "2023-03-19 14:00:00",
      "date": "2023/03/19",
      "hour": "14",
      "minute": "00",
      "local_goals": "x",
      "visitor_goals": "x",
      "result": "x-x",
      "live_minute": "",
      "status": -1,
      "channels": [
        {
          "id": "317",
          "name": "DAZN",
          "image": "https://t.resfu.com/media/televisiones/317.png?size=50x"
        },
        {
          "id": "325",
          "name": "LaLigaTV por M+",
          "image": "https://t.resfu.com/media/televisiones/325.png?size=50x"
        },
        {
          "id": "12063",
          "name": "DAZN LaLiga",
          "image": "https://t.resfu.com/media/televisiones/12063.png?size=50x"
        },
        {
          "id": "12066",
          "name": "LaLiga TV Bar",
          "image": "https://t.resfu.com/media/televisiones/12066.png?size=50x"
        }
      ],
      "winner": "0",
      "penaltis1": 0,
      "penaltis2": 0
    },
    {
      "id": "49628",
      "year": "2023",
      "group": "1",
      "total_group": "1",
      "round": "26",
      "local": "Osasuna",
      "visitor": "Villarreal",
      "league_id": "67669",
      "stadium": "El Sadar",
      "team1": "6514929",
      "team2": "6514936",
      "conference": "0",
      "dteam1": "1887",
      "dteam2": "2716",
      "numc": "0",
      "no_hour": false,
      "local_abbr": "OSA",
      "visitor_abbr": "VIL",
      "competition_name": "Primera División",
      "competition_id": "1",
      "split_league": "",
      "type": "Regular",
      "type_id": "4",
      "playoffs": false,
      "group_code": "1",
      "total_rounds": "38",
      "coef": "70.000",
      "cflag_local": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "cflag_visitor": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "local_shield": "https://t.resfu.com/img_data/escudos/medium/1887.jpg?size=60x&lossy=1&v=28",
      "visitor_shield": "https://t.resfu.com/img_data/escudos/medium/2716.jpg?size=60x&lossy=1&v=28",
      "extraTxt": "En 5 días",
      "schedule": "2023-03-19 16:15:00",
      "date": "2023/03/19",
      "hour": "16",
      "minute": "15",
      "local_goals": "x",
      "visitor_goals": "x",
      "result": "x-x",
      "live_minute": "",
      "status": -1,
      "channels": [
        {
          "id": "317",
          "name": "DAZN",
          "image": "https://t.resfu.com/media/televisiones/317.png?size=50x"
        },
        {
          "id": "325",
          "name": "LaLigaTV por M+",
          "image": "https://t.resfu.com/media/televisiones/325.png?size=50x"
        },
        {
          "id": "12066",
          "name": "LaLiga TV Bar",
          "image": "https://t.resfu.com/media/televisiones/12066.png?size=50x"
        }
      ],
      "winner": "0",
      "penaltis1": 0,
      "penaltis2": 0
    },
    {
      "id": "49636",
      "year": "2023",
      "group": "1",
      "total_group": "1",
      "round": "26",
      "local": "R. Sociedad",
      "visitor": "Elche",
      "league_id": "67669",
      "stadium": "Reale Arena",
      "team1": "6514930",
      "team2": "6514925",
      "conference": "0",
      "dteam1": "2120",
      "dteam2": "975",
      "numc": "0",
      "no_hour": false,
      "local_abbr": "RSO",
      "visitor_abbr": "ELC",
      "competition_name": "Primera División",
      "competition_id": "1",
      "split_league": "",
      "type": "Regular",
      "type_id": "4",
      "playoffs": false,
      "group_code": "1",
      "total_rounds": "38",
      "coef": "70.000",
      "cflag_local": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "cflag_visitor": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "local_shield": "https://t.resfu.com/img_data/escudos/medium/2120.jpg?size=60x&lossy=1&v=28",
      "visitor_shield": "https://t.resfu.com/img_data/escudos/medium/975.jpg?size=60x&lossy=1&v=28",
      "extraTxt": "En 5 días",
      "schedule": "2023-03-19 16:15:00",
      "date": "2023/03/19",
      "hour": "16",
      "minute": "15",
      "local_goals": "x",
      "visitor_goals": "x",
      "result": "x-x",
      "live_minute": "",
      "status": -1,
      "channels": [
        {
          "id": "317",
          "name": "DAZN",
          "image": "https://t.resfu.com/media/televisiones/317.png?size=50x"
        },
        {
          "id": "12063",
          "name": "DAZN LaLiga",
          "image": "https://t.resfu.com/media/televisiones/12063.png?size=50x"
        },
        {
          "id": "12066",
          "name": "LaLiga TV Bar",
          "image": "https://t.resfu.com/media/televisiones/12066.png?size=50x"
        },
        {
          "id": "12290",
          "name": "LaLiga TV M2",
          "image": "https://t.resfu.com/media/televisiones/12290.png?size=50x"
        }
      ],
      "winner": "0",
      "penaltis1": 0,
      "penaltis2": 0
    },
    {
      "id": "49625",
      "year": "2023",
      "group": "1",
      "total_group": "1",
      "round": "26",
      "local": "Getafe",
      "visitor": "Sevilla",
      "league_id": "67669",
      "stadium": "Coliseum Alfonso Pérez",
      "team1": "6514927",
      "team2": "6514934",
      "conference": "0",
      "dteam1": "1217",
      "dteam2": "1102",
      "numc": "0",
      "no_hour": false,
      "local_abbr": "GET",
      "visitor_abbr": "SEV",
      "competition_name": "Primera División",
      "competition_id": "1",
      "split_league": "",
      "type": "Regular",
      "type_id": "4",
      "playoffs": false,
      "group_code": "1",
      "total_rounds": "38",
      "coef": "70.000",
      "cflag_local": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "cflag_visitor": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "local_shield": "https://t.resfu.com/img_data/escudos/medium/1217.jpg?size=60x&lossy=1&v=28",
      "visitor_shield": "https://t.resfu.com/img_data/escudos/medium/1102.jpg?size=60x&lossy=1&v=28",
      "extraTxt": "En 5 días",
      "schedule": "2023-03-19 18:30:00",
      "date": "2023/03/19",
      "hour": "18",
      "minute": "30",
      "local_goals": "x",
      "visitor_goals": "x",
      "result": "x-x",
      "live_minute": "",
      "status": -1,
      "channels": [
        {
          "id": "317",
          "name": "DAZN",
          "image": "https://t.resfu.com/media/televisiones/317.png?size=50x"
        },
        {
          "id": "12063",
          "name": "DAZN LaLiga",
          "image": "https://t.resfu.com/media/televisiones/12063.png?size=50x"
        },
        {
          "id": "12066",
          "name": "LaLiga TV Bar",
          "image": "https://t.resfu.com/media/televisiones/12066.png?size=50x"
        }
      ],
      "winner": "0",
      "penaltis1": 0,
      "penaltis2": 0
    },
    {
      "id": "49619",
      "year": "2023",
      "group": "1",
      "total_group": "1",
      "round": "26",
      "local": "Barcelona",
      "visitor": "Real Madrid",
      "league_id": "67669",
      "stadium": "Spotify Camp Nou",
      "team1": "6514922",
      "team2": "6514933",
      "conference": "0",
      "dteam1": "429",
      "dteam2": "2107",
      "numc": "0",
      "no_hour": false,
      "local_abbr": "FCB",
      "visitor_abbr": "RMA",
      "competition_name": "Primera División",
      "competition_id": "1",
      "split_league": "",
      "type": "Regular",
      "type_id": "4",
      "playoffs": false,
      "group_code": "1",
      "total_rounds": "38",
      "coef": "70.000",
      "cflag_local": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "cflag_visitor": "https://t.resfu.com/media/img/flags/st3/large/es.png?size=100x65c&lossy=1&v=28",
      "local_shield": "https://t.resfu.com/img_data/escudos/medium/429.jpg?size=60x&lossy=1&v=28",
      "visitor_shield": "https://t.resfu.com/img_data/escudos/medium/2107.jpg?size=60x&lossy=1&v=28",
      "extraTxt": "En 5 días",
      "schedule": "2023-03-19 21:00:00",
      "date": "2023/03/19",
      "hour": "21",
      "minute": "00",
      "local_goals": "x",
      "visitor_goals": "x",
      "result": "x-x",
      "live_minute": "",
      "status": -1,
      "channels": [
        {
          "id": "325",
          "name": "LaLigaTV por M+",
          "image": "https://t.resfu.com/media/televisiones/325.png?size=50x"
        },
        {
          "id": "12066",
          "name": "LaLiga TV Bar",
          "image": "https://t.resfu.com/media/televisiones/12066.png?size=50x"
        }
      ],
      "winner": "0",
      "penaltis1": 0,
      "penaltis2": 0
    }
  ]
    };
  }
};
</script>

<style scoped>
.match-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #343a40;
}

.matches {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.match-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.match-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.match-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.competition {
  font-size: 20px;
  color: #007bff;
  font-weight: bold;
}

.round {
  background-color: #17a2b8;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

.teams {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
}

.team {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.team img {
  width: 70px;
  height: auto;
  margin-bottom: 5px;
}

.team-name {
  font-weight: bold;
  font-size: 16px;
  color: #343a40;
}

.team-abbr {
  font-size: 12px;
  color: #6c757d;
}

.vs {
  font-weight: bold;
  font-size: 24px;
  color: #007bff;
}

.details {
  text-align: center;
  margin-bottom: 15px;
}

.details p {
  margin: 5px 0;
}

.extra-text {
  font-style: italic;
  color: #6c757d;
}

.status-upcoming {
  color: #28a745;
  font-weight: bold;
}

.status-finished {
  color: #dc3545;
  font-weight: bold;
}

.channels {
  margin-top: 10px;
}

.channel {
  display: flex;
  align-items: center;
  margin: 5px 0;
}

.channel img {
  width: 30px;
  height: auto;
  margin-right: 10px;
}

.channel-name {
  color: #343a40;
  font-weight: bold;
}
</style>
