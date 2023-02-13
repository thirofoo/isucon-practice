sudo docker-compose exec nginx mv /var/log/nginx/access.log /var/log/nginx/access-$(date +%Y%m%d%H%M%S).log
sudo docker-compose restart nginx