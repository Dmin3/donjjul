repository=donjjul.kr.ncr.ntruss.com/donjjul-front
os=linux/amd64

echo "=>>> docker build front nginx images..."
cd nginx/prod
docker build --platform $os -f Dockerfile -t $repository:nginx .

echo "=>>> docker push front container...."
docker push $repository:nginx

echo "🚀 success $repository:$tagname push"