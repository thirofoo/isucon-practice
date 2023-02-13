sudo docker-compose exec mysql mv /var/log/mysql/mysql-slow.log /var/log/mysql/mysql-slow-$(date +%Y%m%d%H%M%S).log
sudo docker-compose exec mysql chmod 644 ./var/log/mysql/mysql-slow.log
sudo docker-compose restart mysql
