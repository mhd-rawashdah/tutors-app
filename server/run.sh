
echo Installing dependencies...
npm install

echo Creating Database...
npm run create:db

echo Running Migrations...
npm run migration

echo Running Seeds...

npm run seeds:undo:all
npm run seeds

echo Running the server...
npm run dev