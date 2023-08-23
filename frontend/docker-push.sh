repository=donjjul.kr.ncr.ntruss.com/donjjul-front
os=linux/amd64
tagname=0.0.2

echo "=>>> remove next cache..."
rm -rf .next

echo "=>>> docker build front images..."
docker build --platform $os -f Dockerfile.prod -t $repository:$tagname .

echo "=>>> docker push front container...."
docker push $repository:$tagname

echo "🚀 success $repository:$tagname push"