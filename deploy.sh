echo "Switching to branch master"
git checkout master

echo "Building app.."
npm run build

echo "Deploying files to server"
scp -r dist/*  root@104.248.131.17:/var/www/104.248.131.17/
echo "Done!"