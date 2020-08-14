PHPMYADMIN_CONTAINER_NAME="phpmyadmin"
MYSQL_CONTAINER_NAME="training-db"
docker run --name $PHPMYADMIN_CONTAINER_NAME \
    --restart=always \
    -d \
    --link $MYSQL_CONTAINER_NAME:db \
    -p 8088:80 \
    phpmyadmin/phpmyadmin
