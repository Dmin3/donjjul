# docker build -t donjjul.kr.ncr.ntruss.com/donjjull-back:[TAG] .

FROM openjdk:17.0.2-slim
ARG JAR_FILE=/build/libs/donjjul.jar
COPY ${JAR_FILE} donjjul.jar
ENTRYPOINT ["java","-jar","donjjul.jar"]