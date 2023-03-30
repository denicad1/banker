#
# Build stage
#
FROM maven:3.8.6 AS build
COPY . .
RUN mvn clean package -Pprod -DskipTests

#
# Package stage
#
FROM openjdk:18.0.2.1

COPY --from=build /target/banker-0.0.1-SNAPSHOT.jar banker.jar
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","banker.jar"]