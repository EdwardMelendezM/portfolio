#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Verificar versiones
echo "node version: $(node -v)"
echo "npm version: $(npm -v)"
echo "pm2 version: $(pm2 -v)"

/home/ubuntu/.nvm/versions/node/v20.9.0/bin/npm run build &&
 /home/ubuntu/.nvm/versions/node/v20.9.0/bin/pm2 restart portafolio-app || /home/ubuntu/.nvm/versions/node/v20.9.0/bin/pm2 start npm --name "portafolio-app" -- run start
