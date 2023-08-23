FROM nginx:1.23-alpine

RUN rm /etc/nginx/conf.d/default.conf

# COPY cert/www.ocast.kr_20230719393D0.key.pem /etc/ssl/certs/secure_sign/www.ocast.kr_20230719393D0.key.pem
# COPY cert/www.ocast.kr_20230719393D0.unified.crt.pem /etc/ssl/certs/secure_sign/www.ocast.kr_20230719393D0.unified.crt.pem

COPY nginx.conf /etc/nginx/conf.d/