cd ~/ProjectReactOne
npm run build:prod

rm -rf ~/../var/www/ProjectReactOne/html
mv ~/ProjectReactOne/build/ ~/../var/www/ProjectReactOne/html
