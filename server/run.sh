
echo Installing dependencies...
npm install

echo Running the server...
npm run start

echo Running Migrations...
npm run migration

echo Running Seeds...

npm run seeds:undo:all
npm run seeds
