#!/bin/sh

# *Run in the background / simultaniously
cd /teamsApp && npm run dev:teamsfx &    
cd /teamsApp/api && npm run dev:teamsfx

# *Run step by step
# cd /teamsApp/api && npm run dev:teamsfx
# cd /teamsApp && npm run dev:teamsfx
