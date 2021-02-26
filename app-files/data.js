var APP_DATA = {
  "scenes": [
    {
      "id": "0-spot1",
      "name": "spot1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": -1.5798402385023742,
        "pitch": 0.034260408172599455,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.1281327418675673,
          "pitch": 0.05329720922986425,
          "rotation": 0,
          "target": "1-spot2"
        },
        {
          "yaw": 2.6628786074982003,
          "pitch": 0.04497069223722505,
          "rotation": 0,
          "target": "2-spot3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.887420730083603,
          "pitch": 0.2778274028846184,
          "title": "Estatua",
          "text": "Una estatua"
        },
        {
          "yaw": -0.9907913687994103,
          "pitch": 0.3582627844623776,
          "title": "Mapamundi",
          "text": "Eso mismo"
        }
      ]
    },
    {
      "id": "1-spot2",
      "name": "spot2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": -0.004453676424054365,
        "pitch": 0.5294444750052776,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.7488745185337766,
          "pitch": 0.027477939715353727,
          "rotation": 0,
          "target": "2-spot3"
        },
        {
          "yaw": -1.9043277232462898,
          "pitch": 0.042332203050101214,
          "rotation": 0,
          "target": "0-spot1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4815624605035662,
          "pitch": 0.4055554720721197,
          "title": "Craneo",
          "text": "Una osamenta"
        }
      ]
    },
    {
      "id": "2-spot3",
      "name": "spot3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": 0.0004107161729987041,
        "pitch": 0,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.339014746345981,
          "pitch": 0.084867291422146,
          "rotation": 0,
          "target": "0-spot1"
        },
        {
          "yaw": -2.633268731914182,
          "pitch": 0.08965781506591775,
          "rotation": 0,
          "target": "1-spot2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8414572010239318,
          "pitch": 0.3967514025489507,
          "title": "Arcos",
          "text": "Un modelo que me bajé de internet"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
